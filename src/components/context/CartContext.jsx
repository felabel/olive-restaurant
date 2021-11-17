import { createContext, useReducer } from 'react';
import CartReducer, { sumItems} from './CartReducer';

export const CartContext = createContext();

const cartFromStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = { cartItems: cartFromStorage, ...sumItems(cartFromStorage) };


// const initialState = { cartItems: [], itemCount: 0, total: 0};

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    // adding product to cart
    const addProduct = payload => {
        dispatch({type: 'ADD_ITEM', payload});
    }

    // increasing the quantity of the product
    const increase = payload => {
        dispatch({type: 'INCREASE', payload})
      }

    //   decrease quantity
    const decrease = payload => {
        dispatch({type: 'DECREASE', payload});
      }

        // remove item
    const removeProduct = payload => {
    dispatch({type: 'REMOVE_ITEM', payload})
    }

    // clear cart
    const clearCart = () => {
        dispatch({type: 'CLEAR'});
      }

    const contextValues = {
        ...state,
        addProduct,
        increase,
        decrease,
        removeProduct,
        clearCart,
    }
    return (
        <CartContext.Provider value={contextValues}>
            { children }
        </CartContext.Provider>


    )
}

export default CartContextProvider