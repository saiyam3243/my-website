import React from 'react';
import ScrambleText from '../cursor/ScrambleText';
import Link from 'next/link';
import Tilt from "react-parallax-tilt";

const Contact: React.FC = () => {
    return (
        <div id="footer" className="h-svh flex flex-col justify-around ">
            <div>
                <div>
                    <Tilt className="flex justify-center h-full w-full"
                        perspective={1000}
                        glareEnable={true}
                        glareMaxOpacity={0.15}
                        scale={1.02}
                        gyroscope={true}>
                        <img src="/profilepic.jpg" alt="logo" width={700} height={700} className="grayscale" />
                    </Tilt>
                </div>
                <div>
                    <div className="flex justify-center text-9xl font-bold m-6">
                        Lets Work Together!
                    </div>
                    {/* <Link className="flex justify-center text-4xl font-normal hover:text-orange-600 hover:cursor-none" href={"mailto:sjain3243@gmail.com"} >
                    sjain3243@gmail.com
                </Link> */}
                    <div className='flex justify-center text-4xl font-normal hover:text-orange-600 hover:cursor-none'>
                        <ScrambleText text="sjain3243@gmail.com" id="mailto:sjain3243@gmail.com" /></div>
                </div>
            </div>

        </div>
    );
};

export default Contact;