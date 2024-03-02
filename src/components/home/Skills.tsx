import { SkillSphere } from "../extra/TagCloud"
import React from 'react';


const Skills : React.FC = () => {
    return (
            <div className="h-dvh">
                <div data-aos="flip-up" data-aos-duration="1000" className="flex justify-center">
                    <h1 className="text-6xl font-bold pt-20 pl-20">Skills</h1>
                    <h1 className="text-6xl mt-20 animate-tiltshaking origin-[50%_80%]">👋</h1>
                </div>
                <SkillSphere />
            </div>
    )
}

export default Skills;