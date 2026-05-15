import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial, Float, Text, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const FLAVORS = [
  { id: 'Au', name: 'Aurum Cacao', symbol: 'Au', cacao: '40%', color: '#C9A84C',
    fullName: 'Aurum Cacao', tono: 'Chispa Blanca',
    ingredients: 'CACAO · Citrus Sativa · Chispa eléctrica',
    description: 'Ralladura cítrica eléctrica estallando. Racimo de partículas amarillas. 40% cacao trenzado con cristales cítricos.' },
  { id: 'Ct', name: 'Citrium', symbol: 'Ct', cacao: '35%', color: '#F5C542',
    fullName: 'Citrium', tono: 'Ácido Limón',
    ingredients: 'CACAO · Yuzu · Essential oils',
    description: 'Esencia cítrica enzimática. Fragmentos de luz líquida.' },
  { id: 'Gn', name: 'Gingetron', symbol: 'Gn', cacao: '40%', color: '#8B6914',
    fullName: 'Gingetron', tono: 'Doble Cara',
    ingredients: 'CACAO · Zingiber Officinale · Fibras',
    description: 'Fibras de raíz de jengibre en espiral. Hilos ámbar cálidos en matriz de 40% cacao.' },
  { id: 'Fc', name: 'Fumum Carbon', symbol: 'Fc', cacao: '85%', color: '#3D3D3D',
    fullName: 'Fumum Carbon', tono: 'Humo Negro',
    ingredients: 'CACAO · Carbón ativado · Turba',
    description: 'Carbono puro. Humo denso de bosque quemado.' },
  { id: 'Mt', name: 'Mentholium', symbol: 'Mt', cacao: '28%', color: '#A8D5BA',
    fullName: 'Mentholium', tono: 'Cristal Helado',
    ingredients: 'CACAO · Menta · Eucalipto',
    description: 'Frío extremo. Cristales de mentol puro.' },
  { id: 'Dy', name: 'Duality', symbol: 'Dy', cacao: '65%', color: '#6B7B4F',
    fullName: 'Duality', tono: 'Dual Verde',
    ingredients: 'CACAO · Matcha · Sésamo',
    description: 'Doble naturaleza. Amargo y herbáceo en equilibrio.' },
  { id: 'Vf', name: 'Vinum Fico', symbol: 'Vf', cacao: '78%', color: '#722F37',
    fullName: 'Vinum Fico', tono: 'Uva Negra',
    ingredients: 'CACAO · Uva fermentada · Tanino',
    description: 'Vino antiguo. Racimo de uvas oscuras maduras.' },
  { id: 'Ar', name: 'Acidum Rubus', symbol: 'Ar', cacao: '81%', color: '#9B2335',
    fullName: 'Acidum Rubus', tono: 'Frambuesa Ácida',
    ingredients: 'CACAO · Frambuesa · Ácido natural',
    description: 'Pulso de ácido frutal. Baya roja explosiva.' },
  { id: 'Vt', name: 'Violetium', symbol: 'Vt', cacao: '45%', color: '#7B3F7E',
    fullName: 'Violetium', tono: 'Pétalo Violeta',
    ingredients: 'CACAO · Violeta · Lavanda',
    description: 'Floral profundo. Pétalos de violeta en cacao.' },
]

function ChocolateCube({ flavor, position, isSelected, onClick }) {
  const meshRef = useRef()
  const glowRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
    if (glowRef.current && isSelected) {
      glowRef.current.scale.setScalar(1.2 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position} onClick={onClick}>
        {isSelected && (
          <mesh ref={glowRef}>
            <boxGeometry args={[1.3, 1.3, 1.3]} />
            <meshBasicMaterial color={flavor.color} transparent opacity={0.3} />
          </mesh>
        )}
        <mesh ref={meshRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={flavor.color}
            metalness={0.6}
            roughness={0.2}
            emissive={isSelected ? flavor.color : '#000000'}
            emissiveIntensity={isSelected ? 0.5 : 0}
          />
        </mesh>
        <Text
          position={[0, 0, 0.51]}
          fontSize={0.2}
          color="#1C1C1C"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2"
        >
          {flavor.symbol}
        </Text>
      </group>
    </Float>
  )
}

function MatrixCube({ flavor, position }) {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial
          color={flavor.color}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
      <Text
        position={[0, 0, 0.41]}
        fontSize={0.12}
        color="#1C1C1C"
        anchorX="center"
        anchorY="middle"
      >
        {flavor.symbol}
      </Text>
    </group>
  )
}

function Scene3D({ selectedFlavor, onSelectFlavor }) {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -5, -10]} intensity={0.5} color="#C9A84C" />

      <group position={[0, 0, 0]}>
        {FLAVORS.map((flavor, i) => {
          const cols = 3
          const row = Math.floor(i / cols)
          const col = i % cols
          return (
            <ChocolateCube
              key={flavor.id}
              flavor={flavor}
              position={[(col - 1) * 2.2, (1 - row) * 2.2, 0]}
              isSelected={selectedFlavor?.id === flavor.id}
              onClick={() => onSelectFlavor(flavor, i)}
            />
          )
        })}
      </group>

      <Environment preset="city" />
    </Canvas>
  )
}

