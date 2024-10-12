import React, { useContext } from "react";
import "./style.css";
import BlogContext from "../context/AppContext";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { blog } = useContext(BlogContext);
  const { id } = useParams();
  const blogIn = blog[id];

  return (
    <div>
      <div className="list-details">
        {blogIn.blog_image.includes("./") ? (
          <>
            <img className="list-img"
              src={`/${blogIn.blog_image}`}
            />
          </>
        ) : (
          <img src={blogIn.blog_image} alt="jj" />
        )}
        <p className="list-sub">{blogIn.blog_subject}</p>
        <h2>{blogIn.blog_title}</h2>
        <p className="list-caption">{blogIn.blog_caption}</p>
      </div>
    </div>
  );
};

export default Blog;
