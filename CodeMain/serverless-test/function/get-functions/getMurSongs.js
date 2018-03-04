import * as dynamoDbLib from "../../libs/dynamodb-lib";
const dynamodb = new AWS.DynamoDB();
import AWS from "aws-sdk";
var attr = require('dynamodb-data-types').AttributeValue;

import { success, failure } from "../../libs/response-lib";

module.exports.main = (event, context, callback) => {

  const MurSongsParams = {
    TableName: "songs",
      KeyConditionExpression: "murId = :a",
      ExpressionAttributeValues: {
          ":a": {S: event.pathParameters.murId},
      }
  };

  dynamodb.query(MurSongsParams, (err, data) => {
    if (err) {
      callback(null, failure({ status: false, error: "The query coudn't match any songs" }));
    } else {
      let to_return = [];
      data.Items.map((s) => {
        to_return.push(attr.unwrap(s))
      })
      callback(null, success(to_return))
    }
  })
}
