import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function ProductItem({product}) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='relative' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

            <Link to={`${product.category}/${product.id}`}>
                <img src={product.src} className='w-full  object-cover'/>
            </Link>

            <p>{product.name}</p>
            <p>${product.price}</p> 

            {isHovered && <button className='absolute '>Add to Cart</button>}

        </div>
    )
}

export default ProductItem;

