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

    function getWindowDimensions() {
        if (typeof window !== "undefined") {
            // Client-side-only code
            const { innerWidth: width, innerHeight: height } = window;
            return {
                width: (width / 2),
                height: (height / 2)
            };
        }
        return {
            width: 0,
            height: 0
        } as { width: number; height: number };
    }

    const { height, width } = getWindowDimensions();
    return (
        <div>
            <div className="flex justify-center relative"  id="footer">
                <Tilt className="absolute top-48 z-10 w-full flex justify-center"
                    perspective={1000}
                    glareEnable={true}
                    glareMaxOpacity={0}
                    scale={1}
                    gyroscope={true}>
                    <Image src="/profilepic.jpg" alt="logo" width={height > 500 ? 600 : 500} height={height > 500 ? 600 : 500} className="grayscale" />
                </Tilt>
            </div>
            <div className="relative flex items-center text-[240px] font-bold text-gray-600 z-10 select-none" ref={parallax1.ref}>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords tracking-tighter">Creative Developer </h1>
            </div>
            <div className="flex text-[240px] font-bold text-gray-600 select-none" ref={parallax2.ref}>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords2 tracking-tighter">Creative Developer </h1>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords2 tracking-tighter">Creative Developer </h1>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords2 tracking-tighter">Creative Developer </h1>
                <h1 className="text-block pr-24 whitespace-nowrap animate-movewords2 tracking-tighter">Creative Developer </h1>
            </div>
        </div>
    );
};

export default RotateStyle;