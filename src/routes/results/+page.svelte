<script>
// @ts-nocheck
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import Typewriter from 'svelte-typewriter'
    import { concurrent } from 'svelte-typewriter'

    export let data;
    let counter = 0;
    let visible = false;

    onMount(() => {

        visible = true;

        setInterval(() => {
            if(counter < data.results.effective_score-100)
                counter+=100;
            if(counter > data.results.effective_score-100 && counter < data.results.effective_score)
                counter++;
        }, 25)

        // const score = document.getElementById("score-progress");
        // score.style.width = Math.floor(data.results.effective_score*100/data.results.max_score) + "%";
    })

    function done(){
        console.log("YOLO")
    }

</script>

{#if visible}
    <div class="emojis">
        <img in:fly={{x:100}} src=emoji-excellent.svg alt="excellent" style="width: 120px; height: 120px;">
        <img in:fly={{x:200}} src=emoji-good.svg alt="good" style="width: 120px; height: 120px;">
        <img in:fly={{x:300}} src=emoji-ok.svg alt="ok" style="width: 120px; height: 120px;">
        <img in:fly={{x:400}} src=emoji-bad.svg alt="bad" style="width: 120px; height: 120px;">
        <img in:fly={{x:500}} src=emoji-terrible.svg alt="terrible" style="width: 120px; height: 120px;">
    </div>
{/if}

<!-- CLOUDS animation background -->
<section>
  <div class='air air1'></div>
  <div class='air air2'></div>
  <div class='air air3'></div>
  <div class='air air4'></div>
</section>


<div class="main">
    <p class="score-text">Your score is:</p>
    <p class="score"><b>{counter}</b></p>

    <!-- <div class="score-progress-container">
        <div class="score-progress" id="score-progress"/>
    </div> -->

    {#if visible}
        <Typewriter interval=15 on:done={done}>
            <div class="suggestion-block">
                <p class="suggestion" in:fly={{y:300}}>{data.feedback}</p>
            </div>
        </Typewriter>
    {/if}
</div>


<style>

    .main {
        margin: 20px;
    }

    .emojis {
        margin: 20px;
        margin-top: 40px;
    }

    .emojis img{
        margin: 8px;
    }

    .score-text {
        font-size: 18px;
        padding: 8px;
    }

    .score {
        font-size: 30px;
        padding: 8px;
        font-weight: 500;
    }

    .suggestion-block{
        padding: 10px;
        margin: 10px;
        width: 1000px;
    }

    .suggestion {
        font-size: large;
        background: var(--m-3-sys-light-surface-container-low, #F7F2FA);

        /* M3/Elevation Light/1 */
        box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);

        background-color: #fff;
        border-radius: 1em;
        padding: 20px;
        margin: 20px;
        text-align: left;
    }

/*    .score-progress-container::before {
      content: "";
      background: var(--line-border-empty);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      border-radius: 10px;
      height: 18px;
      width: 100%;
      z-index: -1;
    }

    .score-progress-container {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin: 30px;
      max-width: 100%;
      border-radius: 10px;
      width: 350px;
    }

    .score-progress {
      background: var(--line-border-fill);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      border-radius: 10px;
      height: 18px;
      width: 0%;
      z-index: -1;
      transition: 2s ease;
    }*/

</style>

