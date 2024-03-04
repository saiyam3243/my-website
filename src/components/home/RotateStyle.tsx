import React from 'react';
import { useParallax } from 'react-scroll-parallax';
import Tilt from "react-parallax-tilt";

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
        <div className="h-dvh">
            <div className="flex justify-center relative">
                <Tilt className="absolute top-60 z-10"
                    perspective={800}
                    glareEnable={true}
                    glareMaxOpacity={0.15}
                    scale={1.02}
                    gyroscope={false}>
                    <img src="/profilepic.jpg" alt="logo" width={700} height={700} className="grayscale" />
                </Tilt>
            </div>
            <div className="relative flex items-center text-[300px] font-bold text-gray-600 z-10 select-none" ref={parallax1.ref}>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
            </div>
            <div className="flex text-[300px] font-bold text-gray-700 select-none" ref={parallax2.ref}>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords2 tracking-tighter">Creative Developer </h1>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords2 tracking-tighter">Creative Developer </h1>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords2 tracking-tighter">Creative Developer </h1>
            </div>
            </div>
    );
};

export default RotateStyle;