import SideBar from './components/SideBar';
import Project from './components/Project';

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900">
      <div className="absolute w-screen h-screen">
          <SideBar/>
      </div>

      <div className = "">
        <div className="absolute top-24 flex-wrap flex justify-center gap-4 origin-center items-center place-items-center w-full">
            <Project projectTitle={"Schism"} images = {["https://volpanic.github.io/PortfolioWebsite/Images/Schism/Schism1.png"]} skillsText = {"Deez"}/>
            <Project projectTitle={"Skull"} images = {["https://images.assetsdelivery.com/compings_v2/1stchoice/1stchoice1602/1stchoice160200012.jpg"]} />
            <Project projectTitle={"Skit"} images = {["https://images.assetsdelivery.com/compings_v2/1stchoice/1stchoice1602/1stchoice160200012.jpg"]}/>
        </div>  
      </div>     
    </div>
  );
}

export default App;
