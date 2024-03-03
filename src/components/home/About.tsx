import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const About: React.FC = () => {
    return (
        <div id="about" className="h-dvh flex flex-col justify-center mt-20">
            <div className="flex justify-center" data-aos="flip-up" data-aos-duration="1000">
                <h1 className="text-6xl font-bold pt-20 pl-20">About</h1>
                <h1 className="text-6xl mt-20 animate-tiltshaking origin-[80%_80%]">&nbsp;👋</h1>
            </div>
            <Parallax
                translateY={['200px', '0px']}
                // scale={[0.75, 1.1]}
                // rotate={[180, 360]}
                speed={-100}
                easing={'easeOut'}
                className=''
            >
                <div className="flex flex-col justify-center text-6xl space-y-6 mb-30 text-center leading-snug text-gray-600 font-medium">
                    <h1 data-aos="fade-up" data-aos-duration="800">Ambitious guy with a genuine passion in Software Development.</h1>
                    <h1 data-aos="fade-up" data-aos-duration="900">I believe in Creativity, Quality, Pace and Hardwork.</h1>
                    <h1 data-aos="fade-up" data-aos-duration="1000">Frontend-Backend Development</h1>
                </div>
            </Parallax>
        </div>
    );
};

export default About;