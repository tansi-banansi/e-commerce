import React from "react";
import { Link } from "react-router-dom";


function Footer(){
    return(
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-4  gap-4">
            <div className="flex flex-col space-y-1 font-thin ">
                <h2 className="font-playfair font-bold text-2xl mb-2">Shop</h2>
                <Link to="/shop"  className="hover:opacity-60">All Products</Link>
                <Link to="/shop/face" className="hover:opacity-60">Face</Link>
                <Link to="/shop/body" className="hover:opacity-60">Body</Link>
                <Link to="/shop/accessories" className="hover:opacity-60">Accessories</Link>

            </div>
            <div className="flex flex-col">
                <h2>Our Store</h2>


            </div>
            <div className="flex flex-col">
                <h2>Policy</h2>
                <Link to="/shipping-policy">Shippting & Returns</Link>
                <Link to="/store-policy">Store Policy</Link>
                <Link to="/FAG">FAG</Link>
            

            </div>

            <div className="flex flex-col">
                <h2>Customer Service</h2>
            </div>


        </div>
        
    )
}

export default Footer;