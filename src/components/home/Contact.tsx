import React from 'react';
import ScrambleText from '../utils/ScrambleText';
import Link from 'next/link';
import Tilt from "react-parallax-tilt";

const Contact: React.FC = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="900" className="relative z-30 mb-10 h-1/2" id="footer">
            <div className="flex justify-center text-7xl font-bold mb-2">
                Let&apos;s Work Together!
            </div>
            <Link className="flex justify-center text-4xl text-gray-600 font-medium" href={"mailto:sjain3243@gmail.com"} >
                    sjain3243@gmail.com
                    </Link>
            {/* <div className='flex justify-center text-4xl font-normal hover:cursor-none text-gray-600'>
                <ScrambleText text="sjain3243@gmail.com" id="mailto:sjain3243@gmail.com" />
            </div> */}
        </div>
    );
};

export default Contact;