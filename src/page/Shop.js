import React, { useState } from "react";
import { shopAll } from "../data/products";
import { Link, Outlet, useParams } from "react-router-dom";
import FilterByPrice from "../components/FilterByPrice";

function Shop() {
    const {category} = useParams();
    const [priceValue, setPriceValue] = useState(20);

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 pt-6 lg:pt-12 pb-12 px-6 lg:gap-8">
            <div className="flex flex-col col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                    <Link to="/" className="hover:text-custom-600 hover:underline">Home</Link>
                        <img src="/icons/navigation-arrow.svg" alt="arrow" className="w-3 h-3" />
                        {category ? ( <h2 className="cursor-default capitalize text-gray-700">{category}</h2>) : ( <h2 className="cursor-default text-gray-600">All products</h2> )}
                </div>
      
                <div className="lg:flex lg:flex-col lg:space-y-3 lg:w-full hidden mb-4 ">
                    <h2 className="border-b border-gray-300 py-4 text-xl font-medium font-playfair mb-1.5">Browse By</h2>
                    <Link to="/shop" className="hover:text-custom-600">All Products</Link>
                    <Link to="/shop/face" className="hover:text-custom-600">Face</Link>
                    <Link to="/shop/body" className="hover:text-custom-600">Body</Link>
                    <Link to="/shop/accessories" className="hover:text-custom-600">Accessories</Link>
                </div>

                <div className="lg:flex lg:flex-col lg:w-full hidden">
                    <FilterByPrice priceValue={priceValue} setPriceValue={setPriceValue}/>
                </div>

            </div>
      
        <div className="col-span-4">
          <Outlet context={{priceValue}}/>
        </div>

      </div>
    );
}

export default Shop;

