<template>
    <div id="controls-container">
        <button :disabled="!this.foundPowerCharacteristic" @click="togglePower" id="power-control-btn"></button>

        <button data-battery-level='75%' class="speaker-toggle-control" id="battery-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
            </svg>
        </button>

        <button class="speaker-toggle-control" id="bluetooth-toggle-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 976" stroke="#fff">
                <rect ry="291" height="976" width="640" stroke="none" fill="none"/>
                <path d="m157,330,305,307-147,178v-636l147,170-305,299" stroke="inherit" stroke-width="53" fill="none"/>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    name: 'SpeakerControls',
    data() {
        return {
            foundPowerCharacteristic: false,
            speakerOff: true
        }
    },
    methods: {
        init: function() {
            window.ipc.on('stored-power-characteristic', () => {
                this.foundPowerCharacteristic = true;
            });
        },
        togglePower: function() {
            console.log("Send turn on...");
            if(this.speakerOff) {
                console.log("Sending turn on...");
                window.ipc.send('turn-on-speaker');
            }
            else {
                window.ipc.send('turn-off-speaker');
            }
        }
    },
    mounted() {
        this.init();
    }
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

#power-control-btn {
    background-image: url("../../assets/power-off-icon.png");
    background-size: cover;
    background-position: center;
}

#speaker-content-container.speaker-off #power-control-btn {
    background-image: url("../../assets/power-on-icon.png");
}

/* #battery-btn:before {
    content: attr(data-battery-level);
    font-size: 1.25rem;
    letter-spacing: 0.25rem;
    position: absolute;
    margin-top: -45px;
    margin-left: -25px;
    padding: 10px;
    color: #fff;
    width: 75px;
    opacity: 0.0;
    transition: opacity 200ms ease-in-out;
}

#battery-btn:hover:before {
    opacity: 1.0;
} */

button:disabled {
    pointer-events: none;
    opacity: 0.5;
}
</style>