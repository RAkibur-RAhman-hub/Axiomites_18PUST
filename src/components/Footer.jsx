import React from 'react'

const Footer = () => {
  return (
    <div>
     <footer className="footer sm:footer-horizontal footer-center bg-gray-600 text-base-content p-4 rounded-xl flex justify-center">
        <aside>
            <p>
                Copyright © {new Date().getFullYear()} - Axiomites-18th,ICE,PUST
            </p>

        </aside>
    </footer>
    </div>
  )
}

export default Footer
