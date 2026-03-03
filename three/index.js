import * as THREE from "three";

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Torus knot — the classic Three.js eye candy
let geometry = new THREE.TorusKnotGeometry(1, 0.35, 128, 32);
let material = new THREE.MeshStandardMaterial({ color: 0x6c63ff, metalness: 0.5, roughness: 0.3 });
let knot = new THREE.Mesh(geometry, material);
scene.add(knot);

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.4));
let light = new THREE.PointLight(0xffffff, 1.5);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 4;

(function animate () {
	requestAnimationFrame(animate);
	knot.rotation.x += 0.01;
	knot.rotation.y += 0.015;
	renderer.render(scene, camera);
})();

addEventListener("resize", () => {
	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(innerWidth, innerHeight);
});
