<script>
// @ts-nocheck
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import Carousel from 'svelte-carousel'
    import { browser } from '$app/environment';

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
    let visible = false;
    let selectedOptions = []
    let ticks = [1,2,3,4]
    let backgroundColor = "#00cfff8a"
    let currentQuestion = data.game.question
    let completionPercent = (((data.index-1)/(data.game.length)) * 100)
    let oldCompletionPercent = (((data.index-2)/(data.game.length)) * 100)

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
    
    /* 
        Set the progress bar based on current index,
        we calculate the % of total questions completed and update the progress bar
        along with the active checkpoints [0, 25, 50, 75, 100] set by us
    */
    function updateProgressBar() {
        const progress = document.getElementById("progress");
        const stepCircles = document.querySelectorAll(".circle");
        stepCircles.forEach((circle, i) => {
            if (completionPercent >= percs[i]) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });
        progress.style.width = completionPercent + "%";
    }

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

        let size = currentQuestion.options ? currentQuestion.options.length : (currentQuestion.max-currentQuestion.min+1)

        var gridColumns = "grid-template-columns: 250px 250px"
        for(let i=0;i<size;i++){
            if(currentQuestion.options)
                gridColumns += " auto"
        }
        return gridColumns
    }

    /*
        Use the Golden Ratio and the HSV color system to generate a random background color for every question
    */
    const goldenRatioConjugate = 0.618033988749895;
    let h = Math.random(); // use random start value

    function getRandomColor() {
        h += goldenRatioConjugate;
        h %= 1;
        return hsvToRgb(h, 0.3, 0.99);
    }

    function hsvToRgb(h, s, v) {
        const h_i = Math.floor(h * 6);
        const f = h * 6 - h_i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);
        let r, g, b;

        if (h_i === 0) { r = v; g = t; b = p;} 
        else if (h_i === 1) { r = q; g = v; b = p;} 
        else if (h_i === 2) { r = p; g = v; b = t;} 
        else if (h_i === 3) { r = p; g = q; b = v;} 
        else if (h_i === 4) { r = t; g = p; b = v;} 
        else if (h_i === 5) { r = v; g = p; b = q;}

        return "rgb(" + Math.floor(r * 256) +","+ Math.floor(g * 256) +","+ Math.floor(b * 256) + ")";
    }

    /*
        This function will go back to the previous page in the history and make follow the browser rules
    */
    function goBack(){
        history.back();
        return false;
    }

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
        
        backgroundColor = getRandomColor();
        updateProgressBar();
        visible = true;
        getTicks();
    })

</script>

<div class="main">
    <a href="/"><img src="favicon.png" alt="Science of Happiness" style="width: 120px; height: 120px;"></a>
</div>

<!-- CLOUDS animation background -->
<section style={"background: " + backgroundColor}>
    <div class='air air1'></div>
    <div class='air air2'></div>
    <div class='air air3'></div>
    <div class='air air4'></div>
</section>

