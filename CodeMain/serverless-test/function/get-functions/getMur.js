import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";
import AWS from "aws-sdk";
var attr = require('dynamodb-data-types').AttributeValue;

const dynamodb = new AWS.DynamoDB();

module.exports.main = (event, context, callback) => {
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
  };

  dynamodb.getItem(params, (err, data) => {
    if (err) {
      console.log(err)
      callback(null, failure({ status: false, error: "The query coudn't match any elements" }));
    } else {
      console.log(data)
      callback(null, success(data))
    }
  })
}
