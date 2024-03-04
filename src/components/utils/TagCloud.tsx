import React from "react";
import TagCloud, { TagCloudOptions } from "@frank-mayer/react-tag-cloud";

export const SkillSphere = () => {
    return (
        <div className="flex justify-center align-center">
            <TagCloud className="tagcloud text-4xl font-semibold hover:shadow-2xl"
                options={(w: Window & typeof globalThis): TagCloudOptions => ({
                    radius: Math.min(800, w.innerWidth, w.innerHeight) / 2,
                    maxSpeed: "fast",
                })}
                onClickOptions={{ passive: true }}
            >
                {[
                    'Python', 'JS/TS',
                    'Html-CSS', 'Java', 'SAP',
                    'Firebase', 'Vercel', 'Next',
                    'C', 'C++', 'git', 'SQL', 'Spring', 'Node.js', 'R'
                ]}
            </TagCloud>
        </div>
    );
}