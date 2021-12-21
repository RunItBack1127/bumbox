<template>
    <div id="model-container"></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
    name: 'SpeakerModelDisplay',
    methods: {
        init: function() {
            const scene = new THREE.Scene();
            scene.background = new THREE.Color( 0x000000 );
            // scene.add(new THREE.AxesHelper(5));

            const light = new THREE.AmbientLight( 0xfffffff, 1.0 );
            scene.add(light);

            // Change position to wherever Solidworks places
            // the light for the speaker model

            const camera = new THREE.PerspectiveCamera(45,
                window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(-0.02540621871857456, 0.017868458351830627, -0.3374866452825374);

            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);

            const controls = new OrbitControls(camera, renderer.domElement);
            // controls.enableDamping = true;

            //const coords = document.getElementById("coords");

            window.addEventListener("DOMContentLoaded", () => {
                document.querySelector("#model-container").appendChild(renderer.domElement);
                // coords.textContent = `x: ${camera.position.x},
                //     y: ${camera.position.y}, z: ${camera.position.z}`;
            });

            const gltfLoader = new GLTFLoader();
            let speakerModel;

            gltfLoader.load("../src/assets/models/UE_MEGABOOM.glb", (speaker) => {
                speakerModel = speaker.scene;
                // speakerModel.rotation.set(0, 0, 1, "XYZ");

                var box = new THREE.Box3().setFromObject(speakerModel);
                box.getCenter(speakerModel.position);
                speakerModel.localToWorld(box);
                speakerModel.position.multiplyScalar(-1);

                speakerModel.translateX(0.2);
                speakerModel.rotation.y += 0.35;
                speakerModel.rotation.x -= 0.30;

                scene.add(speakerModel);
                console.log("Added to canvas");

                // controls.addEventListener("change", () => {
                //     console.log(camera.up);
                //     //coords.textContent = coordStr;
                // });
            });

            window.addEventListener("resize", () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.render(scene, camera);
            });

            function animate() {
                requestAnimationFrame(animate);
                controls.update();
                renderer.render(scene, camera);
            }
            animate();
        }
    },
    animate: function() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    },
    mounted() {
        this.init();
        // this.animate();
    }
}
</script>

<style scoped>
#model-container {
    width: 100%;
    height: 100%;
}

#model-container canvas {
    width: 100%;
    height: 100%;
}
</style>