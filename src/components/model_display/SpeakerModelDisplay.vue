<template>
    <div id="model-container"></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
    name: 'SpeakerModelDisplay',
    data() {
        return {
            speakerModel: null
        };
    },
    methods: {
        init: function() {
            this.scene = new THREE.Scene();
            this.scene.background = new THREE.Color( 0x000000 );

            this.light = new THREE.AmbientLight( 0xfffffff, 1.0 );
            this.scene.add(this.light);

            // Change position to wherever Solidworks places
            // the light for the speaker model

            this.camera = new THREE.PerspectiveCamera(45,
                window.innerWidth / window.innerHeight, 0.1, 1000);
            this.camera.position.set(-0.02540621871857456, 0.017868458351830627, -0.3374866452825374);

            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize(window.innerWidth, window.innerHeight);

            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            // controls.enableDamping = true;

            //const coords = document.getElementById("coords");

            window.addEventListener("DOMContentLoaded", () => {
                document.querySelector("#model-container").appendChild(this.renderer.domElement);
                // coords.textContent = `x: ${camera.position.x},
                //     y: ${camera.position.y}, z: ${camera.position.z}`;
            });

            this.speakerLoader = new GLTFLoader();

            this.speakerLoader.load("../src/assets/models/UE_MEGABOOM.glb", (speaker) => {
                const speakerModel = speaker.scene;

                const speakerBoundingBox = new THREE.Box3().setFromObject(speakerModel);
                speakerBoundingBox.getCenter(speakerModel.position);
                speakerModel.localToWorld(speakerBoundingBox);
                speakerModel.position.multiplyScalar(-1);

                speakerModel.translateX(0.2);
                speakerModel.rotation.y += 0.35;
                speakerModel.rotation.x -= 0.30;

                this.scene.add(speakerModel);
                console.log("Added to canvas");

                this.speakerModel = speaker.scene;
            });

            window.addEventListener("resize", () => {
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                this.renderer.render(this.scene, this.camera);
            });
        },
        animate: function() {
            requestAnimationFrame(this.animate);
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
        }
    },
    mounted() {
        this.init();
        this.animate();
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