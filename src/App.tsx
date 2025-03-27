import { useState, useEffect, Fragment } from "react";
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

type ImageData = {
  title: string;
  hdurl: string;
  explanation: string;
} | null;

function App() {
  const projectName= "Astronomy Picture of the Day";
  
  const [showSidebar, setShowSidebar] = useState(false);
  const [imageData, setImageData] = useState<ImageData>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);



  useEffect(() => {
    async function fetchImage() {
      const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
      console.log('NASA_API_KEY: ', NASA_API_KEY);
      const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setImageData(data);
        console.log(data)
      }
      catch (e) {
        console.error(e)
        setError(true);
      }
    }
    fetchImage()
  }, [])
  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return imageData && !loading ? (
      <Fragment>
      <Main imageUrl= {imageData.hdurl} />
      <Footer title={imageData.title} subtitle={projectName} toggleSidebar={toggleSidebar} />
      {showSidebar && (
        <Sidebar title={imageData.title} explanation={imageData.explanation} toggleSidebar={toggleSidebar}/>
      )}
    </Fragment>
    )
    : (
      <>
        {loading ? (
          <div className="loading-state">
             <i className="fa-solid fa-gear"></i>
          </div>
        ) 
        : error && ( 
          <div>
            <span>Something went wrong</span>
          </div>
        )}
      </>
    )
}

export default App
