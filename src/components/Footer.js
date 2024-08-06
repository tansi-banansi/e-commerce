import React from "react";
import { Link } from "react-router-dom";


function Footer(){
    return(
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 text-center md:text-start">
            <div className="w-full sm:w-auto ">
                <div className="flex flex-col space-y-2 font-thin">
                    <h2 className="font-playfair font-bold text-2xl mb-1.5">Shop</h2>
                    <Link to="/shop" className="hover:opacity-60 transition-opacity duration-200 text-sm">All Products</Link>
                    <Link to="/shop/face" className="hover:opacity-60 transition-opacity duration-200 text-sm">Face</Link>
                    <Link to="/shop/body" className="hover:opacity-60 transition-opacity duration-200 text-sm">Body</Link>
                    <Link to="/shop/accessories" className="hover:opacity-60 transition-opacity duration-200 text-sm">Accessories</Link>
                </div>
            </div>
            <div className="w-full sm:w-auto">
                <div className="flex flex-col space-y-2 font-thin text-sm">
                    <h2 className="font-playfair font-bold text-2xl mb-1.5">Our Store</h2>
                    <div className="space-y-4">
                        <div className="">
                            <p>Address Line 1</p>
                            <p>Address Line 2</p>
                        </div>
                        <div>
                            <p>Monday-Friday: 11am-10pm</p>
                            <p>Saturday-Sunday: 11am-12pm</p>
                        </div>
                        <div>
                            <p>Tel: 123-456-7890</p>
                            <p>Email: <a href="mailto:info@mysite.com" className="hover:opacity-60 transition-opacity duration-200">info@mysite.com</a></p>
                        </div>

                    </div>
                   
                </div>
            </div>
            <div className="w-full sm:w-auto">
                <div className="flex flex-col space-y-2 font-thin text-sm">
                    <h2 className="font-playfair font-bold text-2xl mb-1.5">Policy</h2>
                    <Link to="/shipping-policy" className="hover:opacity-60 transition-opacity duration-200 text-sm">Shipping & Returns</Link>
                    <Link to="/store-policy" className="hover:opacity-60 transition-opacity duration-200 text-sm">Store Policy</Link>
                    <Link to="/FAQ" className="hover:opacity-60 transition-opacity duration-200 text-sm">FAQ</Link>
                </div>
            </div>
            <div className="w-full sm:w-auto">
                <div className="flex flex-col space-y-2 font-thin text-sm">
                    <h2 className="font-playfair font-bold text-2xl mb-1.5">Customer Service</h2>
                    <div className="space-y-4">
                        <div>
                            <p>Tel: 123-456-7890</p>
                            <p>Email: <a href="mailto:info@mysite.com" className="">info@mysite.com</a></p>
                        </div>
                        <div className="flex items-center space-x-2 h-auto">
                            <a href="/" className="hover:opacity-60 transition-opacity duration-200">
                                <img src="/icons/facebook-icon-white.svg" alt="Facebook" className="w-6 h-6 object-contain"/>
                            </a>
                            <a href="/" className="hover:opacity-60 transition-opacity duration-200">
                                <img src="/icons/instagram-icon-white.svg" alt="Instagram" className="w-6 h-6 object-contain"/>
                            </a>
                            <a href="/" className="hover:opacity-60 transition-opacity duration-200">
                                <img src="/icons/youtube-icon-white.svg" alt="YouTube" className="w-6 h-6 object-contain"/>
                            </a>
                            <a href="/" className="hover:opacity-60 transition-opacity duration-200">
                                <img src="/icons/tiktok-icon-white.svg" alt="TikTok" className="w-6 h-5 object-contain"/>
                            </a>
                        </div>

                        <div>
                            <p>@2024 by TodorovaTech</p>
                        </div>
                       

                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default Footer;


