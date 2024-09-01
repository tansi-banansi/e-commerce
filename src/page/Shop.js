import React, { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import FilterByPrice from "../components/FilterByPrice";

function Shop() {
    const { category } = useParams();
    const [priceValue, setPriceValue] = useState(20);

    return (
        <div className="mx-auto 2xl:max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-6 2xl:px-0  ">
                <div className="flex flex-row md:flex-col justify-between md:justify-start col-span-1 md:h-screen sticky top-24">
                    <div className="flex items-center space-x-2 mb-6">
                        <Link to="/" className="text-lg font-light tracking-wide underline text-charcoal-gray hover:text-dusty-rose transition-colors duration-300">Home</Link>
                        <img src="/icons/navigation-arrow.svg" alt="arrow" className="w-3 h-3" />
                        {category ? (
                            <h2 className="text-lg font-extralight tracking-wide capitalize text-charcoal-gray">{category}</h2>
                        ) : (
                            <h2 className="text-lg font-extralight tracking-wide text-charcoal-gray">All</h2>
                        )}
                    </div>

                   
                        <input type='checkbox' className="peer hidden" id="toggle-checkbox" />
                        <label  htmlFor="toggle-checkbox" className='flex justify-between items-center cursor-pointer transition-all duration-300 group'>
                            <p className='group-hover:text-dusty-rose transition-all duration-300 text-lg font-extralight tracking-wide text-charcoal-gray'>Filter</p>
                        </label>

        
                   
                    <div className='hidden peer-checked:block '>
                            <FilterByPrice priceValue={priceValue} setPriceValue={setPriceValue} />     
                        </div>
                    

                    <div className="hidden md:block">
                        <div className="flex flex-col space-y-3 md:space-y-4">
                            <h2 className="border-b pb-4 border-light-gray font-playfair text-xl md:text-2xl tracking-wide text-charcoal-gray font-bold ">Browse By</h2>
                            <Link to="/shop" className="text-lg font-light tracking-wide text-charcoal-gray hover:text-dusty-rose transition-colors duration-300">All Products</Link>
                            <Link to="/shop/best-sellers" className=" text-lg font-light tracking-wide text-charcoal-gray hover:text-dusty-rose transition-colors duration-300">Best Sellers</Link>
                            <Link to="/shop/face" className="text-lg font-light tracking-wide text-charcoal-gray hover:text-dusty-rose transition-colors duration-300 ">Face</Link>
                            <Link to="/shop/body" className="text-lg font-light tracking-wide text-charcoal-gray hover:text-dusty-rose transition-colors duration-300">Body</Link>
                            <Link to="/shop/accessories" className=" text-lg font-light tracking-wide text-charcoal-gray hover:text-dusty-rose transition-colors duration-300">Accessories</Link>
                        </div>

                        <div className="mt-6">
                            <FilterByPrice priceValue={priceValue} setPriceValue={setPriceValue} />
                        </div>

                    </div>
                    
                </div>
          
                <div className="col-span-1 md:col-span-3 bg-white rounded-3xl shadow-lg p-6">
                    <Outlet context={{ priceValue }} />
                </div>
            </div>
        </div>
    );
}

export default Shop;
