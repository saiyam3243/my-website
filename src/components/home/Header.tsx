import React, { useState } from 'react';
import ScrambleText from '../utils/ScrambleText';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative z-50">
            <Link className="fixed z-50" href="/">
                <Image src="/logo.png" alt="logo" width={100} height={133} className="w-[80px] md:w-[150px]" />
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
                className="fixed end-4 top-8 md:hidden flex flex-col space-y-2 z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </button>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-black bg-opacity-90 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
                    <ScrambleText text="About" id="#about"/>
                    <ScrambleText text="Skills" id="#skills"/>
                    <ScrambleText text="Works" id="#works"/>
                    <ScrambleText text="Contact" id="#footer"/>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="p-2 rounded-xl fixed end-4 md:end-10 top-8 hidden md:flex content-center grid gap-x-4 md:gap-x-8 grid-cols-4 backdrop-blur-md hover:cursor-pointer font-medium tracking-wide text-sm md:text-base">
                <ScrambleText text="About" id="#about"/>
                <ScrambleText text="Skills" id="#skills"/>
                <ScrambleText text="Works" id="#works"/>
                <ScrambleText text="Contact" id="#footer"/>
            </div>
        </div>
    );
};

export default Header;