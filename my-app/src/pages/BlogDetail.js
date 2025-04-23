import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../data/blogs';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) return <p>Bài viết không tồn tại.</p>;

  return (
    <div style={{ padding: '40px' }}>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        {blog.excerpt} (Mô phỏng chi tiết bài viết)
      </p>
    </div>
  );
};

export default BlogDetail;
