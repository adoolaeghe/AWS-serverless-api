import uuid from "uuid";
import sharesParams from "./sharesParams";
import songParams from "./songParams";
import murParams from "./murParams.js";
import layerParams from "./layerParams.js";

import { calcInitShareVal,
         calcInitTotVal } from "../murSchemaHelpers";

export default function createMurParams (event) {
  
  const data = JSON.parse(event.body);

  const murId = uuid.v1();
  const songId = uuid.v1();
  const layerId = uuid.v1();

  const sharesParam = sharesParams(data.initNbShr, data.initShrPc, murId, songId, layerId);
  const layerParam = layerParams(data, murId, songId, layerId);
  const songParam = songParams(data, murId, songId);
  const murParam = murParams(event, data, murId);

  const mur = {
    RequestItems: {
      "murs": [murParam],
      "songs": [songParam],
      "layerSchema": [layerParam],
      "shares": sharesParams(data.initNbShr, data.initShrPc, murId, songId, layerId)
    }
  };
  return mur
}
