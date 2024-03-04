import React from 'react';
import ScrambleText from '../utils/ScrambleText';
import Link from 'next/link';
import smoothScrollTo from '../utils/SmoothScrollTo';

// interface HeaderProps {
//     title: string;
// }

const Header: React.FC = () => {
    return (
        <div className="relative z-50">
                <Link className="fixed z-50" href="/">
                    <img src="/logo.png" alt="logo" width={150} height={200} />
                </Link>
                <div className="p-2 rounded-xl fixed end-10 top-8 flex content-center grid gap-x-8 grid-cols-4 backdrop-blur-md hover:cursor-pointer font-medium tracking-wide text-base">
                    {/* <ScrambleText text="Home" id = "/"/> */}
                    <ScrambleText text="About" id="#about"/>
                    <ScrambleText text="Skills" id="#skills"/>
                    <ScrambleText text="Works" id="#works"/>
                    <ScrambleText text="Contact" id="#footer"/>
                </div>
        </div>
    );
};

export default Header;