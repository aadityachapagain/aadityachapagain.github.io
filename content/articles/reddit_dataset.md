Title:  Build Conversational Reddit Dataset using Google DataFlow and Big Query
Date: 2020-08-22 12:00
Modified: 2020-8-22 12:00
Category: Blog
Slug: build-reddit-datasets
Summary: Build Conversational Reddit Dataset using Google DataFlow and Big Query
Tags: Datasets, Machine Learning, Reddit Datasets, Conversational Datasets, Training Pipeline, Preprocessing Pipeline, BigQuery, BigData, Google DataFlow
Authors: Aaditya Chapagain
Status: published

So, I was building chatbot Agent using BlenderBot which is available in [Parlai framework](https://parl.ai) .ParlAI is a python framework for sharing, training and testing dialogue models, from open-domain chitchat to VQA( Visual Question Answering). BlenderBot is current State of the Art chatbot model built and open-sourced by [Facebook AI](https://ai.facebook.com).

They have open-sourced 3 different variant of BlenderBot model based on Number of Parameters model have.

1. `BlenderBot_10B` having 9.4 Billion parameters.
2. `BlenderBot_3B` having 2.9 Billion parameters.
3. `BlenderBot_90M` having 90 Million parameters.

The generated dialogue by `BlenderBot_3B` was better than `BlenderBot_90M` but we were limited by resources. 

With `Nvidia Tesla P100` dialog generation given contex histories takes around 3 - 10 secs. The bigger the context histories the slower it will become.

Since 10 secs is to much for our application. So, we try using `90M` Variant of BlenderBot. But comparing to `3B` it was not that good though dialogue generation was very fast.

As a result, We decided to bulid our own BlenderBot variant having parameter between 90M and 3B from scratch. So, To reproduce their results with our cusotom model, we had to redo everything, What facebook did to train the model.
1. Pre Training seq2seq Transformer model with similar hyperparamters used by facebook.
2. Finetune our Model with BST Datasets.( Blended Skill and Talk Datasets).

For Pre-Training, We needed reddit datasets. You can download reddit datasets from [Pushshift.io](https://files.pushshift.io/reddit/comments/).After opening this website you can see its huge and I my waste entire week trying to read and preprocess these files using python (**FYI**: *I still regret doing that, I was young and stupid* ) ZZZzzz.

Below I will show you How I am able to read and reprocess this hude datasets using Google dataflow and Big Query.

## Prerequities 

1. Google cloud project.
2. Enable Big Query API and DataFlow API.
3. Create new Bucket or use existing Bucket for storing datasets.
4. Google Application Credentials key file.

## Getting Started

Reddit datasets were created using Apache Beam pipeline scripts, run on Google Dataflow. This parallelises the data processing pipeline across many worker machines. Apache Beam requires python >= 3.6, so you will need to set up a python => 3.6 virtual environment:

The Dataflow scripts write conversational datasets to Google cloud storage, so you will need to create a bucket to save the dataset to.

Dataflow will run workers on multiple Compute Engine instances, so make sure you have a sufficient quota of n1-standard-1 machines. The READMEs for individual datasets give an idea of how many workers are required, and how long each dataflow job should take.

And you will need to set up authentication by creating a service account with access to Dataflow and Cloud Storage, and set GOOGLE_APPLICATION_CREDENTIALS:

```bash
export GOOGLE_APPLICATION_CREDENTIALS={{json file key location}}
```

## Create the BigQuery Input Table

Reddit comment data were already stored as a public BigQuery dataset, partitioned into months: [fh-bigquery:reddit_comments.YYYY_MM](https://console.cloud.google.com/bigquery?p=fh-bigquery&d=reddit_comments&page=dataset&pli=1). The first step in creating the dataset is to create a single table that contains all the comment data to include.

First, [install the bq command-line tool](https://cloud.google.com/bigquery/docs/bq-command-line-tool).

Ensure you have a BigQuery dataset to write the table to:

``` bash
DATASET="data"
bq mk --dataset ${DATASET?}
```
Write a new table by querying the public reddit data:

```bash
TABLE=reddit
```

```bash
# For all data up to 2019.
TABLE_REGEX="^201[5678]_[01][0-9]$"

QUERY="SELECT * \
  FROM TABLE_QUERY(\
  [fh-bigquery:reddit_comments], \
  \"REGEXP_MATCH(table_id, '${TABLE_REGEX?}')\" )"

# Run the query.
echo "${QUERY?}" | bq query \
  --n 0 \
  --batch --allow_large_results \
  --destination_table ${DATASET?}.${TABLE?} \
  --use_legacy_sql=true
```

## Run The Dataflow Script

First download requirements.txt file from [here](https://github.com/aadityachapagain/Conversational-Reddit-datasets/blob/master/requirements.txt) to your project root directory.

create virtual Environment.

```bash

python3 -m virtualenv venv
. venv/bin/activate
pip install -r requirements.txt
```

Download create_data.py file from [here](https://github.com/aadityachapagain/Conversational-Reddit-datasets/blob/master/reddit/create_data.py) to your project root directory.


`create_data.py` is a [Google Dataflow](https://cloud.google.com/dataflow/) script that reads the input BigQuery table and saves the dataset to Google Cloud Storage.


Now you can run the Dataflow script:

```bash
PROJECT="<your-google-cloud-project>"
BUCKET="<your-bucket>"
INSTANCE_REGION="<your-dataflow-instances-region>"

DATADIR="gs://${BUCKET?}/reddit/$(date +"%Y%m%d")"

# The below uses values of $DATASET and $TABLE set
# in the previous section.

python reddit/create_data.py \
  --output_dir ${DATADIR?} \
  --reddit_table ${PROJECT?}:${DATASET?}.${TABLE?} \
  --runner DataflowRunner \
  --temp_location ${DATADIR?}/temp \
  --staging_location ${DATADIR?}/staging \
  --project ${PROJECT?} \
  --dataset_format JSON \
  --region ${INSTANCE_REGION}
  --save_main_session
```
Once the above is running, you can continue to monitor it in the terminal, or quit the process and follow the running job on the [dataflow admin page](https://console.cloud.google.com/dataflow).

The dataset will be saved in the `$DATADIR` directory, as sharded train and test sets- `gs://your-bucket/reddit/YYYYMMDD/train-*-of-01000.json` and `gs://your-bucket/reddit/YYYYMMDD/test-*-of-00100.json`.


You can download whole script from [here](https://github.com/aadityachapagain/Conversational-Reddit-datasets).

My `create_data.py` file was adapted version for reddit conversational datasets of this example from [GoogleCloudPlatform Repo](https://github.com/GoogleCloudPlatform/cloudml-samples/blob/master/molecules/preprocess.py) you might wanna look into this also. As it covers more broader concept and topics on Dataflow in ML piplines.