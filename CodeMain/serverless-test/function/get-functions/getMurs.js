import * as dynamoDbLib from "../../libs/dynamodb-lib";
import { success, failure } from "../../libs/response-lib";
import AWS from "aws-sdk";
var s3 = new AWS.S3();
var attr = require('dynamodb-data-types').AttributeValue;

const dynamodb = new AWS.DynamoDB();

//// SHOULD RETURN ALL THE MURS ONLY WITH SHARES LIST (price/color)

module.exports.main = (event, context, callback) => {

    // Retrieve the bucket & key for the uploaded S3 object that
    // caused this Lambda function to be triggered
    var src_bkt = "murmur-notes-uploads";
    var src_key = "8fa49c3caec27ea27e2f90276e371467--firewatch-game-art (1).jpg";
    var file = require('fs').createWriteStream('./test.mp3');
    // Retrieve the object
    s3.getObject({
        Bucket: src_bkt,
        Key: src_key,
      
    }).createReadStream().pipe(file);
  // const params = {
  //   TableName: "murs",
  // };
  // dynamodb.scan(params, (err, data) => {
  //   if (err) {
  //     console.log(err)
  //     callback(null, failure({ status: false, error: "The query coudn't match any elements" }));
  //   } else {
  //     let to_return = [];
  //     data.Items.map((s) => {
  //       to_return.push(attr.unwrap(s))
  //     })
  //     callback(null, success(to_return))
  //   }
  // })
}
