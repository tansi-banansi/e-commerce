import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/ShoppingCartContext";
import QuantityButton from "../components/QuantityButton";

function ShoppingCart(){
    const {cartItems, removeFromCart, updateQuantity, totalPrice} = useCart();
    
   
    return(
        <div className="max-w-7xl mx-auto py-12 px-6">
            <div>
                <div> 
                    <h1 className="font-playfair font-semibold text-2xl mb-6">
                        Your bag
                    </h1>           
                </div>
                {cartItems.length === 0 ? 
                    (
                        <p>
                            Your cart is empty. <Link to="/shop" className="">Continue shopping</Link>
                        </p>
                    ) : ( 
                        <div className="grid grid-cols-1">
                            <div className="col-span-1">
                                {cartItems.map(item =>
                                    <div key={item.id} className="grid grid-cols-3 border-b border-custom-200 py-10 ">

                                        <div className="col-span-1">
                                            <div className="w-32 h-32">
                                                <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
                                            </div>
                                        </div>

                                        <div className="col-span-2 grid-cols-2">
                                            <h2 className="font-medium col-span-2 ">{item.name}</h2>
                                            <div className="col-span-1">
                                                <p className="text-sm font-light">${(item.price.toFixed(2))}</p>
                                            </div>
                                            <div className="col-span-1">
                                                <QuantityButton item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart}/>
                                            </div>
                                        </div>

                                        

                                        <div className="col-span-1">

                                            
                                            <div className="col-span-1 ">
                                                
                                            </div>

                                            <div className="col-span-1 font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</div>

                                            <div className="col-span-1">
                                                <button onClick={() => removeFromCart(item.id)}>
                                                    <img src="/icons/bin-icon.svg" className="h-4 hover:opacity-50 text-black" alt="Delete button"/>
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="col-span-2 sticky top-28 h-48" >
                                <div className=" bg-custom-50 py-10 px-6 space-y-3 ">
                                    <div className="flex justify-between">
                                        <h3 className="uppercase font-bold text-xl">Subtotal</h3>
                                        <p className="font-bold text-xl">${totalPrice}</p>
                                    </div>
                                        <p className="text-xs font-light">Tax included. Shipping calculated at checkout.</p>
                                        <button className="w-full bg-custom-900 text-white uppercase font-semibold p-3 hover:bg-custom-800">Checkout</button>
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