export default function MosaicGrid({ flavors, onFlavorClick }) {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4">
      {flavors.map((flavor, index) => (
        <button
          key={flavor.id}
          onClick={() => onFlavorClick(flavor, index)}
          className="aspect-square bg-off-white/5 border border-off-white/10 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-off-white/10 hover:border-aurum-gold/30 transition-all duration-300 cursor-pointer group"
        >
          <span
            className="text-2xl md:text-3xl font-bold text-aurum-gold mb-2 group-hover:scale-110 transition-transform"
            style={{ textShadow: '0 0 20px rgba(201, 168, 76, 0.3)' }}
          >
            {flavor.symbol}
          </span>
          <span className="text-xs text-off-white/80 mb-1">{flavor.name}</span>
          <span className="text-[10px] text-aurum-gold/60">{flavor.cacao}</span>
        </button>
      ))}
    </div>
  )
}