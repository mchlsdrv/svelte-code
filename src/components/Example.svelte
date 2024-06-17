<script lang="ts">
    import ImageCarousel from "./ImageCarousel.svelte";
    import {createEventDispatcher} from "svelte"
    const dispatchEvent = createEventDispatcher();
    const imageDir = `https://raw.githubusercontent.com/lieldvd/mturk/main/15545`;

</script>
<ImageCarousel imageDir={imageDir} startIndex={0} endIndex={49}/>

<button on:click={()=>dispatchEvent("startTraining")}>Continue</button>