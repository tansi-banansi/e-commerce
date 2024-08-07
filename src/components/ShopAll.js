import React, { useState } from "react";
import { shopAll } from "../data/products";
import ProductItem from "./ProductItem";

function ShopAll() {
    const [addToCardButton, setAddToCardButton] = useState(false);

    return (
        <div className="flex flex-col">

            <div>          
                <h1>All Products</h1>
                <p>{shopAll.length} products</p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">

                {shopAll.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ShopAll;





