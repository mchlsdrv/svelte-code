<script lang="ts">
    import {createEventDispatcher} from "svelte";
    const dispatchEvent = createEventDispatcher();

</script>


<button on:click={()=>dispatchEvent("taskComplete")}>Next</button>