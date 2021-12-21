<template>
    <section>
        <SpeakerInfo data-mac-addr='88:C6:26:8C:DA:34'/>
        <SpeakerControls/>
        <SpeakerVolumeSlider/>
    </section>
</template>

<script>
import SpeakerInfo from './SpeakerInfo.vue';
import SpeakerControls from './SpeakerControls.vue';
import SpeakerVolumeSlider from './SpeakerVolumeSlider.vue';

export default {
    name: 'DashboardControls',
    components: {
        SpeakerInfo,
        SpeakerControls,
        SpeakerVolumeSlider
    }
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    height: 350px;
}
</style>