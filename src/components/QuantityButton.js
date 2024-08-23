import React, {  useState } from "react";

const QuantityButton = React.memo(({item, updateQuantity, removeFromCart}) => {
    const [quantity, setQuantity] = useState(item.quantity);

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateQuantity({ ...item, quantity: newQuantity });
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateQuantity({ ...item, quantity: newQuantity });
        } else { 
            removeFromCart(item.id);
        }
    };

    return (
        <div className="flex flex-row justify-center items-center space-x-2 bg-custom-50 rounded-lg lg:col-span-1 lg:justify-self-center ">
            <button onClick={handleDecrement} className="px-3 bg-custom-900 text-white rounded-l-lg border border-custom-900 hover:bg-custom-700 transition duration-200 ease-in-out" aria-label="Decrease quantity">-</button>
            <p className="w-7 text-center font-light outline-none bg-custom-50 ">{quantity}</p>
            <button onClick={handleIncrement} className="px-3 bg-custom-900 text-white rounded-r-lg border border-custom-900 hover:bg-custom-700 transition duration-200 ease-in-out" aria-label="Increase quantity">+</button>
        </div>
    );
});

export default QuantityButton;
