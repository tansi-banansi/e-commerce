import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function ProductItem({product}) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="relative h-64 w-full">
                <Link to={`${product.category}/${product.id}`} className="block h-full w-full">
                    <img src={product.src} alt={product.name} className="h-full w-full object-cover rounded-t-lg hover:opacity-65"/>
                </Link>
            </div>

            <div className="flex flex-col justify-center items-center mt-2">
                <p className="text-lg font-medium text-center h-8 xl:h-16">{product.name}</p>
                <p className="text-sm text-gray-600">${product.price}</p>
            </div>

            <div className="flex flex-col items-center my-2 relative">
                <div className="h-8 w-full hidden md:block">
                    {isHovered && (
                        <button className="absolute inset-0 text-sm font-semibold border border-black w-full  hover:bg-black hover:text-white transition-all duration-200"> Add to Cart </button>
                    )}

                </div>
                
            </div>
            <div className="flex flex-col items-center my-2 relative">
                <div className="h-8 w-full block md:hidden">
                    <button className="absolute inset-0 text-sm font-semibold border border-black w-full  hover:bg-black hover:text-white transition-all duration-200"> Add to Cart </button>
                </div>
            </div>

            
        </div>
    )
}

export default ProductItem;

