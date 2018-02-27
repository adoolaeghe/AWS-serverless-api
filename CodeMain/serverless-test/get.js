import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";
import AWS from "aws-sdk";

export async function main(event, context, callback) {
  // const params = {
  //   TableName: "notes",
  //   // 'Key' defines the partition key and sort key of the item to be retrieved
  //   // - 'userId': Identity Pool identity id of the authenticated user
  //   // - 'noteId': path parameter
  //   Key: {
  //     userId: event.requestContext.identity.cognitoIdentityId,
  //     noteId: event.pathParameters.id
  //   }
  // };

  var params = {
  TableName: "murs"
 };

  var dynamodb = new AWS.DynamoDB();

  dynamodb.describeTable(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);
   });

  try {
    const result = await dynamoDbLib.call("get", params);
    if (result.Item) {
      // Return the retrieved item
      callback(null, success(result.Item));
    } else {
      callback(null, failure({ status: false, error: "Item not found." }));
    }
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}
