<script>
    // @ts-nocheck
    // import { enhance } from '$app/forms';
    export let data;
</script>

<div class="main">
    <form method="POST" action="/questions?i={parseInt(data.index)+1}">

        <!-- Populate options for a SINGLE question -->
        {#if data.game.questions[data.index-1]?.question}
            <p>{data.index}. {data.game.questions[data.index-1].question}</p>
            {#each data.game.questions[data.index-1].options as o, j}
                <label>
                    <!-- TODO: try to think of some unique "value" names to uniquely identify questions + answers -->
                    <!-- TODO: Add "required flag" -->
                    <input  type={data.game.questions[data.index-1].type}
                            name={data.game.questions[data.index-1].id}
                            value={o.id}
                            required={data.game.questions[data.index-1].required ? true : null}/>
                    {o.option}
                </label><br>
            {/each}     
        {/if}

        <!-- Populate options for MULTIPLE questions -->
        {#if data.game.questions[data.index-1]?.questions}
            <p>{data.index}. </p>
            {#each data.game.questions[data.index-1]?.questions as question, i}
                <p>{question}</p>
                {#each data.game.questions[data.index-1].options as o, j}
                    <label>
                        <!-- TODO: try to think of some unique "value" names to uniquely identify questions + answers -->
                        <!-- TODO: Add "required flag" -->
                        <input  type={data.game.questions[data.index-1].type}
                                value={parseInt(j+1)}
                                name={data.game.questions[data.index-1].id + "-" + parseInt(i+1)}
                                required={data.game.questions[data.index-1].required ? true : null}/>
                        {o.option}
                    </label><br>
                {/each} 
            {/each}
        {/if}

        <button class="submit-btn">Submit</button>
    </form>
</div>