import React from "react";
import ScrambleText from "../cursor/ScrambleText";

const Footer: React.FC = () => {
    return (
        <footer className="flex shrink-0">
            <div className="p-2 rounded-xl grid gap-x-8 grid-cols-4 backdrop-blur-md hover:cursor-pointer font-medium tracking-wide text-lg">
                <ScrambleText text="LinkedIn" id="https://www.linkedin.com/in/saiyam3243" />
                <ScrambleText text="Chess.com" id="https://chess.com/play/sjain3243" />
                <ScrambleText text="Instagram" id="https://www.instagram.com/saiyam3243/" />
                <ScrambleText text="Github" id="https://github.com/saiyam3243/" />
            </div>
        </footer>
    )
};

export default Footer;