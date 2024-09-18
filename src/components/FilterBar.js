import React, { useState, useEffect, useRef } from 'react';

export default function FilterBar({ filters, setFilters }) {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const minPrice = 0;
  const maxPrice = 1000;
  const dropdownStyle = "px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 appearance-none cursor-pointer";

  useEffect(() => {
    if (filters.price) {
      setPriceRange(filters.price);
    }
  }, [filters.price]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
  };

  const handlePriceChange = ({ min, max }) => {
    const newPriceRange = { min, max };
    setPriceRange(newPriceRange);
    setFilters(prevFilters => ({ ...prevFilters, price: newPriceRange }));
  };

  return (
    <div className="my-4 flex flex-wrap gap-4">
      <select className={dropdownStyle} onChange={(e) => handleFilterChange('gender', e.target.value)}>
        <option value="">All Gender</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="unisex">Unisex</option>
      </select>

      <select className={dropdownStyle} onChange={(e) => handleFilterChange('category', e.target.value)}>
        <option value="">All Category</option>
        <option value="T-Shirts">T-Shirts</option>
        <option value="Jeans">Jeans</option>
        <option value="Dresses">Dresses</option>
        <option value="Shoes">Shoes</option>
      </select>

      <select className={dropdownStyle} onChange={(e) => handleFilterChange('brand', e.target.value)}>
        <option value="">All Brand</option>
        <option value="Nike">Nike</option>
        <option value="Veirdo">Veirdo</option>
        <option value="Bluer">Bluer</option>
        <option value="Ambercrombie">Ambercrombie</option>
        <option value="Fitch">Fitch</option>
        <option value="Flying Machine">Flying Machine</option>
        <option value="American Eagle">American Eagle</option>



      </select>

      <select className={dropdownStyle} onChange={(e) => handleFilterChange('color', e.target.value)}>
        <option value="">All Color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="black">Black</option>

      </select>

      <select className={dropdownStyle} onChange={(e) => handleFilterChange('discountRate', e.target.value)}>
        <option value="">All Discount Rate</option>
        <option value="10">10% and above</option>
        <option value="20">20% and above</option>
        <option value="30">30% and above</option>
      </select>
    </div>
  );
}