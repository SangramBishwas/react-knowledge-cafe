import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="w-1/3 h-1/3 bg-[#1111110D] p-5 rounded-xl">
            <div className='bg-[#6047EC1A] rounded-xl'>
                <h3 className='text-center text-xl text-[#6047EC] font-semibold p-3 m-3'>Spent time on reading: {readingTime}</h3>
            </div>
            <h3 className="text-center text-2xl font-bold">Bookmarks: <span className="text-lime-700">{bookmarks.length}</span></h3>
            {
                bookmarks.map((bookmark) => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number.isRequired
};

export default Bookmarks;