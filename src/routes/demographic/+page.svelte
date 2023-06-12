<script>
// @ts-nocheck
	export let data;
</script>

<div class="main">
	<h1>Hello {data.email.split("@")[0]}, there are {data.demographic.questions.length} demographic questions!</h1>

	<form method="POST" action="/questions?/submit">
	{#each data.demographic.questions as q, i}
		<p>{i+1}. {q.question}</p>
			{#each q.options as o, j}
				<label>
					<!-- TODO: try to think of some unique "value" names to uniquely identify questions + answers -->
					<!-- TODO: Add "required flag" -->
					<input type={q.type} name={q.question} value={o.option}/>
					{o.option}
				</label><br>
			{/each}
	{/each}

	<button class="submit-btn">Submit</button>
	</form>
</div>