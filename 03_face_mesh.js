import {loadGLTF, loadTexture} from "./libs/loader.js";
const THREE = window.MINDAR.FACE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.FACE.MindARThree({
      container: document.body,
    });
    const {renderer, scene, camera} = mindarThree;

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

    const faceMesh = mindarThree.addFaceMesh();
    const texture = await loadTexture('./anonymous3.png');
    faceMesh.material.map = texture;
    faceMesh.material.transparent = true;
    faceMesh.material.needsUpdate = true;
    scene.add(faceMesh);

    document.querySelector("#switch").addEventListener("click", () => {
        mindarThree.switchCamera();
        console.log('camera');
    });

    await mindarThree.start();
    renderer.setAnimationLoop(() => {

    document.querySelector("#switch").addEventListener("click", () => {
        mindarThree.switchCamera();
        console.log('2 camera');
    });
      renderer.render(scene, camera);
    });

    
  }
  start();
});
