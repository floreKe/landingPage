import React from 'react';

const FooterSection = () => {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg font-bold mb-4">About Us</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:underline">About</a></li>
                            <li><a href="#" className="text-gray-600 hover:underline">Careers</a></li>
                            <li><a href="#" className="text-gray-600 hover:underline">News & Blog</a></li>
                            <li><a href="#" className="text-gray-600 hover:underline">Sustainability</a></li>
                        </ul>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg font-bold mb-4">Help</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:underline">Support Center</a></li>
                            <li><a href="#" className="text-gray-600 hover:underline">Schedule a Service</a></li>
                            <li><a href="#" className="text-gray-600 hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='mb-8 md:mb-0'>
                        <h4 className="text-lg font-bold mb-4">Orders & Tracking</h4>
                        <ul className='space-y-2'>
                            <li><a href="#" className='text-gray-600 hover:underline'>Check Order Status</a></li>
                            <li><a href="#" className='text-gray-600 hover:underline'>Shipping</a></li>
                            <li><a href="#" className='text-gray-600 hover:underline'>Trade-in</a></li>
                            <li><a href="#" className='text-gray-600 hover:underline'>Gift Cards</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;