import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
/*max-w-7xl px-6 xl:max-w-full xl:px-12*/

function Layout() {
    const [isOpen, setIsOpen] = useState(false);
 
    const toggleMenu = () => {
     setIsOpen(!isOpen);
    }
 
     return (
         <div className='min-h-screen w-full'>
 
             <nav className="sticky top-0 z-50 bg-charcoal-gray text-soft-white shadow-lg">
 
                 <div className="mx-automax-w-7xl px-6 xl:max-w-full xl:px-12 flex justify-between items-center">
 
                     <div className="text-3xl font-playfair font-bold">
                         <Link to="/" className='hover:text-dusty-rose transition-colors duration-300'>Serene</Link>
                     </div>
 
                     <button id='hamburger-button' className='text-2xl py-4 md:hidden cursor-pointer' onClick={toggleMenu}>&#9776;</button>
 
                     
                     <ul className="hidden md:flex justify-between relative space-x-7 items-center uppercase" aria-label="main">
 
                         <li>
                             <Link to="/" className="hover:text-dusty-rose transition-colors duration-300 py-5 block">Home</Link>
                         </li>
 
                         <li className='relative group'>
                             
                             <Link to='/shop' className="hover:text-dusty-rose transition-colors duration-300 py-5 block group-hover:text-dusty-rose">Shop</Link>
 
                             <div className='absolute top-full left-0 mt-0 w-48 bg-soft-white text-charcoal-gray rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300'>
                                 <Link to='/shop/face' className="block px-4 py-2 hover:bg-light-gray">Face</Link>
                                 <Link to='/shop/best-sellers' className="block px-4 py-2 hover:bg-light-gray">Best Sellers</Link>
                                 <Link to='/shop/body' className="block px-4 py-2 hover:bg-light-gray">Body</Link>
                                 <Link to='/shop/accessories' className="block px-4 py-2 hover:bg-light-gray">Accessories</Link>
                             </div>
    
                         </li>
 
                         <li>
                             <Link to="/about" className="hover:text-dusty-rose transition-colors duration-300 py-5 block">About</Link>
                         </li>
 
                         <li>
                             <Link to="/contact" className="hover:text-dusty-rose transition-colors duration-300 py-5 block">Contact</Link>
                         </li>
 
                     </ul>
 
                     <div className='hidden md:block'>
                         <Link to='/shopping-cart' className="hover:text-dusty-rose transition-colors duration-300">Cart</Link>
                     </div>
 
                 </div>
                 {isOpen && (
                     <ul className="md:hidden bg-charcoal-gray text-soft-white">
                         <li>
                             <Link to="/" className="hover:text-dusty-rose transition-colors duration-300 py-5 block">Home</Link>
                         </li>
                         <li>
                             <Link to='/shop' className="hover:text-dusty-rose transition-colors duration-300 py-5 block">Shop</Link>
                         </li>
                         <li>
                             <Link to="/about" className="hover:text-dusty-rose transition-colors duration-300 py-5 block">About</Link>
                         </li>
                         <li>
                             <Link to="/contact" className="hover:text-dusty-rose transition-colors duration-300 py-5 block">Contact</Link>
                         </li>
                         <li>
                             <Link to='/shopping-cart' className="hover:text-dusty-rose transition-colors duration-300 py-5 block">Cart</Link>
                         </li>
                     </ul>
                 )}
 
             </nav>
         
         
             <div className='bg-soft-white'>
                 <Outlet />
             </div>
 
             <div className='bg-charcoal-gray text-soft-white'>
                 <Footer />
             </div>
 
         </div>
     );
 }
 
 export default Layout;