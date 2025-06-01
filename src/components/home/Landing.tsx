import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import Typewriter from '../utils/Typewriter';

const LandingPage: React.FC = () => {
    return (
        <div className="mt-12">
            <ParallaxBanner
                layers={[
                    {
                        speed: -20,
                        opacity: [1, 0.5],
                        scale: [0.8, 1.2, 'easeInCubic'],
                        children: (
                            <div className="absolute inset-0 flex items-center justify-center font-medium" data-aos="fade-down">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover absolute"
                                >
                                    <source src="vid1.mp4" type="video/mp4" />
                                </video>
                                <div className="relative z-10 text-center px-4">
                                    <Typewriter toType={["Welcome","I'm Saiyam Jain", "Based in Munich", "Software Developer"]} />
                                </div>
                            </div>
                        ),
                    },
                ]}
                className="aspect-[2/1] min-h-[50vh]"
            />
        </div>
    );
};

export default LandingPage;