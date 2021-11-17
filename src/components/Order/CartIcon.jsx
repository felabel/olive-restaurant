// import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import banner from '../../images/banner.jpg'
// import { OrdersContext } from '../context/OrdersContext';
// import { Consumer } from '../context/OrdersContext';


const CartIcon = ({ history }) => {
  // const { itemCount } = useContext(OrdersContext)
  return (
    // <OrdersContext.Consumer>
        <div className="cursor-pointer flex" onClick={() => history.push('/orders')}>
          <img src={banner} alt='shopping-cart-icon' className="w-9" />
          <span>5</span>
          {/* {
            itemCount > 0 ? <span className=' w-6 h-6 text-gray-100  bg-olive-orange rounded-xl text-center' id='lblCartCount '> {itemCount} </span> : null
          } */}
            
        </div>
    // </OrdersContext.Consumer>
    
  );
}

export default withRouter(CartIcon); 