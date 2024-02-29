import React from 'react';
import ScrambleText from '../cursor/ScrambleText';

const Footer: React.FC = () => {
    return (
        <div>
            <div className='mb-60'>
                <div className="flex justify-center text-9xl font-bold mb-6">
                    Lets Work Together!
                </div>
                <a className="flex justify-center text-4xl font-normal hover:text-orange-600 hover:cursor-none" href={"mailto:sjain3243@gmail.com"} >
                    sjain3243@gmail.com
                </a>
            </div>
            <div className="flex">
                <div className="p-2 rounded-xl grid gap-x-8 grid-cols-4 backdrop-blur-md hover:cursor-pointer font-medium tracking-wide text-lg">
                    <ScrambleText text="LinkedIn" />
                    <ScrambleText text="Instagram" />
                    <ScrambleText text="Github" />
                    <ScrambleText text="Emailllll" />
                </div>

            </div>
        </div>
    );
};

export default Footer;