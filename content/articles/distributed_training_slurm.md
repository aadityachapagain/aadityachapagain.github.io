Title: Distributed Training of Deep Learning model with Slurm on GCP
Date: 2020-09-15 12:00
Modified: 2020-09-15 12:00
Category: Blog
Slug: distributed-training-with-slurm-on-gcp
Summary: Faster Training of Large Deep Learning models is much easier with the help of Slurm.
Tags: Datasets, Machine Learning, Visualization, training, Deep Learning, ML tools, tensorboard, python, slurm, distributed training, High performance computing, HPC, parallel processing, tensorflow, Pytorch, DL, Language model, 
Authors: Aaditya Chapagain
Status: published

Recently, I was working on Big Machine Learning project. The task was to pretraining Large Machine learning models (with parameter in the range of several Billion ). And Normal training approch didn't work ( obviously ).With 8 GPU Volta core machines, it would take several months to complete just 1 epcoh of training. Thats the point when i think of distributed training. I was using gcp ( google cloud ) for training models and found out that google already have support for Hight Performance Computing with Slurm . You can find Mininal working example on slurm from google codelabs here [https://codelabs.developers.google.com/codelabs/hpc-slurm-on-gcp/#0](https://codelabs.developers.google.com/codelabs/hpc-slurm-on-gcp/#0). 

Through this blog, I will try to explain what is HPC? , Why HPC ?, how can we train large Deep Learning models with slurm.

# What is HPC ?

High Performace Computing  (HPC) is the use of supercomputers and parallel processing techniques for solving complex mathematical and computational problems. HPC technology primarily focuses on developing parallel processing algorithms and systems by incorporating both administration and parallel computational techniques. HPC is typically used for solving advanced problems that require a lot time .

# Why HPC ?

When you have loads of data and its processing takes really long time, then the approch **divide et impera** comes at hand.

With HPC, we can divide any job so that every node processes different partitions of the data in parallel, speeding up the execution time.

# Slurm Workload Manager on GCP

To make computing with  slurm easier in GCP, Google and SchedMD ( Slurm's Creators ) joined forces and as a result, we can run a Slurm cluster on Google Cloud Platform. We don't have to worry about the parallel computing techniques since slurm takes care of that and GCP takes care of setting up a cluster and providing resources. 
Basic architectural diagram of a stand-alone Slurm Cluster in Google Cloud Platform.

![slurm architechture](https://codelabs.developers.google.com/codelabs/hpc-slurm-on-gcp/img/a739730a41acff0a.png)

As we can see in above pictures, Slurm cluster contains three types of nodes: **login**, **controller** and **Compute** node.

* **Login Node** serves as an interface for the user: user should communicate with the cluster exclusively through the login node (starting the job, requiring resources, ...)
* **Controller Node** manages resources and job scheduling for the user.
* **Compute Node** executes the job.


# Setting Up a Slurm Cluster on GCP

Before describing the setup, let us explain in short how does GCP implement a slurm cluster. 

In GCP, a cluster is realized as a **deployment**. A deployment is an instantiation of a set of resources  that are defined in a configuration. A deployment  can contain a number of resources, across a variety of Google Cloud Platform services. When you create a deployment, Deployment Manager creates all of the described resources in the respective Google Cloud Platform APIs.

This brings us to the cluster's nodes. Each node in a cluster is actually a **Virtual Machine**.When a deployment is created, three new virtual machines appear in "VM instances" page, under "Compute  Engine". Those VMs are login instances, Controller instances, and compute image instance.

Compute Instance is a bit trickey part. One thing to notice is that deployment does not create compute instance,but exactly one compute image instance even if you request more compute nodes in your cluster. So, if a user requests 10 compute nodes for the cluster, those 10 virtual machines will not be immediately instantiated with the cluster deployment. Here's what is happening. These compute instances are created in the later step when you run a job and rquest the number of nodes for the job. Then the compute nodes will be allocated, and they will appear in the "VM Instances" page. Shortly after the job is completed, these virtual machines will be deallocated and wll disappear from the list. This way a user gets new compute VMs everytime. The fact that deployment create compute image instance rather than compute nodes directly is that, you might not be using compute node all the time and creating compute nodes unnecessarily might affect your billing, so , slurm will create new compute nodes and use compute image instance as a templete to dynamically create new instance during running jobs, so that you will be billed for exact time period your compute node will run.

Below you can see visual representation of the described process:

[![Slum Architecture in GCP](/images/slurm_hpc.png){.img-center}](https://ibb.co/mFrGDy3)

Finally, let's head to the cluster setup. In this blog post, we will setup Slurm cluster for training Deep Learning Model with several nodes.Customize the information so that they will suit your needs:

1. Launch Google Cloud Shell
2. Check that you already authenticated and that the project is already set ot your **PROJECT_ID**:
    ```bash

    > gcloud auth list

    Credentialed accounts:
    <your email>

    > gcloud config list project
    [core]
    project = <PROJECT_ID>

    ```
3. Clone git repository that contains the Slurm Google Cloud Platform deployment-manager files:

    ```bash
    > git clone https://github.com/SchedMD/slurm-gcp.git

    ```

4. Switch to the Slurm deployment configuration directory:

    ```bash
    > cd slurm-gcp
    ```
5. Configure the Slurm Deployment YAML file. Provide information that suits your needs. There are plenty more paramters available, they can be found in SchedMD's GitHub repository. Below is the script that was sufficient for my needs.

    ```yaml

    # [START cluster_yaml]
    imports:
    - path: slurm.jinja

    resources:
    - name: slurm-cluster
    type: slurm.jinja
    properties:
        cluster_name            : slurm-job

        zone                    : us-central1-b
        controller_machine_type : n1-standard-2
        controller_disk_type      : pd-standard
        controller_disk_size_gb   : 50
        external_controller_ip    : True

        login_machine_type        : n1-standard-2
        login_disk_type           : pd-standard
        login_disk_size_gb        : 50
        external_login_ips        : True

        compute_image_machine_type  : n1-standard-2
        compute_image_disk_type   : pd-standard
        compute_image_disk_size_gb: 200
        external_compute_ips      : False

        partitions :
        - name           : gpu
            machine_type   : n1-standard-16
            max_node_count : 10
            zone           : us-central1-b

        # Optional compute configuration fields

            # cpu_platform           : Intel Skylake
            preemptible_bursting   : True
            compute_disk_type      : pd-standard
            compute_disk_size_gb   : 200
            gpu_type               : nvidia-tesla-v100
            gpu_count              : 8

    #  [END cluster_yaml]

    ```

6. In the Cloud shell Session, execute the following command from the slurm-gcp folder:

    ```bash
    > gcloud deployment-manager deployments create slurm-deployment  --config  slurm-cluster.yaml
    ```
    
    This command creates a deployment  named slurm-deployment. The operation can take few minutes to complete.

7. Verify the deployment ( Navigation menu -->  Deployment Manager)
8. Verify the cluster's instances ( Navigation menu --> Compute Engine --> VM Instances)  There should be login , controller, and compute image instances. Compute image instance will live for small amount of time for setting up compute images, after that it will be off. and Compute Instances show up only when you allocate them for the sbatch job. they disappear shortly the job is completed.
9. Log in to login instance .

    While logging in to the login instances if *Slurm is currently being installed/configured in the background.* Don't install any packages  during that time, as that might disrupt the installation process of slurm. Wait for around 10 for slurm to be installed fully and you can log in to login instances and do whatever you want.


# Setting up Deep Learning Environment inside slurm cluster