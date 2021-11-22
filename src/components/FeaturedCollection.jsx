import React from 'react'
import {useState, useContext} from 'react'
import Featured from './Featured'
import {FoodContext} from './context/FoodContext'

const FeaturedCollection = () => {
    const [foods, setFoods] = useContext(FoodContext);
    const foodItems = foods.filter((food, i) => i < 3).map(food => (
        <Featured {...food} image={food.imageUrl} price={food.price} title={food.title} source = {food.source} order = {food.buttonText} key ={food.id} />
            
        ))
    return (
        <div className="w-full bg-olive-orange ">
            <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8  ">
                        <h2 className="text-xl text-gray-200 text-center">Our foods</h2>
                        <p className="mt-2 text-gray-300 text-center">Selection of our top recipes based on customer demand</p>
                        <div className="mt-6 grid gap-14 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
                            { 
                                foodItems
                            }
                        </div>
                </div>  
        </div>
    )
}

export default FeaturedCollection
