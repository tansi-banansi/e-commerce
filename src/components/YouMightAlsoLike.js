import { recommendedProducts } from '../data/products';
import ProductItem from './ProductItem';
import React from 'react';

function YouMightAlsoLike() {
    return(
        <div className='space-y-6 py-10'>

            <h2 className='font-playfair text-xl md:text-2xl tracking-wide text-charcoal-gray font-bold'>You might also like</h2>
        
            <div className="flex flex-row mx-auto gap-4 h ">
            
                {recommendedProducts.map(product => (
                    <ProductItem key={product.id} product={product} className=""/>
                ))}
            </div>
        </div>
    )
}

export default YouMightAlsoLike;