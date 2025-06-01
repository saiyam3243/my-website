import React from 'react';
import ScrambleText from '../utils/ScrambleText';
import Link from 'next/link';
import smoothScrollTo from '../utils/SmoothScrollTo';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <div className="relative z-50">
            <Link className="fixed z-50" href="/">
                <Image src="/logo.png" alt="logo" width={100} height={133} className="w-[80px] md:w-[150px]" />
            </Link>
            <div className="p-2 rounded-xl fixed end-4 md:end-10 top-8 flex content-center grid gap-x-4 md:gap-x-8 grid-cols-4 backdrop-blur-md hover:cursor-pointer font-medium tracking-wide text-sm md:text-base">
                <ScrambleText text="About" id="#about"/>
                <ScrambleText text="Skills" id="#skills"/>
                <ScrambleText text="Works" id="#works"/>
                <ScrambleText text="Contact" id="#footer"/>
            </div>
        </div>
    );
};

export default Header;