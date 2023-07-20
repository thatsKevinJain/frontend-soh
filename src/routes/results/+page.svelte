<script>
// @ts-nocheck

	import { each } from 'svelte/internal';
    import { onMount } from 'svelte';

    export let data;

    onMount(() => {})

</script>

<h1>Results</h1>

<p> Score: {data.results.effective_score} </p>