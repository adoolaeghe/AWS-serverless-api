import uuid from "uuid";
import * as dynamoDbLib from "../libs/dynamodb-lib";
import { success, failure } from "../libs/response-lib";
import AWS from "aws-sdk";
import Murs from "../models/murs";
import MurSchema from "../models/murSchema";

const dynamodb = new AWS.DynamoDB();

export async function main(event, context, callback) {

  const murSchemaObject = MurSchema(event);
  const murObject = Murs(event, murSchemaObject);

  dynamodb.putItem(murObject, function(err, data) {
    if (err) {
      callback(null, failure({ status: false, error: "The mur could not be created" }));
    } else {
      dynamodb.putItem(murSchemaObject, function(err, data) {
       if (err) callback(null, failure({
         status: false,
         error: "The MurSchema could not be created"
       }));
      });
      callback(null, success(data));
    }
  })
}
