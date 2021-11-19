



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import CartIcon from "../../Cart/CartIcon";

const Navtest = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-light-bg font-Poppins  shadow-md ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 logo flex lg:text-3xl text-olive-orange text-olive-orange">
            <div className="mx-auto flex items-center  w-4/5 justify-between">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block lg:mr-4">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to='/shop'
                    className="text-gray-200 tracking-wider py-2 hover:text-olive-orange text-sm font-medium px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Menu
                  </Link>

                  <Link
                    to='/about'
                    className="text-gray-200 tracking-wider py-2 hover:text-olive-orange text-sm font-medium px-3 py-2 rounded-md text-sm font-medium"
                  >
                    about
                  </Link>

                  <Link
                    to='/contact'
                    className="text-gray-200 tracking-wider py-2 hover:text-olive-orange text-sm font-medium px-3 py-2 rounded-md text-sm font-medium"
                  >
                    contact
                  </Link>

                  <Link
                    to='/about'
                    className="text-gray-200 tracking-wider py-2 hover:text-olive-orange text-sm font-medium px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Calendar
                  </Link>

                  
                  <div className =" sm:hidden md:block lg:block">
                    <CartIcon />
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              
              <div className =" block">
                <CartIcon className="" />
                </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="mr-4 sm:mr-8 md:mr-8 lg:mr-8 xl:mr-8 bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                    stroke="#ff6e0d"
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
                    stroke="#ff6e0d"
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
          </div>
        </div>

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
            <div className="md:hidden " id="mobile-menu">
              <div ref={ref} className="absolute w-full text-centerh-auto bg-light-bg px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/menu"
                  className="text-center hover:bg-gray-700 text-white block px-3 py-6 rounded-md text-2xl font-medium"
                >
                  Menu
                </Link>

                <Link
                  href="/about"
                  className="text-center text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-6 rounded-md text-2xl font-medium"
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="text-center text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-6 rounded-md text-2xl font-medium"
                >
                  Contact
                </Link>

                <div className ="ml-12 block">
                  <CartIcon className=""/>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
    </div>
  );
}

export default Navtest;