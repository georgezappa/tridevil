import { Color } from "../vendor/three/three.module.js";

import createLights from "./lights.js";
import createMaterials from "./materials.js";
import loadModels from "./models.js";

async function initScene() {
  const app = createApp();
  app.start();
  const lights = createLights();
  const materials = createMaterials();
  const models = await loadModels(materials);
  app.scene.add(lights.ambient, lights.main, models.morphCube);
  console.log(`Here's the model we just loaded: ${models.morphCube}`);
}

try {
  initScene();
} catch (error) {
  console.log("something this way fucking comes!!!!!");
  console.log(error);
}
