export default function MosaicGrid({ flavors, onFlavorClick }) {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4">
      {flavors.map((flavor, index) => (
        <button
          key={flavor.id}
          onClick={() => onFlavorClick(flavor, index)}
          className="aspect-square bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-white/10 hover:border-[#C9A84C]/30 transition-all duration-300 cursor-pointer group"
        >
          <span
            className="text-2xl md:text-3xl font-bold text-[#C9A84C] mb-2 group-hover:scale-110 transition-transform"
            style={{ textShadow: '0 0 20px rgba(201, 168, 76, 0.3)' }}
          >
            {flavor.symbol}
          </span>
          <span className="text-xs text-white/80 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">{flavor.name}</span>
          <span className="text-[10px] text-[#C9A84C]/60">{flavor.cacao}</span>
        </button>
      ))}
    </div>
  )
}