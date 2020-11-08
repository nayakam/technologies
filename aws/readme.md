



## S3 - Amazon Simple Storage Service

*   S3 is a storage service in which we can store static files like images, videos, css , javascripts, or something store, It like a hard drive for storage.
*   S3 is designed for large-capacity, low-cost file storage in one specific geographical region.   The storage and bandwidth costs are quite low.
*   

## EC2 - Amazon Elastic Compute Cloud
*   EC2 basically is your Virtual Operative System, Any operation systems can be installed and run software.


##  AWS CloudFormation
*   AWS CloudFormation is a service that helps you model and set up your Amazon Web Services resources

```
AWS::Lambda::Function is the Cloudformation syntax to define a Lambda function.

AWS::Serverless::Function is the AWS SAM syntax to define a Lambda function which internally creates a Lambda function in Cloudformation (AWS::Lambda::Function) and related resources by convention when executing AWS SAM.

```

##  CloudFront
*   Amazon CloudFront is a Content Delivery Network (CDN) which proxies and caches web data at edge locations as close to users as possible.
*   The data served by CloudFront may or may not come from S3. Since it is more optimised for delivery speed, the bandwidth costs a little more.
*   CloudFront is a middle-ware which stands in between a user requesting for a file from AWS and the S3 data center in a specific region, CloudFront is used to speeds up distribution of your static and dynamic web content from S3 to the User.

## Amazon Athena

*   Amazon Athena is an interactive query service that makes it easy to analyse data in Amazon S3 (Simple Storage Service) using standard SQL.
*   Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.


## SNS (Simple Notification Service) - Topic (Publish / Subscribe system)
*   SMS is a distributed publish-subscribe system. Messages are pushed to subscribers as and when they are sent by publishers to SNS. SNS distributes several copies of message to several subscribers.
*  Use case is processing the same message in multiple ways
*  No Persistence - Only available consumers gets the message.

## SQS (Simple Queue Service) -  (Queue smilar to JMS)

*   SQS is distributed queuing system. Messages are NOT pushed to receivers. Receivers have to poll or pull messages from SQS. Messages can't be received by multiple receivers at the same time. Any one receiver can receive a message, process and delete it.
*   Use case - SQS is mainly used to decouple applications or integrate applications and allowing parallel asynchronous processing.
*   Persistence : Messages can be stored in SQS for configured duration of time.

## SQS vs SNS

*   Polling inherently introduces some latency in message delivery in SQS unlike SNS where messages are immediately pushed to subscribers.
*   SNS consumers might process the messages in different ways. SNS supports several end points such as email, sms, http end point and SQS. If you want unknown number and type of subscribers to receive messages, you need SNS.
*   SQS consumers are typically identical and hence process the messages in exact same way.


## Severless and Lambda

*   Conceptually there is no difference between a serverless or a Lambda function. Serverless is the generic term for what AWS calls Lambda (and API Gateway).
*   AWS Serverless Stack - A combination of AWS offered serverless technologies including API Gateway, Lambda, S3 and etc.
*   Serverless: It creates the IAM role, S3 Bucket, Cloudformation Template, create, update & deploy the code. Can Invoke the program from command.
*   https://stackoverflow.com/questions/49953270/what-is-the-difference-between-a-serverless-function-and-a-lambda-function#:~:text=Conceptually%20there%20is%20no%20difference,AWS%20Lambda%20(amongst%20others).
