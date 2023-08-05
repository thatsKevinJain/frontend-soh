<script>
// @ts-nocheck
  import { onMount } from 'svelte';

  let name = ["Sushant", "Kevin", "Vaibhav"]

  let randomizedArray = []
  function getRandomizedArray(arr){
      randomizedArray = []
      for(;;)
      {
          var random = Math.floor(Math.random() * arr.length)
          if(randomizedArray.length < arr.length){
              if(randomizedArray.indexOf(random) === -1){
                  randomizedArray.push(random)
              }
          }
          else{
              break;
          }
      }
      for(var i=0; i<randomizedArray.length; i++){
          randomizedArray[i] = arr[randomizedArray[i]]
      }
      return 0
  }

  onMount(() => {
    getRandomizedArray(name)
    name = [...randomizedArray]
  })
</script>

{#each name as n}
    <h1>Hello {n}</h1>
{/each}