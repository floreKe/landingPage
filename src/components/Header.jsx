import React from 'react';

import bestBuyLogo from '../assets/BestBuyLogo.svg';
import shoppingCart from '../assets/shopping-cart-outline-svgrepo-com.svg';

const Header = () => {
    return(
        <header className="bg-blue-800 text-white">
            <div className='bg-blue-900 text-white p-3 border-box relative'>
                <nav className='text-right text-xs text-gray-300'>
                    <a href="#" className='mx-3 no-underline hover:underline'>Yardbird</a>
                    <a href="#" className='mx-3 no-underline hover:underline'>BB Outlet</a>
                    <a href="#" className='mx-3 no-underline hover:underline'>BB Business</a>
                    <a href="#" className='mx-3 no-underline hover:underline'>Expertise</a>
                </nav>
            </div>
            <div className="container mx-auto flex justify-between items-center">
                <a href="#">
                    <img src={bestBuyLogo} alt="logo" className=' h-24 w-24 mr-4' />
                </a>
                <div className='flex gap-4'>
                    <a href="#hero" className="mx-2">Home</a>
                    <a href="#products" className="mx-2">Products</a>
                    <a href="#features" className="mx-2">Features</a>
                    <a href="#testimonials" className="mx-2">Testimonials</a>
                    <a href="#contact" className="mx-2">Contact</a>
                </div> 
                <div className='flex items-center'>
                    <a href="signin" className='mx-2'>Sign In</a>
                    <span className='mx-2'>
                        <img src={shoppingCart} alt="Shopping Cart" className='h-8 w-8'/>
                    </span>
                </div> 
            </div>
        </header>
    );
};

export default Header;