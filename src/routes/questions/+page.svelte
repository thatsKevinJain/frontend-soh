<script>
// @ts-nocheck
    import { onMount } from 'svelte';
    import { Slider } from "fluent-svelte";

    /*
        DATA: this is initialized automatically by load() function in "+page.server.js"
        It has all the data points to successfully load all elements in the page
    */
    export let data;

    /* 
        Progress of the game will be divided into 4 quarters
    */
    const percs = [0, 25, 50, 75, 100]

    /* Variables to store page specific data */
    let selectedOptions = []
    let value = 1
    let ticks = [1,2,3,4]
    let currentQuestion = data.game.questions[data.index-1]
    let oldCompletionPercent = (((data.index-2)/(data.game.questions.length)) * 100)
    let completionPercent = (((data.index-1)/(data.game.questions.length)) * 100)

    /* 
        Function called when components have finished mounting on the DOM,
        this will allow us to animate certain elements like progress-bar after the page is loaded
    */
    onMount(() => {

        /* 
            Get the index from URL,
            this is an important step, load() function isn't called when user presses "BACK" on their browsers
            It allows us to update the "index" to it's correct value. Saves us from many unforseen BUGS :)
        */
        data.index = document.URL.split("?i=")[1];

        /* 
            Set the progress bar based on current index,
            we calculate the % of total questions completed and update the progress bar
            along with the active checkpoints [0, 25, 50, 75, 100] set by us
        */
        const progress = document.getElementById("progress");
        const stepCircles = document.querySelectorAll(".circle");

        function update() {
            stepCircles.forEach((circle, i) => {
                if (completionPercent >= percs[i]) {
                    circle.classList.add("active");
                } else {
                    circle.classList.remove("active");
                }
            });
            progress.style.width = completionPercent + "%";
        }
        update();

        /* 
            CSS: Get the number of ticks required to be placed on the range slider
            TICKS = number of steps in a given range
        */
        function getTicks(){
            ticks = []
            for(var i=currentQuestion.min; i<=currentQuestion.max; i+=currentQuestion.step){
                ticks = [...ticks, i];
            }
        }
        getTicks();
    })

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

    /* CSS: setting to dynamically style multiple-questions with radio buttons */
    function getGridColumns(){

        let size = currentQuestion.options ? currentQuestion.options.length : currentQuestion.max

        var gridColumns = "grid-template-columns: 250px 250px"
        for(let i=0;i<size;i++){
            if(currentQuestion.options)
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
    <div class="progress" id="progress" style={"width:" + oldCompletionPercent + "%"}> </div>
    {#each percs as perc, i}
        <div class="circle">{perc.toString()+"%"}</div>
    {/each}
  </div>
</div>

<!-- QUESTIONS -->
<div class="main">

    <!-- 
        Load ONE question at a time indicated by "data.index", the UI will populate as per the questions requirements

        When the user presses "SUBMIT", we store the selections made by the user in "+page.server.js"
        and call the same page with "?i=data.index+1"

        Power of "dynamic-page-loading-with-recursion"
    -->
    <form method="POST" action="/questions?i={parseInt(data.index)+1}">

        <!-- 
            Questions with "TEXT" format
        -->
        {#if currentQuestion.format === "text"}

            <!-- Populate options for a "SINGLE" question -->
            {#if !currentQuestion.multiple}
                <div>
                    <p class="question">{data.index}. {currentQuestion.question}</p>
                    <div class="option-single">
                        {#each currentQuestion.options as o, j}
                            <label class="option-label">
                                <input  type     = {currentQuestion.type}
                                        name     = {currentQuestion.id}
                                        value    = {o.id}
                                        required = {currentQuestion.required ? true : null}
                                        class    = "checkbox"/>
                                <p class="option-text">{o.option}</p>
                            </label><br>
                        {/each}
                    </div>
                </div>
            {/if}

            <!-- Populate options for MULTIPLE questions -->
            {#if currentQuestion.multiple}
                <div>
                    <p class="question">{data.index}. {currentQuestion.title}</p>
                    
                    <!-- 
                        CSS: Based on the number of options, fetch a dynamic grid for this question
                    -->
                    <div class="multiple-container" style={getGridColumns()}>
                        
                        <!-- HACK: added a blank space to place questions with their radio buttons -->
                        <div class="space"></div>

                        {#if currentQuestion.options}
                            {#each currentQuestion.options as o, j}
                                <div class="multiple-option">{o.option}</div>
                            {/each}
                        {:else}
                            {#each {length: currentQuestion.max} as _, i}
                                <div class="multiple-option">{i+1}</div>
                            {/each}
                        {/if}

                        {#each currentQuestion.questions as question, i}
                            <div class="multiple-question">{question.q}</div>

                                <!-- Populate options for a SLIDER -->
                                {#if currentQuestion.type === "slider"}
                                    
                                    <div class="slider" style={"grid-column-end: " + parseInt(currentQuestion.max+3) + ";"}>
                                        <Slider
                                            min={currentQuestion.min}
                                            max={currentQuestion.max}
                                            step={currentQuestion.step}
                                            ticks={ticks}>

                                            <svelte:fragment slot="tooltip" let:value>
                                                {#if currentQuestion.options}
                                                    {currentQuestion.options[value-1].option}
                                                {:else}
                                                    {value}
                                                {/if}
                                            </svelte:fragment>
                                        </Slider>
                                    </div>

                                <!-- Populate options for RADIO/CHECKBOX -->
                                {:else}
                                    {#each currentQuestion.options as o, j}
                                        <div class="multiple-option">
                                            <label>
                                                <input  type     = {currentQuestion.type}
                                                        value    = {parseInt(j+1)}
                                                        name     = {currentQuestion.id + "-" + parseInt(i+1)}
                                                        required = {currentQuestion.required ? true : null}
                                                        class    = "checkbox"/>
                                            </label><br>
                                        </div>
                                    {/each}
                                {/if}
                        {/each}
                    </div>
                </div>
            {/if}
        {/if}

        <!-- 
            Questions with "IMAGES" format
        -->
        {#if currentQuestion.format === "image"}
            <div>
                <p class="question">{data.index}. {currentQuestion.question}</p>

                <!-- 
                    Fetch the randomized images array,
                    HACK: I couldn't think of a better way to call function "getRandomizedArray()" specifically with a question with images,
                    so I did it inside a <p> tag with {} braces and then used fancy CSS to hide it.
                    It works and I'm proud of it :D
                -->
                <p class="blank-text">{getRandomizedArray(currentQuestion.options)}</p>

                <div class="image-container">
                    {#each randomizedArray as o, j}
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="image-block">
                            <img src={o.url} class="image" alt={o.label}/>
                            <p class="image-label">{o.label}</p>

                            <!-- 
                                "required", "bind:group" and "disabled" allow us to force the user to select images EXACTLY equal to "maxSelections"
                            -->
                            <input  type       = "checkbox"
                                    value      = {o.id}
                                    name       = {currentQuestion.id}
                                    required   = {currentQuestion.required ? true : null}
                                    bind:group = {selectedOptions}
                                    disabled   = {selectedOptions.length === currentQuestion.maxSelections && !selectedOptions.includes(o.id)}
                                    class      = "checkbox"/>
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

    .option-label {
        padding: 10px;
        background: var(--m-3-sys-light-surface-container-low, #F7F2FA);

        /* M3/Elevation Light/1 */
        box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);

        background-color: #fff;
        border-radius: var(--card-radius);
        position: relative;
    }

    .option-label:hover .checkbox {
        border-color: var(--color-dark-gray);
    }

    .option-text {
        text-align: center;
        font-size: 18px;
        margin-left: 24px;
    }

    .option-single {
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

    .checkbox {
        margin: 0;
        position: absolute;
    }

    .checkbox:checked {
      border-color: var(--color-green);
    }

    .checkbox:disabled {
        border-color: var(--color-gray);
    }

    @supports(-webkit-appearance: none) or (-moz-appearance: none) { 
        .checkbox {
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

        .checkbox:after {
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

        .checkbox:checked {
            background: var(--color-green);
            border-color: var(--color-green);
        }
    }

    .multiple-container {
        display: grid;
        gap: 10px;
        padding: 10px;
    }

    .space {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    .multiple-question {
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

    .multiple-option {
        text-align: center;
        padding: 12px;
    }

    .image-container {
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

    .image-label {
        padding: 4px;
    }

    .image {
        width: 200px;
        height: 200px;
    }

    .blank-text {
        color: rgba(0, 0, 0, 0);
    }

    .slider {
        display: grid;
        grid-column-start: 3;
    }
</style>