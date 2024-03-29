import * as THREE from "three";

window.addEventListener("load", init, false);
// window.addEventListener("resize", handleWindowResize, false);
document.addEventListener("mousemove", handleMouseMove, false);

let mousePos = {
  x: 0,
  y: 0
}
let WIDTH = 240;
let HEIGHT = 240;
let scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.Renderer;
let cube: THREE.Mesh, sphere: THREE.Mesh;
let ambientLight: THREE.AmbientLight;
let pointLight: THREE.PointLight;

function init() {
  scene = createScene();
  camera = createCamera();
  renderer = createRenderer();

  const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0x655f76,
  });
  cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  // cube.rotateX(-Math.PI / 4);
  // cube.rotateY(-0.1);
  // cube.rotateZ(Math.PI / 3);
  scene.add(cube);

  const sphereGeometry = new THREE.SphereGeometry(0.4, 16, 16);
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x5c566b,
  });
  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.translateX(-0.5);
  sphere.translateY(1.75);
  sphere.translateZ(0.55);
  scene.add(sphere);

  ambientLight = new THREE.AmbientLight(0xffffff, .5);
  scene.add(ambientLight);

  pointLight = new THREE.PointLight(0xffffff, 1, 100);
  pointLight.position.set(1, 5, -1);
  scene.add(pointLight);

  animate();
}

function handleWindowResize() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;

  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
}

function handleMouseMove(e: MouseEvent) {
  // here we are converting the mouse position value received
  // to a normalized value varying between -1 and 1;
  // this is the formula for the horizontal axis:
  let tx = -1 + (e.clientX / window.innerWidth) * 2;

  // for the vertical axis, we need to inverse the formula
  // because the 2D y-axis goes the opposite direction of the 3D y-axis
  let ty = 1 - (e.clientY / window.innerHeight) * 2;
  mousePos = { x: tx, y: ty };
}

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x = Math.sin(mousePos.x);
  cube.rotation.y = Math.sin(mousePos.y);

  renderer.render(scene, camera);
}

function createScene() {
  const scene = new THREE.Scene();

  return scene;
}

function createCamera() {
  const aspectRatio = WIDTH / HEIGHT;
  const fieldOfView = 60;
  const nearPlane = 1;
  const farPlane = 10000;
  const camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );

  camera.position.x = 2;
  camera.position.y = 4.5;
  camera.position.z = 2.5;
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  return camera;
}

function createRenderer() {
  const canvas = document.querySelector<HTMLCanvasElement>("#c");
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(WIDTH, HEIGHT);

  return renderer;
}
