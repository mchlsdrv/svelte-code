<script lang="ts">
    import { slide } from "svelte/transition";
    export let imageDir: string;
    export let startIndex = 0;
    export let endIndex = 0;
    let images = new Array(
        endIndex - startIndex).fill(0).map((_, i) => 
        imageDir + "/frame_" + (i + startIndex) + ".jpg"
    );
    let currentItem = 0;
    let currentSlideItem = 0;
    let videoPaused = false;
    console.log({videoPaused})

    const nextImage = () => {
        currentSlideItem = (currentSlideItem + 1) % images.length;
    }

    const prevImage = () => {
        if (currentSlideItem != 0){
            currentSlideItem = (currentSlideItem - 1) % images.length;
        } else {
            currentSlideItem = images.length - 1;
        }
    }
    
    const play = () => {
        if (videoPaused){
            videoPaused = false;
        }
    }
    
    const pause = () => {
        if (!videoPaused){
            videoPaused = true;
        }
    }

    function triggerClick(element: any){
        var clickEvent = new Event('click');
        element.dispatchEvent(clickEvent);
    }

    async function playImages(){
        const nextBtn = document.getElementById("next")
        for(let i = 0; i < 50; i++){
            videoPaused = true;
            nextBtn?.click();
        }

    }
    // let counter = 0;
    // while (counter < 5) {
    //     console.log(counter);
    //     counter ++;
    // }

</script>
<main>
    {#each [images[currentSlideItem]] as image, index}
        <img transition:slide="{{delay:200}}" src={image} alt='Blank' width="1080"/>
    {/each}
    <div class="carousel-buttons">
        <button id="play" on:click={() => play()}>&#9199</button>
        <button id="pause" on:click={() => pause()}>&#9208</button>
        <button id="prev" on:click={() => prevImage()}>&#9194</button>
        <button id="next" on:click={() => nextImage()}>&#9193</button>
    </div>
        
    <script>
        prevBtn = document.getElementById("prev")
        playBtn = document.getElementById("play")
        pauseBtn = document.getElementById("pause")
        nextBtn = document.getElementById("next")
        async function playImages(){
            const nextBtn = document.getElementById("next")
            for(let i = 0; i < 50; i++){
                videoPaused = true;
                nextBtn?.click();
        }
        let counter = 0;
        while (counter < 5) {
            console.log(counter);
            counter ++;
        }
        for(let i = 0; i < 50; i++){
            videoPaused = true;
            nextBtn.click();
        }

    </script>
</main>