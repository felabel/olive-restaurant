import banner from '../../images/banner.jpg'
import { useContext } from 'react'
import { withRouter } from 'react-router-dom';
import { CartContext } from '../context/CartContext';



const CartIcon = ({ history }) => {
  const { itemCount } =  useContext(CartContext);
  return (
        <div className="cursor-pointer flex ml-8" onClick={() => history.push('/cart')}>
          <img src={banner} alt='shopping-cart-icon' className="w-9" />
          {
            itemCount > 0 ? <span className=' w-6 h-6 text-gray-100  bg-olive-orange rounded-xl text-center'> { itemCount} </span> : null
          }
          
         
            
        </div>
    
  );
}

export default withRouter(CartIcon);