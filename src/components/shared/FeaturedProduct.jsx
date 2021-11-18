import React, { useContext }  from 'react'
import { withRouter } from 'react-router-dom';
import { isInCart } from '../../Helpers';
import { CartContext } from '../context/CartContext';
import burger from '../../images/burger.jpg'


const FeaturedProduct = (props) => {
    const { title, imageUrl, price, description, id, history } = props;
    const product = { title, imageUrl, price, id, description}
    const { addProduct, increase, decrease, cartItems } = useContext(CartContext);
    return (
        <div className="overflow-hidden items-center rounded-lg bg-card-background shadow-lg h-auto pb-3 lg:pb-8 md:pb-6 ">
          <div className="rounded-lg center mx-auto mt-6 flex items-center w-4/5 h-2/4">
            <img className ="h-full w-full center rounded-lg text-#fdc762" onClick={() => history.push(`/product/${id}`)} src={imageUrl} alt="spaghetti bolognese" />
  
          </div>
          <div className="px-6 py-4 mx-auto h-40 ">
            <h3 className="text-lg font-semibold text-olive-orange">{title}</h3>
            <p className="text-gray-200">{description}</p>
            <p className="text-gray-200" >N {price}</p>
            
            
          </div>
          {
            !isInCart(product, cartItems) && 
            <div className="flex justify-between bg-green md:pb-2 lg:pb-2 pb-10">
              <div className="add-btns text-2xl text-gray-200 flex justify-between gap-6 px-6">
                <span>+</span><span>-</span>
              </div>
              <button onClick={() => addProduct(product)} className="btn btn-primary rounded-l-full  rounded-r-none bg-olive-orange">
                Order
              </button>

              
            </div>
          }
          {
            isInCart(product, cartItems) && 
            <div className="flex justify-between bg-green md:pb-2 lg:pb-2 pb-10">
              <div className="add-btns text-2xl text-gray-200 flex justify-between gap-6 px-6">
                <span onClick={() => increase(product)}>+</span><span onClick={() => decrease(product)}>-</span>
              </div>
              <button onClick={() => increase(product)} className="btn btn-primary rounded-l-full  rounded-r-none bg-olive-orange">
                Order More
              </button>

              
            </div>
          }
          
        </div>
      )
}

export default withRouter(FeaturedProduct);


