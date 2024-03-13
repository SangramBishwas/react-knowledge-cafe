import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const {author_name, cover, author_img, reading_time, posted_date} = blog
    console.log(blog)
    return (
        <div className='space-y-6 m-10'>
            <img className='h-1/2 w-4/5 rounded' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-4 mb-4'>
                    <img src={author_img} alt="" />
                    <div className='flex justify-between'>
                        <div>
                        <h3 className='font-bold text-xl'>{author_name}</h3>
                        <p>{posted_date}</p>
                        </div>
                        <div>
                            <p>{reading_time} minutes</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired
}
export default Blog;