import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DoubleSide, Light } from "three";

const scene = new THREE.Scene();

let fov = 50;
if (innerWidth >= 1024) fov = 50;
if (innerWidth <= 1024 && innerWidth >= 425) fov = 75;
if (innerWidth <= 425) fov = 100;

const camera = new THREE.PerspectiveCamera(
  fov,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setY(5);
camera.position.setX(30);

renderer.render(scene, camera);

const spaceTexture = new THREE.TextureLoader().load("./src/starsmap.png");
// scene.background = spaceTexture;
const space = new THREE.Mesh(
  new THREE.BoxGeometry(1000, 1000, 1000),
  new THREE.MeshStandardMaterial({
    map: spaceTexture,
    side: THREE.DoubleSide,
  })
);
scene.add(space);

const sunmap = new THREE.TextureLoader().load("./src/sunmap.jpg");
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(2, 8, 8),
  new THREE.MeshStandardMaterial({
    map: sunmap,
    emissiveMap: sunmap,
    emissive: 0xffffff,
  })
);
const sunlight = new THREE.PointLight(0xffffff, 2);
scene.add(sun, sunlight);

const mercurymap = new THREE.TextureLoader().load("./src/mercurymap.jpg");
const mercurybump = new THREE.TextureLoader().load("./src/mercurybump.jpg");
const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 8, 8),
  new THREE.MeshStandardMaterial({
    map: mercurymap,
    bumpMap: mercurybump,
  })
);
const mercuryOrbitRing = new THREE.Mesh(
  new THREE.TorusGeometry(5, 0.01, 16, 32),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);
mercuryOrbitRing.rotation.x = 1.58;
scene.add(mercury, mercuryOrbitRing);

const venusmap = new THREE.TextureLoader().load("./src/venusmap.jpg");
const venusbump = new THREE.TextureLoader().load("./src/venusbump.jpg");
const venus = new THREE.Mesh(
  new THREE.SphereGeometry(0.7, 8, 8),
  new THREE.MeshStandardMaterial({
    map: venusmap,
    bumpMap: venusbump,
  })
);
const venusOrbitRing = new THREE.Mesh(
  new THREE.TorusGeometry(7.5, 0.01, 16, 32),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);
venusOrbitRing.rotation.x = 1.58;
scene.add(venus, venusOrbitRing);

const earthmap = new THREE.TextureLoader().load("./src/earthmap1k.jpg");
const earthbump = new THREE.TextureLoader().load("./src/earthbump1k.jpg");
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(0.7, 8, 8),
  new THREE.MeshStandardMaterial({
    map: earthmap,
    bumpMap: earthbump,
  })
);
const earthOrbitRing = new THREE.Mesh(
  new THREE.TorusGeometry(10, 0.01, 16, 32),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);
earthOrbitRing.rotation.x = 1.58;
const moonmap = new THREE.TextureLoader().load("./src/moonmap1k.jpg");
const moonbump = new THREE.TextureLoader().load("./src/moonbump1k.jpg");
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(0.1, 8, 8),
  new THREE.MeshStandardMaterial({
    map: moonmap,
    bumpMap: moonbump,
  })
);
// moon.position.y = 0.3;
// const moonOrbitRing = new THREE.Mesh(
//   new THREE.TorusGeometry(0.8, 0.01, 16, 32),
//   new THREE.MeshStandardMaterial({ color: 0xffffff })
// );
// scene.add(earth, earthOrbitRing, moon, moonOrbitRing);
scene.add(earth, earthOrbitRing, moon);

const marsmap = new THREE.TextureLoader().load("./src/marsmap1k.jpg");
const marsbump = new THREE.TextureLoader().load("./src/marsbump1k.jpg");
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(0.6, 8, 8),
  new THREE.MeshStandardMaterial({
    map: marsmap,
    bumpMap: marsbump,
  })
);
const marsOrbitRing = new THREE.Mesh(
  new THREE.TorusGeometry(12.5, 0.01, 16, 32),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);
marsOrbitRing.rotation.x = 1.58;
const deimos = new THREE.Mesh(
  new THREE.SphereGeometry(0.1, 8, 8),
  new THREE.MeshStandardMaterial({
    map: moonmap,
    bumpMap: moonbump,
  })
);
deimos.position.y = 0.7;
const phobos = new THREE.Mesh(
  new THREE.SphereGeometry(0.1, 8, 8),
  new THREE.MeshStandardMaterial({
    map: moonmap,
    bumpMap: moonbump,
  })
);
phobos.position.y = -0.7;
scene.add(mars, marsOrbitRing, deimos, phobos);

const jupitermap = new THREE.TextureLoader().load("./src/jupitermap.jpg");
const jupiterbump = new THREE.TextureLoader().load("./src/jupiterbump.png");
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(1, 8, 8),
  new THREE.MeshStandardMaterial({
    map: jupitermap,
    bumpMap: jupiterbump,
  })
);
const jupiterOrbitRing = new THREE.Mesh(
  new THREE.TorusGeometry(15, 0.01, 16, 32),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);
