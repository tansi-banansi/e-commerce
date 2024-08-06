import React from "react";
import { Link, useParams } from "react-router-dom";
import { shopAll } from "../data/products";
import ProductItem from "./ProductItem";

function ShopByCategory (){
    const {category} = useParams();
    const filteredProducts = shopAll.filter(product => product.category === category)
    
    return(
        <div>
            <h1>Category:{category}</h1>
            <p>{filteredProducts.length} Results</p>
            <div className="grid grid-cols-3 gap-4 justify-evenly w-full">
                {filteredProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ShopByCategory;