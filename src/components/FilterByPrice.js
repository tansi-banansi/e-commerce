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
        <div className="flex flex-col space-y-4">
            <h2 className="border-b border-gray-200 pb-4 text-xl font-medium">Filer by</h2>
            <button className="flex justify-between duration-200" onClick={handleToggle}>
                <p>Price</p>
                <p  className="text-2xl">{isvisible? '-' : '+'}</p>
            </button>
                    


            {isvisible &&
                <div className="flex items-center space-x-4">
                    <span className="text-md text-charcoal-gray">$0</span>
                    <input type="range" 
                    min="0"
                    max="20"
                    value={priceValue}
                    onChange={handlePriceChange}
                    className="w-full accent-dusty-rose"
                    />
                    <span className="text-md text-gray-600">${priceValue}</span>
                </div>
            } 
        </div>
    )
}

export default FilterByPrice;


