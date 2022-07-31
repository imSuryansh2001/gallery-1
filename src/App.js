import React from 'react'
import Gallery from './Components/Gallery';
import {MdDarkMode} from "react-icons/md"
import "./App.css"


const App = () => {

  const themeButton = () =>{
    document.body.classList.toggle("dark");
  }

  return (
    <>
    {/* theme div */}
    <div className='dark:bg-gray-900'>

      <MdDarkMode onClick={themeButton} id="theme-icon" className='text-white md:cursor-pointer fixed z-[4] mt-[14rem] ml-3 text-3xl'/>
      <h1 className=' mt-6 dark:mt-0 dark:pt-10 text-5xl md:text-6xl px-2 font-semibold text-center text-blue-900 dark:text-blue-400'>Image Gallery</h1>
      <p className='font-myFont text-center dark:text-white px-2 tracking-[0.1rem] text-2xl md:text-3xl text-gray-500 mt-5 md:mt-7 '>sometimes i just scroll down the gallery to see you smiling along with me.</p>
      <Gallery/>

    </div>
    {/* theme div */}
    </>
  );
}

export default App
