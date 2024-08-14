import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/ShoppingCartContext";
import QuantityButton from "../components/QuantityButton";

function ShoppingCart(){
    const {cartItems, removeFromCart, updateQuantity, totalPrice} = useCart();
    
   
    return(
        <div className="max-w-7xl mx-auto py-12 px-6">
            <div>
                <div className="mb-4"> 
                    <h1 className="font-playfair font-semibold text-2xl">
                        Your bag
                    </h1>
                    {cartItems.length !== 0 && <p><span className="font-semibold">{cartItems.length} items</span> in your bag.</p>}       
                </div>
                {cartItems.length === 0 ? 
                    (
                        <p>
                            Your cart is empty. <Link to="/shop" className="">Continue shopping</Link>
                        </p>
                    ) : ( 
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-3xl p-6 shadow-xl">
                                {cartItems.map(item =>
                                    <div key={item.id} className="flex justify-between  border-b border-custom-100 py-6 gap-3 ">

                                        <div className="shrink-0">
                                            <div className="w-24 h-24">
                                                <img src={item.src} alt={item.alt} className="h-full w-full object-cover rounded-lg" />
                                            </div>
                                        </div>
                                        

                                        <div className="flex flex-col justify-between grow lg:grid lg:grid-cols-4">                                           
                                            <div className="flex flex-col lg:col-span-2">
                                                <h2 className="text-md font-semibold text-custom-900">{item.name}</h2>
                                                <p className="text-sm text-gray-500">${(item.price.toFixed(2))}</p>
                                            </div>

                                            <div className="flex flex-row justify-between lg:grid lg:grid-cols-2 lg:items-start lg:col-span-2">
                                                <QuantityButton item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart}/>
                                                <div className="text-md font-semibold text-gray-800 lg:col-span-1 lg:justify-self-center">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                            </div>
                                            
                                            
                                        </div>

                                        <div className="flex-shrink-0">
                                            <button onClick={() => removeFromCart(item.id)} className="hover:opacity-70 transition-opacity duration-200">
                                                <img src="/icons/bin-icon.svg" className="h-4 w-full hover:opacity-50 object-cover" alt="Delete button"/>
                                            </button>
                                        </div>

                                    </div>
                                )}
                            </div>

                            <div className="col-span-1  sticky top-28 h-48 bg-white p-6  rounded-3xl shadow-xl" >

                                <div className="flex flex-col space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="uppercase font-bold text-xl">Subtotal</h3>
                                        <p className="font-bold text-xl">${totalPrice}</p>
                                    </div>
                                        <p className="text-xs font-light ">Tax included. Shipping calculated at checkout.</p>
                                        <button className="w-full bg-custom-900 text-white uppercase font-semibold p-3 rounded-lg hover:bg-custom-700 transition duration-200">Checkout</button>
                                    </div>

                                </div>
                            </div>
                        )
                    
                }
            </div>
        </div>
    )
}
export default ShoppingCart;