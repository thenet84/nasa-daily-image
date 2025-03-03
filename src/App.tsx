import { useState } from "react";
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {
  const mockedImage = {
    title: 'Blue Ghost on the Moon',
    hdurl: 'https://apod.nasa.gov/apod/image/2503/BlueGhostShadow_Firefly_4096.jpg',
    explanation: `There's a new lander on the Moon. Yesterday Firefly Aerospace's Blue Ghost executed the first-ever successful commercial lunar landing. During its planned 60-day mission, Blue Ghost will deploy several NASA-commissioned scientific instruments, including PlanetVac which captures lunar dust after creating a small whirlwind of gas. Blue Ghost will also host the telescope LEXI that captures X-ray images of the Earth's magnetosphere. LEXI data should enable a better understanding of how Earth's magnetic field protects the Earth from the Sun's wind and flares.  Pictured, the shadow of the Blue Ghost lander is visible on the cratered lunar surface, while the glowing orb of the planet Earth hovers just over the horizon. Goals for future robotic Blue Ghost landers include supporting lunar astronauts in NASA's Artemis program, with Artemis III currently scheduled to land humans back on the Moon in 2027.`,
  };
  const projectName= "Astronomy Picture of the Day";
  const [showSidebar, setShowSidebar] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <>
      <Main imageUrl= {mockedImage.hdurl} />
      <Footer title={mockedImage.title} subtitle={projectName} toggleSidebar={toggleSidebar} />
      {showSidebar && (
        <Sidebar title={mockedImage.title} explanation={mockedImage.explanation} toggleSidebar={toggleSidebar}/>
      )}
    </>
  )
}

export default App
