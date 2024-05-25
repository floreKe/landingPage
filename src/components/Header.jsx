    import React, { useState } from "react";
    import bestBuyLogo from "../assets/BestBuyLogo.svg";
    import shoppingCart from "../assets/shopping-cart-outline-svgrepo-com.svg";

    const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-blue-800 text-white">
        <div className="bg-blue-900 text-white p-3 border-box relative">
            <nav className="text-right text-xs text-gray-300">
            <a href="#" className="mx-3 no-underline hover:underline">
                Yardbird
            </a>
            <a href="#" className="mx-3 no-underline hover:underline">
                BB Outlet
            </a>
            <a href="#" className="mx-3 no-underline hover:underline">
                BB Business
            </a>
            <a href="#" className="mx-3 no-underline hover:underline">
                Expertise
            </a>
            </nav>
        </div>
        <div className="container mx-auto flex justify-between items-center">
            <a href="#">
            <img src={bestBuyLogo} alt="logo" className="h-24 w-24 mr-4" />
            </a>
            <div className="hidden md:flex gap-4">
            <a href="#hero" className="mx-2">
                Home
            </a>
            <a href="#products" className="mx-2">
                Products
            </a>
            <a href="#features" className="mx-2">
                Features
            </a>
            <a href="#testimonials" className="mx-2">
                Testimonials
            </a>
            <a href="#contact" className="mx-2">
                Contact
            </a>
            </div>
            <div className="hidden md:flex items-center">
            <a href="signin" className="mx-2 flex text-center">
                Sign In
            </a>
            <span className="mx-2">
                <img src={shoppingCart} alt="Shopping Cart" className="h-8 w-8" />
            </span>
            </div>
            <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                ></path>
                </svg>
            </button>
            </div>
        </div>

        {isMenuOpen && (
            <div className="md:hidden bg-gray-800 text-white p-4">
            <a href="#hero" className="block py-2">
                Home
            </a>
            <a href="#products" className="block py-2">
                Products
            </a>
            <a href="#features" className="block py-2">
                Features
            </a>
            <a href="#testimonials" className="block py-2">
                Testimonials
            </a>
            <a href="#contact" className="block py-2">
                Contact
            </a>
            <a href="signin" className="block py-2 flex items-center">
                <img src={shoppingCart} alt="Sign In" className="w-6 h-6 mr-2" />
                Sign In
            </a>
            </div>
        )}
        </header>
    );
    };

    export default Header;
