import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import card from "../assets/compTest.png";
import postCard from "../assets/Postcard.png";
import fridge from "../assets/appliances.png";
import health from "../assets/healthfitness.png";
import theater from "../assets/homeTheater.png";
import tablet from "../assets/computers.png";
import cellphone from "../assets/cellphones.png";
import audio from "../assets/Audio.png";
import videoGame from "../assets/videoGames.png";
import camera from "../assets/CameraNDrone.png";
import home from "../assets/homeNOffice.png";
import smartHome from "../assets/smarthome.png";
import security from "../assets/security.png";

const HeroSection = () => {
    return (
        <>
            <div className="border-t-4 border-white"></div>
            <section id="hero" className="bg-cover bg-center text-white flex flex-col items-center justify-center w-full px-4 py-8">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8 border-b-4 border-purple-700">
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-100 p-4 rounded-lg flex flex-col justify-between">
                        <div className="relative w-full h-80 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${card})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 rounded-lg flex flex-col justify-center">
                                <h2 className="text-2xl font-bold mb-2 text-white">Patio style without the splurge</h2>
                                <a href="#" className="text-yellow-500 hover:underline">Shop now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-100 p-4 rounded-lg flex flex-col justify-between">
                        <div className="relative w-full h-80 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${postCard})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 rounded-lg flex flex-col justify-center">
                                <h2 className="text-2xl font-bold mb-2 text-white">Look at Today's Deals</h2>
                                <a href="#" className="text-white hover:underline">Shop now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-100 p-4 rounded-lg flex flex-col justify-between">
                        <div className="relative w-full h-80 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${card})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 rounded-lg flex flex-col justify-center">
                                <h2 className="text-2xl font-bold mb-2 text-white">Get the Latest Ryzen Deals</h2>
                                <a href="#" className="text-yellow-500 hover:underline">Shop now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-100 p-4 rounded-lg flex flex-col justify-between">
                        <div className="relative w-full h-80 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${card})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 rounded-lg flex flex-col justify-center">
                                <h2 className="text-2xl font-bold mb-2 text-white">Get the Latest Ryzen Deals</h2>
                                <a href="#" className="text-yellow-500 hover:underline">Shop now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-100 p-4 rounded-lg flex flex-col justify-between">
                        <div className="relative w-full h-80 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${card})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 rounded-lg flex flex-col justify-center">
                                <h2 className="text-2xl font-bold mb-2 text-white">Get the Latest Ryzen Deals</h2>
                                <a href="#" className="text-yellow-500 hover:underline">Shop now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-100 p-4 rounded-lg flex flex-col justify-between">
                        <div className="relative w-full h-80 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${card})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 rounded-lg flex flex-col justify-center">
                                <h2 className="text-2xl font-bold mb-2 text-white">Get the Latest Ryzen Deals</h2>
                                <a href="#" className="text-yellow-500 hover:underline">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-6xl border-b-4"> 
                    <div className="text-black text-left w-full mb-4 flex justify-between items-center">
                        <h3 className="text-2xl font-bold">Shop by Category</h3>
                        <a href="#" className="text-blue-500 hover:underline">View all</a>
                    </div>
                    <Carousel showThumbs={false} showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true} emulateTouch={true} centerMode={true} centerSlidePercentage={20}>
                        <a href="#">
                            <div className="flex flex-col items-center group">
                                <img src={fridge} alt="Appliances" className="h-40 w-40 object-cover rounded-full mb-2 bg-gray-400" />
                                <p className="text-lg text-black group-hover:text-blue-500">Appliances</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="flex flex-col items-center group">
                                <img src={theater} alt="TV & Home Theater" className="h-40 w-40 object-cover rounded-full mb-2" />
                                <p className="text-lg text-black group-hover:text-blue-500">TV & Home Theater</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="flex flex-col items-center group">
                                <img src={tablet} alt="Computers & Tablets" className="h-40 w-40 object-cover rounded-full mb-2" />
                                <p className="text-lg text-black group-hover:text-blue-500">Computers & Tablets</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="flex flex-col items-center group">
                                <img src={cellphone} alt="Cell Phones" className="h-40 w-40 object-cover rounded-full mb-2" />
                                <p className="text-lg text-black group-hover:text-blue-500">Cell Phones</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="flex flex-col items-center group">
                                <img src={audio} alt="Audio" className="h-40 w-40 object-cover rounded-full mb-2" />
                                <p className="text-lg text-black group-hover:text-blue-500">Audio</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="flex flex-col items-center group">
                                <img src={videoGame} alt="Video Games" className="h-40 w-40 object-cover rounded-full mb-2" />
                                <p className="text-lg text-black group-hover:text-blue-500">Video Games</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="flex flex-col items-center group">
                                <img src={camera} alt="Cameras & Drones" className="h-40 w-40 object-cover rounded-full mb-2" />
                                <p className="text-lg text-black group-hover:text-blue-500">Cameras & Drones</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="flex flex-col items-center group">
                                <img src={home} alt="Home & Office" className="h-40 w-40 object-cover rounded-full mb-2" />
                                <p className="text-lg text-black group-hover:text-blue-500">Home & Office</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="flex flex-col items-center group">
                                <img src={smartHome} alt="Smart Home" className="h-40 w-40 object-cover rounded-full mb-2" />
                                <p className="text-lg text-black group-hover:text-blue-500">Smart Home</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="flex flex-col items-center group">
                                <img src={security} alt="Security & Wifi" className="h-40 w-40 object-cover rounded-full mb-2" />
                                <p className="text-lg text-black group-hover:text-blue-500">Security & Wifi</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="flex flex-col items-center group">
                                <img src={health} alt="Health & Fitness" className="h-40 w-40 object-cover rounded-full mb-2" />
                                <p className="text-lg text-black group-hover:text-blue-500">Health & Fitness</p>
                            </div>
                        </a>
                    </Carousel>
                </div>
            </section>
        </>
    );
};


export default HeroSection;
