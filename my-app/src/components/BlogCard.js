import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

// Nhận blog qua props
const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />
      <Link to={`/blog/${blog.id}`}>
        <h3>{blog.title}</h3>
      </Link>
      <p>{blog.excerpt}</p>
      <button className="read-more">Đọc thêm</button>
    </div>
  );
};

export default BlogCard;
