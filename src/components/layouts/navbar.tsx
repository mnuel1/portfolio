import { useState } from "react";
import { Cross as Hamburger } from 'hamburger-react'

import Switch from "../widgets/switch";
import '../../assets/css/font.css';


function NavigationBar() {

    const [isOpen, setOpen] = useState(true);
    
    // Function to toggle mobile menu visibility
    const toggleNavBar = () => {
        setOpen(!isOpen);
    };
    const bg = {
        backgroundColor: '#fdfdfc'
    }
    const logobg = {
        backgroundImage: 'url(https://cdn.dribbble.com/users/687040/screenshots/5683835/klowe_retrospective-2018.png)',
        backgroundSize: 'cover',
        
    }
    return (
        <>
        <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 text-white transition-transform transform z-40 ${isOpen ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
        style={logobg}>
            <div className="flex items-center justify-center w-full h-screen overflow-hidden m-0 p-0">
            {/* Responsive navigation links */}
            <ul className="text-center p-5 rounded-3xl" style={bg}>
                <li className="list-none mb-5"><a href="#home" data-text="Home" className="text-4xl md:text-6xl lg:text-7xl text-black">Home</a></li>
                <li className="list-none mb-5"><a href="#about" data-text="Blogs" className="text-4xl md:text-6xl lg:text-7xl text-black">About Me</a></li>
                <li className="list-none mb-5"><a href="#work" data-text="Coding" className="text-4xl md:text-6xl lg:text-7xl text-black">My Work</a></li>
                <li className="list-none mb-5"><a href="#contact" data-text="Skills" className="text-4xl md:text-6xl lg:text-7xl text-black">Contact Me</a></li>                
            </ul>
            </div>
        </div>
        <div className="flex px-10 lg:px-20 py-3 w-full gap-4 fixed z-50 justify-between drop-shadow-2xl" style={{backgroundColor:'#fdfdfc'}}>
            <div className="w-16 h-17 flex items-center justify-center rounded-l-full hover:cursor-pointer" >
                
                <img src="src\assets\icon.png" className="w-1/2 md:w-11/12 lg:w-full"alt="icon" />
                <h1 className="text-black text-md md:text-xl lg:text-2xl">man</h1>
            </div>
            <div className="flex items-center justify-center ">
                <Hamburger rounded onToggle={toggleNavBar} />
            </div>        
            <div className="flex items-center justify-center "><Switch/></div>
        </div>
        
        </>
    );
  }

export default NavigationBar;