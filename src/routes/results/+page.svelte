<script>
// @ts-nocheck
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

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
        }, 10)

        const score = document.getElementById("score-progress");
        score.style.width = Math.floor(data.results.effective_score*100/data.results.max_score) + "%";
    })

</script>

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

    <div class="score-progress-container">
        <div class="score-progress" id="score-progress"/>
    </div>

    {#if visible}
        <div class="suggestion-block">
            {#each Object.keys(data.suggestions) as key, i}
                {#if data.suggestions[key]}
                    <p class="suggestion" in:fly={{y:30*(i+1)}}>{data.suggestions[key]}</p>
                {/if}
            {/each}
        </div>
    {/if}
</div>

<style>
    :root {
        --line-border-fill: #2d9676;
        --line-border-empty: #e0e0e0;
        --card-line-height: 1.2em;
        --card-padding: 1em;
        --card-radius: 2em;
        --color-green: #558309;
        --color-gray: #e2ebf6;
        --color-dark-gray: #c4d1e1;
        --radio-border-width: 2px;
        --radio-size: 1.5em;
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

    .score-progress-container::before {
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
    }

    .suggestion-block{
        padding: 10px;
        margin: 10px;
    }

    .suggestion {
        font-size: large;
        background: var(--m-3-sys-light-surface-container-low, #F7F2FA);

        /* M3/Elevation Light/1 */
        box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);

        background-color: #fff;
        border-radius: var(--card-radius);
        padding: 20px;
        margin: 20px;
        text-align: center;
    }
</style>

