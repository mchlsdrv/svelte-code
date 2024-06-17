<script lang="ts">
    import {createEventDispatcher} from 'svelte'
    const dispatchEvent = createEventDispatcher();
    let agreed = false;
</script>

{#if !agreed}
    <ul>
        <li>
            <p style="font-size: 22px">
                By answering the following questions, you are participating in a study being led by a scientist in the 
                Weizmann Institute of Science Department of Computer Science and Applied Mathematics.
            </p>
        </li>

        <li><p style="font-size: 22px">If you have questions about this research, please contact Daniel Harari at <strong>hararid@weizmann.ac.il</strong>. 
            Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, 
            at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested your participation will not receive any personal 
            information about you.
        </p></li>
    </ul>

    <h3>
        I agree to the Consent statement:
        <input type="checkbox" bind:checked={agreed} />
    </h3>
{:else}
    {dispatchEvent('agreed')}
{/if}

