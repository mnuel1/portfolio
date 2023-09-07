import { Typography } from "@material-tailwind/react";
import loadTransition from '../widgets/loadTransition';

import '../css/tailwind.css'
import '../css/animation.css'

const Home = () => {

    
    const isLoaded = loadTransition(200)
    return (
        <section id="home" className="h-screen flex items-center justify-center">
            <div className="flex items-center justify-center h-screen">
                <div className={`flex items-center justify-center p-5 ${isLoaded ? 'animate-enter' : ''}`}>
                    {isLoaded ? (
                        <div className="flex flex-col justify-center items-center gap-4">
                            <h1 className="text-7xl lg:text-9xl text-center text-white">MANUEL MARIN</h1>
                            <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 text-white">
                                Your nice developer
                            </Typography>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="rounded-3xl bg-gray-200">
                                <h1 className="text-7xl lg:text-9xl text-center text-gray-200">MANUEL MARIN</h1>
                            </div>
                            <div className="rounded-3xl bg-gray-200">
                                <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 text-gray-200">
                                    Your nice developer
                                </Typography>
                            </div>
                            
                        </div>
                    )} 
                </div>
            </div>
        </section>
    );
};

export default Home;
