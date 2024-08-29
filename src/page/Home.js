import React from "react";
import { Link } from "react-router-dom";
import { bestSellers, instagramPosts } from "../data/products";
import ProductItem from "../components/ProductItem";

function Home(){
    return(
        <div className="mx-auto 2xl:max-w-7xl">

            <header className="pb-6 md:pb-12">
                
                <div className="flex flex-row justify-between h-screen lg:h-auto lg:gap-6 px-6 2xl:px-0  ">

                    <div className="flex flex-col justify-center lg:justify-between  items-center text-center lg:text-start lg:items-start w-full lg:w-1/3 z-20 relative space-y-3 md:space-y-4 2xl:space-y-6 md:py-48 lg:py-60">

                        <p className="font-playfair text-3xl md:text-4xl tracking-wide text-soft-white lg:text-charcoal-gray">
                            <span className="font-bold">Transform Your Skin with </span> <span className="italic">Nature's Best </span><span className="font-bold">Ingredients.</span>
                        </p>

                        <p className="text-sm md:text-base text-center md:text-start font-light text-soft-white lg:text-charcoal-gray">
                            Handcrafted, luxurious body care made with the finest natural ingredients. Perfect for all skin types.
                        </p>
                        <Link to="/shop" className="py-2 px-6 md:px-8 text-center uppercase tracking-tight font-semibold border-2 border-dusty-rose bg-dusty-rose text-soft-white hover:bg-transparent hover:shadow-lg hover:text-dusty-rose transition-all duration-300">
                            Shop
                        </Link>

                    </div>
                    
                    <div className="hidden lg:inline-block bg-cover bg-center lg:h-auto lg:w-2/3" style={{ backgroundImage: `url('/img/100-003.webp')`,backgroundRepeat: 'no-repeat' }}></div>
                    
                    <div className="absolute inset-x-0 bg-black opacity-50 w-full h-full lg:hidden z-10"></div>
                
                    <div className="absolute inset-x-0 bg-cover bg-center lg:hidden w-full h-full" style={{ backgroundImage: `url('/img/100-003.webp')` }}></div>

                </div>
            </header>

            <section className="py-6 md:py-12">
                <div className="flex flex-col items-center space-y-6 md:space-y-12">
                    <div className="text-center space-y-2">
                        <h3 className="text-lg md:text-xl uppercase font-light text-charcoal-gray">Must Haves</h3>
                        <p className="font-playfair text-3xl md:text-4xl tracking-wide text-charcoal-gray">
                            <span className="font-bold">Best</span> <span className="italic">Sellers</span>
                        </p>
                    </div>
                   
                    <div className="flex flex-col items-center space-y-2">
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 px-6 2xl:px-0">
                            {bestSellers.map(product => (
                                <ProductItem key={product.id} product={product} />
                            ))}
                        </div>
                        <Link to="/shop/best-sellers" className="py-2 px-6 md:px-8 text-center uppercase tracking-tight font-semibold border-2 border-dusty-rose bg-dusty-rose text-soft-white hover:bg-transparent hover:shadow-lg hover:text-dusty-rose transition-all duration-300">
                            Shop Best Sellers
                        </Link>

                    </div>
                    
                </div>
                
            </section>

        
            

            <section className="md:bg-gradient-to-b md:from-soft-white from-70% md:via-soft-white md:via-70%  md:to-charcoal-gray md:to-70%  md:px-12 lg:px-24 xl:px-36 py-6 md:py-12">

                <div className="flex flex-col items-center space-y-6 md:space-y-12">

                    <h2 className="font-playfair text-3xl md:text-4xl tracking-wide text-charcoal-gray ">
                        <span className="font-bold">Discover </span><span className="italic">More</span>
                    </h2>

    
                    <div className="flex flex-col md:flex-row justify-between h-screen md:h-auto w-full md:space-x-6 lg:space-x-12"> 

                        <div className="relative w-full h-1/3 md:h-72 lg:h-80 md:w-1/3 md:mb-4">
                            <Link to="/shop/accessories" className="block h-full w-full group">
                                <div className="relative h-full w-full">
                                    <img src="/img/100-000.webp" alt="Accessories" className="h-full w-full object-cover" />
                                    <div className="absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-0 md:group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-center items-center md:justify-end md:-bottom-4 text-white font-semibold">
                                    <p className="text-xl">Shop</p>
                                    <p className="font-playfair text-4xl">Accessories</p>
                                </div>
                            </Link>
                        </div>

                        <div className="relative w-full h-1/3 md:h-72 lg:h-80 md:w-1/3 md:mb-4">
                            <Link to="/shop/face" className="block h-full w-full group">
                                <div className="relative h-full w-full">
                                    <img src="/img/100-001.webp" alt="Face" className="h-full w-full object-cover" />
                                    <div className="absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-0 md:group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-center items-center md:justify-end md:-bottom-4 text-white font-semibold">
                                    <p className="text-xl">Shop</p>
                                    <p className="font-playfair text-4xl">Face</p>
                                </div>
                            </Link>
                        </div>

                        <div className="relative w-full h-1/3 md:h-72 lg:h-80 md:w-1/3 md:mb-4">
                            <Link to="/shop/body" className="block h-full w-full group">
                                <div className="relative h-full w-full">
                                    <img src="/img/100-002.webp" alt="Body" className="h-full w-full object-cover" />
                                    <div className="absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-0 md:group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-center items-center md:justify-end md:-bottom-4 text-white font-semibold">
                                    <p className="text-xl">Shop</p>
                                    <p className="font-playfair text-4xl">Body</p>
                                </div>
                            </Link>
                        </div>           
                                        
                    </div>

                </div>

            </section>

            <section className="md:bg-gradient-to-b md:from-charcoal-gray from-25% md:via-charcoal-gray md:via-25%  md:to-soft-white md:to-25% py-6 md:py-12">
                
                <div className="flex flex-col-reverse md:flex-row justify-between h-auto gap-6">

                    <div className="w-full md:w-1/2 h-72 bg-center md:h-auto md:bg-fixed bg-cover " style={{ backgroundImage: "url('/img/100-004.webp')", backgroundRepeat: 'no-repeat',}}></div>

                    <div className="relative flex flex-col justify-between items-center md:items-start md:justify-end space-y-3 md:space-y-4 2xl:space-y-8 md:mt-24 md:w-1/2 md:pr-12 lg:pr-24 xl:pr-36 px-6 md:px-0">
                        <p className="text-lg md:text-xl uppercase font-light text-charcoal-gray ">This weekend only</p>
                        <p className="font-playfair text-3xl md:text-4xl tracking-wide text-charcoal-gray">
                            <span className="font-bold">15% Off</span> <span className="italic">Sitewide</span>
                        </p>
                        <p className="text-sm md:text-base text-center md:text-start font-light text-charcoal-gray">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="font-semibold text-charcoal-gray">Use code LOVE15 at checkout</p>
                        <Link to="/shop" className="py-2 px-6 md:px-8 text-center uppercase tracking-tight font-semibold border-2 border-dusty-rose bg-dusty-rose text-soft-white hover:bg-transparent hover:shadow-lg hover:text-dusty-rose transition-all duration-300">
                            Shop All
                        </Link>
                    </div>

                </div>

            </section>

            <section className="h-auto relative bg-center bg-cover bg-no-repeat md:px-12 lg:px-24 xl:px-36 py-12 md:py-24" style={{ backgroundImage: "url('/img/100-010.webp')" }}>

                <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 h-full gap-6">
                    <div className="text-soft-white font-playfair space-y-3 md:space-y-4 text-center md:text-start col-span-1">
                        <h3 className='text-lg md:text-xl uppercase font-light'>We believe</h3>
                        <h2 className="text-3xl md:text-4xl tracking-wide font-bold capitalize">Your <span className="italic font-normal">skin</span><br/> comes first</h2>
                    </div>
                    <div className="text-soft-white space-y-3 md:space-y-4 col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-start px-6 md:px-0">
                        <p className="text-sm md:text-base text-center md:text-start ">Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquam mus aliquam lacinia libero posuere nisl ante. Et in maximus fermentum senectus congue litora euismod. Quis vitae lacinia dignissim cubilia integer rutrum. Cubilia non montes phasellus euismod sem mus.</p>
                        <p className="text-sm md:text-base text-center md:text-start "> Odio ligula purus pellentesque tempor eleifend fames ut aliquam! Proin ipsum fusce urna ultricies accumsan vulputate ultricies. Diam sit convallis quisque nunc duis blandit. Duis tincidunt diam mollis habitasse ac litora suspendisse.</p>
                        <button onClick={() => {
                                const element = document.getElementById('mailing-list');
                                element?.scrollIntoView({
                                behavior: 'smooth'
                                }); 
                            }} className="py-2 px-6 md:px-8 text-center uppercase tracking-tight font-semibold border-2 border-soft-white bg-soft-white text-sage-green hover:bg-transparent hover:shadow-lg hover:text-soft-white transition-all duration-300">
                            Join Serene's Club
                        </button>
                    </div>
                </div>
                
            </section>

            <section className="py-6 md:pt-12 ">
            <div className="flex flex-col items-cente space-y-3  md:space-y-4 2xl:space-y-8">
                <div className="font-playfair text-3xl md:text-4xl tracking-wide text-charcoal-gray text-center space-y-2 ">
                    <h2 className="font-playfair text-3xl md:text-4xl tracking-wide text-charcoal-gray  ">
                        <span className="font-bold">Follow Us</span>
                    </h2>
                    <p className="text-lg ">@serence.shop</p>
                </div>
                <div className="grid grid-cols-5">
                    {instagramPosts.map(product => 
                        <div className="col-span-1 relative">
                            <img className="object-cover h-full w-full" src={product.src} alt={product.alt}/>
                            <div className="absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-0 md:hover:bg-opacity-30 transition-bg-opacity duration-300 cursor-pointer"></div>
                        </div>
                    )}

                </div>

                
            </div>
               

            </section>

        </div>
    )
}

export default Home;

