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

    setInterval(() => {
        if(!videoPaused){
            nextImage();
        }
    }, 50);

    async function playImages(){
        const nextBtn = document.getElementById("next")
        for(let i = 0; i < 50; i++){
            videoPaused = true;
            if (nextBtn != null){
                nextBtn.click();
            }
        }

    }
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
</main>