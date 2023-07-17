<script>
    // @ts-nocheck
    // import { enhance } from '$app/forms';
    export let data;

    // const progress = document.getElementById("progress");
    // const stepCircles = document.querySelectorAll(".circle");
    // let currentActive = 1;

    // update(3);

    // function update(currentActive) {
    //     stepCircles.forEach((circle, i) => {
    //         if (i < currentActive) {
    //             circle.classList.add("active");
    //         } else {
    //             circle.classList.remove("active");
    //         }
    //     });

    //     const activeCircles = document.querySelectorAll(".active");
    //     progress.style.width = ((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + "%";
    // }
</script>

<section>
  <div class='air air1'></div>
  <div class='air air2'></div>
  <div class='air air3'></div>
  <div class='air air4'></div>
</section>

<div class="container">
  <div class="progress-container">
    <div class="progress" id="progress"> </div>
    <div class="circle">25%</div>
    <div class="circle active">50%</div>
    <div class="circle">75%</div>
    <div class="circle">100%</div>
  </div>
</div>

<div class="main">
    <form method="POST" action="/questions?i={parseInt(data.index)+1}">

        <!-- Populate options for a SINGLE question -->
        {#if data.game.questions[data.index-1]?.question}
            <div class="block-single">
                <p class="question-single">{data.index}. {data.game.questions[data.index-1].question}</p>
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
            <div class="block-multiple">
                <p class="question-single">{data.index}. {data.game.questions[data.index-1].title}</p>
                {#each data.game.questions[data.index-1]?.questions as question, i}
                    <p class="question-multiple">{question}</p>
                    <div class="options-multiple">
                        {#each data.game.questions[data.index-1].options as o, j}
                            <label class="option-multiple">
                                <input  type     = {data.game.questions[data.index-1].type}
                                        value    = {parseInt(j+1)}
                                        name     = {data.game.questions[data.index-1].id + "-" + parseInt(i+1)}
                                        required = {data.game.questions[data.index-1].required ? true : null}/>
                            </label><br>
                        {/each}
                    </div>
                {/each}
            </div>
        {/if}

        <button class="submit">Submit</button>
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
        border-radius: 16px;
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

    .question-single {
        font-size: 20px;
        display: grid;
        justify-content: center;
        margin-bottom: 50px;
    }

    .submit {
        width: 99px;
        height: 50px;
        background: #6750A4;
        border-radius: 100px;
        margin: 20px;
        color: white;
    }

    .options-multiple {
        display: block ruby;
    }

    .question-multiple {
        margin-top: 40px;
        font-size: 20px;
        display: grid;
    }

</style>