import React from 'react';
import ScrambleText from '../cursor/ScrambleText';
import Link from 'next/link';

// interface HeaderProps {
//     title: string;
// }

const Header: React.FC = () => {
    return (
        <div className="relative z-50">
                <div className="fixed">
                    <img src="/sj-logo.png" alt="logo" width={80} height={80} />
                </div>
                <div className="p-2 rounded-xl fixed end-20 flex content-center grid gap-x-8 grid-cols-4 backdrop-blur-md hover:cursor-pointer font-medium tracking-wide text-lg">
                    <ScrambleText text="Home" id = "/"/>
                    <ScrambleText text="About" id="#about"/>
                    <ScrambleText text="Projects" id="#works"/>
                    <ScrambleText text="Contact" id="#footer"/>
                </div>
        </div>
    );
};

export default Header;