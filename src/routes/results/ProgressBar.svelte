<script>
  import { onMount } from 'svelte';

  let progress = 0;
  let text = "Loading responses from AI...";

  onMount(() => {
    const interval = 60; // seconds
    const steps = 100;
    const stepSize = (interval * 1000) / steps;

    const updateProgressBar = () => {
      progress += 1;
      if (progress <= 100) {
        setTimeout(updateProgressBar, stepSize);
      }
      else{
        text = "Loading complete. Please reload the page to view all responses."
      }
    };

    updateProgressBar();
  });
</script>

<!-- <div class="llm-container"> -->
  <p class="llm-text">{text}</p>
  <div class="llm-progress-bar">
    <div class="llm-progress" style={`width: ${progress}%`}></div>
  </div>
<!-- </div> -->

<style>
  /*.llm-container {
    padding: 40px;
  }*/

  .llm-text {
    margin-top: 50px;
    font-size:20px;
  }

  .llm-progress-bar {
    width: 100%;
    height: 20px;
    margin: 40px;
    background-color: #eee;
    border-radius: 4px;
    overflow: hidden;
  }

  .llm-progress {
    height: 20px;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }
</style>