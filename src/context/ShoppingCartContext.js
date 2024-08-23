import React, {createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
 
    const addToCart = (product) =>{
        setCartItems( (prev) => {
            const existingProductIndex = prev.findIndex((item) => item.id === product.id)
            if(existingProductIndex >= 0){
                return prev.with(existingProductIndex, {...prev[existingProductIndex],quantity: prev[existingProductIndex].quantity + product.quantity})
            } else {
                return [...prev, product]
            }
        })
    }

    const updateQuantity = (updatedItem) => {
        setCartItems(currentItems =>
            currentItems.map(item =>
                item.id === updatedItem.id ? updatedItem : item
            )
        );
    }

    const removeFromCart = (productId)  => {
        setCartItems(prev => prev.filter(item => item.id !== productId))
    }

    const clearCart = () => {
        setCartItems([])
    };

    const calculateTotalPrice = () => {
        const newTotalPrice = cartItems.reduce((total,item) => {
            return total + item.price * item.quantity
        },0)
        setTotalPrice(newTotalPrice.toFixed(2));
    }

    useEffect(() => {   
        const calculateTotalPrice = () => {
            const newTotalPrice = cartItems.reduce((total,item) => {
                return total + item.price * item.quantity
            },0)
            setTotalPrice(newTotalPrice.toFixed(2));
        };
        calculateTotalPrice();
    },[cartItems])


    return(
        <CartContext.Provider value={{cartItems, addToCart,updateQuantity, removeFromCart, clearCart, totalPrice, calculateTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}