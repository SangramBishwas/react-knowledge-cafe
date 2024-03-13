import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog }) => {
    const {author_name, title, cover, author_img, reading_time, posted_date, hashTags} = blog
    console.log(blog)
    return (
        <div className='space-y-6 m-10'>
            <img className='h-1/2 rounded' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-4 mb-4 w-full'>
                    <img src={author_img} alt="" />
                    <div className='flex justify-between items-center w-full'> 
                        <div>
                        <h3 className='font-bold text-xl'>{author_name}</h3>
                        <p>{posted_date}</p>
                        </div>
                        <div className='flex gap-3'>
                            <p>{reading_time} minutes read</p>
                            <button><FaBookmark /></button>   
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <h2 className='font-bold text-xl'>{title}</h2>
            <p>
                {
                    hashTags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired
}
export default Blog;