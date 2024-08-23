import React, { useState } from "react";
import { shopAll } from "../data/products";
import { Link, Outlet, useParams } from "react-router-dom";
import FilterByPrice from "../components/FilterByPrice";

function Shop() {
    const { category } = useParams();
    const [priceValue, setPriceValue] = useState(20);

    return (
        <div className="max-w-7xl mx-auto py-12 px-6 bg-sift-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="flex flex-col col-span-1 bg-white rounded-3xl p-6 shadow-lg sticky top-28">
                    <div className="flex items-center space-x-2 mb-6">
                        <Link to="/" className="text-charcoal-gray hover:text-dusty-rose hover:underline transition-colors duration-300">Home</Link>
                        <img src="/icons/navigation-arrow.svg" alt="arrow" className="w-3 h-3" />
                        {category ? (
                            <h2 className="cursor-default capitalize text-charcoal-gray">{category}</h2>
                        ) : (
                            <h2 className="cursor-default text-charcoal-gray">All</h2>
                        )}
                    </div>

                    <div className="flex flex-col space-y-4 mb-6">
                        <h2 className="border-b border-light-gray pb-4 text-xl font-medium text-charcoal-gray">Browse By</h2>
                        <Link to="/shop" className="text-charcoal-gray hover:text-dusty-rose transition-colors duration-300">All Products</Link>
                        <Link to="/shop/best-sellers" className="text-charcoal-gray hover:text-dusty-rose transition-colors duration-300">Best Sellers</Link>
                        <Link to="/shop/face" className="text-charcoal-gray hover:text-dusty-rose transition-colors duration-300">Face</Link>
                        <Link to="/shop/body" className="text-charcoal-gray hover:text-dusty-rose transition-colors duration-300">Body</Link>
                        <Link to="/shop/accessories" className="text-charcoal-gray hover:text-dusty-rose transition-colors duration-300">Accessories</Link>
                    </div>

                    <div className="mt-6">
                        <FilterByPrice priceValue={priceValue} setPriceValue={setPriceValue} />
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
