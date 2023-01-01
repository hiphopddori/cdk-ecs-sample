#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EcsCdkStack } from '../lib/ecs-cdk-stack';
import {VpcStack} from "../lib/vpc-stack";

const app = new cdk.App();

// vpc 스택을 먼저 생성한후 생성장에 인자로 넘겨주자
/*
new EcsCdkStack(app, 'EcsCdkStack', {
  env: { account: '457618053666', region: 'ap-northeast-1' },
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  // env: { account: '123456789012', region: 'us-east-1' },
  // For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html
});
*/
new VpcStack(app, 'Grad2',{
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  // env: { account: '123456789012', region: 'us-east-1' },
  // For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html
});
