import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MosaicGrid from './components/MosaicGrid'
import SlidePanel from './components/SlidePanel'
import Footer from './components/Footer'

const FLAVORS = [
  { id: 'Au', name: 'Aurum Cacao', symbol: '[Au]', cacao: '40%', color: '#C9A84C',
    fullName: 'Aurum Cacao', tono: 'Chispa Blanca',
    ingredients: 'CACAO · Citrus Sativa · Chispa eléctrica',
    description: 'Ralladura cítrica eléctrica estallando. Racimo de partículas amarillas. 40% cacao trenzado con cristales cítricos.' },
  { id: 'Ct', name: 'Citrium', symbol: '[Ct]', cacao: '35%', color: '#F5C542',
    fullName: 'Citrium', tono: 'Ácido Limón',
    ingredients: 'CACAO · Yuzu · Essential oils',
    description: 'Esencia cítrica enzimática. Fragmentos de luz líquida.' },
  { id: 'Gn', name: 'Gingetron', symbol: '[Gn]', cacao: '72%', color: '#8B6914',
    fullName: 'Gingetron', tono: 'Polvo Dorado',
    ingredients: 'CACAO · Jengibre · Canela',
    description: 'Especiado y húmedo. Raíces subterráneas de cacao.' },
  { id: 'Fc', name: 'Fumum Carbon', symbol: '[Fc]', cacao: '85%', color: '#3D3D3D',
    fullName: 'Fumum Carbon', tono: 'Humo Negro',
    ingredients: 'CACAO · Carbón ativado · Turba',
    description: 'Carbono puro. Humo denso de bosque quemado.' },
  { id: 'Mt', name: 'Mentholium', symbol: '[Mt]', cacao: '28%', color: '#A8D5BA',
    fullName: 'Mentholium', tono: 'Cristal Helado',
    ingredients: 'CACAO · Menta · Eucalipto',
    description: 'Frío extremo. Cristales de mentol puro.' },
  { id: 'Dy', name: 'Duality', symbol: '[Dy]', cacao: '65%', color: '#6B7B4F',
    fullName: 'Duality', tono: 'Dual Verde',
    ingredients: 'CACAO · Matcha · Sésamo',
    description: 'Doble naturaleza. Amargo y herbáceo en equilibrio.' },
  { id: 'Vf', name: 'Vinum Fico', symbol: '[Vf]', cacao: '78%', color: '#722F37',
    fullName: 'Vinum Fico', tono: 'Uva Negra',
    ingredients: 'CACAO · Uva fermentada · Tanino',
    description: 'Vino antiguo. Racimo de uvas oscuras maduras.' },
  { id: 'Ar', name: 'Acidum Rubus', symbol: '[Ar]', cacao: '81%', color: '#9B2335',
    fullName: 'Acidum Rubus', tono: 'Frambuesa Ácida',
    ingredients: 'CACAO · Frambuesa · Ácido natural',
    description: 'Pulso de ácido frutal. Baya roja explosiva.' },
  { id: 'Vt', name: 'Violetium', symbol: '[Vt]', cacao: '45%', color: '#7B3F7E',
    fullName: 'Violetium', tono: 'Pétalo Violeta',
    ingredients: 'CACAO · Violeta · Lavanda',
    description: 'Floral profundo. Pétalos de violeta en cacao.' },
]

function App() {
  const [selectedFlavor, setSelectedFlavor] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSlideOpen, setIsSlideOpen] = useState(false)

  const handleFlavorClick = (flavor, index) => {
    setSelectedFlavor(flavor)
    setCurrentIndex(index)
    setIsSlideOpen(true)
  }

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
    <div className="min-h-screen bg-carbon-black text-off-white">
      <Navbar />

      <Hero />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-sm tracking-[0.3em] text-aurum-gold mb-12">
            TABLA PERIÓDICA DEL CACAO
          </h2>
          <MosaicGrid
            flavors={FLAVORS}
            onFlavorClick={handleFlavorClick}
          />
        </div>
      </section>

      <Footer />

      <SlidePanel
        flavor={selectedFlavor}
        index={currentIndex}
        total={FLAVORS.length}
        isOpen={isSlideOpen}
        onClose={() => setIsSlideOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  )
}

export default App