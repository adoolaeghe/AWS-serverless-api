import uuid from "uuid";

import { calcInitTotVal } from "..//murSchemaHelpers";

export default function layerParams (data, murId, songId, layerId) {
  const Layer = {
    PutRequest: {
      Item: {
        "layerSchemaId": {S : layerId},
        "createdAt": {N : new Date().getTime().toString()},
        "songId": {S : songId},
        "murId": {S : murId},
        "price": {N : "1"},
        "totalPrice": {N: calcInitTotVal(data.initShrPc, data.initNbShr)},
        "totNbShr": {N: data.initNbShr},
        "sharesAvailable": {N : "0"}
      }
    }
  };
  return Layer;
}
