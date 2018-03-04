import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";
import AWS from "aws-sdk";
var attr = require('dynamodb-data-types').AttributeValue;

const dynamodb = new AWS.DynamoDB();

module.exports.main = (event, context, callback) => {
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
      let to_return = [];
      data.Items.map((s) => {
        to_return.push(attr.unwrap(s))
      })
      callback(null, success(to_return));
    }
  })
}
