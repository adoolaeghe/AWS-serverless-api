import * as dynamoDbLib from "../libs/dynamodb-lib";
const dynamodb = new AWS.DynamoDB();
import AWS from "aws-sdk";

import { success, failure } from "../libs/response-lib";
import createMurSchemaParams from "./params/createMurParams";

export async function main(event, context, callback) {

  const murSchemaParams = creeateMurSchemaParams(event);

  dynamodb.getItem(murSchemaParams, (err, data) => {
    if (err) {
      console.log(err)
      callback(null, failure({ status: false, error: "The query coudn't match any elements" }));
    } else {
      console.log(data)
      callback(null, success(data))
    }
  })
}
