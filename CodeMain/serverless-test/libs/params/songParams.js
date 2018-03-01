import uuid from "uuid";

import { calcInitShareVal,
         calcInitTotVal } from "../murSchemaHelpers";

export default function songParams (data, murId, songId) {
  const Song = {
    PutRequest: {
      Item: {
        "songId": {S : songId},
        "murId": {S : murId},
        "songName": {S : data.songName},
        "createdAt": {N : new Date().getTime().toString()},
        "crtShrPc": {N : data.initShrPc},
        "crtShrVal": {N : calcInitShareVal(data.initShrPc, data.initNbShr)},
        "totVal": {N: calcInitTotVal(data.initShrPc, data.initNbShr)},
        "crtRiskPc": {N: "0"},
        "totNbShr": {N : "1111111"}, //// TO BE CALCULATED
        "totNbBoughtShr": {N: "0"},
        "initSongLength": {N : data.initLength},
        "songLength": {N: "240"},
        "totNbLyr": {N : "1111111"}, //// TO BE CALCULATED
        "avgPriceNxtLyr": {N: "1"},
      }
    }
  };
  return Song;
}
