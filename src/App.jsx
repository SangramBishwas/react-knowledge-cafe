import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Blogs from './Components/blogs'
import Bookmarks from './Components/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddtoBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)

  }
  return (
    <>
      <Header></Header>
      <div className='md:flex m-10'>
        <Blogs handleAddtoBookmarks={handleAddtoBookmarks}
        handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks key={bookmarks.id} bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}


export default App
