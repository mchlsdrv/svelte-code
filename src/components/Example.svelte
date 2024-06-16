<script lang="ts">
    import ImageCarousel from "./ImageCarousel.svelte";
    const imageDir = `https://raw.githubusercontent.com/lieldvd/mturk/main/15545`;

</script>
<ImageCarousel imageDir={imageDir} startIndex={0} endIndex={49}/>
<style>
    #action-bar {
        display: none;
    }
    #video-container {
        width: 640px;
        height: 360px;
        overflow: hidden;
        position: relative;
    }
    #video {
        width: 100%;
    }
    #progress-container {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 10px;
    }
    #progress-bar-container {
        flex-grow: 1;
    }
    #progress-bar{
        display: none;
    }
    #video-slider {
        width: 100%;
        top: 0;
        height: 100%;
        margin: 0;
    }
    .action-bar {
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        flex-direction: row-reverse;
        gap: 10px;
    }
    .select-window {
        background-color: whitesmoke;
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 5px;
        position: absolute;
        top: 40px;
        right: 10px;
        display: none;
    }


</style>
