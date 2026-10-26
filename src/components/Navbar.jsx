import React , { useState, useEffect } from 'react'
import Axio from './Axio.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
   const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem('isdark'))
  );
  useEffect(() => {
    localStorage.setItem('isdark', JSON.stringify(isdark));
  }, [isdark]);

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 m-2 rounded-2xl">
        <div className="ml-5">
          <div className="flex justify-between items-center">
            <div className=""><img src={Axio} alt=""  className='h-10 w-10 rounded-full '/></div>
            <div>
              <ul className="flex space-x-4">

                <li>
                  <Link to='/'>
                    <button className='bg-gray-500 font-medium uppercase text-white py-2 px-4 rounded-full ml-4 transition-all duration-150 shadow-md active:scale-95 active:shadow-2xl'>Home</button>
                  </Link>
                </li>
                
                <li><a href="https://pust.ac.bd/academic/faculties" target='blank' className="hover:text-gray-300">
                    <button className='bg-gray-500 font-medium uppercase text-white py-2 px-4 rounded-full ml-4 transition-all duration-150 shadow-md active:scale-95 active:shadow-2xl'>Department</button>
                </a></li>


                <li>
                  <Link to='/axiomites'>
                    <button className='bg-gray-500 font-medium uppercase text-white py-2 px-4 rounded-full ml-4 transition-all duration-150 shadow-md active:scale-95 active:shadow-2xl '>
                      Axiomites
                    </button>
                  </Link>
                </li>


              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
