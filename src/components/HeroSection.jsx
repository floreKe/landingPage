import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
            <section id="hero" className="bg-cover bg-center h-screen text-white flex flex-col items-center justify-center pt-20">
                <div className="w-full max-w-6xl flex flex-col md:flex-row items-center mb-8 border-4 border-purple-700">
                    <div className="flex flex-col items-start text-left w-full md:w-1/2 mb-4 md:mb-0 p-4">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-black">Today's Deals</h2>
                        <a href="#products" className="bg-purple-700 text-white py-2 px-4 rounded">See More</a>
                    </div>
                    <div className="flex justify-center w-full md:w-1/2 p-4">
                        <img src={postCard} alt="Today's Deals Product" className="h-auto md:h-auto w-full object-cover" />
                    </div>
                </div>
                <div className="w-full max-w-6xl border-b-4"> 
                    <div className="text-black text-left w-full mb-4 flex justify-between items-center">
                        <h3 className="text-2xl font-bold">Get it all right here</h3>
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
