
import React, { useContext } from 'react';
import Layout from '../../Layout';
import CartItem from './CartItem';
import Total from './Total';
import { Link } from 'react-router-dom';


import { CartContext } from '../../context/CartContext';

const CartPage = () => {
  const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext);
  const cartFuncs = { increase, decrease, removeProduct };
  return (
    <Layout>
      <>
      <h1 className='text-center'>Cart</h1>
      {
        cartItems.length === 0 
        ? 
        <div className='text-center'><p className="p-4">Your cart is empty</p> 
        <Link to='/shop' className="tracking-wider mx-4 py-2 hover:text-olive-orange bg-gray-100 border-2 border-orange-olive">
          Make an Order
      </Link>
        </div>
        :
        <> 
          <div className='cart-page flex justify-around '>
            <div className='cart-item-container w-8/12 items-center'>

              {
                cartItems.map(item => <CartItem {...item} key={item.id} {...cartFuncs} />)
              }

            </div>
            
            <Total itemCount={itemCount} total={total} clearCart={clearCart} />

          </div>
        </>
      } 
      </>
    </Layout> 
  );
}

export default CartPage;