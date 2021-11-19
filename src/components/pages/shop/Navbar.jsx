import { Link } from 'react-router-dom';
import CartIcon from '../../Cart/CartIcon';
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className ='bg-light-bg font-Poppins w-full h-auto  shadow-md overflow-hidden '>
            <nav className="container  mx-auto flex items-center   py-4 gap-4 w-4/5">
                <div className="flex-shrink-0">
                    <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                    />
                </div>
                <div className="flex flex-1">
                    <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 md:gap-12 lg:gap-12 xl:gap-12 2xl:gap-12 text-base lg:text-base text-white ">
                        
                        <li className="cursor-pointer md:text-sm">
                            <Link to='/shop' className="tracking-wider py-2 hover:text-olive-orange">
                                Menu
                            </Link>
                        </li>
                        <li className="cursor-pointer md:text-sm">
                            <Link to='/about' className="tracking-wider py-2 hover:text-olive-orange">About</Link>
                        </li>
                        <li className="cursor-pointer md:text-sm ">
                            <Link to='/contact' className="tracking-wider py-2 hover:text-olive-orange">Contact</Link>
                        </li>
                       
                    
                    </ul>
                    <div className ="hidden sm:hidden md:block lg:block">
                       <CartIcon />
                    </div>
                   
                </div> 
                <div className="-mr-2 flex md:hidden sm:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    ) : (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* mobile menu for smaller screens */}
            <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* mobile menu for smaller screens */}
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
            {/* end of mobile menu */}

            </nav>
            
        </header>
    )
}

export default Navbar