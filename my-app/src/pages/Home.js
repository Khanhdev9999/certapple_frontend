import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import ProductList from '../components/ProductList';
import FilterComponent from '../components/FilterComponent';
import BlogList from '../components/BlogList';

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <FilterComponent />
      <ProductList />
      <BlogList />
    </div>
  );
};

export default Home;
