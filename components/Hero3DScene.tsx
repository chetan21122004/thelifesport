import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import { ShuttlecockModel } from './ShuttlecockModel'

export function Hero3DScene() {
  const [scale, setScale] = useState(22)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleResize = () => {
      // Adjust scale based on screen width
      if (window.innerWidth < 640) { // mobile
        setScale(20)
      } else if (window.innerWidth < 1024) { // tablet
        setScale(25)
      } else { // desktop
        setScale(28)
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      // Convert mouse position to normalized coordinates (-1 to 1)
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x, y })
    }

    // Initial setup
    handleResize()

    // Add event listeners
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="z-40 absolute sm:right-[-500px] sm:top-1/2 sm:-translate-y-1/3 top-[-110px] left-1/2 -translate-x-1/2 sm:translate-x-32 h-[400px] sm:h-[500px] md:h-[600px] w-[300px] sm:w-[400px] md:w-[600px]">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 35 }}
        dpr={[1, 2]}
        className="z-10"
        gl={{ 
          alpha: true, 
          antialias: true,
          preserveDrawingBuffer: false,
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Suspense fallback={null}>
          <Float
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <group
              position={[0, -0.5, 0]}
              rotation={[-Math.PI / 6, Math.PI / 3, 0]}
            >
              <group
                position={[
                  mousePosition.x * 0.5, // Move left/right based on mouse X
                  mousePosition.y * 0.5, // Move up/down based on mouse Y
                  Math.abs(mousePosition.x * mousePosition.y) * 0.2 // Add subtle depth movement
                ]}
              >
                <ShuttlecockModel 
                  scale={scale}
                  rotation={[
                    -Math.PI / 6 + mousePosition.y * 0.1, // Tilt based on mouse Y
                    Math.PI / 3 + mousePosition.x * 0.1,  // Rotate based on mouse X
                    mousePosition.x * mousePosition.y * 0.05 // Add subtle twist
                  ]}
                />
              </group>
            </group>
          </Float>
          <Environment preset="sunset" />
        </Suspense>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
} 