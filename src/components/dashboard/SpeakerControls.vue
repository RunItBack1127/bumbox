<template>
    <div id="controls-container">
        <button id="power-control-btn"></button>

        <button id="battery-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
            </svg>
        </button>

        <button id="bluetooth-toggle-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 976" stroke="#fff">
                <rect ry="291" height="976" width="640" stroke="none" fill="none"/>
                <path d="m157,330,305,307-147,178v-636l147,170-305,299" stroke="inherit" stroke-width="53" fill="none"/>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    name: 'SpeakerControls.vue'
}
</script>

<style scoped>
#controls-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 37.5%;
    margin-bottom: 100px;
}

#controls-container button {
    width: 45px;
    height: 45px;
}

#controls-container button svg {
    width: 100%;
    height: 100%;
    fill: #fff;
}

#bluetooth-toggle-btn svg {
    stroke: #287aa9;
}

#controls-container.speaker-off #battery-btn,
#controls-container.speaker-off #bluetooth-toggle-btn {
    opacity: 0.5;
    pointer-events: none;
}

#power-control-btn {
    background-image: url("../../assets/power-off-icon.png");
    background-size: cover;
    background-position: center;
}

#controls-container.speaker-off #power-control-btn {
    background-image: url("../../assets/power-on-icon.png");
}
</style>