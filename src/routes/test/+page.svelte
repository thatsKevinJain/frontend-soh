<script>
  import { onMount } from 'svelte';

  let progress = 0;

  onMount(() => {
    const interval = 30; // seconds
    const updateInterval = 100; // milliseconds
    const steps = 100;
    const stepSize = (interval * 1000) / steps;

    const updateProgressBar = () => {
      progress += 1;
      if (progress <= 100) {
        setTimeout(updateProgressBar, stepSize);
      }
    };

    updateProgressBar();
  });
</script>

<main>
  <div class="progress-bar">
    <div class="progress" style={`width: ${progress}%`}></div>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  .progress-bar {
    width: 100%;
    height: 20px;
    background-color: #eee;
    border-radius: 4px;
    overflow: hidden;
  }

  .progress {
    height: 100%;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }
</style>


<!-- <script>
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    let visible = false;
    let email = "";
    let name = "";

    onMount(() => {
      visible = true;
    });
</script> -->

<!-- <div class="main">
    <a href="/"><img src="favicon.png" alt="Science of Happiness" style="width: 120px; height: 120px;"></a>
</div> -->

<!-- {#if visible}
    <div class="main-wrapper">
        <div class="main-container">
          <a href="/"><img src="favicon.png" alt="Science of Happiness" style="width: 120px; height: 120px;"></a>
          <h1 in:fly={{ y: 90, duration: 1000 }}>Science of Happiness</h1>
          <h3 in:fly={{ y: 100, duration: 2000 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint </h3>

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
 -->
<!-- <img src="happiness2.jpg" alt="hello" class="background"/> -->

<!-- <style>

    .main-wrapper {
        min-height: 100%;
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
    /* center all elements and stack them like a list with a fixed width between each other */
    /*    .background {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }*/

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
</style> -->