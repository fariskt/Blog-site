import React, { useContext, useState } from "react";
import BlogContext from "../context/AppContext";

const CreateBlog = () => {
  const {addBlog} = useContext(BlogContext)
  const [formData, setFormData] = useState({
    blog_title: "",
    blog_subject: "",
    blog_caption: "",
    blog_image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      ...formData,
      blog_image: URL.createObjectURL(formData.blog_image),
    };
    addBlog(newBlog);
    alert("Form submitted successfully")
    setFormData({
      blog_title: "",
      blog_subject: "",
      blog_caption: "",
      blog_image: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload your Blog</h2>
      <div>
        <label> Title: </label>
        <input
          type="text"
          name="blog_title"
          placeholder="Enter blog title here..."
          value={formData.blog_title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label> Subject: </label>
        <input
          type="text"
          name="blog_subject"
          placeholder="Enter blog subject"
          value={formData.blog_subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label> Content: </label>
        <textarea
          name="blog_caption"
          placeholder="Enter blog content here..."
          value={formData.blog_caption}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label>Upload Image: </label>
        <input
          type="file"
          name="blog_image"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateBlog;
