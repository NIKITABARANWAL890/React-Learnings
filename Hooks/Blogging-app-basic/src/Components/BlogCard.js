import "../index.css";

export default function BlogCard({ data, index, removeBlog }) {
    return (
        <div className="blog-card">
            <h3>{data.title}</h3>
            <p>{data.content}</p>
            <button className="remove" onClick={() => removeBlog(index)}>Remove</button>
            {/* <hr /> */}
        </div>
    );
}
