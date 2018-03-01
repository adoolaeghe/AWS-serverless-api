import uuid from "uuid";
import * as dynamoDbLib from "../libs/dynamodb-lib";
import AWS from "aws-sdk";

import { success, failure } from "../libs/response-lib";
import createMurParams from "./params/createMurParams";

const dynamodb = new AWS.DynamoDB();

export async function main(event, context, callback) {

}
