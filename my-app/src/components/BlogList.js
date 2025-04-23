import React from 'react';
import blogs from '../data/blogs';
import BlogCard from './BlogCard';
import './BlogList.css';

const BlogList = () => {
  return (
    <section className="blog-list-section">
      <h2>Bài viết nổi bật</h2>
      <div className="blog-grid">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
