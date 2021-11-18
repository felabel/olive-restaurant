import React, { useContext } from 'react';

import Layout from '../../Layout';
import FeaturedProduct from '../../shared/FeaturedProduct';
import { ProductsContext } from '../../../context/ProductsContext';


const Shop = () => {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map(product => (
    <FeaturedProduct {...product} key={product.id} />
    ));
    
  return (
    <Layout>
      <div className='justify-center items-center w-full bg-light-bg '>
        <h2 className=' text-center text-gray-100'>Menu</h2>
        <div className='w-5/6 mx-auto  cursor-pointer mt-6 grid gap-14 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2'>
          {
            allProducts
          }
        </div>
      </div>
    </Layout>
  );
}

export default Shop;