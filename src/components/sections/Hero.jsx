import React from 'react';
import RightSidebar from '../common/RightSidebar';

const Hero = () => {
    return (
        <div className="relative h-[80vh] w-full flex items-center overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/src/assets/videos/hero-bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0"></div>

            <div className="relative z-10 px-8 md:px-16 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
                    IT IS A TOTAL PRECAST EXCHANGE <span className="text-secondary">SELL</span>
                </h1>
                <p className="text-gray-300 tracking-[0.2em] font-semibold text-sm md:text-base mb-8 uppercase">
                    The Complete Precast Business Ecosystem
                </p>

                <div className="flex gap-4">
                    <button className="bg-secondary text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-secondary transition-all transform hover:scale-105 shadow-lg">
                        EXPLORE EXCHANGE
                    </button>
                    <button className="bg-white text-primary px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                        JOIN NETWORK
                    </button>
                </div>
            </div>
            <RightSidebar />
        </div>
    );
};

export default Hero;