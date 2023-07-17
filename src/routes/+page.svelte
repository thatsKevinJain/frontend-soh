<script>
	import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';
	let visible = false;
    let email = "kevin@uga.edu";

    onMount(() => {
		visible = true;
	});
</script>

{#if visible}
    <div class="main" in:fly={{ y: 30, duration: 1000 }}>
        <h1>Science of Happiness</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint </h3>
        <form method="POST" action="/demographic?/create">
            <input name="email" class="email-input" bind:value={email} type="email" required/>
            <button class="submit-btn"><img src="arrow.svg" alt="submit"></button>
        </form>
    </div>
{/if}

<img src="happiness2.jpg" alt="hello" class="background"/>

<style>
    /* center all elements and stack them like a list with a fixed width between each other */
    .background {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    h1 {
        font-weight: 500;
        font-size: 80px;
        line-height: 48px;
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 80px;
    }

    /* Wrap the text */
    h3 {
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 80%;
        text-align: center;
        margin-bottom: 40px;
    }

    .email-input {
        font-weight: 500;
        font-size: 24px;
        line-height: 48px;
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: #b7b7b7;
        text-align: center;
        border-radius: 10px;
        opacity: 0.8;
    }
</style>