import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import Typewriter from '../utils/Typewriter';

const LandingPage: React.FC = () => {
    return (
        <div className="mt-12">
            <ParallaxBanner
                layers={[
                    // {
                    //     image: 'sj-logo.png', speed: 40, translateY: [0, 50],
                    //     opacity: [0.8, 0.3],
                    //     scale: [0.2, 0.85, 'easeInOutBack'],
                    //     shouldAlwaysCompleteAnimation: true,
                    // },
                    // { image: "signature.png", speed: 30 },
                    {
                        speed: -50,
                        opacity: [1, 0.5],
                        scale: [0.8, 1.2, 'easeInSine'],
                        children: (
                            <div className="absolute inset-0 flex items-center justify-center font-medium" data-aos="fade-down">
                                {/* <div className=" inset-0 bg-gradient-to-t from-gray-900 to-blue-900" /> */}
                                {/* <h1 className="text-4xl">I am a&nbsp;</h1> */}
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full object-cover absolute"

                                >
                                    <source src="vid1.mp4" type="video/mp4" />
                                </video>
                                <Typewriter toType={["Welcome","I'm Saiyam Jain", "Based in Munich", "Software Developer"]} />

                            </div>
                        ),
                    },
                ]}
                className="aspect-[2/1]"
            />
        </div>
    );
};

export default LandingPage;