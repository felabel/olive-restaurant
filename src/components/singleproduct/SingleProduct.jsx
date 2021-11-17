import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { ProductsContext } from '../../context/ProductsContext';
import { isInCart } from '../../Helpers';
import { CartContext } from '../context/CartContext';
import Layout from '../Layout';

const SingleProduct = ({ match, history }) => {
  const { push } = history;
  const { products } = useContext(ProductsContext);
  const { id }= match.params;
  // add product to cart
  const { addProduct, cartItems } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    // check to see if the id from the route param matches a product
    const product = products.find((item) => Number(item.id) === Number(id));
    
    // if the product does not exist, we redirect back to the shop
    if (!product) { 
      return push('/shop') 
    }
    // set the product as the state
    setProduct(product);
  }, [product, push, id, products]);

  // before using the product, we need to momentarily return null,
  // because the product will be null for a split second - in that time we'll
  // just return null - we could add a spinner here instead
  if (!product) { return null }
  // pull off the props from product
  const { imageUrl, title, price, description } = product;
  return (
    <Layout>
      <div className='my-2 mb-2 p-4 flex justify-center items-center '>
        <div className='product-image m-4 '>
          <img src={imageUrl} alt='product' />
        </div>
        <div className='product-details'>
          <div className='name-price m-2'>
            <h3>{title}</h3>
            <p>${price}</p>
          </div>

          <div className='product-description'>
            <p className="trackind-wider">
              {description}
            </p>
          </div>
          <div className='add-to-cart-btns'>
            {
              !isInCart(product, cartItems) &&
              <button 
              className="btn m-4" 
              id='btn-white-outline' onClick={() => addProduct(product)}>
              ADD TO CART
            </button>
            }
            {
              isInCart(product, cartItems) &&
              <button 
              className="btn m-4" 
              id='btn-white-outline' onClick={() => addProduct(product)}>
              ADD MORE
            </button>
            }
            
            <button 
              className="btn btn-primary m-2" 
              id='buy-it-now-btn' 
              onClick={() => history.push('/cart')}>
              PROCEED TO CHECKOUT
            </button>
          </div>
          
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(SingleProduct);