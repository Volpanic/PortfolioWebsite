
const Project = ({projectTitle,skillsText,images,icons}) => {
    return (
        <div className = "flex-1 relative w-9/12 h-32 min max-w-xl z-0 bg-gradient-to-tl from-yellow-500 via-red-500 rounded-2xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-3">
            <div className = "flex-1 relative w-full h-full bg-gray-700 drop-shadow-2xl rounded-2xl transform rotate-3">

                {/* Background Image */}
                <div className = "absolute blur-3xl w-full h-full z-0 rounded-2xl bg-center" style = {{
                    backgroundImage: `url(${images[0]})`,
                    backdropFilter: 'blur(10)'
                }}>
                    <div className = "w-full h-full backdrop-blur-3xl bg-black opacity-50 z-10 rounded-2xl"></div>
                </div>

                {/* Project Preview Contents */}
                <div className = "ml-4 flex-auto z-20 fixed">
                    <div className = "text-gray-200 italic text-2xl"><h2>{projectTitle}</h2></div>
                    <div className = "text-gray-200 italic text-lg">{skillsText}</div>
                </div>

                {/* Hover over */}
                <div class="text-white absolute ring-4 ring-yellow-500 flex align-middle text-center transition-opacity w-full h-full opacity-0 hover:opacity-60 bg-opacity-0 hover:bg-opacity-100 bg-black rounded-3xl">
                    <p class="m-auto bg-clip-content">More Info</p>
                </div>

            </div>
        </div>
    );
};

export default Project;