// import {CarouselCustomNavigation} from '../widgets/Carousel';
// import loadTransition from '../widgets/loadTransition';

import NumberedTextArea from "../widgets/textarea";
import FolderContainer from "../widgets/folders";
import '../css/tailwind.css'
import '../css/animation.css'

const Work = () => {
    
    // const isLoaded = loadTransition(200)
    


    // const frontend = [
    //     { title: 'React' },
    //     { title: 'HTML' },
    //     { title: 'Tailwind CSS' },
    // ];
      
    // const backend = [
    //     { title: 'PHP' },
    //     { title: 'Node.js' }, 
    
    // ];
      
    // const desktopapps = [
    //     { title: 'C/C++' },
    //     { title: 'Java' }, 
    //     { title: 'Python' }, 
    // ];

    
    
    return (
        <section id="work" className="h-screen flex items-center justify-center">
            {/* IDE */}
            <div className="flex flex-col w-full border-4">
                    {/* header */}
                    <div className="w-full flex gap-4 shadow-md items-center" style={{backgroundColor:'#24292e'}}>
                        <div className="flex gap-4 px-4 py-2">
                            <div className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-700 hover:cursor-pointer" ></div>
                            <div className="w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-700 hover:cursor-pointer"></div>
                            <div className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-700 hover:cursor-pointer"></div>                            
                        </div>
                        <h1 className="font-medium text-white text-sm"> Code Editor </h1>
                    </div>
                    <div className="flex">
                                {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nGNgoAv4v4Dh6P8FDP+h+P7/+QwK+DUckP///5QGfnxQ4SNCAyHFpyB4eGk4qXGYsAb1Q1SJQ4IAACQK2NBnN1QTAAAAAElFTkSuQmCC"/>*/}
                        {/* Sidebar */}
                        <div className="flex flex-col w-full">
                            <div className="flex items-center border-l-2 border-t-2 h-9 border-slate-900" style={{backgroundColor:'#1f2428'}}>  
                                <div className="flex items-center px-5 py-1 border-t-2 gap-2" style={{backgroundColor:'#1f2428', borderColor:'#1f2428'}}> 
                                    <div className="flex items-center ">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAk0lEQVR4nO3UMQrCMBSH8Z5A7OgiqCB09ip6AbfeRI+i0IuIU6CDp/lJwUIoQTTWrQ++JYEv/POSVxT/KmxwiNhj8YuwxAOniDMCZrnSCk1i/Yg7rh9yQf1W+trbYvcFNyx7aTuIn0vb+XppGDQqlxBLk/Ez+tNM0mq6U9OTMvqPKhPzNJfOM+9PWI80UFZjJE7WE94ZSypmSgR0AAAAAElFTkSuQmCC"/>                                        
                                    </div>                             
                                    <p className="text-sm"> Explorer</p>   
                                </div>                             
                            </div>
                            <div className="flex items-center border-l-2 border-t-2 border-b-2 px-5 h-5 py-3  border-slate-900 drop-shadow-2xl shadow-2xl" style={{backgroundColor:'#24292e'}}>
                                <div className="flex items-center justify-center gap-2"> 
                                    <span className="flex gap-2 text-gray-400 text-xs hover:text-white hover:cursor-pointer"> PORTFOLIO</span>
                                </div>
                            </div>
                            <div className="flex h-full border-l-2 border-b-2 border-slate-900 drop-shadow-2xl shadow-2xl" style={{backgroundColor:'#24292e'}}>                                    
                                <div className="relative w-full">                                
                                    <FolderContainer/>                                                                                
                                </div>
                            </div>
                        </div>
{/* 16x 16 */}
                        {/* Content bar */}
                        <div className="flex flex-col">
                            {/* PAGE TAB */}
                            <div className="flex items-center border-r-2 border-l-2 border-t-2 h-9 border-slate-900" style={{backgroundColor:'#1f2428'}}>
                                <div className="flex items-center px-5 py-1 border-t-2 gap-4 hover:cursor-pointer" style={{backgroundColor:'#24292e'}}>
                                    <div className="flex items-center ">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKElEQVR4nO3UzytEURjG8ZGwoYgslJWVwsKKvd+KIilLJitZsFHY2IpZKJEtplhYjChR1v4K+SNsP7r1LqbMXDczdk49veee87zfzr33vG8u99cDQ3jBDT4iVtI7+rNC1zAW82KK7zHUmwWazwgtogdP6K4X9BYdGAlwaz2gezgP3WO1Zmj5SPxJXpoh/w8dq9s3RSEudCmq5jWlospVirxCJWgxYkPcwSS2ozlR7LVFbAo1lnmv06CjOMIuLjGMC/ThFNt4wGH4DtCFq4pQtGAem9EHzrCAnVg7wX7A7nCMLXQmB6hWeuOYxQSmsIi5WJ+J52RvOnzJ2hImq73+Cj7jh63jLeJPKkTecrUbsPHLitqouZ/mvkPX0gyDGTt/uZ4xkOUANY0vm2OKwAJuWI8AAAAASUVORK5CYII="/>
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
                                        README.md
                                    </span>                            
                                </div>                        
                            </div>
                            {/* CONTENT */}
                            <div className="flex h-full border-l-2 border-r-2 border-b-2 border-slate-900" style={{backgroundColor:'#24292e'}}>
                                <NumberedTextArea/>                                                                                                
                            </div>
                        </div>
                    </div>
                    
                </div>
        </section>
    );
};

export default Work;
