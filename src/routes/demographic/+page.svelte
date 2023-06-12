<script>
// @ts-nocheck
	export let data;
</script>

<div class="main">
	<h1>Hello {data.email.split("@")[0]}, there are {data.demographic.questions.length} demographic questions!</h1>

	<form method="POST" action="?/submit">
	{#each data.demographic.questions as q, i}
		<p>{i+1}. {q.question}</p>
			{#each q.options as o, j}
				<label>
					<!-- TODO: try to think of some unique "value" names to uniquely identify questions + answers -->
					<input type={q.type} name={q.question} value={o.option} required/>
					{o.option}
				</label><br>
			{/each}
	{/each}

	<button class="submit-btn">Submit</button>
	</form>
</div>

<style type="text/css">

    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        font-family: 'sans-serif';
        font-style: normal;
    }
    .submit-btn {
        width: 99px;
        height: 50px;
        background: #6750A4;
        border-radius: 100px;
        color: white;
        margin-top: 10px;
    }
</style>