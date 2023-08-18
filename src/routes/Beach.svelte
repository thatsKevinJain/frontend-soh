<script lang="ts">
    import { GLTF } from '@threlte/extras'

    let beach = {
      position: { x:-100, y:-90, z:-80 },
      scale: 1
    }
  </script>

<GLTF url="beach.glb" {...beach} />