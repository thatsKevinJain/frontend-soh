<script>
    // @ts-nocheck
    // import { enhance } from '$app/forms';
    export let data;
</script>

<section>
  <div class='air air1'></div>
  <div class='air air2'></div>
  <div class='air air3'></div>
  <div class='air air4'></div>
</section>

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
                                    required = {data.game.questions[data.index-1].required ? true : null}/>
                            {o.option}
                        </label><br>
                    {/each}
                </div>
            </div>
        {/if}

        <!-- Populate options for MULTIPLE questions -->
        {#if data.game.questions[data.index-1]?.questions}
            <div class="block-multiple">
                <p>{data.index}. </p>
                {#each data.game.questions[data.index-1]?.questions as question, i}
                    <p class="question-multiple">{question}</p>
                    <div class="options-multiple">
                        {#each data.game.questions[data.index-1].options as o, j}
                            <label class="option">
                                <input  type     = {data.game.questions[data.index-1].type}
                                        value    = {parseInt(j+1)}
                                        name     = {data.game.questions[data.index-1].id + "-" + parseInt(i+1)}
                                        required = {data.game.questions[data.index-1].required ? true : null}/>
                                {o.option}
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

    .option {
        padding: 10px;
        font-size: 18px;
    }

    .options-single {
        display: grid;
        justify-content: center;
    }

    .question-single {
        font-size: 20px;
        display: grid;
        justify-content: center;
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