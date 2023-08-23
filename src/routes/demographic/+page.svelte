<script>
// @ts-nocheck
	export let data;
	let selectedOptions = [];

	function validateCheckbox(event) {
		if (selectedOptions.length === 0) {
			event.preventDefault();
			alert('Please select at least one option for question number 2');
		}
	}
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
	<h2>Hello {data.name.split(" ")[0]}!</h2>
	<p>We would like to get some demographic information about you: </p>

	<form method="POST" action="?/submit" on:submit={validateCheckbox}>
	{#each data.demographic.questions as q, i}
		<p class="question">{i+1}. {q.question}</p>
			<div class="options-single">
				{#each q.options as o, j}
						<label class="option">
							<!-- TODO: try to think of some unique "value" names to uniquely identify questions + answers -->
							<!-- TODO: Add "required flag" -->
							{#if q.type === "checkbox"}
								<input 	type       = "checkbox" 
										name       = {q.id} 
										value      = {o.id} 
										required   = {q.required ? true : null}
										class      = "checkbox"
										bind:group = {selectedOptions} />
							{:else}
								<input 	type       = "radio" 
										name       = {q.id} 
										value      = {o.id} 
										required   = {q.required ? true : null}
										class      = "checkbox"/>
							{/if}
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

  .submit-btn {
		position: relative;
		bottom: 0;
		left: 40%;
		margin-bottom: 100px;
		margin-top: 40px;
  }

</style>