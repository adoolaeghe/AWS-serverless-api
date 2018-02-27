import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";
import AWS from "aws-sdk";
import Murs from "./models/murs"
import MurSchema from "./models/murSchema"

export async function main(event, context, callback) {

  const murObject = Murs(event);
  const murSchemaObject = MurSchema(event, murObject);

  // params.Item.murSchemas.push(params1.Item.userSchemaId);

  var dynamodb = new AWS.DynamoDB();

  dynamodb.putItem(murSchemaObject, function(err, data) {
   if (err) console.log(err, err.stack);
  });

  dynamodb.putItem(murObject, function(err, data) {
   if (err) console.log(err, err.stack);
  });
}
