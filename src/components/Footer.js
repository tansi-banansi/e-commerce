import React from "react";
import { Link } from "react-router-dom";
import MailingListForm from "./MailingListForm";


function Footer() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 gap-y-8 lg:gap-10 lg:grid-cols-3 text-center md:text-start bg-charcoal-gray text-soft-white">

            <MailingListForm />

            <div className="grid grid-cols-1 col-span-2 md:grid-cols-3 w-full gap-8">
                <div className="flex flex-col space-y-2 font-thin text-sm">
                    <h2 className="font-playfair font-semibold text-2xl mb-1.5">Policy</h2>
                    <Link to="/shipping-policy" className="hover:text-dusty-rose transition-colors duration-300">Shipping & Returns</Link>
                    <Link to="/store-policy" className="hover:text-dusty-rose transition-colors duration-300">Store Policy</Link>
                    <Link to="/FAQ" className="hover:text-dusty-rose transition-colors duration-300">FAQ</Link>
                </div>
                <div className="flex flex-col space-y-2 font-thin text-sm">
                    <h2 className="font-playfair font-semibold text-2xl mb-1.5">Our Store</h2>
                    <div>
                        <p>Address Line 1</p>
                        <p>Address Line 2</p>
                    </div>
                    <div className="mt-2">
                        <p>Monday-Friday: 11am-10pm</p>
                        <p>Saturday-Sunday: 11am-12pm</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 font-thin text-sm">
                    <h2 className="font-playfair font-semibold text-2xl mb-1.5">Customer Service</h2>
                    
                    <div>
                        <p>Tel: 123-456-7890</p>
                        <p>Email: <a href="mailto:info@mysite.com" className="hover:text-dusty-rose transition-colors duration-300">info@mysite.com</a></p>
                    </div>

                    <div className="flex items-center justify-center md:justify-start space-x-2 mt-4">
                        <a href="/" className="hover:opacity-80 transition-opacity duration-200">
                            <img src="/icons/facebook-icon-white.svg" alt="Facebook" className="w-6 h-6 object-contain"/>
                        </a>
                        <a href="/" className="hover:opacity-80 transition-opacity duration-200">
                            <img src="/icons/instagram-icon-white.svg" alt="Instagram" className="w-6 h-6 object-contain"/>
                        </a>
                        <a href="/" className="hover:opacity-80 transition-opacity duration-200">
                            <img src="/icons/youtube-icon-white.svg" alt="YouTube" className="w-6 h-6 object-contain"/>
                        </a>
                        <a href="/" className="hover:opacity-80 transition-opacity duration-200">
                            <img src="/icons/tiktok-icon-white.svg" alt="TikTok" className="w-6 h-5 object-contain"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
