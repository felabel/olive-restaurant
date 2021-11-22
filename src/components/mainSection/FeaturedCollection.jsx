import React, { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import FeaturedProduct from '../shared/FeaturedProduct';

const FeaturedCollection = () => {
    const {products} = useContext(ProductsContext);
    const productItems = products.filter((product, i) => i < 3).map(product => (
        <FeaturedProduct {...product} key={product.id} />
      ));
    return (
        <div className="w-full bg-dark-background ">
            <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8  ">
                        <h2 className="text-xl text-gray-200 text-center">Popular foods</h2>
                        <p className="mt-2 text-gray-300 text-center">Selection of our top recipes based on customer demand</p>
                        <div className="mt-6 grid gap-8 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 w-5/6 md:w-full sm:w-full lg:w-5/6 mx-auto">
                            { 
                                productItems
                            }
                        </div>
                </div>  
        </div>
    )
}

export default FeaturedCollection
