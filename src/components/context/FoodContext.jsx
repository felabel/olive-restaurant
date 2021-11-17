import React, {useState, createContext} from 'react'
// creating the food context
export const FoodContext = createContext()

export const FoodProvider = (props) => {
       // state for the details
       const [foods, setFoods] = useState([
        {
            title: 'Dougnut',
            source: 'Delicious soft Dougnut',
            price: 500,
            imageUrl: "url('./images/pizza.jpg')",
            id: 1,
            buttonText: 'Order'
        },
        {
            title: 'Peach',
            source: 'Fresh soft Peach',
            price: 300,
            imageUrl: 'url(/images/peaches.jpg)',
            id: 2,
            buttonText: 'Order'
        },
        {
            title: 'Pasta',
            source: 'Delicous pasta',
            price: 1500,
            imageUrl: '../images/banner.jpg',
            id: 3,
            buttonText: 'Order'
        },
        {
            title: 'Dougnut',
            source: 'Delicious soft Dougnut',
            price: 500,
            imageUrl: '../images/banner.jpg',
            id: 4,
            buttonText: 'Order'
        },
        {
            title: 'Peach',
            source: 'Fresh soft Peaches',
            price: 300,
            imageUrl: '../images/peach.jpg',
            id: 5,
            buttonText: 'Order'
        },
        {
            title: 'Pasta',
            source:'Delicous pasta',
            price: 1500,
            imageUrl: '../images/banner.jpg',
            id: 6,
            buttonText: 'Order'
        }
    ]);
    return (
        <div>
            <FoodContext.Provider value={[foods, setFoods]}>
                {props.children}
            </FoodContext.Provider>
        </div>
    )
}