function MatrixScene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />

      {[0, 1, 2].map(row =>
        [0, 1, 2].map(col => {
          const index = row * 3 + col
          return (
            <MatrixCube
              key={index}
              flavor={FLAVORS[index % FLAVORS.length]}
              position={[(col - 1) * 1.2, (1 - row) * 1.2, 0]}
            />
          )
        })
      )}

      <Environment preset="studio" />
    </Canvas>
  )
}

export default function App() {
  const [selectedFlavor, setSelectedFlavor] = useState(FLAVORS[2])
  const [currentIndex, setCurrentIndex] = useState(2)
  const [isSlideOpen, setIsSlideOpen] = useState(true)
  const [showMatrix, setShowMatrix] = useState(false)

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % FLAVORS.length
    setCurrentIndex(nextIndex)
    setSelectedFlavor(FLAVORS[nextIndex])
  }

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + FLAVORS.length) % FLAVORS.length
    setCurrentIndex(prevIndex)
    setSelectedFlavor(FLAVORS[prevIndex])
  }

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-40 px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-sm tracking-[0.3em] text-[#C9A84C]">QUBIC</span>
          <span className="text-lg">® Matrix One</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-sm text-white/60">Lote único · 750</span>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/40">
            ● Drop activo
          </span>
        </div>
      </header>

      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-50">
          <Suspense fallback={null}>
            <Scene3D selectedFlavor={selectedFlavor} onSelectFlavor={(f, i) => { setSelectedFlavor(f); setCurrentIndex(i); setIsSlideOpen(true); }} />
          </Suspense>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <p className="text-xs tracking-[0.3em] text-[#C9A84C] mb-8">Drop · Edición Limitada · 750 unidades</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            La Tabla<br />
            <span className="text-[#C9A84C]">Periódica</span><br />
            del Cacao.
          </h1>

          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            Nueve elementos de chocolate de autor. Una sola tirada — cuando se acaba, se acaba.
          </p>

          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm">Drop en vivo</span>
            <span className="text-white/40">·</span>
            <span className="text-sm">750 disponibles</span>
            <span className="text-white/40">·</span>
            <span className="text-sm text-white/60">0 vendidas</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-white/40">Tech-Folder · USD · Envío gratis</span>
            </div>
            <span className="text-6xl font-bold text-white">$89</span>
          </div>

          <div className="mt-10 flex gap-4 justify-center">
            <button
              onClick={() => setShowMatrix(!showMatrix)}
              className="px-8 py-4 bg-[#C9A84C] text-[#1C1C1C] font-semibold text-lg rounded-full hover:bg-[#D4B55A] transition-all hover:scale-105"
            >
              Adquirir la Matriz →
            </button>
          </div>
        </div>
      </section>

      {showMatrix && (
        <section className="py-20 px-4 bg-[#1C1C1C]">
          <div className="max-w-xl mx-auto">
            <h2 className="text-center text-sm tracking-[0.3em] text-[#C9A84C] mb-12">TU MATRIX 3×3</h2>
            <div className="aspect-square max-w-md mx-auto">
              <Suspense fallback={null}>
                <MatrixScene3D />
              </Suspense>
            </div>
            <div className="text-center mt-8">
              <p className="text-white/60 text-sm mb-4">9 elementos · Una tirada</p>
              <button className="px-8 py-4 bg-[#C9A84C] text-[#1C1C1C] font-semibold rounded-full hover:bg-[#D4B55A] transition-all">
                Confirmar Matrix
              </button>
            </div>
          </div>
        </section>
      )}

      <footer className="fixed bottom-4 right-4 z-40">
        <a href="https://emergentagent.com" target="_blank" rel="noopener" className="text-xs text-white/40 hover:text-white/60 transition-colors">
          Made with Emergent
        </a>
      </footer>

      {isSlideOpen && selectedFlavor && (
        <>
          <div
            className="fixed inset-0 bg-black/80 z-50"
            onClick={() => setIsSlideOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-[#1C1C1C] border-l border-white/10 z-50 overflow-y-auto">
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs tracking-[0.3em] text-white/40">
                  Nodo {String(currentIndex + 1).padStart(2, '0')} / 09 · BIT-{String(currentIndex + 1).padStart(2, '0')}
                </span>
                <button
                  onClick={() => setIsSlideOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1">
                <div className="text-center mb-8">
                  <span
                    className="text-6xl font-bold text-[#C9A84C] block"
                    style={{ textShadow: '0 0 40px rgba(201, 168, 76, 0.5)' }}
                  >
                    {selectedFlavor.symbol}
                  </span>
                </div>

                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedFlavor.fullName}</h2>
                  <span className="text-4xl text-[#C9A84C] font-light">{selectedFlavor.cacao}</span>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-white/40 tracking-wider mb-1">INGREDIENTES</p>
                  <p className="text-sm text-white/80">{selectedFlavor.ingredients}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-white/80 leading-relaxed">{selectedFlavor.description}</p>
                </div>

                <div className="mb-8">
                  <p className="text-xs text-white/40 tracking-wider mb-2">TONO</p>
                  <span className="text-[#C9A84C]">{selectedFlavor.tono}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                >
                  ◀
                </button>
                <span className="text-xs tracking-[0.2em] text-white/40">
                  {currentIndex + 1} / {FLAVORS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}