<script>
// @ts-nocheck
    import { onMount } from 'svelte';

    export let data;
    let counter = 0;

    onMount(() => {
        const score = document.getElementById("score-progress");
        score.style.width = Math.floor(data.results.effective_score*100/data.results.max_score) + "%";

        setInterval(() => {
            if(counter < data.results.effective_score-100)
                counter+=100;
            if(counter > data.results.effective_score-100 && counter < data.results.effective_score)
                counter++;
        }, 10)
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
    <p class="score-text"><b>{counter}</b></p>

    <div class="score-progress-container">
        <div class="score-progress" id="score-progress"/>
    </div>
</div>

<style>
    :root {
        --line-border-fill: #2d9676;
        --line-border-empty: #e0e0e0;
    }

    .score-text {
        font-size: 24px;
        padding: 8px;
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
      transition: 1.5s ease;
    }
</style>

