import * as cdk from "aws-cdk-lib";
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import {Construct} from "constructs";

export class VpcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const baseVpc = new ec2.Vpc(this, 'MainVpc', {
      cidr: '172.32.0.0/16',
      natGateways: 1,
      maxAzs: 2,
      // enableDnsHostnames: true,
      // enableDnsSupport: true,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'public-app-subnet-1',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'private-app-subnet',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        }
      ],
    });
  }

}
