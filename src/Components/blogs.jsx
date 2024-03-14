import { useEffect, useState } from "react";
import Blog from "./blog";
import PropTypes from 'prop-types'
const Blogs = ({handleAddtoBookmarks}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    
    return (
        <div className="w-2/3">  
            <h3 className="text-2xl font-bold">Blogs: {blogs.length}</h3>
            {
                blogs.map((blog) => <Blog
                key={blog.id}
                blog={blog}
                handleAddtoBookmarks={handleAddtoBookmarks}
                ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleAddtoBookmarks: PropTypes.func.isRequired
}

export default Blogs;