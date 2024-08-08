import React, { useState } from "react";
import { shopAll, categoryImages } from "../data/products";
import ProductItem from "./ProductItem";
import { useOutletContext } from "react-router-dom";

function ShopAll() {
    const [addToCardButton, setAddToCardButton] = useState(false);
    const {priceValue} = useOutletContext();

    const filteredProducts = shopAll.filter(product => product.price <= priceValue)

    return (
        <div className="flex flex-col">

            <div className="flex flex-col w-full">
                <div className="w-full">
                    <img src={categoryImages.shop.src} alt={categoryImages.shop.alt} className="w-full h-52 md:h-72 lg:h-80 object-cover" />
                </div>
                <div className="flex flex-col pb-12 pt-4">
                    <h1 className=" font-playfair font-semibold text-2xl mb-1.5">{categoryImages.shop.name}</h1>
                    <p className="text-sm text-gray-600">{filteredProducts.length} products</p>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">

                {filteredProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ShopAll;





