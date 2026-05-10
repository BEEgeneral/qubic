import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MosaicGrid from './components/MosaicGrid'
import SlidePanel from './components/SlidePanel'
import MatrixBuilder from './components/MatrixBuilder'
import Footer from './components/Footer'
import CartPanel from './components/CartPanel'
import CheckoutSlide from './components/CheckoutSlide'
import RegisterModal, { LoginModal } from './components/AuthModals'

const FLAVORS = [
  { id: 'Au', name: 'Aurum Cacao', color: '#C9A84C', symbol: '[Au]',
    description: 'El oro líquido del cacao. Un sabor que awakening tus sentidos.',
    history: 'Origins from the ancient Aztec recipe, modernized with molecular precision.',
    ingredients: ['Cacao 85%', 'Caramelo de azafrán', 'Miel artesanal'],
    effect: 'Explosión de núcleo líquido — efecto 24K' },
  { id: 'Ct', name: 'Citrium', color: '#FFB347', symbol: '[Ct]',
    description: 'Yuzu cítrico con efervescencia eléctrica.',
    history: 'Japanese citrus meets Swiss precision.',
    ingredients: ['Chocolate blanco', 'Yuzu fresco', 'Petazetas (CO₂)'],
    effect: 'Efervescencia eléctrica en paladar' },
  { id: 'Gn', name: 'Gingetron', color: '#8B4513', symbol: '[Gn]',
    description: 'Jengibre especiado con calor progresivo.',
    history: 'Ancient spice route meets quantum chemistry.',
    ingredients: ['Cacao 45%', 'Zingiber Officinale', 'Canela'],
    effect: 'Calor especiado progresivo' },
  { id: 'Vt', name: 'Violetium', color: '#9B59B6', symbol: '[Vt]',
    description: 'Floral y suave con retrogusto herbal.',
    history: 'Violet fields of Grasse meet cacao science.',
    ingredients: ['Cacao 55%', 'Viola Odorata', 'Lavanda'],
    effect: 'Floral y suave, retrogusto herbal' },
  { id: 'Fc', name: 'Fumum Carbon', color: '#2C3E50', symbol: '[Fc]',
    description: 'Ahumado profundo con textura volcánica.',
    history: 'Volcanic soils meet aged oak barrels.',
    ingredients: ['Cacao 70%', 'Sal negra de Chipre', 'Esencia de roble ahumado'],
    effect: 'Textura volcánica y profunda' },
  { id: 'Mt', name: 'Mentholium', color: '#A8E6CF', symbol: '[Mt]',
    description: 'Chocolate blanco con frío glacial.',
    history: 'Alpine freshness meets cacao ceremony.',
    ingredients: ['Chocolate blanco', 'Mentha Piperita', 'Cristales de mentol'],
    effect: 'Efecto endotérmico — frío glacial' },
  { id: 'Dy', name: 'Duality', color: '#556B2F', symbol: '[Dy]',
    description: 'Matcha ceremonial con sésamo negro.',
    history: 'Japanese tea ceremony meets ancient chocolate traditions.',
    ingredients: ['Cacao 68%', 'Té Matcha', 'Sésamo negro'],
    effect: 'Equilibrio amargo-tostado (Binary Mix)' },
  { id: 'Vf', name: 'Vinum Fico', color: '#722F37', symbol: '[Vf]',
    description: 'Uva fermentada con estado líquido interior.',
    history: 'Tuscan vineyards meet molecular gastronomy.',
    ingredients: ['Cacao 76%', 'Vitis Vinifera', 'Taninos naturales'],
    effect: 'Estado líquido interior — uva fermentada' },
  { id: 'Ar', name: 'Acidum Rubus', color: '#E74C3C', symbol: '[Ar]',
    description: 'Frambuesa liofilizada con pulso de acidez.',
    history: 'Forest fruits meet acid science.',
    ingredients: ['Cacao 81%', 'Rubus Idaeus', 'Ácido cítrico natural'],
    effect: 'Pulso de acidez frutal — Acid Pulse' },
]

const INITIAL_MATRIX = Array(9).fill(null)

