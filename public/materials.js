"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMaterials;

var _threeModule = require("../vendor/three/three.module.js");

function createMaterials() {
  return {
    // the model already has a material set up correctly,
    // but we'll recreate it here  for demonstration purposes
    morph: new _threeModule.MeshStandardMaterial({
      color: 0xff0000,
      // this needs to be set for any mesh that has
      // morph targets. If you leave it out, then morphing
      // will not work!
      morphTargets: true,
      // set this if the mesh also has morph normals
      // our mesh doesn't, so we can leave it at false
      // morphNormals: true
      // finally, since we are not morphing the normals here,
      // lighting will not work smoothly so we'll use flatshading
      flatShading: true
    })
  };
}