import { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from './Components/navbar.jsx'
import Footer from './Components/Footer.jsx'
import Banner from './Components/banner.jsx'

function App() {
  // const [count, setCount] = useState(0)
const [id, setid] = useState(0)
useEffect(() => {
  const storedId = localStorage.getItem('bannerId')
  if (storedId) {
    setid(parseInt(storedId))
  }
}, [])
  return (
    <>
      <Navbar/>

       <Banner id={id}/>
       <Outlet/>


       
       <Footer/>
    </>
  )
}

export default App
