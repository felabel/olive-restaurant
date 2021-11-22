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
      <div className="w-full bg-dark-background ">
            <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8  ">
                        <h2 className="text-xl text-gray-200 text-center">Delicacies for You</h2>
                        <p className="mt-2 text-gray-300 text-center">Chose from our delicacies, made specially for you</p>
                        <div className="mt-6 grid gap-8 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 w-5/6 md:w-full sm:w-full lg:w-5/6 mx-auto">
                            { 
                                allProducts
                            }
                        </div>
                </div>  
        </div>
    </Layout>
  );
}

export default Shop;
