<script>
// @ts-nocheck
	export let data;
</script>

<section>
  <div class='air air1'></div>
  <div class='air air2'></div>
  <div class='air air3'></div>
  <div class='air air4'></div>
</section>

<div class="main">
	<h1>Hello {data.email.split("@")[0]}!</h1>

	<form method="POST" action="?/submit">
	{#each data.demographic.questions as q, i}
		<p>{i+1}. {q.question}</p>
			{#each q.options as o, j}
				<label>
					<!-- TODO: try to think of some unique "value" names to uniquely identify questions + answers -->
					<!-- TODO: Add "required flag" -->
					<input type={q.type} name={q.id} value={o.id} required={q.required ? true : null}/>
					{o.option}
				</label><br>
			{/each}
	{/each}

	<button class="submit-btn">Submit</button>
	</form>
</div>