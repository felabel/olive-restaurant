import { Link } from 'react-router-dom';
import CartIcon from './Cart/CartIcon'

const Header = () => {
    return (
        <header className ='bg-light-bg font-Poppins w-full h-auto  shadow-md overflow-hidden '>
            <nav className="container  mx-auto flex items-center   py-4 gap-4 w-4/5">
                <div className="logo flex lg:text-3xl text-olive-orange text-olive-orange mx-8 lg:mx-0 overflow-hidden">
                <Link to='/'>
                    Olive 
                </Link>
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
                    <div className ="">
                       <CartIcon /> 
                    </div>
                   
                </div> 
            </nav>
            
        </header>
    )
}

export default Header