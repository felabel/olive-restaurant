import React, { useContext} from 'react'
import Featured from './Featured'
import { FoodContext } from './context/FoodContext'
import Layout from './Layout'

const Menu = () => {
    const [foods, setFoods] = useContext(FoodContext);
    const allFoods = foods.map(food => (
        <Featured {...food} key={food.id} />
    ))
    return (
        <Layout>
             <div className="w-full bg-dark-background ">
            <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8  ">
                        <h2 className="text-xl text-gray-200 text-center">Our Menu</h2>
                        <div className="mt-6 grid gap-14 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
                            { 
                                allFoods
                            }
                        </div>
                </div>  
        </div>
        </Layout>
    )
}

export default Menu
