<script>
// @ts-nocheck

	import { each } from 'svelte/internal';
    import { onMount } from 'svelte';

    // @ts-nocheck
    // import { enhance } from '$app/forms';
    export let data;

    onMount(() => {
        const progress = document.getElementById("progress");
        const stepCircles = document.querySelectorAll(".circle");
        let currentActive = data.index-1;

        update(data.index);

        function update(currentActive) {
            stepCircles.forEach((circle, i) => {
                if (i < currentActive) {
                    circle.classList.add("active");
                } else {
                    circle.classList.remove("active");
                }
            });

            const activeCircles = document.querySelectorAll(".active");
            progress.style.width = ((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + "%";
        }
    })

    function getClass(i){
        if(i <= data.index-1){
            return "circle active"
        }
        return "circle"
    }
</script>

<section>
  <div class='air air1'></div>
  <div class='air air2'></div>
  <div class='air air3'></div>
  <div class='air air4'></div>
</section>

<div class="container">
  <div class="progress-container">
    <div class="progress" id="progress" style={"width:" + (((data.index-2)/(data.game.questions.length-1)) * 100) + "%"}> </div>
    {#each {length: data.game.questions.length} as _, i}
        <div class={getClass(i)}>{i+1}</div>
    {/each}
  </div>
</div>

<div class="main">
    <form method="POST" action="/questions?i={parseInt(data.index)+1}">

        <!-- Populate options for a SINGLE question -->
        {#if data.game.questions[data.index-1]?.question}
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
        {#if data.game.questions[data.index-1]?.questions}

            <div>
                <p class="question">{data.index}. {data.game.questions[data.index-1].title}</p>
        
                <div class="block-container">
                    <div class="space"></div>
                    {#each data.game.questions[data.index-1].options as o, j}
                        <div class="a">{o.option}</div>
                    {/each}

                    {#each data.game.questions[data.index-1]?.questions as question, i}
                        <div class="q">{question}</div>
                            {#each data.game.questions[data.index-1].options as o, j}
                                <div class="a">
                                    <label class="option-multiple">
                                        <input  type     = {data.game.questions[data.index-1].type}
                                                value    = {parseInt(j+1)}
                                                name     = {data.game.questions[data.index-1].id + "-" + parseInt(i+1)}
                                                required = {data.game.questions[data.index-1].required ? true : null}/>
                                    </label><br>
                                </div>
                            {/each}
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
        text-align: center;
        font-size: 18px;
        margin-left: 20px;
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

    .radio {
        margin: 0;
        position: absolute;
    }

    @supports(-webkit-appearance: none) or (-moz-appearance: none) { 
        .radio {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: #fff;
            border: var(--radio-border-width) solid var(--color-gray);
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
  
    .option:hover .radio {
        border-color: var(--color-dark-gray);
    }

    .radio:checked {
      border-color: var(--color-green);
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

    .block-container {
        display: grid;
        gap: 10px;
        padding: 10px;
        grid-template-columns: auto auto auto auto auto auto auto;
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

</style>