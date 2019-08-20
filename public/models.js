"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadModels;

var _createAsyncLoader = _interopRequireDefault(require("../vendor/utility/createAsyncLoader.js"));

var _GLTFLoader = require("../vendor/three/loaders/GLTFLoader.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function loadModels(_x) {
  return _loadModels.apply(this, arguments);
}

function _loadModels() {
  _loadModels = _asyncToGenerator(function* (materials) {
    var loader = (0, _createAsyncLoader.default)(new _GLTFLoader.GLTFLoader());
    var gltf = yield loader.load("models/Nefertiti.glb");
    var nefertiti = gltf.scene.children[0];
    nefertiti.material = materials.morph;
    return {
      nefertiti
    };
  });
  return _loadModels.apply(this, arguments);
}