import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";
import AWS from "aws-sdk";

const dynamodb = new AWS.DynamoDB();

export async function main(event, context, callback) {

  const params = {
    Key: {
     "murId": {
       S: event.pathParameters.id
      },
     "userid": {
       S: event.requestContext.identity.cognitoIdentityId
      }
    },
    TableName: "murs",
    ReturnValues: "ALL_OLD"
  };

  dynamodb.deleteItem(params, (err, data) => {
    if (err) {
      callback(null, failure({ status: false, error: "The query coudn't match any elements" }));
    } else {
      (data.Attributes) ? callback(null, success(data)) : callback(null, failure({ status: false, error: "Couldn't find any mur to delete" }));
    }
  })
}
