import { useState, useEffect } from 'react'
import axios from 'axios'
import FilterBar from '../components/FilterBar'
import SortBar from '../components/SortBar'
import ProductGrid from '../components/ProductGrid'
import Pagination from '../components/Pagination'
import CustomRangeSlider from '../components/CustomRangeSlider'

export default function Home() {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState('popularity')
  const [view, setView] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetchProducts()
  }, [filters, sort, currentPage])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products', {
        params: { ...filters, sort, page: currentPage }
      })
      setProducts(response.data.products)
      setTotalPages(response.data.totalPages)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center font-helvetica"> 
        Zampp Catalog
      </h1>
      <FilterBar filters={filters} setFilters={setFilters} />
      <SortBar sort={sort} setSort={setSort} view={view} setView={setView} />
      <ProductGrid products={products} view={view} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}