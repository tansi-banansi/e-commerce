import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { shopAll } from "../data/products";
import SeeMore from "./SeeMore";
import {useCart} from '../context/ShoppingCartContext'


function ShopByProduct(){
    const {id} = useParams();
    const product = shopAll.find(p => p.id === parseInt(id))
    const {addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity)
    }

    const handleAddToCart = () => {
        const productWithQuality = {...product, quantity};
        addToCart(productWithQuality)
    }

    if(!product){
        return <div>Product not found</div>
    }

    return (
        <div className="mx-auto p-4">
          <div className="flex justify-between">
            <div className="px-4">
              <Link to="/">Home</Link> /{" "}
              <Link to={`/shop/${product.category}`} className="capitalize">
                {product.category}
              </Link>{" "}
              / <span>{product.name}</span>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 p-4">
              <img src={product.src} alt={product.alt} className="w-full h-auto" />
              <p className="mt-4">{product.shortDescription}</p>
            </div>
    
            <div className="w-1/2 p-4">
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <p className="text-gray-600">{product.type}</p>
              <p className="text-xl font-semibold">${product.price}</p>
    
              <div className="mt-4">
                <label className="block mb-2">Quantity:</label>
                <input
                  type="number"
                  min="1"
                  className="border p-2 w-20"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <button
                  onClick={handleAddToCart}
                  className="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
    
              <div>
                <SeeMore section="Details" product={product} />
              </div>
    
              <div>
                <SeeMore section="Ingredients" product={product} />
              </div>
    
              <div>
                <SeeMore section="How to Use" product={product} />
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default ShopByProduct;