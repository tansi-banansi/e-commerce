import React, {useState} from "react";

function FilterByPrice({priceValue, setPriceValue}){
    const [isvisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isvisible)
    }

    const handlePriceChange = (event) =>{
        setPriceValue(event.target.value);
    }

    return(
        <div className="flex flex-col space-y-3 md:space-y-4">
            <h2 className="border-b pb-4 border-light-gray font-playfair text-xl md:text-2xl tracking-wide text-charcoal-gray font-bold ">Filer by</h2>
            <button className="flex justify-between duration-200" onClick={handleToggle}>
                <p className="text-lg font-light tracking-wide text-charcoal-gray hover:text-dusty-rose transition-colors duration-300">Price</p>
                <p  className="text-2xl font-light tracking-wide text-charcoal-gray hover:text-dusty-rose transition-colors duration-300">{isvisible? '-' : '+'}</p>
            </button>
                    


            {isvisible &&
                <div className="flex items-center space-x-4">
                    <span className="text-lg font-light tracking-wide text-charcoal-gray hover:text-dusty-rose transition-colors duration-300">$0</span>
                    <input type="range" 
                    min="0"
                    max="20"
                    value={priceValue}
                    onChange={handlePriceChange}
                    className="w-full accent-dusty-rose"
                    />
                    <span className="text-lg font-light tracking-wide text-charcoal-gray hover:text-dusty-rose transition-colors duration-300">${priceValue}</span>
                </div>
            } 
        </div>
    )
}

export default FilterByPrice;


