export default function ProductGrid({ products, view }) {
    return (
      <div className={view === 'grid' ? 'grid grid-cols-4 gap-4' : 'space-y-4'}>
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.brand}</p>
            <p className="text-gray-800 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    )
  }
  