import React, { useState } from "react";


function SeeMore({section, product}){
    const [isvisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isvisible)
    }


    return(
        <div className="border-b py-5">
            <div className="flex justify-between ">
                <h2 className="text-xl uppercase">{section}</h2>
                <button onClick={handleToggle} className="text-2xl">{isvisible? '-' : '+'}</button>
            </div>

            {isvisible && 
                <div>
                    <p className="pt-3">{product[section]}</p>
                </div>
            }

        </div>
    )
}

export default SeeMore;