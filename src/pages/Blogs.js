import React from "react";
import './Blogs.css';

function Blogs() {
  return (
    <div className="blogs-container">
      <h2>Our Blogs</h2>
      <div className="blog-post">
        <h3>Blog Post Title 1</h3>
        <p>Blog post content...</p>
      </div>
      <div className="blog-post">
        <h3>Blog Post Title 2</h3>
        <p>Blog post content...</p>
      </div>
      {/* Add more blog posts as needed */}
    </div>
  );
}

export default Blogs;