function App() {
  const [selectedCube, setSelectedCube] = useState(null)
  const [isSlideOpen, setIsSlideOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [matrix, setMatrix] = useState(INITIAL_MATRIX)
  const [showMatrixBuilder, setShowMatrixBuilder] = useState(false)
  const [currentCubeIndex, setCurrentCubeIndex] = useState(0)

  const handleCubeClick = (flavorId, index) => {
    setSelectedCube(FLAVORS.find(f => f.id === flavorId))
    setCurrentCubeIndex(index)
    setIsSlideOpen(true)
  }

  const handleNextCube = () => {
    const nextIndex = (currentCubeIndex + 1) % FLAVORS.length
    setCurrentCubeIndex(nextIndex)
    setSelectedCube(FLAVORS[nextIndex])
  }

  const handlePrevCube = () => {
    const prevIndex = (currentCubeIndex - 1 + FLAVORS.length) % FLAVORS.length
    setCurrentCubeIndex(prevIndex)
    setSelectedCube(FLAVORS[prevIndex])
  }

  const handleAddToMatrix = (flavorId) => {
    const emptyIndex = matrix.findIndex(m => m === null)
    if (emptyIndex !== -1) {
      const newMatrix = [...matrix]
      newMatrix[emptyIndex] = flavorId
      setMatrix(newMatrix)
    }
  }

  const handleAddMatrixToCart = () => {
    if (matrix.every(m => m !== null)) {
      const cartItem = {
        id: Date.now(),
        matrix: [...matrix],
        name: 'Mi Matrix Personalizada',
        price: 19.90,
        quantity: 1
      }
      setCart([...cart, cartItem])
      setMatrix(INITIAL_MATRIX)
      setShowMatrixBuilder(false)
      setIsCartOpen(true)
    }
  }

  const handleUpdateQuantity = (itemId, newQty) => {
    if (newQty < 1) {
      setCart(cart.filter(item => item.id !== itemId))
    } else {
      setCart(cart.map(item =>
        item.id === itemId ? { ...item, quantity: Math.min(newQty, 3) } : item
      ))
    }
  }

  const handleRemoveFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId))
  }

  return (
    <div className="min-h-screen bg-carbon-black text-off-white">
      <Navbar
        cartItemsCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
        onRegisterClick={() => setIsRegisterOpen(true)}
      />

      <Hero />

      <section className="min-h-[80vh] py-20 px-4">
        <MosaicGrid
          flavors={FLAVORS}
          onCubeClick={handleCubeClick}
          matrix={matrix}
        />
      </section>

      <section className="py-20 px-4 text-center">
        <button
          onClick={() => setShowMatrixBuilder(!showMatrixBuilder)}
          className="bg-aurum-gold text-carbon-black px-8 py-4 text-lg font-semibold rounded-lg hover:scale-105 transition-transform"
        >
          {showMatrixBuilder ? 'Cerrar Configurador' : 'Personaliza tu Matrix'}
        </button>
      </section>

      {showMatrixBuilder && (
        <MatrixBuilder
          flavors={FLAVORS}
          matrix={matrix}
          onCellClick={(index) => {
            const flavor = prompt('Selecciona sabor (Au, Ct, Gn, Vt, Fc, Mt, Dy, Vf, Ar):')
            if (flavor && FLAVORS.find(f => f.id === flavor)) {
              const newMatrix = [...matrix]
              newMatrix[index] = flavor
              setMatrix(newMatrix)
            }
          }}
          onConfirm={handleAddMatrixToCart}
          onReset={() => setMatrix(INITIAL_MATRIX)}
          isComplete={matrix.every(m => m !== null)}
        />
      )}

      <Footer />

      <SlidePanel
        flavor={selectedCube}
        isOpen={isSlideOpen}
        onClose={() => setIsSlideOpen(false)}
        onNext={handleNextCube}
        onPrev={handlePrevCube}
        onAddToMatrix={handleAddToMatrix}
      />

      <CartPanel
        items={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false)
          setIsCheckoutOpen(true)
        }}
      />

      <CheckoutSlide
        items={cart}
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSuccess={() => {
          setIsCheckoutOpen(false)
          setCart([])
        }}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false)
          setIsLoginOpen(true)
        }}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginOpen(false)
          setIsRegisterOpen(true)
        }}
      />
    </div>
  )
}

export default App