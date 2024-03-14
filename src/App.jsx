import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Blogs from './Components/blogs'
import Bookmarks from './Components/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddtoBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex m-10'>
        <Blogs handleAddtoBookmarks={handleAddtoBookmarks}></Blogs>
        <Bookmarks key={bookmarks.id} bookmarks={bookmarks}></Bookmarks>
      </div>

    </>
  )
}


export default App
