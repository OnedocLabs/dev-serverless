<!--
title: 'AWS NodeJS Example'
description: 'This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework AWS NodeJS Example

This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework. The deployed function does not include any event definitions as well as any kind of persistence (database). For more advanced configurations check out the [examples repo](https://github.com/serverless/examples/) which includes integrations with SQS, DynamoDB or examples of functions that are triggered in `cron`-like manner. For details about configuration of specific `events`, please refer to our [documentation](https://www.serverless.com/framework/docs/providers/aws/events/).

## Usage

### Install dependencies

In order to install the dependencies, you need to run the following command:

```
npm install
```

### Build

In order to build the service you need to run the following command:

```
npm run build
```

### Local testing

In order to test the service locally you need to run the following command:

```
npx serverless invoke local --function generateDocument --data '{"name":"John Wick"}'
```

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

After running deploy, you should see output similar to:

```bash
Deploying aws-node-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-project-dev (112s)

functions:
  hello: aws-node-project-dev-hello (1.5 kB)
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
serverless invoke --function generateDocument --data '{"name":"John Wick"}'
```

Which should result in response similar to the following:

```json
{
  "statusCode": 200,
  "body": "...",
  "headers": {
    "Content-Type": "application/json"
  }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
npx serverless invoke local --function generateDocument --data '{"name":"John Wick"}'
```

Which should result in response similar to the following:

```json
{
  "statusCode": 200,
  "body": "...",
  "headers": {
    "Content-Type": "application/json"
  }
}
```
