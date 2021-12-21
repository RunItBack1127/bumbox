<template>
    <div id="controls-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <rect fill="#fff" x="46.574" y="15.865" width="5.669" height="35.33"/>
            <path fill="#fff" d="M49.408,83.895c-17.974,0-32.596-14.623-32.596-32.598c0-10.55,5.159-20.498,13.801-26.61l3.273,4.629 c-7.142,5.051-11.406,13.269-11.406,21.981c0,14.849,12.08,26.928,26.927,26.928c14.847,0,26.926-12.079,26.926-26.928 c0-8.712-4.263-16.929-11.404-21.98l3.273-4.629c8.642,6.113,13.801,16.06,13.801,26.609C82.004,69.271,67.382,83.895,49.408,83.895 z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-battery-half" viewBox="0 0 16 16">
            <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 976">
            <rect ry="291" height="976" width="640" fill="transparent"/>
            <path d="m157,330,305,307-147,178v-636l147,170-305,299" stroke="#FFF" stroke-width="53" fill="none"/>
        </svg>
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
}

#controls-container svg {
    width: 45px;
    height: 45px;
    fill: #fff;
}
</style>