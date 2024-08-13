import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/navbar.jsx'
import Footer from './Components/Footer.jsx'
import Banner from './Components/banner.jsx'
import mongoose from 'mongoose'  // import mongoose for checking valid ObjectId

function App() {
  const [id, setId] = useState(null)

  useEffect(() => {
    const storedId = localStorage.getItem('id')
    // Check if storedId is a valid ObjectId
    if (storedId && mongoose.Types.ObjectId.isValid(storedId)) {
      setId(storedId)
    } else {
      // Optionally remove the invalid id from localStorage
      localStorage.removeItem('bannerId')
    }
  }, [])

  return (
    <>
      <Navbar />
      {id ? <Banner id={id} /> : <p>No banner available</p>}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
