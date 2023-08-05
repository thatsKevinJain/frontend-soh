<script>
// @ts-nocheck

  import Carousel from 'svelte-carousel'
  import { browser } from '$app/environment';

  let carousel; // for calling methods of the carousel instance
  
  const handleNextClick = () => {
    carousel.goToNext()
  }

  let  options = [
          { id: 1, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1688889716860-c9b94cc3db63?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTgzNQ&ixlib=rb-4.0.3&q=80&w=200"},
          { id: 2, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1689257693246-6fea2884c4be?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg2Mw&ixlib=rb-4.0.3&q=80&w=200"},
          { id: 3, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1688890968318-8d77993d3b99?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg3NQ&ixlib=rb-4.0.3&q=80&w=200"},
          { id: 4, label: "hello", score: 1, url: "https://plus.unsplash.com/premium_photo-1676478746990-4ef5c8ef234a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg4NQ&ixlib=rb-4.0.3&q=80&w=200"},
          { id: 5, label: "hello", score: 1, url: "https://images.unsplash.com/photo-1688934728330-70f167cb366f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTg5Nw&ixlib=rb-4.0.3&q=80&w=200"},
          { id: 6, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1688283581052-7da75fe95a5c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkwNw&ixlib=rb-4.0.3&q=80&w=200"},
          { id: 7, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1685957198326-92172d999300?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkxNg&ixlib=rb-4.0.3&q=80&w=200"},
          { id: 8, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1690005866751-3cab315c0096?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkyOA&ixlib=rb-4.0.3&q=80&w=200"},
          { id: 9, label: "hello", score: 0, url: "https://images.unsplash.com/photo-1687253673883-d5f0f1f13443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0NTkzNw&ixlib=rb-4.0.3&q=80&w=200"},
        ]

  let opt = new Array(20)
</script>

{#if browser}
<Carousel
  autoplayDuration={0}
  duration={5000}
  autoplay
  timingFunction="linear"
  dots={false}
  arrows={false}
  swiping={false}
  particlesToShow={10}
  particlesToScroll={2}
>
  {#each opt as o, i}
     <img src={"https://source.unsplash.com/random/200x200/?emotions&" + i} class="image" alt="yo"/>
  {/each}
</Carousel>
{/if}


<style>
      .image {
        width: 200px;
        height: 200px;
    }
</style>