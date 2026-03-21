import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class BallbudsScene {
  constructor(
    container,
    modelUrl,
    keyframes,
    lightGui = null,
    lightColorIntensityPosition,
  ) {
    this.container = container;
    this.animationId = null;
    this.keyframes = keyframes;

    this.initRenderer();
    this.initScene();
    // this.initBackground();
    this.initCamera();
    this.initLights({ lightGui, lightColorIntensityPosition });
    this.loadModel({ modelUrl });
    // this.initControls();
    this.animate();

    window.addEventListener("resize", this.onResize);
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight,
    );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  initBackground() {
    // 3D background
    // const cubeTextureLoader = new THREE.CubeTextureLoader();
    // const starsTexture = cubeTextureLoader.load([
    //   starsTextureImageSrc,
    //   starsTextureImageSrc,
    //   starsTextureImageSrc,
    //   starsTextureImageSrc,
    //   starsTextureImageSrc,
    //   starsTextureImageSrc,
    // ]);
    // starsTexture.colorSpace = THREE.SRGBColorSpace;
    // this.scene.background = starsTexture;
    // static background
    // const loader = new THREE.TextureLoader();
    // loader.load(starsTextureImageSrc, (texture) => {
    //    this.scene.background = texture;
    // });
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      40,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000,
    );
    this.camera.position.set(0, 1, 5);
  }

  initLights({ lightGui = null, lightColorIntensityPosition }) {
    const { lightName, ambient_Light, key_Light, fill_Light, rim_Light } =
      lightColorIntensityPosition;

    // ambientlight
    const ambientLight = new THREE.AmbientLight(
      ambient_Light.colorHex,
      ambient_Light.intensity,
    );
    this.scene.add(ambientLight);

    // keylight
    const keyLight = new THREE.DirectionalLight(
      key_Light.colorHex,
      key_Light.intensity,
    );
    keyLight.position.set(
      key_Light.position.x,
      key_Light.position.y,
      key_Light.position.z,
    );
    this.scene.add(keyLight);

    // filllight
    const fillLight = new THREE.DirectionalLight(
      fill_Light.colorHex,
      fill_Light.intensity,
    );
    fillLight.position.set(
      fill_Light.position.x,
      fill_Light.position.y,
      fill_Light.position.z,
    );
    this.scene.add(fillLight);

    // rimlight
    const rimLight = new THREE.DirectionalLight(
      rim_Light.colorHex,
      rim_Light.intensity,
    );
    rimLight.position.set(
      rim_Light.position.x,
      rim_Light.position.y,
      rim_Light.position.z,
    );
    this.scene.add(rimLight);

    // ---- GUI ----
    // const root = lightGui.addFolder("Ballbuds Lighting");
    // const lightFolder = root.addFolder(lightName);

    // const keyFolder = lightFolder.addFolder("Key Light");
    // keyFolder
    //   .addColor({ color: key_Light.colorHex }, "color")
    //   .onChange((v) => keyLight.color.set(v));
    // keyFolder.add(keyLight, "intensity", 0, 10, 0.1);
    // const keyPos = keyFolder.addFolder("position");
    // keyPos.add(keyLight.position, "x", -20, 20, 0.5);
    // keyPos.add(keyLight.position, "y", -20, 20, 0.5);
    // keyPos.add(keyLight.position, "z", -20, 20, 0.5);

    // const fillFolder = lightFolder.addFolder("Fill Light");
    // fillFolder
    //   .addColor({ color: fill_Light.colorHex }, "color")
    //   .onChange((v) => fillLight.color.set(v));
    // fillFolder.add(fillLight, "intensity", 0, 10, 0.1);
    // const fillPos = fillFolder.addFolder("position");
    // fillPos.add(fillLight.position, "x", -20, 20, 0.5);
    // fillPos.add(fillLight.position, "y", -20, 20, 0.5);
    // fillPos.add(fillLight.position, "z", -20, 20, 0.5);

    // const rimFolder = lightFolder.addFolder("Rim Light");
    // rimFolder
    //   .addColor({ color: rim_Light.colorHex }, "color")
    //   .onChange((v) => rimLight.color.set(v));
    // rimFolder.add(rimLight, "intensity", 0, 10, 0.1);
    // const rimPos = rimFolder.addFolder("position");
    // rimPos.add(rimLight.position, "x", -20, 20, 0.5);
    // rimPos.add(rimLight.position, "y", -20, 20, 0.5);
    // rimPos.add(rimLight.position, "z", -20, 20, 0.5);
    // ---- end GUI ----
  }

  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
  }

  loadModel({ modelUrl }) {
    const loader = new GLTFLoader();
    loader.load(modelUrl, (gltf) => {
      this.model = gltf.scene;
      this.scene.add(this.model);

      // Force a resize calculation now that we know the model is in
      this.onResize();

      if (this.pendingProgress !== undefined) {
        this.setScrollProgress(this.pendingProgress);
      }

      // Optional: Force one frame immediately
      this.renderer.render(this.scene, this.camera);
    });
  }

  interpolateKeyframes(keyframes, progress) {
    let from = keyframes[0];
    let to = keyframes[keyframes.length - 1];

    for (let i = 0; i < keyframes.length - 1; i++) {
      if (progress >= keyframes[i].at && progress <= keyframes[i + 1].at) {
        from = keyframes[i];
        to = keyframes[i + 1];
        break;
      }
    }

    const t = this.mapRange(progress, from.at, to.at, 0, 1);

    return {
      position: {
        x: from.position.x + (to.position.x - from.position.x) * t,
        y: from.position.y + (to.position.y - from.position.y) * t,
        z: from.position.z + (to.position.z - from.position.z) * t,
      },
      rotation: {
        x: from.rotation.x + (to.rotation.x - from.rotation.x) * t,
        y: from.rotation.y + (to.rotation.y - from.rotation.y) * t,
        z: from.rotation.z + (to.rotation.z - from.rotation.z) * t,
      },
    };
  }

  mapRange(value, inMin, inMax, outMin, outMax) {
    if (inMax === inMin) return outMin;
    return Math.min(
      Math.max(
        ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin,
        outMin,
      ),
      outMax,
    );
  }

  setScrollProgress(progress) {
    this.pendingProgress = progress;
    if (!this.model) return;

    // ← now uses this.keyframes instead of a hardcoded phase lookup
    const { position, rotation } = this.interpolateKeyframes(
      this.keyframes,
      progress,
    );
    this.model.position.set(position.x, position.y, position.z);
    this.model.rotation.set(rotation.x, rotation.y, rotation.z);
  }

  animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    if (this.controls) this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };

  onResize = () => {
    this.camera.aspect =
      this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight,
    );
  };

  dispose() {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener("resize", this.onResize);
    this.renderer.dispose();
    this.container.removeChild(this.renderer.domElement);
  }
}
