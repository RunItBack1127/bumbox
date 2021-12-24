<template>
    <section>
        <h1 id="speaker-display-name">UE MEGABOOM</h1>
        <SpeakerControls :class="{'speaker-off': speakerOff}"/>
        <SpeakerVolumeSlider :class="{'speaker-off': speakerOff}"/>
    </section>
</template>

<script>
import SpeakerControls from './SpeakerControls.vue';
import SpeakerVolumeSlider from './SpeakerVolumeSlider.vue';

export default {
    name: 'DashboardControls',
    components: {
        SpeakerControls,
        SpeakerVolumeSlider
    },
    props: {
        speakerOff: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 75%;
}

section h1 {
    font-size: 4.75em;
    letter-spacing: 0.75rem;
    text-transform: uppercase;
    margin-bottom: 35px;
}
</style>