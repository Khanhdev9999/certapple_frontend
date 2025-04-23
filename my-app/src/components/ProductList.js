import React from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  return (
    <section className="product-list-section">
      <h2>Sản phẩm nổi bật</h2>
      <div className="product-grid">
      {products.map(product => (
  <ProductCard key={product.id} product={product} />
))}
      </div>
    </section>
  );
};

export default ProductList;
