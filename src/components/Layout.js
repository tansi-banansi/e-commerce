import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import HoverList from './HoverList';
import Footer from './Footer';

function Layout() {
    const [dropdownOpen, setDropDownOpen] = useState(false);

    return (
        <div className='"min-h-screen font w-full">'>

            <nav className="sticky top-0 z-10 shadow-lg bg-custom-50">

                <div className="mx-auto max-w-5xl p-5 flex justify-between items-center">

                    <div className="text-2xl font-playfair font-bold">
                        <Link to="/">Serene</Link>
                    </div>

                    <div className=''>

                        <ul className="flex justify-between space-x-7 items-center uppercase">
                            <li className="">
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <HoverList dropdownOpen = {dropdownOpen} setDropDownOpen = {setDropDownOpen} />
                            </li>

                            <li className="relative">
                                <Link to="/about">About</Link>
                            </li>

                            <li className="relative">
                                <Link to="/contact">Contact</Link>
                            </li>

                        </ul>

                       
                    </div>

                    <div>
                        <Link to='/cart'>Cart</Link>
                    </div>


                </div>

            </nav>
        
        
            <div className='mx-auto max-w-7xl p-5'>
                <Outlet />
            </div>

            <div className='bg-custom-950 py-12 text-white'>
                <Footer />
            </div>

            
           

        </div>
    );
}

export default Layout;