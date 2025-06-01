import React from 'react';
import { useParallax } from 'react-scroll-parallax';
import Tilt from "react-parallax-tilt";
import Image from 'next/image';

const RotateStyle = () => {
    const parallax1 = useParallax<HTMLDivElement>({
        translateX: [0, -150],
        easing: 'easeOutQuad',
    });
    const parallax2 = useParallax<HTMLDivElement>({
        translateX: [100, 0],
        easing: 'easeOutQuad',
    });

    return (
        <div>
            <div className="flex justify-center relative" id="footer">
                <Tilt className="absolute top-48 z-10 w-full flex justify-center"
                    perspective={1000}
                    glareEnable={true}
                    glareMaxOpacity={0}
                    scale={1}
                    gyroscope={true}>
                    <Image 
                        src="public/profilepic.jpg" 
                        alt="profile" 
                        width={600} 
                        height={600} 
                        className="grayscale w-[300px] h-[300px] md:w-[600px] md:h-[600px] object-cover" 
                    />
                </Tilt>
            </div>
            <div className="relative flex items-center text-[120px] md:text-[240px] font-bold text-gray-600 z-10 select-none overflow-hidden" ref={parallax1.ref}>
                <h1 className="text-block pr-12 md:pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
                <h1 className="text-block pr-12 md:pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
                <h1 className="hidden md:block text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
                <h1 className="hidden md:block text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
                <h1 className="hidden md:block text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
            </div>
            <div className="flex text-[120px] md:text-[240px] font-bold text-gray-600 select-none overflow-hidden" ref={parallax2.ref}>
                <h1 className="text-block pr-12 md:pr-24 whitespace-nowrap animate-movewords2 tracking-tighter">Creative Developer </h1>
                <h1 className="text-block pr-12 md:pr-24 whitespace-nowrap animate-movewords2 tracking-tighter">Creative Developer </h1>
                <h1 className="hidden md:block text-block pr-24 whitespace-nowrap animate-movewords2 tracking-tighter">Creative Developer </h1>
                <h1 className="hidden md:block text-block pr-24 whitespace-nowrap animate-movewords2 tracking-tighter">Creative Developer </h1>
            </div>
        </div>
    );
};

export default RotateStyle;