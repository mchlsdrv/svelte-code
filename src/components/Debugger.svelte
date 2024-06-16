<script>
    export let obj
    export let state
</script>

<div>
    State: {state}
<br>
    Object: 
    <pre>
        {JSON.stringify(obj, null, 2)}
    </pre>
</div>