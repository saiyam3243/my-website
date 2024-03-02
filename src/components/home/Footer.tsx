import React from "react";
import ScrambleText from "../cursor/ScrambleText";

const Footer: React.FC = () => {
    return (
        <footer className="flex shrink-0">
            <div className=" rounded-xl grid gap-x-8 grid-cols-4 backdrop-blur-md hover:cursor-pointer font-medium tracking-wide text-lg">
                <ScrambleText text="LinkedIn" id="#about" />
                <ScrambleText text="Github" id="#about" />
                <ScrambleText text="Chess" id="#about" />
                <ScrambleText text="Instagram" id="#about" />
            </div>
        </footer>
    )
};

export default Footer;