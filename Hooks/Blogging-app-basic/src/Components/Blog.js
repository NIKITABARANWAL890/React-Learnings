import { useState, useRef, useEffect, useReducer } from "react";
import BlogCard from "./BlogCard";
import "../index.css"; 

function blogsReducer(state, action){
  switch(action.type){
    case "ADD":
      return [action.blog, ...state];

    case "REMOVE":
      return state.filter((blog, index)=> index!==action.index);

    default:
      return [];
  }
}

export default function Blog() {
  const [formData, setFormData] = useState({ title: "", content: "" });

  const [blogs, dispatch] = useReducer(blogsReducer, []);

  // const [blogs, setBlogs] = useState([]);
  const titleRef = useRef(null);

  useEffect(()=>{
    titleRef.current.focus();
  }, []);

  useEffect(()=>{
    if(blogs.length){
      if(blogs[0].title===""){
        document.title="No blogs here";
        return;
      }
      document.title=blogs[0].title;
    }
  }, [blogs]);

  function handleSubmit(e) {
    e.preventDefault();
      // document.title = formData.title;
      // setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
      dispatch({type: "ADD", blog:{title: formData.title, content: formData.content }});
      setFormData({ title: "", content: "" });
    titleRef.current.focus();
    console.log("Blogs updated:", blogs);
  }

  function removeBlog(indexToRemove) {
    console.log("Removing blog at index:", indexToRemove);
    // setBlogs((prevBlogs) => prevBlogs.filter((_, index) => index !== indexToRemove));
    dispatch({type: "REMOVE", index:indexToRemove});

  }

  return (
    <>
      <h1>Write a Blog!</h1>

      <div className="section">
        <form onSubmit={handleSubmit}>
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              value={formData.title}
              ref={titleRef}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </Row>

          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              value={formData.content}
              required
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            />
          </Row>

          <button className="btn" type="submit">
            ADD
          </button>
        </form>
      </div>

      <hr />

      <h2>Blogs</h2>
      {blogs.map((blogData, index) => (
        <div className="blog">
        <BlogCard key={index} data={blogData} className="blog" removeBlog={() => removeBlog(index)} />
        </div>
      ))}
    </>
  );
}

function Row({ label, children }) {
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {children}
      <hr />
    </>
  );
}
