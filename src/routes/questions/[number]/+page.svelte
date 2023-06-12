<script>
// @ts-nocheck

    export let data;
</script>

<div class="main">

    <form method="POST" action="/questions/{parseInt(data.index)+1}?/next">
    
        <p>{data.index}. {data.data.question}</p>
        {#each data.data.options as o, j}
            <label>
                <!-- TODO: try to think of some unique "value" names to uniquely identify questions + answers -->
                <!-- TODO: Add "required flag" -->
                <input type={data.data.type} name={data.data.question} value={o.option}/>
                {o.option}
            </label><br>
        {/each}

    <button class="submit-btn">Submit</button>
    </form>
</div>