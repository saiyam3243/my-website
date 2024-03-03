import React, { useEffect, useRef } from 'react';
import Card from '../card/WorkCard';
import useHorizontalScroll from '../extra/useHorizontalScroll';
import { useParallax } from 'react-scroll-parallax';

const Works: React.FC = () => {
    const workExpOne = [
        ["La Famiglia", "Devops / Frontend Developer", "Munich, DE", "Oct 2023", "Mar 2024", "Software product for investor relations and tracking, contributing to the project's infrastructure, authentication, and integrations (Google Firebase, communication services). Responsible for front-end development utilizing Next-Typescript."],
        ["Projekt0708", "Junior Associate", "Munich, DE", "Mar 2023", "Dec 2023", "Software development utilizing Java, JavaScript-SAPUI5 and multiple SAP tools. Possesses strong skills in testing, documentation, and prototyping novel software technologies."],
        ["Extraa Insights", "Internship", "Nagpur, IN", "Aug 2021", "Jan 2021", "Demonstrated proficiency in web development by creating user-friendly web pages utilizing HTML, JavaScript, and CSS. Adhered to industry best practices and contributed to optimizing web design processes."],
        // ["Delhi Public School", "A-levels / Abitur", "Aligarh, IN", "Mar 2017", "Dec 2019", "Completed A-levels with a focus on physics and mathematics. Achieved a 92% / 1,2 Note. Passed the IIT JEE exam which is known to be the world's second toughest exam with over a million participants for about 151k seats.  "],
        ["Technical University of Munich", "BSc Informatics", "Munich, DE", "Oct 2021", "Present", "The degree program balanced theory with practical application, encompassing software development, programming languages, algorithms, data structures, and more."],
        ["Decimal to Complex Base ", "Practicum", "Munich, DE", "May 2022", "Jul 2022", "Project on C based on the conversion of a real number into a complex basis and vice-versa. A scientific paper was submitted at the end of the project along with presentation and developed algorithm."],
        ["Air Pingu", "Project", "Munich, DE", "May 2022", "Jul 2022", "React and Spring-based flight management application. Designed and implemented features with frontend focus for trip planning, flight interaction, and user feedback."],
        // ["Upcoming Projects", "Volunteer Projects", "Munich, DE", "Present", "Present", "Helping a community building their website to showcase their work and help them in their digital presence. Also, working on this website to make it more interactive and user-friendly."]
    ];

    const reversedWorkExpOne = workExpOne.reverse();
    const horizontalScrollRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleScroll = (e: { deltaY: any; }) => {
            if (horizontalScrollRef.current) {
                const { deltaY } = e;
                horizontalScrollRef.current.scrollLeft += deltaY;
            }
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <div className="h-dvh flex flex-col justify-evenly mt-20">
                <div data-aos="flip-up" data-aos-duration="1000" className="flex justify-center h-20">
                    <h1 className="text-6xl font-bold pl-20">Works</h1>
                    <h1 className="text-6xl animate-bounce">&nbsp; 🛠️</h1>
                </div>
            <div id="works" className="section flex overflow-x-scroll" ref={horizontalScrollRef}>
                {reversedWorkExpOne.map((item, index) => {
                    return <Card key={index} title={item[0]} position={item[1]} location={item[2]} start={item[3]} end={item[4]} content={item[5]} />

                })}
            </div>
        </div>
    );
};

export default Works;