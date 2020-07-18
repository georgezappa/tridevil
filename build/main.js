"use strict";

var _app = _interopRequireDefault(require("./app.js"));

var _lights = _interopRequireDefault(require("./lights.js"));

var _materials = _interopRequireDefault(require("./materials.js"));

var _models = _interopRequireDefault(require("./models.js"));

var _interactivity = _interopRequireDefault(require("./interactivity.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function initScene() {
  return _initScene.apply(this, arguments);
}

function _initScene() {
  _initScene = _asyncToGenerator(function* () {
    var app = (0, _app.default)();
    app.start();
    var lights = (0, _lights.default)();
    var materials = (0, _materials.default)();
    var models = yield (0, _models.default)(materials);
    (0, _interactivity.default)(models);
    app.scene.add(lights.ambient, lights.main, models.morphCube);
    console.log("Here's the model we just loaded: ".concat(models.morphCube));
  });
  return _initScene.apply(this, arguments);
}

try {
  initScene();
} catch (error) {
  console.log("this way something fucked comes!!!!!");
  console.log(error);
} //initScene();