import React, { useEffect } from "react";
import TagCloud, { TagCloudOptions } from "@frank-mayer/react-tag-cloud";

export const SkillSphere = () => {
    // const container = '.tagcloud';
    // const texts = [
    //     'Python', 'JS/TS',
    //     'Html-CSS', 'Java', 'SAP',
    //     'Firebase', 'Vercel', 'Next',
    //     'C', 'C++', 'git', 'SQL', 'Spring', 'Node.js', 'R'
    // ];
    // const options: TagCloudOptions = {
    //     radius: 400,
    //     maxSpeed: 'fast',
    //     initSpeed: 'normal',
    //     keep: true,
    // };
    // useEffect(() => {
    //     return () => {
    //         TagCloud(container, texts, options);
    //     };
    // }, []);
    return (
        <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast",
        })}
        onClick={(tag: string, ev: MouseEvent) => alert(tag)}
        onClickOptions={{ passive: true }}
    >
        {[
            "VSCode",
            "TypeScript",
            "React",
            "Preact",
            "Parcel",
            "Jest",
            "Next",
            "ESLint",
            "Framer Motion",
            "Three.js",
        ]}
    </TagCloud>
    );
}