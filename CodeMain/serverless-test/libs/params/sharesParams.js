import uuid from "uuid";

export default function shareParams (shareNb, initShrPc, murId, songId, layerId) {
  let shares = [];
  for(let i = 0; i <= shareNb; i++) {
    let share = {
      PutRequest: {
        Item: {
          "shareId": {S : uuid.v1()},
          "createdAt": {N : new Date().getTime().toString()},
          "color": {S : "red"},
          "price": {N : initShrPc},
          "murId": {S : murId},
          "songId": {S : songId},
          "layerId": {S : layerId},
          "owned": {BOOL: false},
          "owner": {S : "No owner"}
        }
      }
    };
    shares.push(share);
  }
  return shares;
}
