import React from 'react';
import ScrambleText from '../cursor/ScrambleText';
import Link from 'next/link';
import Tilt from "react-parallax-tilt";

const Contact: React.FC = () => {
    return (
        <div id="footer" className="h-dvh flex flex-col justify-center items-center">
                <Tilt className="flex justify-center scale-110 m-10"
                    perspective={600}
                    glareEnable={false}
                    glareMaxOpacity={0.15}
                    scale={1.02}
                    gyroscope={false}>
                    <img src="/signature1.png" alt="logo" width={700} height={800} className="p-10 bg-white text-white" />
                </Tilt>
                <div>
                    <div className="flex justify-center text-7xl font-bold m-6">
                        Let&apos;s Work Together!
                    </div>
                    {/* <Link className="flex justify-center text-4xl font-normal hover:text-orange-600 hover:cursor-none" href={"mailto:sjain3243@gmail.com"} >
                    sjain3243@gmail.com
                </Link> */}
                    <div className='flex justify-center text-4xl font-normal hover:cursor-none text-gray-600'>
                        <ScrambleText text="sjain3243@gmail.com" id="mailto:sjain3243@gmail.com" /></div>
                </div>

        </div>
    );
};

export default Contact;