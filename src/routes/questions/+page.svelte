<script>
// @ts-nocheck
    import { onMount } from 'svelte';

    export let data;
    let selectedOptions = []

    onMount(() => {

        // Get the index from URL //
        data.index = document.URL.split("?i=")[1];

        // Set the progress bar based on index //
        const progress = document.getElementById("progress");
        const stepCircles = document.querySelectorAll(".circle");

        update(data.index);

        function update(index) {
            console.log("NUM", (((index-1)/data.game.questions.length)*100))
            stepCircles.forEach((circle, i) => {
                if ((((index-1)/data.game.questions.length)*100) >= percs[i]) {
                    circle.classList.add("active");
                } else {
                    circle.classList.remove("active");
                }
            });

            // const activeCircles = document.querySelectorAll(".active");
            progress.style.width = (((data.index-1)/(data.game.questions.length)) * 100) + "%";
        }
    })

    let percs = [0, 25, 50, 75, 100]
    // function getClass(perc){
    //     if(data.index-1 <= perc){
    //         return "circle active"
    //     }
    //     return "circle"
    // }

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

    function getGridColumns(size){
        var gridColumns = "grid-template-columns: auto auto"
        for(let i=0;i<size;i++){
            gridColumns += " auto"
        }
        return gridColumns
    }
</script>


<!-- CLOUDS animation background -->
<section>
  <div class='air air1'></div>
  <div class='air air2'></div>
  <div class='air air3'></div>
  <div class='air air4'></div>
</section>

