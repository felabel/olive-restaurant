
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
      <div className="min-h-screen mt-10">
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
        
          <div className='cart-page flex justify-around  gap-2 flex-wrap'>
            
          <div className='cart-item-container w-10/12 sm:w-9/12 md:w-9/12 lg:w-3/5 xl:w-3/5 items-center md:mt-0 lg:mt-0 xl:mt-0 '>
            <div className="bg-gray-300 w-full mx-auto h-16 flex flex-1 justify-around vertical-center  font-semibold tracking-wide rounded-t-lg">
              <p className="my-auto">image</p><p className="my-auto">Name & Price</p><p className="my-auto">QTY</p> <p className="my-auto">Adjust</p>
            </div>


              {
                cartItems.map(item => <CartItem {...item} key={item.id} {...cartFuncs} />)
              }

            </div>
            <div className=" mb-10  bg-gray-200 rounded-xl shadow-lg w-80 max-h-64">
              <Total itemCount={itemCount} total={total} clearCart={clearCart} />

            </div>

          </div>
        </>
      } 
      </div>
    </Layout> 
  );
}

export default CartPage;