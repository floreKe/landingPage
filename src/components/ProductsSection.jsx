import React from 'react';

import pc from '../assets/gamingPc2.png';
import nest from '../assets/nestHub.jpg';
import router from '../assets/grouter.png';

const ProductsSection = () => {
    return (
        <section id="products" className="py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <a href='#' alt='Product' className='group'>
                        <div className="bg-white shadow p-5 rounded border-2 border-gray-200 flex flex-col h-full">
                            <div className='relative h-64 mb-5'>
                                <img src={pc} alt="Product" className="w-full h-full object-contain rounded" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500">ALIENWARE AURORA R16 GAMING DESKTOP</h3>
                            <p className="text-gray-700 mb-4 group-hover:text-blue-500">
                            Intel® Core™ i7 14700F NVIDIA® <br />
                            GeForce RTX™ 4060, 8 GB GDDR6 <br />
                            16 GB: 2 x 8 GB, DDR5, 5600 MT/s <br />
                            1 TB, M.2, PCIe NVMe, SSD
                            </p>
                        </div>
                    </a>
                    <a href='#' alt='Product' className='group'>
                        <div className="bg-white shadow p-5 rounded border-2 border-gray-200 flex flex-col h-full">
                        <div className='relative h-64 mb-5'>
                                <img src={nest} alt="Product" className="w-full h-full object-contain rounded" />
                            </div>
                            <h3 className="text-xl text-transform: uppercase font-bold mb-2 group-hover:text-blue-500">Nest Hub 7” Smart Display with Google Assistant (2nd Gen)</h3>
                            <p className="text-gray-700 mb-4 group-hover:text-blue-500">Charcoal</p>
                        </div>
                    </a>
                    <a href='#' alt='Product' className='group'>
                        <div className="bg-white shadow p-5 rounded border-2 border-gray-200 flex flex-col h-full">
                            <div className='relative h-64 mb-5'>
                                <img src={router} alt="Product" className="w-full h-full object-contain rounded" />
                            </div>
                            <h3 className="text-xl text-transform: uppercase font-bold mb-2 group-hover:text-blue-500">NETGEAR Nighthawk pro gaming wifi 6 router (xr1000)</h3>
                            <p className="text-gray-700 mb-4 group-hover:text-blue-500">
                                6-stream AX5400 wireless speed (up to 5.4Gbps) <br/>
                                DumaOS 3.0 optimizes lag-free server connections 4 x 1G ethernet and 1 usb port
                            </p>
                        </div>
                    </a>
                </div>
            </div>
      </section>
    );
};  

export default ProductsSection;