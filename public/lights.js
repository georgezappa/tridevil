"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createLights;

var _threeModule = require("../vendor/three/three.module.js");

function createHemisphereLight() {
  return new _threeModule.HemisphereLight(0xddeeff, 0x0f0e0d, 5);
}

function createDirectionalLight() {
  var direct = new _threeModule.DirectionalLight(0xfffffc, 15);
  direct.position.set(0, 5, 10);
  return direct;
}

function createLights() {
  return {
    ambient: createHemisphereLight(),
    main: createDirectionalLight()
  };
}