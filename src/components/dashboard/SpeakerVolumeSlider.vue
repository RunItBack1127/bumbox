<template>
    <div id="volume-container">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0"  width="30" height="30" viewBox="0 0 75 75">
            <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
                style="stroke:#fff;stroke-width:5;stroke-linejoin:round;fill:#fff;"/>
            <path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style="fill:none;stroke:#fff;stroke-width:5;stroke-linecap:round"/>
        </svg>
        <input type="range" min="0" max="31" value="15">
    </div>
</template>

<script>
export default {
    name: 'SpeakerVolumeSlider'
}
</script>

<style scoped>
#volume-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
}

#volume-container input[type="range"] {
    appearance: none;
    -webkit-appearance: none;
    background: #fff;
    border-radius: 50px;
    width: 520px;
    height: 7.5px;
}

#volume-container input[type="range"]::-webkit-slider-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50px;
    background: #fff;
}
</style>