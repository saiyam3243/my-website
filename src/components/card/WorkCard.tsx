import React from 'react';

interface CardProps {
    title: string;
    position: string;
    location: string;
    start: string;
    end: string;
    content: string;
    style?: string;
    link?: string;
}

const Card = ({ title, position, start, end, content, style, location, link }: CardProps) => {
    return (
        <div className="flex flex-col space-y-2 p-4 md:p-6 relative card w-[90vw] md:w-[700px] rounded-xl border bg-card z-20 font-semibold m-4 md:m-12 mb-20 font-sans hover:shadow-[0px_0px_30px_5px_rgb(252,163,17)] transition-shadow delay-300 ease-in duration-300">
            <a className={`flex justify-center card-title font-bold leading-none text-xl md:text-2xl text-gray-600 m-2 ${style}`} href={link}>{title}</a>
            <h2 className="flex justify-center text-sm md:text-base">{position}</h2>
            <h2 className="flex justify-center text-sm md:text-base"> {start} - {end}&nbsp; {location}</h2>
            <p className="card-content p-2 font-medium text-sm md:text-lg break-words">{content}</p>
        </div>
    );
};

export default Card;