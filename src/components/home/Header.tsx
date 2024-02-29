import React from 'react';
import ScrambleText from '../cursor/ScrambleText';

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
                    <ScrambleText text="Home" />
                    <ScrambleText text="About" />
                    <ScrambleText text="Projects" />
                    <ScrambleText text="Contact" />
                </div>
        </div>
    );
};

export default Header;