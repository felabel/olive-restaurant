// import React from 'react';

// const Footer = () => {
//   const year = new Date().getFullYear();
//   return(
//     <div className='footer w-1/2 my-4 mx-auto t-center bottom-0 bg-olive-orange'>
//       {year} © OLIVE FOOD COURT 
//     </div>
//   );
// }

// export default Footer;

import React from 'react'
// import logomain from './logomain.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear();
    return (
      <div className ='mt-0 w-full overflow-hidden'>
          {/* <section className="bg-light-bg text-white py-20 ">
            <div className="container">
                <div className="sm:w-3/4 lg:w-2/4 mx-auto">
                    <h1 className="text-3xl text-center">Have a question in mind? Get in touch.</h1>
                    <div className="flex flex-col sm:flex-row gap-6 mt-8">
                        <input type="text" placeholder="Enter your E mail" className="focus:outline-none text-bookmark-grey flex-1 px-2 py-2 rounded-md " />

                        <button type="button" className="btn bg-bookmark-red border border-bookmark-red hover:bg-bookmark-white hover:text-bookmark-red hover:border-bookmark-red">
                            Contact Us
                        </button>
                     </div>
                </div>
            </div>
        </section> */}
        <footer className="bg-gray-800 py-8">
            <div className="container flex flex-col md:flex-row items-center justify-between">
                {/* left footer */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-12 lg:ml-16 ">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                    />
                    <ul className="flex text-white uppercase gap-12 text-xs ">
                      
                        <li className="cursor-pointer hover:text-bookmark-red">
                          <Link to='/shop'>Menu</Link>
                        </li>
                        <li className="cursor-pointer hover:text-bookmark-red">
                          <Link to='/about'>about</Link>
                        </li>
                        <li className="cursor-pointer hover:text-bookmark-red">
                          <Link to='/contact'>contact</Link>
                        </li>
                        <li className="cursor-pointer hover:text-bookmark-red">
                          <Link to='/shop'>Menu</Link>
                        </li>

                    </ul>
                    
                </div>
                <div className="text-gray-100 mt-4 md:mt-0 lg:mt-0">{year} © OLIVE FOOD COURT </div>
                <div className="flex gap-10 mt-12 md:mt-0">
                        <li className="text-white text-2xl list-none"><FontAwesomeIcon icon={faTwitter} /></li>
                        <li className="text-white text-2xl  list-none"><FontAwesomeIcon icon={faFacebookSquare} /></li>
                </div>
            </div>

        </footer>
        </div>
        
    )
}

export default Footer

