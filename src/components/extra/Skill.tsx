const Skill = ({ skill, style }: { skill: string, style: string }) => {
    return (
        <div className={`w-0 h-0 
        border-l-[50px] border-l-transparent
        border-b-[75px] border-b-yellow-500
        border-r-[50px] border-r-transparent`}>
            {skill}
        </div>
    );
};

export default Skill;
