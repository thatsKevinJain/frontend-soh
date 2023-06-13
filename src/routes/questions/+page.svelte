<script>
    // @ts-nocheck
    import { enhance } from '$app/forms';
    export let data;
</script>

<div class="main">
    <form method="POST" action="/questions" use:enhance>
        <p>{data.index}. {data.game.questions[data.index-1].question}</p>
        {#each data.game.questions[data.index-1].options as o, j}
            <label>
                <!-- TODO: try to think of some unique "value" names to uniquely identify questions + answers -->
                <!-- TODO: Add "required flag" -->
                <input type={data.game.questions[data.index-1].type} name={data.game.questions[data.index-1].question} value={o.option} required/>
                {o.option}
            </label><br>
        {/each}

        <button class="submit-btn">Submit</button>
    </form>
</div>