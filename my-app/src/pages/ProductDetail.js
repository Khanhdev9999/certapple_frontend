import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Sản phẩm không tồn tại.</p>;

  return (
    <div style={{ padding: '40px' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '400px' }} />
      <p>{product.description}</p>
      <h3 style={{ color: '#f76b1c' }}>{product.price}</h3>
    </div>
  );
};

export default ProductDetail;
