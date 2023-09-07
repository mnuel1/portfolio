// import {CarouselCustomNavigation} from '../widgets/Carousel';
// import loadTransition from '../widgets/loadTransition';
import NumberedTextArea from "../widgets/textarea";
import '../css/tailwind.css'
import '../css/animation.css'

const Work = () => {
    
    // const isLoaded = loadTransition(200)
    
    return (
        <section id="work" className="h-screen flex items-center justify-center">
            {/* IDE */}
            <div className="flex flex-col w-full border-4">
                    <div className="w-full flex gap-4 shadow-md items-center" style={{backgroundColor:'#24292e'}}>
                        <div className="flex gap-4 px-4 py-2">
                            <div className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-700 hover:cursor-pointer" ></div>
                            <div className="w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-700 hover:cursor-pointer"></div>
                            <div className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-700 hover:cursor-pointer"></div>                            
                        </div>
                        <h1 className="font-medium text-white text-sm"> Code Editor </h1>
                    </div>
                    {/* PAGE TAB */}
                    <div className="flex items-center border-r-2 border-l-2 border-t-2 h-9 border-slate-900" style={{backgroundColor:'#1f2428'}}>
                        <div className="flex items-center px-5 py-1 border-t-2 gap-4 hover:cursor-pointer" style={{backgroundColor:'#24292e'}}>
                            <div className="flex items-center ">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeElEQVR4nO1UvUoDYRA8FPxDMVoItiqpBV9BEN/Ct9BGsRC1EG3FRrBMoZ1FLFIYbzfyZWe9HEQs9AVEwUpsInsm4XJ+J4KWWRiG3Z2Z4777CYJ+dco5NxlF11MdhGE4GnjK5mmd+b6J6vVwAUL3Cm5lAaFHFdqI43DaOOl9OnCz4arz3VAVPoFQQ7W2IhIud3AntArQNoRfFPRhbL3N0zrzJX6h41QoXajw6Q/HMgvwnnGexvyWE2RDW63WQBTdzmURx/GQ6Yx9e/PlhgIo+M+rtmg6Y/8ehdzQUqk0GNV5KQvn3Fj7GMZ8e/Plhj48XA4DtJ6F6s1MotObGd/efLmhzWZ1AmCXhWqt+BVaK/r25ssNDf5QvtBzgM7+Emp+ywlSV9lKXnChQxXeT2EHoLU4roybzth6m/fq6EiFXlVos+dbBmhXwWUFX3UhXIXwG0DPAB8kLPymoLBHBy6b/6lSGfnVbbUf3h6E342tD/6rnO9P1K/AU5/bEThWzuANOgAAAABJRU5ErkJggg=="/>
                            </div>
                            <p className="text-white text-sm">README.md</p>
                        </div>                                                
                    </div>
                    {/* BREADCRUMBS */}
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
                    {/* CONTENT */}
                    <div className="flex h-full overflow-auto" style={{backgroundColor:'#24292e'}}>                        
                        <NumberedTextArea/>                    
                    </div>
                </div>
        </section>
    );
};

export default Work;
