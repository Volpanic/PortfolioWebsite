import { BsGithub, BsLinkedin,BsYoutube } from 'react-icons/bs';

const SideBar = () => {
    return (
        <div className = "fixed top-0 left-0 w-screen h-16">
          
            <div className  = "fixed top-0 left-0 w-screen h-16 bg-gray-900 shadow-lg"></div>

            <div className = "absolute w-1/4 origin-left inset-y-0 left-0 flex flex-row">
              <SideBarName text = "Ryan Lawrence"></SideBarName>
            </div>

            <div className = "absolute w-1/4 origin-right inset-y-0 right-0 flex flex-row">
              <SideBarIcon icon={<BsGithub size="28"/>}  link={"https://github.com/Volpanic"}/>
              <SideBarIcon icon={<BsLinkedin size="28"/>} link={"https://www.linkedin.com/in/ryan-lawrence-dev/"} />
              <SideBarIcon icon={<BsYoutube size="28"/>} />
            </div>
        </div>
    );
};

const SideBarIcon = ({ icon,link = "https://www.youtube.com/", text = 'tooltip 💡' }) => (
  <div className="sidebar-icon">
    <a href = {link}>
    {icon}
    </a>
  </div>
);

const SideBarName = ({text = 'Name'}) => (
  <div className = "font-semibold flex items-center origin-left ml-4 text-center text-3xl text-white hover:text-purple-500">
    {text}
  </div>
);

export default SideBar;