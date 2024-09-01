import React, {useEffect, useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import { useCart } from '../context/ShoppingCartContext';
import YouMightAlsoLike from './YouMightAlsoLike';

function Layout() {
    const [isOpen, setIsOpen] = useState(false);


    const {cartItems, isModalVisible, setIsModalVisible, lastItemAdded} = useCart();

    const toggleMenu = () => {
     setIsOpen(!isOpen);
    }

    const handleContinueShopping = () => {
        setIsModalVisible(false)
    } 

    useEffect(()=>{
        if(isModalVisible && window.screen.width >= 768){
            document.body.classList.add('overflow-hidden')
        } else{
            document.body.classList.remove('overflow-hidden')
        }

    },[isModalVisible])


     return (
         <div className='min-h-screen w-full'>
 
             <nav className="sticky top-0 z-50 bg-charcoal-gray text-soft-white shadow-lg ">
 
                 <div className="mx-auto 2xl:max-w-7xl px-6 2xl:px-0 flex justify-between items-center">
 
                     <div className="font-playfair font-bold text-3xl md:text-4xl tracking-wide">
                         <Link to="/" className='hover:text-dusty-rose transition-colors duration-300'>Serene</Link>
                     </div>

                     <div className='flex justify-center md:hidden'>
                        <button className='h-16 rounded-lg cursor-pointer group' id='hamburger-button' onClick={toggleMenu}>
                            <div className='grid justify-items-center gap-1.5'> 
                                <span className={`h-0.5 w-6 rounded-full bg-soft-white group-hover:bg-dusty-rose transition-all duration-300 ${isOpen && 'rotate-45 translate-y-2'} `}></span>
                                <span className={`h-0.5 w-6 rounded-full bg-soft-white group-hover:bg-dusty-rose transition-all duration-300 ${isOpen && 'scale-x-0'} `}></span>
                                <span className={`h-0.5 w-6 rounded-full bg-soft-white  group-hover:bg-dusty-rose transition-all duration-300 ${isOpen && '-rotate-45 -translate-y-2'} `}></span>
                            </div>
                        </button>
                     </div>
 
                    {/* <button id='hamburger-button' className='text-2xl py-4 md:hidden cursor-pointer' onClick={toggleMenu}>&#9776;</button> */}
 
                     
                     <ul className="hidden md:flex justify-between relative space-x-7 items-center uppercase" aria-label="main">
 
                         <li>
                             <Link to="/" className="hover:text-dusty-rose transition-colors duration-300 py-5 block">Home</Link>
                         </li>
 
                         <li className='relative group'>
                             
                             <Link to='/shop' className="hover:text-dusty-rose transition-colors duration-300 py-6 block group-hover:text-dusty-rose">Shop</Link>
 
                             <div className='absolute top-full left-0 mt-0 w-48 bg-soft-white text-charcoal-gray rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300'>
                                 <Link to='/shop/face' className="block px-4 py-2 hover:bg-light-gray">Face</Link>
                                 <Link to='/shop/best-sellers' className="block px-4 py-2 hover:bg-light-gray">Best Sellers</Link>
                                 <Link to='/shop/body' className="block px-4 py-2 hover:bg-light-gray">Body</Link>
                                 <Link to='/shop/accessories' className="block px-4 py-2 hover:bg-light-gray">Accessories</Link>
                             </div>
    
                         </li>
 
                         <li>
                             <Link to="/about" className="hover:text-dusty-rose transition-colors duration-300 py-6 block">About</Link>
                         </li>
 
                         <li>
                             <Link to="/contact" className="hover:text-dusty-rose transition-colors duration-300 py-6 block">Contact</Link>
                         </li>
 
                     </ul>
 
                     <div className='hidden md:block'>
                         <Link to='/shopping-cart' className="group flex flex-row uppercase items-center justify-center gap-1">
                            <p className='group-hover:text-dusty-rose transition-colors duration-300'>My Basket</p>
                            <div className='relative group-hover:text-dusty-rose mb-1 group-hover:animate-bounce duration-400' >
                                <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='h-7 relative fill-current group-hover:text-dusty-rose transition-colors duration-300 ' alt='Shopping bag icon'>
                                    <path d="M20,9H17V7A5,5,0,0,0,7,7V9H4L3,22H21ZM15,9H9V7a3,3,0,0,1,6,0Z"></path>
                                </svg>
                                <p className='absolute inset-0.5  flex items-end justify-center text-charcoal-gray z-20 group-hover:text-soft-white transition-colors duration-300 text-xs'>{cartItems.length}</p>
                            </div>
                         </Link>
                     </div>
 
                 </div>
                 {isOpen && (
                     <ul className="md:hidden bg-charcoal-gray text-soft-white space-y-6 py-6 w-full shadow-lg border-t border-soft-white border-opacity-50">
               
                        
                         <li>
                             <Link to="/" className="hover:text-dusty-rose transition-all duration-300 px-6 text-lg uppercase font-light  rounded-md block" onClick={() => setIsOpen(false)}>Home</Link>
                         </li>
                         <li className=''>
                                <input type='checkbox' className="peer hidden" id="toggle-checkbox" />

                                <label  htmlFor="toggle-checkbox" className='flex justify-between items-center cursor-pointer  px-6 transition-all duration-300 group'>
                                    <p className='group-hover:text-dusty-rose transition-all duration-300 text-lg uppercase font-light '>Shop</p>
                                    <svg class="-mr-1 h-5 w-5 text-soft-white group-hover:text-dusty-rose" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                    </svg>
                                </label>
                                
                                <div className='hidden peer-checked:flex  flex-col text-soft-white px-10 space-y-3 py-2 mt-3 bg-black bg-opacity-10 text-lg font-light tracking-wide  transition-all duration-300'>
                                    <Link to="/shop" className="hover:text-dusty-rose " onClick={() => setIsOpen(false)}>All Products</Link>
                                    <Link to="/shop/best-sellers" className="hover:text-dusty-rose" onClick={() => setIsOpen(false)}>Best Sellers</Link>
                                    <Link to="/shop/face" className="hover:text-dusty-rose" onClick={() => setIsOpen(false)}>Face</Link>
                                    <Link to="/shop/body" className="hover:text-dusty-rose" onClick={() => setIsOpen(false)}>Body</Link>
                                    <Link to="/shop/accessories" className="hover:text-dusty-rose" onClick={() => setIsOpen(false)}>Accessories</Link>
                                </div>
                         </li>
                         <li>
                             <Link to="/about" className="hover:text-dusty-rose transition-all duration-300 px-6 text-lg uppercase font-light block" onClick={() => setIsOpen(false)}>About</Link>
                         </li>
                         <li>
                             <Link to="/contact" className="hover:text-dusty-rose transition-all duration-300  px-6 text-lg uppercase font-light  block" onClick={() => setIsOpen(false)}>Contact</Link>
                         </li>
                         <li>
                             <Link to='/shopping-cart' className="hover:text-dusty-rose transition-all duration-300 px-6 text-lg uppercase font-light  block" onClick={() => setIsOpen(false)}>My Basket ({cartItems.length})</Link>
                         </li>
        
                     </ul>
                 )}

             </nav>

            
            {isModalVisible && (
                <div className='hidden md:flex h-full w-full fixed z-50 top-0 left-0 bg-black bg-opacity-50 justify-center items-center'>
                    <div className='bg-soft-white space-y-6 sm:h-full xl:h-2/3 shadow-md flex flex-row-reverse justify-between items-start overflow-auto '>

                            <button className="text-2xl text-charcoal-gray hover:text-dusty-rose focus:outline-none m-5" onClick={handleContinueShopping}>&#10005;</button>
                            

                            <div className='flex flex-col grow space-y-6 px-16 py-10'>
                                <div>
                                    {lastItemAdded.quantity === 1 ? <h2 className='font-playfair text-xl md:text-2xl tracking-wide text-charcoal-gray font-bold'>Added product</h2> : <h2 className='font-playfair text-xl md:text-2xl tracking-wide text-charcoal-gray font-bold'>Added products</h2>}
                                </div>    

                                <div className="flex gap-4 items-start">

                                    <div className="shrink-0">
                                        <div className="w-64 h-64">
                                            <img src={lastItemAdded.src} alt={lastItemAdded.alt} className="h-full w-full object-cover " />
                                        </div>
                                    </div>


                                    <div className="flex flex-row justify-between grow">   
                                        <div>
                                            <h2 className="text-md font-semibold text-charcoal-gray">{lastItemAdded.name}</h2>
                                            <p className="text-sm text-gray-500">Qty:{(lastItemAdded.quantity)}</p>
                                        </div>                                        
                                        
                                        <p className="text-md font-semibold text-gray-800 lg:col-span-1 lg:justify-self-center">${(lastItemAdded.price * lastItemAdded.quantity).toFixed(2)}</p>
                                    </div>

                                </div>

                                <div className='flex justify-between mt-4 space-x-2'>
                                    <button className=" py-2 text-center uppercase tracking-tight border border-charcoal-gray  text-charcoal-gray hover:shadow-md  transition-all duration-300 grow" onClick={handleContinueShopping}>Continue Shopping</button>
                                    <Link to='/shopping-cart' className="py-2 text-center uppercase tracking-tight  border border-dusty-rose bg-dusty-rose  text-soft-white hover:bg-transparent hover:shadow-md hover:text-dusty-rose transition-all duration-300 grow" onClick={handleContinueShopping}>Proceed to Checkout</Link>
                                </div>

                                <YouMightAlsoLike />
                                
                                

                        </div>
                    </div>
                </div>
            )}
         
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