<!-- PROGRESS BAR -->
<div class="container">
  <div class="progress-container">
    <div class="progress" id="progress" style={"width:" + (((data.index-2)/(data.game.questions.length)) * 100) + "%"}> </div>
    {#each percs as perc, i}
        <div class="circle">{perc.toString()+"%"}</div>
    {/each}
  </div>
</div>

<!-- QUESTIONS -->
<div class="main">
    <form method="POST" action="/questions?i={parseInt(data.index)+1}">

        <!-- Popluate questions with TEXT -->
        {#if data.game.questions[data.index-1]?.format === "text"}

            <!-- Populate options for a SINGLE question -->
            {#if !data.game.questions[data.index-1]?.multiple}
                <div>
                    <p class="question">{data.index}. {data.game.questions[data.index-1].question}</p>
                    <div class="options-single">
                        {#each data.game.questions[data.index-1].options as o, j}
                            <label class="option">
                                <input  type     = {data.game.questions[data.index-1].type}
                                        name     = {data.game.questions[data.index-1].id}
                                        value    = {o.id}
                                        required = {data.game.questions[data.index-1].required ? true : null}
                                        class    = "radio"/>
                                <p class="option-label">{o.option}</p>
                            </label><br>
                        {/each}
                    </div>
                </div>
            {/if}

            <!-- Populate options for MULTIPLE questions -->
            {#if data.game.questions[data.index-1]?.multiple}
                <div>
                    <p class="question">{data.index}. {data.game.questions[data.index-1].title}</p>
            
                    <div class="block-container" style={getGridColumns(data.game.questions[data.index-1]?.questions.length)}>
                        <div class="space"></div>
                        {#each data.game.questions[data.index-1].options as o, j}
                            <div class="a">{o.option}</div>
                        {/each}

                        {#each data.game.questions[data.index-1]?.questions as question, i}
                            <div class="q">{question.q}</div>
                                {#each data.game.questions[data.index-1].options as o, j}
                                    <div class="a">
                                        <label class="option-multiple">
                                            <input  type     = {data.game.questions[data.index-1].type}
                                                    value    = {parseInt(j+1)}
                                                    name     = {data.game.questions[data.index-1].id + "-" + parseInt(i+1)}
                                                    required = {data.game.questions[data.index-1].required ? true : null}
                                                    class    = "radio"/>
                                        </label><br>
                                    </div>
                                {/each}
                        {/each}
                    </div>
                </div>
            {/if}
        {/if}

        <!-- Populate options for questions with IMAGES -->
        {#if data.game.questions[data.index-1]?.format === "image"}
            <!-- TODO: add randomized images with correct ID's associated with them -->
            <div>
                <p class="question">{data.index}. {data.game.questions[data.index-1].question}</p>

                <!-- Fetch the randomized images array; hide it too -->
                <p class="blank-text">{getRandomizedArray(data.game.questions[data.index-1].options)}</p>
                <div class="images-container">

                    {#each randomizedArray as o, j}
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="image-block">
                            <img src={o.url} class="image" alt={o.label}/>
                            <p class="label">{o.label}</p>
                            <input  type       = "checkbox"
                                    value      = {o.id}
                                    name       = {data.game.questions[data.index-1].id}
                                    required   = {data.game.questions[data.index-1].required ? true : null}
                                    bind:group = {selectedOptions}
                                    disabled   = {selectedOptions.length === data.game.questions[data.index-1].maxSelections && !selectedOptions.includes(o.id)}
                                    class      = "radio"/>
                        </label>
                    {/each}
                </div>
            </div>
        {/if}

        <button class="submit-btn">Submit</button>
    </form>
</div>

<style>

    form {
        width: 60%;
        display: contents;
    }

    :root {
      --card-line-height: 1.2em;
      --card-padding: 1em;
      --card-radius: 0.5em;
      --color-green: #558309;
      --color-gray: #e2ebf6;
      --color-dark-gray: #c4d1e1;
      --radio-border-width: 2px;
      --radio-size: 1.5em;
    }

    .option {
        padding: 10px;
        background: var(--m-3-sys-light-surface-container-low, #F7F2FA);

        /* M3/Elevation Light/1 */
        box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);

        background-color: #fff;
        border-radius: var(--card-radius);
        position: relative;
    }

    .option:hover .radio {
        border-color: var(--color-dark-gray);
    }

    .option-label {
        text-align: center;
        font-size: 18px;
        margin-left: 24px;
    }

    .options-single {
        display: grid;
        grid-gap: var(--card-padding);
        margin: 0 auto;
        max-width: 40em;
        padding: 0;
    }

    .question {
        font-size: 20px;
        display: grid;
        justify-content: center;
        margin-bottom: 20px;
    }

    .radio {
        margin: 0;
        position: absolute;
    }

    .radio:checked {
      border-color: var(--color-green);
    }

    @supports(-webkit-appearance: none) or (-moz-appearance: none) { 
        .radio {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: #fff;
            border: var(--radio-border-width) solid black;
            border-radius: 50%;
            cursor: pointer;
            height: var(--radio-size);
            outline: none;
            transition: 
            background 0.2s ease-out,
            border-color 0.2s ease-out;
            width: var(--radio-size); 
        }

        .radio:after {
            border: var(--radio-border-width) solid #fff;
            border-top: 0;
            border-left: 0;
            content: '';
            display: block;
            height: 0.75rem;
            left: 25%;
            position: absolute;
            top: 50%;
            transform: 
            rotate(45deg)
            translate(-50%, -50%);
            width: 0.375rem;
        }

        .radio:checked {
            background: var(--color-green);
            border-color: var(--color-green);
        }
    }

    .block-container {
        display: grid;
        gap: 10px;
        padding: 10px;
    }

    .space {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    .q {
        grid-column-start: 1;
        grid-column-end: 3;
        background: var(--m-3-sys-light-surface-container-low, #F7F2FA);

        /* M3/Elevation Light/1 */
        box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);

        background-color: #fff;
        border-radius: var(--card-radius);
        padding: 10px;
        text-align: center;
    }

    .a {
        text-align: center;
        padding: 12px;
    }

    .images-container {
        display: grid;
        margin: 10px;
        grid-template-columns: auto auto auto auto;
    }

    .image-block {
        background: var(--m-3-sys-light-surface-container-low, #F7F2FA);

        /* M3/Elevation Light/1 */
        box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);

        background-color: #fff;
        border-radius: var(--card-radius);
        padding: 10px;
        text-align: center;
        margin: 10px;
    }

    .label {
        padding: 4px;
    }

    .radio:disabled {
        border-color: var(--color-gray);
    }

    .image {
        width: 200px;
        height: 200px;
    }

    .blank-text {
        color: rgba(0, 0, 0, 0);
    }
</style>