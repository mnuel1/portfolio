import { useState } from "react";

import NumberedTextArea from "../widgets/textarea";

import '../../assets/css/font.css';

function About () {
    
    const frontend = [
        { title: 'React' },
        { title: 'HTML' },
        { title: 'Tailwind CSS' },
    ];
      
    const backend = [
        { title: 'PHP' },
        { title: 'Node.js' }, 
    
    ];
      
    const desktopapps = [
        { title: 'C/C++' },
        { title: 'Java' }, 
        { title: 'Python' }, 
    ];
    const bg = {
        backgroundColor:"#d9b854"
    }
    return (
        <>        
            <div className="px-7 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">            
                <div className="flex flex-col items-center p-2">
                    <h1 className="align-left w-full text-5xl lg:text-9xl mb-5"> About Me </h1>
                    <p className="text-justify w-full px-3 text-sm md:text-xl lg:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut nobis distinctio totam minus numquam, reiciendis nam odit iure itaque, in mollitia? Beatae maiores eos voluptatem magni error. Eos, aperiam.</p>
                    <div className="flex w-full p-2 mt-10 ">                        
                        <div className="flex flex-col lg:flex-row w-full gap-4">
                            <div className="flex flex-col gap-8">
                                <p className="text-xl text-white">Front-end Technology</p>
                                <div className="flex lg:flex-row gap-4 ">
                                    {frontend.map(({title: item}) => (
                                        <div className="w-max px-3 py-1 rounded-xl whitespace-nowrap font-bold" style={bg}> {item} </div>
                                    ))}
                                    
                                </div> 
                            </div>
                            <div className="flex flex-col gap-8">
                            <p className="text-xl text-white">Back-end Technology</p>
                                <div className="flex  lg:flex-row gap-4 ">
                                    {backend.map(({title: item}) => (
                                        <div className="w-max px-3 py-1 rounded-xl whitespace-nowrap font-bold" style={bg}> {item} </div>
                                    ))}
                                </div> 
                            </div>
                            <div className="flex flex-col gap-8">
                            <p className="text-xl text-white">Desktop Development</p>
                                <div className="flex lg:flex-row gap-4 ">
                                    {desktopapps.map(({title: item}) => (
                                        <div className="w-max px-3 py-1 rounded-xl whitespace-nowrap font-bold" style={bg}> {item} </div>
                                    ))}
                                </div> 
                            </div>
                        </div>                                         
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="w-full flex gap-4 shadow-md items-center" style={{backgroundColor:'#24292e'}}>
                        <div className="flex gap-4 px-4 py-2">
                            <div className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-700 hover:cursor-pointer" ></div>
                            <div className="w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-700 hover:cursor-pointer"></div>
                            <div className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-700 hover:cursor-pointer"></div>
                            
                            
                        </div>
                        <h1 className="font-medium text-white text-sm"> Code Editor </h1>
                    </div>
                    <div className="flex items-center border-r-2 border-l-2 border-t-2 h-9 border-slate-900" style={{backgroundColor:'#1f2428'}}>
                        <div className="flex items-center px-5 py-1 border-t-2 gap-4 hover:cursor-pointer" style={{backgroundColor:'#24292e'}}>
                            <div className="flex items-center ">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeElEQVR4nO1UvUoDYRA8FPxDMVoItiqpBV9BEN/Ct9BGsRC1EG3FRrBMoZ1FLFIYbzfyZWe9HEQs9AVEwUpsInsm4XJ+J4KWWRiG3Z2Z4777CYJ+dco5NxlF11MdhGE4GnjK5mmd+b6J6vVwAUL3Cm5lAaFHFdqI43DaOOl9OnCz4arz3VAVPoFQQ7W2IhIud3AntArQNoRfFPRhbL3N0zrzJX6h41QoXajw6Q/HMgvwnnGexvyWE2RDW63WQBTdzmURx/GQ6Yx9e/PlhgIo+M+rtmg6Y/8ehdzQUqk0GNV5KQvn3Fj7GMZ8e/Plhj48XA4DtJ6F6s1MotObGd/efLmhzWZ1AmCXhWqt+BVaK/r25ssNDf5QvtBzgM7+Emp+ywlSV9lKXnChQxXeT2EHoLU4roybzth6m/fq6EiFXlVos+dbBmhXwWUFX3UhXIXwG0DPAB8kLPymoLBHBy6b/6lSGfnVbbUf3h6E342tD/6rnO9P1K/AU5/bEThWzuANOgAAAABJRU5ErkJggg=="/>
                            </div>
                            <p className="text-white text-sm">README.md</p>
                        </div>                                                
                    </div>
                    <div className="flex items-center border-2 px-5 h-5 py-3  border-slate-900 drop-shadow-2xl shadow-2xl" style={{backgroundColor:'#24292e'}}>
                        <div className="flex items-center justify-center gap-2"> 
                            <span className="text-gray-400 text-xs hover:text-white hover:cursor-pointer">portfolio</span>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAASUlEQVR4nKXQuwmAQBRE0RWxFTOxRLcZbcd6NDmL8GKfuAOTXZhPKX+EEQeWDBxwhqcMXnGhfqlQcWPuByP6gbb+MXHPnt7zpgYHxlk2mnl4/QAAAABJRU5ErkJggg=="/>
                            <span className="text-gray-400 text-xs hover:text-white hover:cursor-pointer">src </span>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAASUlEQVR4nKXQuwmAQBRE0RWxFTOxRLcZbcd6NDmL8GKfuAOTXZhPKX+EEQeWDBxwhqcMXnGhfqlQcWPuByP6gbb+MXHPnt7zpgYHxlk2mnl4/QAAAABJRU5ErkJggg=="/>
                            <span className="flex gap-2 text-gray-400 text-xs hover:text-white hover:cursor-pointer">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAs0lEQVR4nJWQIQ7CQBBFNxiCRyIIgjsAFoFBETwKg8NwAhJUPSfAorgBO1vSnT+t7GVKPtBAIIhO8pKZ+c/MONeksizrFsVtkOehV1VVi7DnjtlDAvwECCfTcDCVxCDnByoJd8xUr2MHyMqin6n6KQGkT+qZGZ2naH4OhDUxS4fkPTOrxSgL03AkMaYjUs/MXmK6ZPPvGGZ0nPe+A4QNIDtA9t/HmMmWzs+ryvLSJo3++1l3tWXAikRxywwAAAAASUVORK5CYII="/>
                                README.md</span>                            
                        </div>                        
                    </div>
                    <div className="flex h-full overflow-auto" style={{backgroundColor:'#24292e'}}>
                        
                            <NumberedTextArea/>
                        

                    </div>
                </div>
                
            </div>
            
        
        </>
    );
}


export default About;