
import React from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../icons/Index';

const CartItem = (product) => {
  const { title, imageUrl, price, quantity, increase, decrease, removeProduct } = product;
  return (
    <div className='h-auto w-full'>
      <div className='flex md:flex lg:flex xl:flex h-auto w-full text-center  m2 p-2  justify-around rounded-lg shadow-lg flex-1'>
        <div className='item-image h-36 md:h-56 lg:h-56 xl-56 w-24 md:w-48 lg:w-48 xl:w-48 pr-2 lg:mr-20 md:mr-2 sm:mr-12'>
              <img src={imageUrl} alt='product' className="h-full w-full" />
        </div>
          <div className='name-price w-22 my-auto text-left'>
              <h4 className="m-0  font-semibold tracking-wide">{title}</h4>
              <p className="text-base font-semibold tracking-wide py-2">{`$${price}`}</p>
          </div>
          <div className='quantity w-22 my-auto font-semibold tracking-wide flex-1'>
              <p>{` ${quantity}`}</p>
            </div>
            <div className='btns-container w-22 my-auto block md:flex xl:flex lg:flex md:gap-4 lg:gap-4 '>
              <button className="btn-increase px-4 py-2 bg-olive-orange rounded-md block mb-2 md:mb-0 lg:mb-0 xl:mb-0"
                onClick={() => increase(product)}
                
              >
                <PlusCircleIcon width='20px' />
              </button>
              {
                quantity === 1 && 
                <button
                  onClick={() => removeProduct(product)}
                  className=' btn-trash text-gray-100 px-4 py-2 bg-olive-orange rounded-md block'
                >
                  <TrashIcon width='20px' />
                </button>
              }
              { 
                quantity > 1 && 
                <button 
                onClick={() => decrease(product)}
                className=' btn-decrease text-gray-100 px-4 py-2 bg-olive-orange rounded-md block'
                >
                  <MinusCircleIcon width='20px' />
                </button>
              }
              
            </div>
            
      </div>
      {/* <div className="flex">

        <div className="wishlist flex">
          <span>love</span>
          <span className="remove"><TrashIcon width='20px'></TrashIcon></span>
        </div>
        
      </div> */}
      
      
    </div>
  );
}

export default CartItem;