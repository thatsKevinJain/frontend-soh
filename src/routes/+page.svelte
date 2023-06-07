<script>
	import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';
	let visible = false;
    let email = "kevin@uga.edu";

    onMount(() => {
		visible = true;
	});
</script>

<div class="main">
    {#if visible}
        <h1 transition:fly={{ y: 30, duration: 1000 }}>Science of Happiness</h1>
        <div>
            <input transition:fly={{ y: 80, duration: 1000 }} value={email} type="email"/>
        </div>
    {/if}
</div>

<img src="happiness1.jpg" alt="hello" class="background"/>

<style>
    /* center all elements and stack them like a list with a fixed width between each other */
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        position: relative;
        font-family: 'Georgia';
        font-style: normal;
    }

    .background {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    h1 {
        font-weight: 500;
        font-size: 80px;
        line-height: 48px;
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    input {
        font-weight: 500;
        font-size: 24px;
        line-height: 48px;
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: #b0b0b0;
        text-align: center;
        border: 0.5px solid #ffffff;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 10px;
        margin-top: 20px;
        opacity: 0.8;
    }

</style>