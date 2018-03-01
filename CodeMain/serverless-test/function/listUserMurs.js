import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";
import AWS from "aws-sdk";
import Murs from "../models/murs";
import MurSchema from "../models/murSchema";

const dynamodb = new AWS.DynamoDB();

export async function main(event, context, callback) {
  const params = {
    TableName: "murs",
    KeyConditionExpression: "userid = :userid",
    ExpressionAttributeValues: {
      ":userid": {
        S: event.requestContext.identity.cognitoIdentityId
      }
    }
  };
  
  dynamodb.query(params, (err, data) => {
    if (err) {
      callback(null, failure({ status: false, error: "The query coudn't match any elements" }));
    } else {
      callback(null, success(data));
    }
  })
}
