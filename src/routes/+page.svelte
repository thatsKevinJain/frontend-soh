<script>
    import { fly } from 'svelte/transition';
    import * as Threlte from '@threlte/core'
    import { onMount } from 'svelte';
    import Beach from './Beach.svelte';

    let visible = false;
    export let data;
    let email = data.email ? data.email : "";
    let name = data.name ? data.name : "";

    onMount(() => {
      visible = true;
      document.getElementsByTagName("html")[0].style.height = "100%";
    });
</script>

<div class="scene">
    <Threlte.Canvas>
        <!-- Camera -->
        <Threlte.PerspectiveCamera position={{ x: 40, y: 40, z: 40 }} fov={50}>
          <!-- Controls -->
            <Threlte.OrbitControls autoRotate autoRotateSpeed={0.25}/>
        </Threlte.PerspectiveCamera>

        <!-- Lights the scene equally -->
        <Threlte.AmbientLight color="white" intensity={0.5} />

        <!-- Light that casts a shadow -->
        <Threlte.DirectionalLight
            color="white"
            intensity={1}
            position={{ x: 10, y: 10 }}
            shadow={{
                camera: { top: 10 },
            }}
        />
        <Beach />
    </Threlte.Canvas>
</div>

{#if visible}
    <div class="main-wrapper">
        <div class="main-container">
          <a href="/"><img src="favicon.png" alt="Science of Happiness" style="width: 120px; height: 120px;"></a>
          <h1 in:fly={{ y: 100, duration: 1000 }}>Science of Happiness</h1>
          <!-- <h3 in:fly={{ y: 200, duration: 2000 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint </h3> -->

          <form method="POST" action="/demographic?/create" in:fly={{ y: 200, duration: 3000 }}>
              <label>
                  <p>Enter your name:</p>
                  <input name="name" class="input" bind:value={name} type="text" required/>
              </label>
              
              <label>
                  <p>Enter your UGA email:</p>
                  <input name="email" class="input" bind:value={email} type="email" required/>    
              </label>
              <button class="submit-btn"><img src="arrow.svg" alt="submit"></button>
          </form>
      </div>
    </div>
{/if}

<style>

    .main-wrapper {
        min-height: 100%;
        min-width: 100%;
        display: flex;
        /* change flex-direction from column to row will work */
        flex-direction: column;
        background-image: linear-gradient(#f000, #0f0f0d);
        background-attachment: fixed;
        background-size: cover;
    }

    .main-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-top: 50px;
    }

    .scene {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: radial-gradient(hsl(182.8, 100%, 50%), hsl(218.4, 81.1%, 24.9%));
        background-attachment: fixed;
        z-index: -1;
    }

    h1 {
        font-weight: 500;
        font-size: 80px;
        line-height: 48px;
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 80px;
        margin-top: 40px;
    }

    /* Wrap the text */
    h3 {
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 80%;
        text-align: justify;
        margin-bottom: 40px;
    }

    p {
        color: white;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin: 10px 0px 4px 0px;
    }

    .input {
        font-weight: 500;
        font-size: 24px;
        line-height: 48px;
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: #b7b7b7;
        padding-left: 8px;
        padding-right: 8px;
        border-radius: 10px;
        opacity: 0.8;
    }
</style>