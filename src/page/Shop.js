import React from "react";
import { shopAll } from "../data/products";
import { Link, Outlet, useParams } from "react-router-dom";

function Shop() {
    const {category} = useParams();

    return (
        <div>
            <div>
                <div className="flex space-x-2" >
                    <Link to='/'>Home</Link>
                    <img src="/icons/navigation-arrow.svg" alt="arrow" className="w-3"/>
                    {category? <h2 className="cursor-default capitalize">{category}</h2> : <h2 className="cursor-default">All products</h2> }
                    
                </div>

            </div>


            <div className="flex justify-between">

                <div className="flex flex-col space-y-3 w-1/5">
                    <h2 className="border-b py-4">Browse By</h2>
                    <Link to='/shop'>All Products</Link>
                    <Link to='/shop/face'>Face</Link>
                    <Link to='/shop/body'>Body</Link>
                    <Link to='/shop/accessories'>Accessories</Link>
                </div>

                <div className="w-4/5">
                    
                    <Outlet/>
                
                </div>
            </div>
        </div>
    );
}

export default Shop;

