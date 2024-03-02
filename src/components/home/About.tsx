import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const About: React.FC = () => {
    return (
        <div id="about" className="h-dvh">
            <div className="flex justify-center">
                <h1 className="text-6xl font-bold pt-20 pl-20">About</h1>
                <h1 className="text-6xl mt-20 animate-tiltshaking origin-[50%_80%]">👋</h1>
            </div>
            <Parallax
                translateY={['200px', '0px']}
                // scale={[0.75, 1.1]}
                // rotate={[180, 360]}
                speed={-100}
                easing={'easeOut'}
            >
                <div className="flex-col justify-center text-7xl m-10 space-y-6 mb-60 text-center">
                    <h1 data-aos="fade-up" data-aos-duration="800">Ambitious guy with a genuine passion for Software Development.</h1>
                    <h1 data-aos="fade-up" data-aos-duration="900">I believe in Quality, Pace and Hardwork.</h1>
                    <h1 data-aos="fade-up" data-aos-duration="1000">Frontend-Backend-Devops Development</h1>

                    {/* <img src="/sj-logo.png" alt="logo" width={800} height={500} /> */}
                </div>
            </Parallax>
        </div>
    );
};

export default About;