import createAsyncLoader from "../vendor/utility/createAsyncLoader.js";

import { GLTFLoader } from "../vendor/three/loaders/GLTFLoader.js";

export default async function loadModels(materials) {
  const loader = createAsyncLoader(new GLTFLoader());
  const gltf = await loader.load("models/Nefertiti.glb");
  const nefertiti = gltf.scene.children[0];
  nefertiti.material = materials.morph;

  return {
    nefertiti
  };
}
