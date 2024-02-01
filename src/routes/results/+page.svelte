<script>
// @ts-nocheck
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import Typewriter from 'svelte-typewriter'

    export let data;
    let counter = 0;
    let visible = false;
    let feedbackVisible = false;

    /* 
        Randomize images in a given question
    */
    let randomizedArray = []
    function getRandomizedArray(arr){
        randomizedArray = []
        for(;;)
        {
            var random = Math.floor(Math.random() * arr.length)
            if(randomizedArray.length < arr.length){
                if(randomizedArray.indexOf(random) === -1){
                    randomizedArray.push(random)
                }
            }
            else{
                break;
            }
        }
        for(var i=0; i<randomizedArray.length; i++){
            randomizedArray[i] = arr[randomizedArray[i]]
        }
        return 0
    }

    onMount(() => {

        visible = true;

        setInterval(() => {
            if(counter < data.score.results.effective_score-100)
                counter+=100;
            if(counter > data.score.results.effective_score-100 && counter < data.score.results.effective_score)
                counter++;
        }, 25)
    })

    function done(){
        feedbackVisible = true;
    }

</script>

{#if visible}
    <div class="emojis">
        <img in:fly={{x:100}} src=emoji-excellent.svg alt="excellent">
        <img in:fly={{x:200}} src=emoji-good.svg alt="good">
        <img in:fly={{x:300}} src=emoji-ok.svg alt="ok">
        <img in:fly={{x:400}} src=emoji-bad.svg alt="bad">
        <img in:fly={{x:500}} src=emoji-terrible.svg alt="terrible">
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
    <!-- <p class="score-text">Thank you for your submission!</p> -->
    <p class="score-text">Hey <b>{data.name.split(" ")[0]}</b>, your score is:</p>
    <p class="score"><b>{counter}</b> / {data.score.results.max_score}</p>
    {#if data.score.oldResults}
        <p class="score-text">Your previous score was: <b>{data.score.oldResults.effective_score}</b> / {data.score.oldResults.max_score}</p>
    {/if}
    <p class="score-text">Here's some feedback based on your answers:</p>

    {#if visible}
    <!-- <Typewriter interval={["30"]} on:done={done} keepCursorOnFinish={3000}> -->
        <div class="suggestion-block">
                {#if data.score.llmResponse}
                    <div class="suggestion" in:fly={{y:300}}>
                        {#each data.score.llmResponse.split("\\n") as res}
                            {res}
                            <br>
                        {/each}
                    </div>
                    
                    <div class="suggestion" in:fly={{y:300}}>
                        For the question with images:
                        {data.score.images_feedback}
                    </div>
                    <div class="suggestion" in:fly={{y:300}}>
                        {data.score.feedback}
                    </div>
                {:else}
                    <div class="suggestion" in:fly={{y:300}}>
                        For the question with images:
                        {data.score.images_feedback}
                    </div>
                    <div class="suggestion" in:fly={{y:300}}>
                        {data.score.feedback}
                    </div>
                {/if}
        </div>
    <!-- </Typewriter> -->
    {/if}

    <!-- {#if feedbackVisible} -->
        <p class="blank-text">{getRandomizedArray(data.results.feedback)}</p>
        <div class="image-container" in:fly={{y:300}}>
            {#each randomizedArray as o, j}
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <div class="image-block">
                    <img src={o.url} class="image" alt={o.text}/>
                    <p class="image-label">{o.text}</p>
                </div>
            {/each}
        </div>
    <!-- {/if} -->
</div>


<style>

    .image-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        column-gap: 20px;
        row-gap: 8px;
    }

    .image-block {
        background: #F7F2FA;

        /* M3/Elevation Light/1 */
        box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
        background-color: #fff;
        text-align: center;
        border-radius: 1.0em;
        margin: 10px;
        position: relative;
        color: white;
    }

    .image-label {
        background-image: linear-gradient(#f000, #0f0f0d);
        position: absolute;
        bottom: 8px;
        padding: 4px;
        width: 100%;
        border-radius: 1.0em;
    }

    .image {
        width: 250px;
        height: 250px;
        border-radius: 1.0em;
    }

    .main {
        margin: 20px;
    }

    .emojis {
        margin: 20px;
        margin-top: 40px;
        max-width: 100%;
    }

    .emojis img{
        width: 120px;
        height: 120px;
        margin: 8px;
    }

    .score-text {
        font-size: 18px;
        padding: 8px;
    }

    .score {
        font-size: 50px;
        padding: 8px;
/*        font-weight: 500;*/
    }

    .suggestion-block{
        padding: 0px 10px 10px 10px;
        margin: 0px 0px 10px 0px;
        width: 1300px;
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

    .blank-text {
        color: rgba(0, 0, 0, 0);
    }

</style>

