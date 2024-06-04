import React, { useState } from 'react';
import shoppingCart from '../assets/shopping-cart-svgrepo-com.svg';
import logo from '../assets/yourLogoHere.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsSubMenuOpen, setIsProductsSubMenuOpen] = useState(false);
    const [isMoreSubMenuOpen, setIsMoreSubMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProductsSubMenu = () => {
        setIsProductsSubMenuOpen(!isProductsSubMenuOpen);
    };

    const toggleMoreSubMenu = () => {
        setIsMoreSubMenuOpen(!isMoreSubMenuOpen);
    };

    const closeMoreSubMenu = () => {
        setIsMoreSubMenuOpen(false);
    };

    return (
        <header className="bg-dark-purple text-white relative z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <a href="#">
                        <img src={logo} alt="logo" className='h-24 w-24 mr-4 p-2' />
                    </a>
                    <div className='hidden md:flex gap-4 items-center'>
                        <a href="#hero" className="mx-2 text-white no-underline hover:underline">Home</a>
                        <div className="relative group">
                            <a href="#products" className="mx-2 text-white no-underline hover:underline">Products</a>
                            <div className="absolute left-0 hidden group-hover:block group-focus-within:block bg-light-white text-blue p-4 mt-2 w-64 text-left shadow-lg z-50">
                                <a href="#" className="block py-2 border-b border-gray-200 hover:bg-light-violet">Appliances <span className="float-right">></span></a>
                                <a href="#" className="block py-2 border-b border-gray-200 hover:bg-light-violet">TV & Home Theater <span className="float-right">></span></a>
                                <a href="#" className="block py-2 border-b border-gray-200 hover:bg-light-violet">Computers and Tablets <span className="float-right">></span></a>
                                <a href="#" className="block py-2 border-b border-gray-200 hover:bg-light-violet">Cell Phones <span className="float-right">></span></a>
                                <a href="#" className="block py-2 border-b border-gray-200 hover:bg-light-violet">Audio <span className="float-right">></span></a>
                                <a href="#" className="block py-2 hover:bg-light-violet">Video Games <span className="float-right">></span></a>
                                <a href="#" className="block py-2 hover:bg-light-violet">View All <span className="float-right">></span></a>
                            </div>
                        </div>
                        <div className="relative flex items-center w-full md:w-auto md:max-w-xs lg:max-w-md xl:max-w-lg">
                            <input 
                                type="text" 
                                placeholder="What can we help you find today?" 
                                className="pl-2 pr-10 py-2 rounded-md border border-gray-300 w-full"
                            />
                            <a href="#" className="absolute right-2 text-gray-500 hover:text-gray-700">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex items-center ml-auto'>
                    <span className='mx-2'>
                        <img src={shoppingCart} alt="Shopping Cart" className='h-8 w-8' />
                    </span>
                    <a href="signin" className='mx-2 flex text-center text-white no-underline hover:underline'>Sign In</a>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='focus:outline-none'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className='md:hidden bg-white text-dark-purple p-4 z-50'>
                    <a href="#hero" className='block py-2 text-dark-purple text-left no-underline hover:underline'>Home</a>
                    <div>
                        <button onClick={toggleProductsSubMenu} className='block w-full text-left py-2 text-dark-purple focus:outline-none no-underline hover:underline'>Products</button>
                        {isProductsSubMenuOpen && (
                            <div className="pl-4">
                                <a href="#" className='block py-2 text-blue text-left border-b border-gray-200 no-underline hover:bg-light-violet'>Appliances <span className='float-right'>></span></a>
                                <a href="#" className='block py-2 text-blue text-left border-b border-gray-200 no-underline hover:bg-light-violet'>TV & Home Theater <span className='float-right'>></span></a>
                                <a href="#" className='block py-2 text-blue text-left border-b border-gray-200 no-underline hover:bg-light-violet'>Computers and Tablets <span className='float-right'>></span></a>
                                <a href="#" className='block py-2 text-blue text-left border-b border-gray-200 no-underline hover:bg-light-violet'>Cell Phones <span className='float-right'>></span></a>
                                <a href="#" className='block py-2 text-blue text-left border-b border-gray-200 no-underline hover:bg-light-violet'>Audio <span className='float-right'>></span></a>
                                <a href="#" className='block py-2 text-blue text-left no-underline hover:bg-light-violet'>Video Games <span className='float-right'>></span></a>
                                <a href="#" className='block py-2 text-blue text-left no-underline hover:bg-light-violet'>View All <span className='float-right'>></span></a>
                            </div>
                        )}
                    </div>
                    <a href="signin" className='block py-2 flex items-center text-dark-purple text-left'>
                        <img src={shoppingCart} alt="Sign In" className='w-6 h-6 mr-2 no-underline hover:underline' />
                        Sign In
                    </a>
                </div>
            )}

            <div className="border-t border-light-white py-2">
                <div className="container mx-auto flex justify-start items-center space-x-4 text-sm">
                    <a href="#" className="text-white no-underline hover:underline">Top Deals</a>
                    <a href="#" className="text-white no-underline hover:underline">Deal of the Day</a>
                    <div className="relative">
                        <button onClick={toggleMoreSubMenu} className="text-white no-underline hover:underline focus:outline-none">More</button>
                        {isMoreSubMenuOpen && (
                            <div className="absolute left-0 bg-light-white text-dark-purple p-4 mt-2 w-48 text-left shadow-lg z-50">
                                <a href="#" className="block py-2 border-b border-gray-200 hover:bg-light-violet">Buy Memberships</a>
                                <a href="#" className="block py-2 border-b border-gray-200 hover:bg-light-violet">Credit Cards</a>
                                <a href="#" className="block py-2 border-b border-gray-200 hover:bg-light-violet">Gift Cards</a>
                                <a href="#" className="block py-2 border-b border-gray-200 hover:bg-light-violet">Gift Ideas</a>
                                <button onClick={closeMoreSubMenu} className="block w-full text-left py-2 text-dark-purple border-t border-gray-200 hover:bg-light-violet focus:outline-none">Close</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
