import React from 'react';

const ProductsSection = () => {
    return (
        <section id="products" className="py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
                {/* Add your product cards here */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-white shadow p-5 rounded">
                        <img src="/path/to/product.jpg" alt="Product" className="w-full h-64 object-cover rounded mb-5" />
                        <h3 className="text-xl font-bold mb-2">Product Name</h3>
                        <p className="text-gray-700 mb-4">Product description goes here...</p>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded">Buy Now</button>
                    </div>
                    {/* Repeat for more products */}
                </div>
            </div>
      </section>
    );
};  

export default ProductsSection;