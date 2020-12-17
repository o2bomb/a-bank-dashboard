import * as THREE from "three";

window.addEventListener("load", init, false);
window.addEventListener("resize", handleWindowResize, false);
// document.addEventListener("mousemove", handleMouseMove, false);

let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;
let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.Renderer;
let cube: THREE.Mesh;

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshNormalMaterial();
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  animate();
}

function handleWindowResize() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;

  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
}

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

function createScene() {
  const scene = new THREE.Scene();

  return scene;
}

function createCamera() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  const fieldOfView = 60;
  const nearPlane = 1;
  const farPlane = 10000;
  const camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );

  camera.position.z = 5;
  return camera;
}

function createRenderer() {
  const canvas = document.querySelector<HTMLCanvasElement>("#c");
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  return renderer;
}
