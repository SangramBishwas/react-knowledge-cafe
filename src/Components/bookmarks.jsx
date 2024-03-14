import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="w-1/3 bg-[#1111110D] p-5 rounded-xl">
            <h3 className="text-center text-2xl font-bold">Bookmarks: <span className="text-lime-700">{bookmarks.length}</span></h3>
            {
                bookmarks.map((bookmark) => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired
};

export default Bookmarks;