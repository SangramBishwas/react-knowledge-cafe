import './App.css'
import Header from './Components/Header'
import Blogs from './Components/blogs'
import Bookmarks from './Components/bookmarks'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex m-10'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
     
    </>
  )
}

export default App
