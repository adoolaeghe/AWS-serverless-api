import uuid from "uuid";
import * as dynamoDbLib from "../libs/dynamodb-lib";
import AWS from "aws-sdk";

import { success, failure } from "../libs/response-lib";
import createMurParams from "../libs/params/createMurParams";

const dynamodb = new AWS.DynamoDB();

export async function main(event, context, callback) {

  const murParams = createMurParams(event);

  dynamodb.batchWriteItem(murParams, function(err, data) {
    if (err) return callback(null, failure({
      status: false,
      error: err
    }));
    return callback(null, success(data));
  })
}
