import uuid from "uuid";

export default function murParams (event, data, murId) {
  const mur = {
    PutRequest: {
      Item: {
        "userid": {S : event.requestContext.identity.cognitoIdentityId},
        "murId": {S : uuid.v1()},
        "createdAt": {N : new Date().getTime().toString()},
        "murName": {S : data.murName},
        "initNbShr": {N: data.initNbShr},
        "initShrPc": {N : data.initShrPc},
        "pcIncrem": {N : data.pcIncrem},
        "shrIncrem": {N: data.shrIncrem},
        "crtSchemaNbr": {N: "1"}
      }
    }
  };
  return mur;
}
