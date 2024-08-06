import React from "react";
import { Link } from "react-router-dom";

function HoverList({dropdownOpen, setDropDownOpen}){
    return(
        <div className="relative" onMouseEnter={() => setDropDownOpen(true)} onMouseLeave={() => setDropDownOpen(false)}>
            <Link to='/shop'>Shop</Link>
            {dropdownOpen && (
                <div className="absolute z-10 space-x-5">
                    <Link to='/shop/face'>Face</Link>
                    <Link to='/shop/body'>Body</Link>
                    <Link to='/shop/three'>Three</Link>
              </div>
            )}
            
        </div>
    )
}

export default HoverList;