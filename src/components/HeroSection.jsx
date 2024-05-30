import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const HeroSection = () => {
    return (
        <>
            <div className="border-t-4 border-white"></div>
            <section id="hero" className="bg-cover bg-center h-screen text-white flex flex-col items-center justify-center pt-20">
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center mb-8 border-b-4 border-purple-700">
                    <div className="flex flex-col items-start text-left md:w-1/2 mb-4 md:mb-0">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-black">Today's Deals</h2>
                        <a href="#products" className="bg-purple-700 text-white py-2 px-4 rounded">See More</a>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src='' alt="Today's Deals Product" className="h-48 md:h-64 w-auto" />
                    </div>
                </div>
                <div className="w-full max-w-6xl"> 
                    <div className="text-black text-left w-full mb-4 flex justify-between items-center">
                        <h3 className="text-2xl font-bold">Get it all right here</h3>
                        <a href="#" className="text-blue-500 hover:underline">View all</a>
                    </div>
                    <Carousel showThumbs={false} showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true} emulateTouch={true} centerMode={true} centerSlidePercentage={20}>
                        <div className="flex flex-col items-center">
                            <img src='' alt="Appliances" className="h-32 w-32 object-cover rounded-full mb-2 bg-gray-400" />
                            <p className="text-lg text-black">Appliances</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="URL_FOR_TV_HOME_THEATER_IMAGE" alt="TV & Home Theater" className="h-32 w-32 object-cover rounded-full mb-2" />
                            <p className="text-lg text-black">TV & Home Theater</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="URL_FOR_COMPUTERS_TABLETS_IMAGE" alt="Computers & Tablets" className="h-32 w-32 object-cover rounded-full mb-2" />
                            <p className="text-lg text-black">Computers & Tablets</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="URL_FOR_CELL_PHONES_IMAGE" alt="Cell Phones" className="h-32 w-32 object-cover rounded-full mb-2" />
                            <p className="text-lg text-black">Cell Phones</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="URL_FOR_AUDIO_IMAGE" alt="Audio" className="h-32 w-32 object-cover rounded-full mb-2" />
                            <p className="text-lg text-black">Audio</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="URL_FOR_VIDEO_GAMES_IMAGE" alt="Video Games" className="h-32 w-32 object-cover rounded-full mb-2" />
                            <p className="text-lg text-black">Video Games</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="URL_FOR_CAMERAS_DRONES_IMAGE" alt="Cameras & Drones" className="h-32 w-32 object-cover rounded-full mb-2" />
                            <p className="text-lg text-black">Cameras & Drones</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="URL_FOR_HOME_OFFICE_IMAGE" alt="Home & Office" className="h-32 w-32 object-cover rounded-full mb-2" />
                            <p className="text-lg text-black">Home & Office</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="URL_FOR_SMART_HOME_IMAGE" alt="Smart Home" className="h-32 w-32 object-cover rounded-full mb-2" />
                            <p className="text-lg text-black">Smart Home</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="URL_FOR_SECURITY_WIFI_IMAGE" alt="Security & Wifi" className="h-32 w-32 object-cover rounded-full mb-2" />
                            <p className="text-lg text-black">Security & Wifi</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="URL_FOR_HEALTH_FITNESS_IMAGE" alt="Health & Fitness" className="h-32 w-32 object-cover rounded-full mb-2" />
                            <p className="text-lg text-black">Health & Fitness</p>
                        </div>
                    </Carousel>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
