<script lang="ts">
    import * as Threlte from '@threlte/core'
    import { onMount } from 'svelte';
    import * as Three from 'three'
    import { GLTF } from '@threlte/extras'
    import * as Utils from 'three/src/math/MathUtils'
    import Hamster from './Hamster.svelte';

    let position = 2;
    onMount(() => {
        let interval = setInterval(() => {
            position = Math.sin(Date.now() * 0.005) + 2;
        }, 10);

        return () => clearInterval(interval);
    });

    let helmet = {
      position: { x:0, y:2, z:5 },
      scale: 1
    }

    let lamborghini = {
      position: { x:8, y:0, z:0 },
      scale: 1
    }
</script>

<div class="scene">
  <Threlte.Canvas>
    <!-- Camera -->
    <Threlte.PerspectiveCamera position={{ x: 20, y: 20, z: 20 }} fov={50}>
      <!-- Controls -->
      <Threlte.OrbitControls/>
    </Threlte.PerspectiveCamera>

    <!-- Lights the scene equally -->
    <Threlte.AmbientLight color="white" intensity={1} />

    <!-- Light that casts a shadow -->
    <Threlte.DirectionalLight
      color="white"
      intensity={2}
      position={{ x: 10, y: 10 }}
      shadow={{
        camera: { top: 10 },
      }}
    />

    <!-- Sphere -->
    <Threlte.Mesh
      geometry={new Three.SphereGeometry(1, 24, 24)}
      material={new Three.MeshStandardMaterial({ color: 'red' })}
      position={{ x: -3, y: position }}
      receiveShadow
      castShadow
    />

    <!-- <GLTF url="models/DamagedHelmet.glb" {...helmet} />
    <GLTF url="models/lamborghini.glb" {...lamborghini} />
    <Hamster /> -->

    <!-- Floor -->
    <Threlte.Mesh
      geometry={new Three.PlaneGeometry(10, 10)}
      material={new Three.MeshStandardMaterial({
        color: 'cyan',
        side: Three.DoubleSide,
      })}
      rotation={{ x: Utils.DEG2RAD * 90 }}
      receiveShadow
    />
  </Threlte.Canvas>
</div>
  
<style>
  .scene {
    width: 50%;
    height: 50%;
    position: absolute;
    background: radial-gradient(hsl(220 14% 20%), hsl(220 20% 10%));
    background-attachment: fixed;
  }
</style>
