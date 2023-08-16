<script>
// @ts-nocheck
	export let data;
</script>

<div class="main">
	<a href="/"><img src="favicon.png" alt="Science of Happiness" style="width: 120px; height: 120px;"></a>
</div>

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
		<p class="question">{i+1}. {q.question}</p>
			<div class="options-single">
				{#each q.options as o, j}
						<label class="option">
							<!-- TODO: try to think of some unique "value" names to uniquely identify questions + answers -->
							<!-- TODO: Add "required flag" -->
							<input 	type     = {q.type} 
											name     = {q.id} 
											value    = {o.id} 
											required = {q.required ? true : null}
											class    = "radio"/>
							{o.option}
						</label><br>
				{/each}
			</div>
	{/each}

	<button class="submit-btn">Submit</button>
	</form>
</div>


<style>
	
	.question {
		font-size: 20px;
		margin-top: 24px;
	}

	.options-single {
		margin-top: 8px;
		font-size: 18px;
	}

</style>