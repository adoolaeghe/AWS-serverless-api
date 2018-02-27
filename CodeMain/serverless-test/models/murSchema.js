import uuid from "uuid";

export default function MurSchema (event) {
  const data = JSON.parse(event.body);
  const murSchema = {
    TableName: "murSchema",
    Item: {
      "murSchemaId": {S : uuid.v1()},
      "createdAt": {N : new Date().getTime().toString()},
      "totalNbShr": {N : "1"},
      "maxNbShr": {N: "1"},
      "crtShrPc": {N : "1"},
      "crtShrVal": {N : "1"},
      "totVal": {N: "1"},
      "totNbBoughtShr": {N: "1"},
      "crtRiskPc": {N: "1"},
      "avgPriceNxtLyr": {N: "1"},
    }
  };
  return murSchema;
}
