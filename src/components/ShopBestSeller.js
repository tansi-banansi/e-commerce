import React from "react";
import {useOutletContext, useParams } from "react-router-dom";
import { bestSellers, categoryImages } from "../data/products";
import ProductItem from "./ProductItem";

function ShopBestSellers (){

const {priceValue} = useOutletContext();
const category = 'best-sellers'

const filteredProducts = bestSellers.filter(product =>  product.price <= priceValue)
    

return (
    <div className="flex flex-col">
        <div className="flex flex-col w-full">
            <div className="w-full">
                <img src={categoryImages[category].src} alt={categoryImages[category].alt} className="w-full h-52 md:h-72 lg:h-80 object-cover" />
            </div>
            <div className="flex flex-col pb-12 pt-4">
                <h1 className=" font-playfair font-semibold text-2xl mb-1.5">Best Sellers</h1>
                <p className="text-sm text-gray-600">{filteredProducts.length} products</p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            {filteredProducts.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>

    </div>
)   
}

export default ShopBestSellers;