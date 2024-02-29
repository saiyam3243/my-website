import React from 'react';
import CustomCursor from '../cursor/CustomCursor';

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
        <div className="relative card w-[700px] rounded-xl border bg-card shadow-xl z-20 font-semibold m-2 font-sans">
            {/* <CustomCursor text='cursor-pointer bg-white' /> */}
            <div className="flex flex-col space-y-2 p-6">
                <a className={`flex justify-center card-title font-bold leading-none text-2xl text-orange-600 hover:text-white m-2 ${style}`} href={link}>{title}</a>
                <h2 className="flex justify-center ">{position}</h2>
                <h2 className="flex justify-center"> {start} - {end}&nbsp; {location}</h2>
                <p className="card-content p-2 font-medium text-lg">{content}</p>
            </div>
        </div>
    );
};

export default Card;