<template>
    <div id="info-container">
        <h1 class="text--uppercase">UE MEGABOOM</h1>
        <h2 class="text--uppercase">{{dataMacAddr}}</h2>
    </div>
</template>

<script>
export default {
    name: 'SpeakerInfo',
    props: {
        dataMacAddr: String
    }
}
</script>

<style scoped>
#info-container h1 {
    font-size: 4.75em;
    letter-spacing: 0.75rem;
}

#info-container h2 {
    font-size: 1.75rem;
    font-weight: 200;
    letter-spacing: 0.5rem;
    opacity: 0.85;
}

.text--uppercase {
    text-transform: uppercase;
}
</style>