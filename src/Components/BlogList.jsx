import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import BlogContext from "../context/AppContext";

const BlogList = () => {
  const { blog } = useContext(BlogContext);
  return (
    <>
      <div className="blog-title">
        <h1>Browse Latest Blogs</h1>
        <div>
          <Link to="/createblog">
            <button>Create a Blog</button>
          </Link>
        </div>
      </div>
      <div className="blogs">
        {blog.map((item, index) => (
          <div key={index} className="blog-details">
            <Link to={`/blogs/${index}`}>
              <>
                <img src={item.blog_image} alt="jj" />
              </>
            </Link>
            <p className="blog-sub">{item.blog_subject}</p>
            <h2>{item.blog_title}</h2>
            <p className="blog-caption">{item.blog_caption}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
