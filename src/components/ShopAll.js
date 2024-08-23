import React, { useState } from "react";
import { shopAll, categoryImages } from "../data/products";
import ProductItem from "./ProductItem";
import { useOutletContext } from "react-router-dom";

function ShopAll() {
    const [addToCardButton, setAddToCardButton] = useState(false);
    const { priceValue } = useOutletContext();


    const filteredProducts = shopAll.filter(product => product.price <= priceValue);

    return (
        <div className="flex flex-col">
                <div className="w-full  mb-6">
                    <img src={categoryImages.shop.src} alt={categoryImages.shop.alt} className="w-full h-60 md:h-72 lg:h-80 object-cover rounded-t-lg  shadow-sm" />
                </div>
                    <h1 className="text-gray-800 text-2xl font-bold mb-4">{categoryImages.shop.name}</h1>
                
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ShopAll;





