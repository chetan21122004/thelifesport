import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function ShuttlecockModel({ position = [0, 0, 0], scale = 3, rotation = [0, 0, 0] }) {
  const meshRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/shuttlecock/scene.gltf')
  
  // Clone the scene to avoid modifying the cached original
  const clonedScene = useRef<THREE.Group>()
  
  useEffect(() => {
    if (scene) {
      const cloned = scene.clone()
      
      // Enhance materials for better realism
      cloned.traverse((node: THREE.Object3D) => {
        if ((node as THREE.Mesh).isMesh) {
          const mesh = node as THREE.Mesh
          if (mesh.material) {
            // Handle single material
            if (!Array.isArray(mesh.material)) {
              const material = mesh.material as THREE.MeshStandardMaterial
              
              // Enhance material properties
              material.roughness = 0.7 // More realistic surface roughness
              material.metalness = 0.2 // Slight metallic look for the metal parts
              material.envMapIntensity = 0.8 // Better environment reflection
              
              // Enhance texture quality if present
              if (material.map) {
                material.map.anisotropy = 16
                material.map.minFilter = THREE.LinearMipmapLinearFilter
                material.map.magFilter = THREE.LinearFilter
              }
              
              // Add subtle normal mapping if not present
              if (!material.normalMap) {
                material.normalScale = new THREE.Vector2(0.5, 0.5)
              }
            }
          }
        }
      })
      
      clonedScene.current = cloned
    }
  }, [scene])
  
  // Smooth rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      // Slower, more natural rotation
      meshRef.current.rotation.y += 0.003
      
      // Subtle floating movement
      const floatY = Math.sin(state.clock.elapsedTime * 0.4) * 0.1
      meshRef.current.position.y = floatY
      
      // Slight tilt variation
      const tiltX = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
      meshRef.current.rotation.x = tiltX
    }
  })
  
  return (
    <primitive 
      ref={meshRef}
      object={clonedScene.current || scene} 
      position={position} 
      scale={scale}
      rotation={rotation}
    />
  )
}

// Preload the model with high quality settings
useGLTF.preload('/shuttlecock/scene.gltf', true) // true enables draco compression if available 