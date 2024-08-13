import React, { useEffect, useState } from "react";

const QuantityButton = React.memo(({item, updateQuantity, removeFromCart}) => {
    const [quantity, setQuantity] = useState(item.quantity);

    const handleInputChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity > 0) {
            setQuantity(newQuantity);
            updateQuantity({ ...item, quantity: newQuantity });
        }
    };

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
        <div className="inline-flex border-black border items-center ">
            <button onClick={handleDecrement} className="hover:bg-custom-50 px-2 text-lg" aria-label="Decrease quantity">-</button>
            <input
                min="1"
                max='10'
                value={quantity}
                onChange={handleInputChange}
                className="w-12 text-center font-light outline-none"
            />
            <button onClick={handleIncrement} className="hover:bg-custom-50 px-2" aria-label="Increase quantity">+</button>
        </div>
    );
});

export default QuantityButton;
