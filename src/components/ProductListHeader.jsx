import React from 'react';

const ProductListHeader = ({ onSortProduct}) => {

    const handleChange = (e) => {
        onSortProduct(e.target.value);

    }
    
  return (
    <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Your Products</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Sort by:</span>
            <select className="border rounded-md px-2 py-1 text-sm"
            onChange={handleChange}>
              <option disabled selected>Please Select An Option</option>
              <option value={"most popular"}>Most Popular</option>
              <option value={"newest"}>Newest</option>
              <option value={"low to high"}>Price: Low to High</option>
              <option value={"high to low"}>Price: High to Low</option>
            </select>
          </div>
        </div>
  );
};

export default ProductListHeader;