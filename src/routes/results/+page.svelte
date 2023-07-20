<script>
// @ts-nocheck

	import { each } from 'svelte/internal';
    import { onMount } from 'svelte';

    export let data;

    onMount(() => {
        const score = document.getElementById("score");
        score.style.width = Math.floor(data.results.effective_score*100/data.results.max_score) + "%";
    })

</script>

<div class="main">

    <p class="score-text">Your score is: <b>{data.results.effective_score}</b></p>

    <div class="score-container">
        <div class="score" id="score"/>
    </div>
</div>


<style>
    :root {
        --line-border-fill: #3498db;
        --line-border-empty: #e0e0e0;
    }

    .score-text {
        font-size: 24px;
    }

    .score-container::before {
      content: "";
      background: var(--line-border-empty);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 18px;
      width: 100%;
      z-index: -1;
    }

    .score-container {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin: 30px;
      max-width: 100%;
      width: 350px;
    }

    .score {
      background: var(--line-border-fill);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 18px;
      width: 0%;
      z-index: -1;
      transition: 0.4s ease;
    }
</style>

