(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var calcInitShareVal = exports.calcInitShareVal = function calcInitShareVal(initShrPc, initNbShr) {
  return (initShrPc * initNbShr / initNbShr).toString();
};

var calcInitTotVal = exports.calcInitTotVal = function calcInitTotVal(initShrPc, initNbShr) {
  return (initShrPc * initNbShr).toString();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = undefined;

var _regenerator = __webpack_require__(4);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(5);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var main = exports.main = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event, context, callback) {
    var murParams;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            murParams = (0, _createMurParams2.default)(event);


            dynamodb.batchWriteItem(murParams, function (err, data) {
              if (err) return callback(null, (0, _responseLib.failure)({
                status: false,
                error: err
              }));
              return callback(null, (0, _responseLib.success)(data));
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function main(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _uuid = __webpack_require__(0);

var _uuid2 = _interopRequireDefault(_uuid);

var _dynamodbLib = __webpack_require__(6);

var dynamoDbLib = _interopRequireWildcard(_dynamodbLib);

var _awsSdk = __webpack_require__(2);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _responseLib = __webpack_require__(7);

var _createMurParams = __webpack_require__(9);

var _createMurParams2 = _interopRequireDefault(_createMurParams);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dynamodb = new _awsSdk2.default.DynamoDB();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call = call;

var _awsSdk = __webpack_require__(2);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_awsSdk2.default.config.update({ region: "eu-west-2" });

function call(action, params) {
  var dynamoDb = new _awsSdk2.default.DynamoDB.DocumentClient();
  return dynamoDb[action](params).promise();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(8);

var _stringify2 = _interopRequireDefault(_stringify);

exports.success = success;
exports.failure = failure;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function success(body) {
  return buildResponse(200, body);
}

function failure(body) {
  return buildResponse(500, body);
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: (0, _stringify2.default)(body)
  };
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMurParams;

var _uuid = __webpack_require__(0);

var _uuid2 = _interopRequireDefault(_uuid);

var _sharesParams = __webpack_require__(10);

var _sharesParams2 = _interopRequireDefault(_sharesParams);

var _songParams = __webpack_require__(11);

var _songParams2 = _interopRequireDefault(_songParams);

var _murParams = __webpack_require__(12);

var _murParams2 = _interopRequireDefault(_murParams);

var _layerParams = __webpack_require__(13);

var _layerParams2 = _interopRequireDefault(_layerParams);

var _murSchemaHelpers = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMurParams(event) {

  var data = JSON.parse(event.body);

  var murId = _uuid2.default.v1();
  var songId = _uuid2.default.v1();
  var layerId = _uuid2.default.v1();

  var sharesParam = (0, _sharesParams2.default)(data.initNbShr, data.initShrPc, murId, songId, layerId);
  var layerParam = (0, _layerParams2.default)(data, murId, songId, layerId);
  var songParam = (0, _songParams2.default)(data, murId, songId);
  var murParam = (0, _murParams2.default)(event, data, murId);

  var mur = {
    RequestItems: {
      "murs": [murParam],
      "songs": [songParam],
      "layerSchema": [layerParam],
      "shares": (0, _sharesParams2.default)(data.initNbShr, data.initShrPc, murId, songId, layerId)
    }
  };
  return mur;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shareParams;

var _uuid = __webpack_require__(0);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shareParams(shareNb, initShrPc, murId, songId, layerId) {
  var shares = [];
  for (var i = 0; i <= shareNb; i++) {
    var share = {
      PutRequest: {
        Item: {
          "shareId": { S: _uuid2.default.v1() },
          "createdAt": { N: new Date().getTime().toString() },
          "color": { S: "red" },
          "price": { N: initShrPc },
          "murId": { S: murId },
          "songId": { S: songId },
          "layerId": { S: layerId },
          "owned": { BOOL: false },
          "owner": { S: "No owner" }
        }
      }
    };
    shares.push(share);
  }
  return shares;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = songParams;

var _uuid = __webpack_require__(0);

var _uuid2 = _interopRequireDefault(_uuid);

var _murSchemaHelpers = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function songParams(data, murId, songId) {
  var Song = {
    PutRequest: {
      Item: {
        "songId": { S: songId },
        "murId": { S: murId },
        "songName": { S: data.songName },
        "createdAt": { N: new Date().getTime().toString() },
        "crtShrPc": { N: data.initShrPc },
        "crtShrVal": { N: (0, _murSchemaHelpers.calcInitShareVal)(data.initShrPc, data.initNbShr) },
        "totVal": { N: (0, _murSchemaHelpers.calcInitTotVal)(data.initShrPc, data.initNbShr) },
        "crtRiskPc": { N: "0" },
        "totNbShr": { N: "1111111" }, //// TO BE CALCULATED
        "totNbBoughtShr": { N: "0" },
        "initSongLength": { N: data.initLength },
        "songLength": { N: "240" },
        "totNbLyr": { N: "1111111" }, //// TO BE CALCULATED
        "avgPriceNxtLyr": { N: "1" }
      }
    }
  };
  return Song;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = murParams;

var _uuid = __webpack_require__(0);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function murParams(event, data, murId) {
  var mur = {
    PutRequest: {
      Item: {
        "userid": { S: event.requestContext.identity.cognitoIdentityId },
        "murId": { S: _uuid2.default.v1() },
        "createdAt": { N: new Date().getTime().toString() },
        "murName": { S: data.murName },
        "initNbShr": { N: data.initNbShr },
        "initShrPc": { N: data.initShrPc },
        "pcIncrem": { N: data.pcIncrem },
        "shrIncrem": { N: data.shrIncrem },
        "crtSchemaNbr": { N: "1" }
      }
    }
  };
  return mur;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = layerParams;

var _uuid = __webpack_require__(0);

var _uuid2 = _interopRequireDefault(_uuid);

var _murSchemaHelpers = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function layerParams(data, murId, songId, layerId) {
  var Layer = {
    PutRequest: {
      Item: {
        "layerSchemaId": { S: layerId },
        "createdAt": { N: new Date().getTime().toString() },
        "songId": { S: songId },
        "murId": { S: murId },
        "price": { N: "1" },
        "totalPrice": { N: (0, _murSchemaHelpers.calcInitTotVal)(data.initShrPc, data.initNbShr) },
        "totNbShr": { N: data.initNbShr },
        "sharesAvailable": { N: "0" }
      }
    }
  };
  return Layer;
}

/***/ })
/******/ ])));