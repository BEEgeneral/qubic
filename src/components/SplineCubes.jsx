import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

const FLAVOR_COLORS = {
  Au: '#C9A84C',
  Ct: '#FFB347',
  Gn: '#8B4513',
  Vt: '#9B59B6',
  Fc: '#2C3E50',
  Mt: '#A8E6CF',
  Dy: '#556B2F',
  Vf: '#722F37',
  Ar: '#E74C3C',
}

function CubesGroup({ onCubeClick, selectedIndex, flavors }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  const cubePositions = useMemo(() => {
    const positions = []
    const cols = 3
    flavors.forEach((_, i) => {
      const row = Math.floor(i / cols)
      const col = i % cols
      positions.push([
        (col - 1) * 2.5,
        (1 - row) * 2.5,
        0
      ])
    })
    return positions
  }, [flavors])

  return (
    <group ref={groupRef}>
      {flavors.map((flavor, i) => (
        <CubeItem
          key={flavor.id}
          flavor={flavor}
          position={cubePositions[i]}
          isSelected={selectedIndex === i}
          onClick={() => onCubeClick(flavor.id, i)}
        />
      ))}
    </group>
  )
}

function CubeItem({ flavor, position, isSelected, onClick }) {
  const meshRef = useRef()
  const glowRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.05
    }
    if (glowRef.current && isSelected) {
      glowRef.current.scale.setScalar(1.1 + Math.sin(state.clock.elapsedTime * 3) * 0.1)
    }
  })

  const color = FLAVOR_COLORS[flavor.id] || '#888888'

  return (
    <group position={position}>
      {isSelected && (
        <mesh ref={glowRef}>
          <boxGeometry args={[1.4, 1.4, 1.4]} />
          <meshBasicMaterial color={color} transparent opacity={0.3} />
        </mesh>
      )}
      <mesh ref={meshRef} onClick={onClick}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          metalness={0.4}
          roughness={0.3}
          emissive={isSelected ? color : '#000000'}
          emissiveIntensity={isSelected ? 0.5 : 0}
        />
      </mesh>
      <mesh position={[0, 0, 0.51]}>
        <planeGeometry args={[0.6, 0.6]} />
        <meshBasicMaterial color="#1a1a1a" />
      </mesh>
      <text
        position={[0, 0, 0.52]}
        fontSize={0.15}
        color="#C9A84C"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter.woff"
      >
        {flavor.symbol}
      </text>
    </group>
  )
}

export default function SplineCubes({ flavors, onCubeClick, selectedIndex }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#C9A84C" />
      <CubesGroup
        onCubeClick={onCubeClick}
        selectedIndex={selectedIndex}
        flavors={flavors}
      />
      <Environment preset="city" />
    </Canvas>
  )
}