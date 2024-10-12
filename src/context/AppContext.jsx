import React, { createContext, useState } from "react";
import { blogPosts } from "../data";
const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState(blogPosts);

  const addBlog = (newBlog) => {
    setBlog((prev) => [newBlog , ...prev]);
  };

  const value = {
    blog,
    setBlog,
    addBlog
  };
  return (
    <BlogContext.Provider value={{ ...value }}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
