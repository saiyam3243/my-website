import React from 'react';
import ScrambleText from '../cursor/ScrambleText';
import Link from 'next/link';
import Tilt from "react-parallax-tilt";

const Contact: React.FC = () => {
    return (
        // {// <div >
        //         /* <Tilt className="flex justify-center scale-110 m-10"
        //             perspective={600}
        //             glareEnable={false}
        //             glareMaxOpacity={0.15}
        //             scale={1.02}
        //             gyroscope={false}>
        //             <img src="/signature1.png" alt="logo" width={700} height={800} className="p-10 bg-white text-white" />
        //         </Tilt> */}
        <div data-aos="fade-up" data-aos-duration="1200" className="" id="footer">
            <div className="flex justify-center text-7xl font-bold">
                Let&apos;s Work Together!
            </div>
            {/* <Link className="flex justify-center text-4xl font-normal hover:text-orange-600 hover:cursor-none" href={"mailto:sjain3243@gmail.com"} >
                    sjain3243@gmail.com
                    </Link> */}
            <div className='flex justify-center text-4xl font-normal hover:cursor-none text-gray-600'>
                <ScrambleText text="sjain3243@gmail.com" id="mailto:sjain3243@gmail.com" /></div>
        </div>
    );
};

export default Contact;