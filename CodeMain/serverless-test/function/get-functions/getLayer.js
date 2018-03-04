import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";
import AWS from "aws-sdk";
var attr = require('dynamodb-data-types').AttributeValue;

const dynamodb = new AWS.DynamoDB();

module.exports.main = (event, context, callback) => {
  const params = {
    Key: {
     "layerId": {
       S: event.pathParameters.layerId
      },
     "murid": {
       S: event.pathParameters.murId
      }
    },
    TableName: "layers",
  };

  dynamodb.getItem(params, (err, data) => {
    if (err) {
      console.log(err)
      callback(null, failure({ status: false, error: "The query coudn't match any elements" }));
    } else {
      let to_return = [];
      data.Items.map((s) => {
        to_return.push(attr.unwrap(s))
      })
      callback(null, success(to_return))
    }
  })
}
