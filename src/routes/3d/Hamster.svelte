<script lang="ts">
    import { GLTF } from '@threlte/extras'

    let sunny = {
      position: { x:0, y:0, z:0 },
      scale: 6
    }
  </script>

<GLTF url="models/hamtaro.glb" {...sunny} />
