import { Canvas } from '@react-three/fiber'
import React from 'react'

import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import Scene from '../components/Scene'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
        
const Mainani = () => {
          return (
            <>
    <Canvas flat camera={{fov:35}}>
      <OrbitControls/>
      <ambientLight/>
      <Scene/>
      <EffectComposer>
    <Bloom
    minmapBlur
    intensity={2.0} // The bloom intensity.
    luminanceThreshold={0.3} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
   
   
  />
  

</EffectComposer>
    
    </Canvas>
    
    </>
          )
        }
        
        export default Mainani
        