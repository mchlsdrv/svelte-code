<script lang="ts">
    import {createEventDispatcher} from "svelte"
    const dispatchEvent = createEventDispatcher();
    let trainingSamplesLeft = 5;

</script>

{#each Array(trainingSamplesLeft) as _, t}
    <li>{t}</li>
{/each}

<button on:click={()=>dispatchEvent("startTasks")}>Start</button>