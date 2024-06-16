<script lang="ts">
    import {createEventDispatcher} from 'svelte'
    import {shuffle} from "lodash";
    import Debugger from './Debugger.svelte';
    const dispatchEvent = createEventDispatcher();
    let allImages = [];
    let imgs = [
        {
            id: 'img1',
            url: "https://raw.githubusercontent.com/lieldvd/video_list/main/123900_26.jpg",
        },
        {
            id: 'img2',
            url: "https://raw.githubusercontent.com/lieldvd/video_list/main/59771_25.jpg",
        },
        {
            id: 'img3',
            url: "https://raw.githubusercontent.com/lieldvd/video_list/main/123900_43.jpg",
        },
        {
            id: 'img4',
            url: "https://raw.githubusercontent.com/lieldvd/video_list/main/173363_24.jpg",
        },
        {
            id: 'img5',
            url: "https://raw.githubusercontent.com/lieldvd/video_list/main/173363_40.jpg",
        },
        {
            id: 'img6',
            url: "https://raw.githubusercontent.com/lieldvd/video_list/main/72298_25.jpg",
        },
        {
            id: 'img7',
            url: "https://raw.githubusercontent.com/lieldvd/video_list/main/72298_55.jpg",
        },
        {
            id: 'img8',
            url: "https://raw.githubusercontent.com/lieldvd/video_list/main/86454_0.jpg",
        },
        {
            id: 'img9',
            url: "https://raw.githubusercontent.com/lieldvd/video_list/main/86454_9.jpg",
        },
    ];
    imgs = shuffle(imgs);

    const correctImages = ["img1", "img2", "img4", "img7", "img8"];
    let checkedImages: any = [];
    let notRobot = false;
    function checkIfRobot(event: any){
        // notRobot = true
        notRobot = checkedImages.length == correctImages.length && checkedImages.every(function (element) {return correctImages.includes(element)});
    }

</script>

<h2>I'm not a robot challenge:</h2>
<div>
    Please complete the following challenge to assert you are human.
    In the following images choose the onse that describe a touch...
</div>
<!-- <Debugger obj={checkedImages} state={notRobot} /> -->
<div id="image-grid">
    <div id="image-container">
        {#each imgs as img, index (img.url)}
            <img src={img.url} alt={img.id} width='200' height='150'/>
            <input type="checkbox" id={img.id} value={img.id} bind:group={checkedImages}>
            {#if (index+1) % 3 == 0}
                <br/>
            {/if}
        {/each}
    </div>
</div>

<button on:click={checkIfRobot}>Submit</button>

{#if notRobot}
    {dispatchEvent('notRobot')}
{/if}