<!-- CAROUSEL based on categories -->
{#if browser && currentQuestion.images}
    <div class="carousel">
       <Carousel
            autoplay
            autoplayDuration    = {1000}
            duration            = {2000}
            dots                = {false}
            arrows              = {false}
            swiping             = {false}
            particlesToShow     = {8}
            particlesToScroll   = {1}
            timingFunction      = "linear">

            {#each currentQuestion.images as i}
                <img src={i} class="carousel-image" alt=""/>
            {/each}
        </Carousel>
    </div>
{/if}

<!-- PROGRESS BAR -->
<div class="container">
    <div class="progress-container">
    <div class="progress" id="progress" style={"width:" + oldCompletionPercent + "%"}> </div>
        {#each percs as perc}
            <div class="circle">{perc.toString()+"%"}</div>
        {/each}
    </div>
</div>

<!-- QUESTIONS -->
{#if visible}
    <div class="main" in:fly={{x:100}} out:fly={{x:-100}}>

        <!-- 
            Load ONE question at a time indicated by "index", the UI will populate as per the questions requirements

            When the user presses "SUBMIT", we store the selections made by the user in "+page.server.js"

            Power of "dynamic-page-loading-with-recursion"
        -->
        <form method="POST" action="/questions?i={parseInt(data.index)+1}">

            <!-- HACK: we will add a form input that allows us to pass current "index" value to the server -->
            <!-- <input name="index" value={index} hidden/> -->

            <!-- 
                Questions with "TEXT" format
            -->
            {#if currentQuestion.format === "text"}

                <!-- Populate options for a "SINGLE" question -->
                {#if !currentQuestion.multiple}

                    <!-- TODO: Populate a SLIDER -->
                    

                    <!-- Options for a RADIO/CHECKBOX -->
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

                            <!-- Display available options OR range of numbers -->
                            {#if currentQuestion.options}
                                {#each currentQuestion.options as o, j}
                                    <div class="multiple-option">{o.option}</div>
                                {/each}
                            {:else}
                                {#each {length: (currentQuestion.max-currentQuestion.min+1)} as _, i}
                                    {#if i === currentQuestion.max}
                                        <div class="multiple-option">{(i)+"+"}</div>
                                    {:else}
                                        <div class="multiple-option">{i}</div>
                                    {/if}
                                {/each}
                            {/if}

                            {#each currentQuestion.questions as question, i}
                                <div class="multiple-question">{question.q}</div>

                                    <!-- Populate options for a SLIDER with a RANGE -->
                                    {#if currentQuestion.type === "range"}
                                        
                                        <div class="slidecontainer" style={"grid-column-end: " + parseInt(currentQuestion.max-currentQuestion.min+4) + ";"}>
                                            <input  type  = "range"
                                                    class = "slider"
                                                    list  = "ticks"
                                                    min   = {currentQuestion.min}
                                                    max   = {currentQuestion.max}
                                                    value = {currentQuestion.min}
                                                    step  = {currentQuestion.step}
                                                    name  = {currentQuestion.id + "-" + parseInt(i+1)}/>
                                        </div>

                                        <!-- Add TICKS to the slider -->
                                        <datalist id="ticks">
                                            {#each ticks as t}
                                                <option value={t} label={t}/>
                                            {/each}
                                        </datalist>

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
                        HACK: I couldn't think of a better way to call function "getRandomizedArray()" specifically for a question with images,
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

            <div class="button">
                {#if data.index > 1}
                    <a class="prev-btn" href="/questions?i={parseInt(data.index)-1}" on:click={goBack}>←</a>
                {/if}
                <button type="submit" class="submit-btn">
                    {(data.index<data.game.length)?"Next →":"Submit"}
                </button>
            </div>
        </form>
    </div>
{/if}

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
        --radio-border-width: 1.5px;
        --radio-size: 1.8em;
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
        padding-left: 20px;
        padding-right: 20px;
        font-size: 20px;
        display: grid;
        justify-content: center;
        margin-bottom: 20px;
        font-weight: 500;
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
        width: 300px;
        height: 300px;
    }

    .carousel-image {
        width: 200px;
        height: 200px;
        padding: 0px 8px 8px 0px;   
    }

    .blank-text {
        color: rgba(0, 0, 0, 0);
    }

    .slidecontainer {
        width: 100%;
        display: grid;
        grid-column-start: 3;
        align-items: center;
    }

    .slider {
        height: 15px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    .carousel {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        opacity: 0.5;
        z-index: -1;
    }

    .prev-btn {
        width: 50px;
        height: 46px;
        background: white;
        border-radius: 100px;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 8px;
        margin-right: 8px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        display: inline-block;
        text-align: center;
        padding: 10px;
        text-decoration: none;
    }

    .button {
        position: relative;
        bottom: 0;
        left: 40%;
        margin-bottom: 40px;
    }

</style>