"use strict";

var THREE = _interopRequireWildcard(require("../vendor/three/three.module.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

// First, let's import three
// these need to be accessed inside more than one function so we'll declare them first
var container;
var camera; //let controls;

var renderer;
var scene;
var mesh;

function init() {
  container = document.querySelector("#scene-container");
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x8fbcd4);
  createCamera();
  createControls();
  createLights();
  createMeshes();
  createRenderer(); // start the animation loop

  renderer.setAnimationLoop(function () {
    update();
    render();
  });
}

function createCamera() {
  camera = new THREE.PerspectiveCamera(35, // FOV
  container.clientWidth / container.clientHeight, // aspect
  0.1, // near clipping plane
  100 // far clipping plane
  );
  camera.position.set(-4, 4, 10);
}

function createControls() {
  // controls = new THREE.OrbitControls(camera, container);
  new THREE.OrbitControls(camera, container);
}

function createLights() {
  var ambientLight = new THREE.HemisphereLight(0xddeeff, // sky color
  0x202020, // ground color
  5 // intensity
  );
  var mainLight = new THREE.DirectionalLight(0xffffff, 5);
  mainLight.position.set(10, 10, 10);
  scene.add(ambientLight, mainLight);
}

function createMeshes() {
  var geometry = new THREE.BoxBufferGeometry(2, 2, 2);
  var textureLoader = new THREE.TextureLoader();
  var texture = textureLoader.load("textures/uv_test_bw.png");
  texture.encoding = THREE.sRGBEncoding;
  texture.anisotropy = 16;
  var material = new THREE.MeshStandardMaterial({
    map: texture
  });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
}

function createRenderer() {
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.gammaFactor = 2.2;
  renderer.gammaOutput = true;
  renderer.physicallyCorrectLights = true;
  container.appendChild(renderer.domElement);
} // perform any updates to the scene, called once per frame
// avoid heavy computation here


function update() {} // Don't delete this function!
// render, or 'draw a still image', of the scene


function render() {
  renderer.render(scene, camera);
} // a function that will be called every time the window gets resized.
// It can get called a lot, so don't put any heavy computation in here!


function onWindowResize() {
  // set the aspect ratio to match the new browser window aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight; // update the camera's frustum

  camera.updateProjectionMatrix(); // update the size of the renderer AND the canvas

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize); // call the init function to set everything up

init();