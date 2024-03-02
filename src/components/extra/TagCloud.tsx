import React, {useEffect} from "react";
import TagCloud, { TagCloudOptions } from "TagCloud";
   
export const SkillSphere = () => {
    useEffect(() => {
        return () => {
        const container = '.tagcloud';
        const texts = [
        'Python', 'JS/TS',
        'Html-CSS', 'Java', 'SAP',
        'Firebase', 'Vercel', 'Next',
        'C', 'C++', 'git', 'SQL', 'Spring', 'Node.js' , 'R'
        ];
        const options : TagCloudOptions = {
        radius: 400,
        maxSpeed: 'fast',
        initSpeed: 'normal',
        keep: true,
        };
        TagCloud(container, texts, options);
    };
    },[]);
    return (
        <div className="flex justify-center align-center m-10">
        <span className="tagcloud text-5xl font-bold text-slate-600 shadow-2xl drop-shadow-2xl" />
        </div>
    );
    }