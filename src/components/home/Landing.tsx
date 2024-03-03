import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import Typewriter from './Typewriter';

const LandingPage: React.FC = () => {
    return (
        <div className="h-dvh">
            <ParallaxBanner
                layers={[
                    {
                        image: 'sj-logo.png', speed: 40, translateY: [0, 50],
                        opacity: [0.8, 0.3],
                        scale: [0.2, 0.85, 'easeInOutBack'],
                        shouldAlwaysCompleteAnimation: true,
                    },
                    // { image: "signature.png", speed: 30 },
                    // { image: "sj-logo.png", speed: 10 },
                    {
                        speed: -55,
                        children: (
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* <div className=" inset-0 bg-gradient-to-t from-gray-900 to-blue-900" /> */}
                                {/* <h1 className="text-4xl">I am a&nbsp;</h1> */}
                                <Typewriter toType={["Saiyam Jain", "Munich", "Software Developer", "Frontend Developer"]} />
                            </div>
                        ),
                    },
                ]}
                className="aspect-[2/1] mb-20"
            />
        </div>
    );
};

export default LandingPage;