jupiterOrbitRing.rotation.x = 1.58;
const io = new THREE.Mesh(
  new THREE.SphereGeometry(0.1, 8, 8),
  new THREE.MeshStandardMaterial({
    map: moonmap,
    bumpMap: moonbump,
  })
);
io.position.y = 0.8;
const europa = new THREE.Mesh(
  new THREE.SphereGeometry(0.1, 8, 8),
  new THREE.MeshStandardMaterial({
    map: moonmap,
    bumpMap: moonbump,
  })
);
europa.position.y = -0.6;
const ganymede = new THREE.Mesh(
  new THREE.SphereGeometry(0.1, 8, 8),
  new THREE.MeshStandardMaterial({
    map: moonmap,
    bumpMap: moonbump,
  })
);
ganymede.position.y = 0.1;
const callisto = new THREE.Mesh(
  new THREE.SphereGeometry(0.1, 8, 8),
  new THREE.MeshStandardMaterial({
    map: moonmap,
    bumpMap: moonbump,
  })
);
callisto.position.y = -0.2;
scene.add(jupiter, jupiterOrbitRing, io, europa, ganymede, callisto);

const saturnmap = new THREE.TextureLoader().load("./src/saturnmap.jpg");
const saturnbump = new THREE.TextureLoader().load("./src/saturnbump.jpg");
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(0.7, 8, 8),
  new THREE.MeshStandardMaterial({
    map: saturnmap,
    bumpMap: saturnbump,
  })
);
const saturnOrbitRing = new THREE.Mesh(
  new THREE.TorusGeometry(17.5, 0.01, 16, 32),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);
saturnOrbitRing.rotation.x = 1.58;
const saturnringmap = new THREE.TextureLoader().load(
  "./src/saturnringcolor.jpg"
);
const saturnring = new THREE.Mesh(
  new THREE.RingGeometry(0.8, 1, 32),
  new THREE.MeshStandardMaterial({
    map: saturnringmap,
    side: THREE.DoubleSide,
  })
);
scene.add(saturn, saturnOrbitRing, saturnring);

const uranusmap = new THREE.TextureLoader().load("./src/uranusmap.jpg");
const uranusbump = new THREE.TextureLoader().load("./src/uranusbump.jpg");
const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(0.6, 8, 8),
  new THREE.MeshStandardMaterial({
    map: uranusmap,
    bumpMap: uranusbump,
  })
);
const uranusOrbitRing = new THREE.Mesh(
  new THREE.TorusGeometry(20, 0.01, 16, 32),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);
uranusOrbitRing.rotation.x = 1.58;
const uranusringmap = new THREE.TextureLoader().load(
  "./src/uranusringcolour.jpg"
);
const uranusring = new THREE.Mesh(
  new THREE.RingGeometry(0.65, 0.75, 32),
  new THREE.MeshStandardMaterial({
    map: uranusringmap,
    side: THREE.DoubleSide,
  })
);
scene.add(uranus, uranusOrbitRing, uranusring);

const neptunemap = new THREE.TextureLoader().load("./src/neptunemap.jpg");
const neptunebump = new THREE.TextureLoader().load("./src/neptunebump.jpg");
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 8, 8),
  new THREE.MeshStandardMaterial({
    map: neptunemap,
    bumpMap: neptunebump,
  })
);
const neptuneOrbitRing = new THREE.Mesh(
  new THREE.TorusGeometry(22.5, 0.01, 16, 32),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);
neptuneOrbitRing.rotation.x = 1.58;
scene.add(neptune, neptuneOrbitRing);

const plutomap = new THREE.TextureLoader().load("./src/plutomap1k.jpg");
const plutobump = new THREE.TextureLoader().load("./src/plutobump1k.jpg");
const pluto = new THREE.Mesh(
  new THREE.SphereGeometry(0.4, 8, 8),
  new THREE.MeshStandardMaterial({
    map: plutomap,
    bumpMap: plutobump,
  })
);
const plutoOrbitRing = new THREE.Mesh(
  new THREE.TorusGeometry(25, 0.01, 16, 32),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);
plutoOrbitRing.rotation.x = 1.58;
scene.add(pluto, plutoOrbitRing);

// const gridHelper = new THREE.GridHelper(1000, 10);
// scene.add(gridHelper);

// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
  const starLight = new THREE.PointLight(0xffffff);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(50));

  star.position.set(x, y, z);
  starLight.position.set(x, y, z);
  scene.add(star);
}
Array(500).fill().forEach(addStar);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.x = 30 * Math.cos(t * 0.001) + 0;
  camera.position.z = 30 * Math.sin(t * 0.001) + 0;
}

document.body.onscroll = moveCamera;

