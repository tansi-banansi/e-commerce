import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useCart} from '../context/ShoppingCartContext'

function ProductItem({product}) {

    const [isHovered, setIsHovered] = useState(false);
    
    const {addToCart} = useCart();

    return (
        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="relative h-64 w-full">
                <Link to={`/shop/${product.category}/${product.id}`} className="relative group h-full w-full">
                    <img src={product.src} alt={product.name} className="h-full w-full object-cover "/>
                    <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200 '>
                        <span className='text-white text-lg font-semibold'>See More</span>
                    </div>
                </Link>
            </div>

            <div className="flex flex-col justify-between items-center space-y-2 mt-2 h-20 md:h-24 lg:h-32">
                <div className='flex flex-col items-center space-y-2'>
                    <p className="text-lg font-medium  text-charcoal-gray text-center ">{product.name}</p>
                    <p className="text-sm text-muted-black">${product.price}</p>
                </div>
                
                <div className="h-8 w-full hidden md:block">
                    {isHovered && (
                        <button className="uppercase tracking-tight w-full h-8 text-sm font-semibold border-2 border-dusty-rose bg-dusty-rose text-soft-white hover:bg-transparent hover:shadow-sm hover:text-dusty-rose transition-all duration-300 " onClick={() => addToCart({...product, quantity : 1})}> Add to Cart </button>
                    )}

                </div>
            </div>

           
            <div className="flex flex-col items-center my-2 relative">
                <div className="h-8 w-full block md:hidden">
                    <button className="w-full h-8 text-sm font-semibold border border-dusty-rose bg-dusty-rose text-soft-white hover:bg-soft-white hover:text-dusty-rose transition-all " onClick={() => addToCart({...product, quantity : 1})}> Add to Cart </button>
                </div>
            </div>

            
        </div>
    )
}

export default ProductItem;

