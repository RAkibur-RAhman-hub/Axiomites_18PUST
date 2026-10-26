import React from 'react'
import {useState, useEffect} from 'react'
import Cover from './Cover.png'
import Axio from './Axio.png'
import Navbar from './Navbar.jsx'
import { Routes,Route } from 'react-router-dom'
import Axiomites from './Axiomites.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'

const Frontpage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000)
        return () => clearTimeout(timer);
    }, [])

    if (isLoading) {
        return (
            <div className='h-screen w-screen bg-black flex justify-center items-center animate-fade'>
                <img src={Cover} className='h-full w-full object-center animate-pulse' />
            </div>
        )
    }

  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/axiomites' element={<Axiomites />} />
        </Routes>

       <Footer />

    </div>
  )
}

export default Frontpage
