
import React from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../icons/Index';

const CartItem = (product) => {
  const { title, imageUrl, price, quantity, increase, decrease, removeProduct } = product;
  return (
    <div className='flex h-56 w-full text-center border-2 border-#ccc m2 p-2 bg-light-bg justify-between'>
      <div className='item-image h-18 mx-auto'>
        <img src={imageUrl} alt='product' className="h-1/2" />
      </div>
      <div className='name-price w-22'>
        <h4 className="m-0">{title}</h4>
        <p className="text-base">{`Price: ${price}`}</p>
      </div>
      <div className='quantity'>
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className='btns-container'>
        <button className="btn-increase btn btn-primary"
          onClick={() => increase(product)}
          
        >
          <PlusCircleIcon width='20px' />
        </button>
        {
          quantity === 1 && 
          <button
            onClick={() => removeProduct(product)}
            className='btn-trash text-gray-100 bg-red border-2 border-red'
          >
            <TrashIcon width='20px' />
          </button>
        }
        { 
          quantity > 1 && 
          <button 
          onClick={() => decrease(product)}
          className='btn-decrease text-gray-100 bg-red border-2 border-red'
          >
            <MinusCircleIcon width='20px' />
          </button>
        }
         
      </div>
    </div>
  );
}

export default CartItem;