import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2'
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecsPatterns from 'aws-cdk-lib/aws-ecs-patterns';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

declare const vpc: ec2.Vpc;
export class EcsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    /*
    const vpcArn = 'arn:aws:ecs:us-east-1:012345678910:cluster/clusterName';

    const cluster = new ecs.Cluster(this, 'Cluster', {
      vpc,
    });
    */
    const ddoriVpc = ec2.Vpc.fromLookup(this, 'vpc-094a3f9428451ac6f', {
      vpcName: 'Grad2/MainVpc',
    });
    console.log('ddori-vpcId 👉 ', ddoriVpc.vpcId);
    console.log('ddori-vpcCidrBlock 👉 ', ddoriVpc.vpcCidrBlock);
    /*
    const cluster = new ecs.Cluster(this, 'Cluster', {
      vpc: ddoriVpc,
    });

    // fargate 서비스 설정
    const fargateService = new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'ddoriService', {
      // cluster,
      memoryLimitMiB: 1024,
      desiredCount: 1,
      cpu: 512,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
      },
      publicLoadBalancer: true
    });

    //autoScale 설정
    const scalableTarget =fargateService.service.autoScaleTaskCount({
      minCapacity: 2,
      maxCapacity: 10
    });
    scalableTarget.scaleOnCpuUtilization('CpuScaling', {
      targetUtilizationPercent: 50,
      scaleInCooldown: cdk.Duration.seconds(60),
      scaleOutCooldown: cdk.Duration.seconds(60)
    });
    scalableTarget.scaleOnMemoryUtilization('MemoryScaling', {
      targetUtilizationPercent: 50,
      scaleInCooldown: cdk.Duration.seconds(60),
      scaleOutCooldown: cdk.Duration.seconds(60)
    });

    // fargateService.targetGroup.enableCookieStickiness() 스티키 세션

    // example resource
    // const queue = new sqs.Queue(this, 'EcsCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
     */
  }
}
