import React from 'react'

const Home = () => {
  return (
    <div className='m-7'>
        <div className="card lg:card-side bg-base-100 shadow-sm gap-23">
               <div className="hover-3d">
                <figure className=" rounded-2xl">
                    <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="3D card" className='w-220 h-140' />
                </figure>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>
            <div className="card-body bg-gray-700 rounded-2xl w-50">
                <p className='font-bold text-mauve-400 text-xl px-7'>
                    Welcome to the digital home of the 18th Batch, Department of Information & Communication Engineering (ICE) at PUST. Excellence, Innovation, and Unity.
                </p>
                <h1 className="card-title font-bold text-6xl py-11 px-7">What is Axiomites??</h1>
                <h2 className='text-4xl text-gray-500 px-7'>Axiomites</h2>
                <p className='px-7 font-medium'> (Root: Axiom) <br />
                    Individual: Axiomite <br />
                    Concept: An axiom is the self-evident, undeniable truth upon which all mathematics, logic gates, and system laws are established.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home
