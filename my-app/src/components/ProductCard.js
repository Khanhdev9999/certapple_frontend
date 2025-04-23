import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

// Nhận prop product từ cha
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <Link to={`/product/${product.id}`}>
        <h3>{product.name}</h3>
      </Link>
      <p>{product.description}</p>
      <div className="price">{product.price}</div>
    </div>
  );
};

export default ProductCard;
