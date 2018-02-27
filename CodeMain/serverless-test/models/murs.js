import uuid from "uuid";

export default function Mur (event) {
  const data = JSON.parse(event.body);
  const mur = {
    TableName: "murs",
    Item: {
      "userid": {S : event.requestContext.identity.cognitoIdentityId},
      "murId": {S : uuid.v1()},
      "createdAt": {N : new Date().getTime().toString()},
      "songName": {S : data.songName},
      "initNbShr": {N: data.initNbShr},
      "initShrPc": {N : data.initShrPc},
      "pcIncrem": {N : data.pcIncrem},
      "shrIncrem": {N: data.shrIncrem},
    }
  };
  return mur
}
