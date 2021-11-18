
const Project = ({projectTitle,skillsText,images,icons}) => {
    return (
        <div className = "flex-1 relative w-9/12 h-32 bg-gray-700 drop-shadow-2xl rounded-2xl">

            <div className = "absolute blur-3xl w-full h-full z-0 rounded-2xl bg-center" style = {{
                backgroundImage: `url(${images[0]})`,
                backdropFilter: 'blur(10)'
            }}>
                <div className = "w-full h-full backdrop-blur-3xl bg-black opacity-50 z-10 rounded-2xl"></div>
            </div>

            <div className = "ml-4 flex-auto z-20 fixed">
                <div className = "text-gray-200 italic text-2xl"><h2>{projectTitle}</h2></div>
                <div className = "text-gray-200 italic text-lg">{skillsText}</div>
            </div>
        </div>
    );
};

export default Project;