let t = 0;

function animate() {
  requestAnimationFrame(animate);

  t += 0.01;

  sun.rotation.x += 0.0001;
  sun.rotation.y += 0.001;

  mercury.rotation.x += 0.01;
  mercury.rotation.y += 0.02;
  mercury.position.z = 5 * Math.cos(t * 2.25) + 0;
  mercury.position.x = 5 * Math.sin(t * 2.25) + 0;

  venus.rotation.x += 0.01;
  venus.rotation.y += 0.02;
  venus.position.z = 7.5 * Math.cos(t * 2) + 0;
  venus.position.x = 7.5 * Math.sin(t * 2) + 0;

  earth.rotation.x += 0.01;
  earth.rotation.y += 0.02;
  earth.position.z = 10 * Math.cos(t * 1.75) + 0;
  earth.position.x = 10 * Math.sin(t * 1.75) + 0;
  // moonOrbitRing.rotation.x += 0.01;
  // moonOrbitRing.position.z = 10 * Math.cos(t * 1.75) + 0;
  // moonOrbitRing.position.x = 10 * Math.sin(t * 1.75) + 0;
  moon.rotation.x += 0.01;
  moon.rotation.y += 0.02;
  moon.position.z = 10 * Math.cos(t * 1.75) + 0.7;
  moon.position.x = 10 * Math.sin(t * 1.75) + 0.7;

  mars.rotation.x += 0.01;
  mars.rotation.y += 0.02;
  mars.position.z = 12.5 * Math.cos(t * 1.5) + 0;
  mars.position.x = 12.5 * Math.sin(t * 1.5) + 0;
  deimos.rotation.x += 0.01;
  deimos.rotation.y += 0.02;
  deimos.position.z = 12.5 * Math.cos(t * 1.5) + 0.7;
  deimos.position.x = 12.5 * Math.sin(t * 1.5) + 0.7;
  phobos.rotation.x += 0.01;
  phobos.rotation.y += 0.02;
  phobos.position.z = 12.5 * Math.cos(t * 1.5) + -0.7;
  phobos.position.x = 12.5 * Math.sin(t * 1.5) + -0.7;

  jupiter.rotation.x += 0.01;
  jupiter.rotation.y += 0.02;
  jupiter.position.z = 15 * Math.cos(t * 1.25) + 0;
  jupiter.position.x = 15 * Math.sin(t * 1.25) + 0;
  io.rotation.x += 0.01;
  io.rotation.y += 0.02;
  io.position.z = 15 * Math.cos(t * 1.25) + 0.9;
  io.position.x = 15 * Math.sin(t * 1.25) + 0.9;
  europa.rotation.x += 0.01;
  europa.rotation.y += 0.02;
  europa.position.z = 15 * Math.cos(t * 1.25) + -0.9;
  europa.position.x = 15 * Math.sin(t * 1.25) + 0.9;
  ganymede.rotation.x += 0.01;
  ganymede.rotation.y += 0.02;
  ganymede.position.z = 15 * Math.cos(t * 1.25) + 0.9;
  ganymede.position.x = 15 * Math.sin(t * 1.25) + -0.9;
  callisto.rotation.x += 0.01;
  callisto.rotation.y += 0.02;
  callisto.position.z = 15 * Math.cos(t * 1.25) + -0.9;
  callisto.position.x = 15 * Math.sin(t * 1.25) + -0.9;

  saturn.rotation.x += 0.01;
  saturn.rotation.y += 0.02;
  saturn.position.z = 17.5 * Math.cos(t * 1) + 0;
  saturn.position.x = 17.5 * Math.sin(t * 1) + 0;
  saturnring.rotation.x += 0.01;
  saturnring.position.z = 17.5 * Math.cos(t * 1) + 0;
  saturnring.position.x = 17.5 * Math.sin(t * 1) + 0;

  uranus.rotation.x += 0.01;
  uranus.rotation.y += 0.02;
  uranus.position.z = 20 * Math.cos(t * 0.75) + 0;
  uranus.position.x = 20 * Math.sin(t * 0.75) + 0;
  uranusring.rotation.x += 0.01;
  uranusring.rotation.y += 0.02;
  uranusring.position.z = 20 * Math.cos(t * 0.75) + 0;
  uranusring.position.x = 20 * Math.sin(t * 0.75) + 0;

  neptune.rotation.x += 0.01;
  neptune.rotation.y += 0.02;
  neptune.position.z = 22.5 * Math.cos(t * 0.5) + 0;
  neptune.position.x = 22.5 * Math.sin(t * 0.5) + 0;

  pluto.rotation.x += 0.01;
  pluto.rotation.y += 0.02;
  pluto.position.z = 25 * Math.cos(t * 0.25) + 0;
  pluto.position.x = 25 * Math.sin(t * 0.25) + 0;

  controls.update();

  renderer.render(scene, camera);
}

animate();
