---
title: Serverless stacks and Its benefits
date: 2023-03-05 14:00
modified: 2023-03-05 16:00
category: Blog
slug: serverless-stacks-benefits
summary: Benefits of using serverless stacks.
tags: serverless, aws, azure, serverless stacks, infrastructure
authors: Aaditya Chapagain
status: published
---

Before deep diving into the serverless stacks provided by AWS , we need to know what serverless really means.

## What is serverless ?

Serverless is a cloud-native development model that allows developers to build and run applications without having to manage servers. The servers still gonna be involving while building serverless, but they are abstracted away from app development. A cloud provider like ( AWS, GCP & AZURE ) handles the routine work of provisioning, maintaining , and scaling the server infrastructure. Developers can simply package their code in containers for deployment.

Once deployed, serverless apps respond to demand and automatically scale up and downs as needed. Serverless architectures from cloud providers are usually metered on-demand through an event-driven execution model. As a result, **when a serverless function is sitting idle, it doesn’t cost anything**.

## What are the services provided by aws serverless architecture ?

[![serverless stack aws](/images/blog/serverlessstack.png)](https://aadiimages.imgix.net/images/blog/serverlessstack.png)

It provides many back end tasks like computing, databases, storage, processing and many more, this in result , allows the user to focus on his program and allows him to innovate.

- Compute using lambda

- Storage using Amazon S3

- Database using Amazon Dynamodb

- API proxy using amazon API Gateway

- Application Integration using Amazon SNS

- Orchestration using Step Functions

- Analytics using Amazon Kinesis

- Security & Access Control using its identity and Access Management

## Pros of AWS Serverless Computing

- Servers need no attention for installation and maintenance.

- Payment is as per the throughput, making it value for money.

- You can choose appropriate settings as per your products requirements, thus paying only for the functions you use.

- Serverless have in-built availability and fault tolerance. User need not architect for these capabilities since the services running the application provide them by default.

- Write code and deploy with just few steps, and it will be available to the world within few minutes. Thus no need to put any effort into or for creating and managing servers.

## Cons of AWS Serverless Computing

- [Serverless Architecture](https://aws.amazon.com/lambda/serverless-architectures-learn-more/) excecutes commands and functions on temporarily created container. So if a client performs few tasks on your app, the serverless architecture will create a temporary container and will destroy it as soon as the client is finished performing tasks, this results in delays which are also known as cold start.

- As serverless architecture is based on the temporarily created containers, the usable memory is thus limited hindering the processes that require a lot of processing.

- Another issue with Lambda is that it decides which third-party apps can be used to work on it, thus giving up a lot of control over your application.

- Monitoring and Debugging are quite restrictive to what the vendor provides. It is fundamental with Lambda too. It lacks proper operational tools for monitoring and debugging.

- Lack of local testing options.