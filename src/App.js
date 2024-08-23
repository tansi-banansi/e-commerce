import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Shop from "./page/Shop";
import Layout from "./components/Layout";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import FAQ from "./page/FAQ";
import ShippingPolicy from "./page/ShippingPolicy";
import StorePolicy from "./page/StorePolicy";
import ShopAll from "./components/ShopAll";
import ShopByCategory from "./components/ShopByCategory";
import ShopByProduct from "./components/ShopByProduct";
import ShoppingCart from "./page/ShoppingCart";
import {CartProvider} from './context/ShoppingCartContext';
import ShopBestSellers from "./components/ShopBestSeller";

function App() {

  return (

    <CartProvider>
      
      <Router>
        <Suspense fallback={<div>Loading...</div>}>

          <Routes>

            <Route path="/" element={<Layout />}>

              <Route index element={<Home />} />

              <Route path="shop" element={<Shop />}>

                <Route index element={<ShopAll />}/>
                <Route path=":category" element={<ShopByCategory />} />
                <Route path="best-sellers" element={<ShopBestSellers />} />

              </Route> 
              <Route path="shop/:category/:id" element={<ShopByProduct />} />
              <Route path="shop/best-sellers/:id" element={<ShopByProduct />} />
              

              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              
              <Route path="shipping-policy" element={<ShippingPolicy />} />
              <Route path="store-policy" element={<StorePolicy />} />
              <Route path="FAQ" element={<FAQ />} />

              <Route path="shopping-cart" element={<ShoppingCart />} />

            </Route> 

          </Routes>
        </Suspense>


      </Router>
    </CartProvider>
  );
}


export default App;
