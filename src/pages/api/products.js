import { products } from '../../data/products'

export default function handler(req, res) {
  const { query } = req
  const page = parseInt(query.page) || 1
  const limit = 10 
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  let filteredProducts = [...products]

  // Apply filters
  if (query.gender) {
    filteredProducts = filteredProducts.filter(p => p.gender === query.gender)
  }
  if (query.category) {
    filteredProducts = filteredProducts.filter(p => p.category === query.category)
  }
  if (query.brand) {
    filteredProducts = filteredProducts.filter(p => p.brand === query.brand)
  }
  if (query.minPrice && query.maxPrice) {
    filteredProducts = filteredProducts.filter(p => p.price >= query.minPrice && p.price <= query.maxPrice)
  }
  if (query.color) {
    filteredProducts = filteredProducts.filter(p => p.color === query.color)
  }
  if (query.minDiscount) {
    filteredProducts = filteredProducts.filter(p => p.discountRate >= query.minDiscount)
  }

  // Apply sorting
  if (query.sort === 'popularity') {
    filteredProducts.sort((a, b) => b.popularity - a.popularity)
  } else if (query.sort === 'trending') {
    filteredProducts.sort((a, b) => b.trending - a.trending)
  } else if (query.sort === 'recommended') {
    filteredProducts.sort((a, b) => b.recommended - a.recommended)
  }

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  res.status(200).json({
    products: paginatedProducts,
    totalPages: Math.ceil(filteredProducts.length / limit)
  })
}