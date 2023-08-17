<script lang="ts">
    import { GLTF } from '@threlte/extras'
    import * as Utils from 'three/src/math/MathUtils'

    let beach = {
      position: { x:-100, y:-90, z:-80 },
      scale: 1
    }
  </script>

<GLTF url="beach.glb" {...beach} />