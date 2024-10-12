import "./App.css";
import CreateBlog from "./Components/CreateBlog";
import Blog from "./Components/Blog";
import BlogList from "./Components/BlogList";
import { Route, Routes, Link } from "react-router-dom";
import { BlogProvider } from "./context/AppContext";
function App() {
  return (
    <>
      <nav>
        <h3>
          <Link to="/blogs">Logo</Link>
        </h3>
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <BlogProvider>
        <Routes>
        <Route path="/" element={<BlogList />} index />
        <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/createblog" element={<CreateBlog />} />
        </Routes>
      </BlogProvider>
    </>
  );
}

export default App;
