
import loadTransition from '../widgets/loadTransition';
import LetterBox from "../widgets/letterBox";
import '../css/tailwind.css'
import '../css/animation.css'

const Home = () => {

    
    const isLoaded = loadTransition(200)
    return (
        <section id="home" className="h-screen flex items-center justify-center">
            <div className="flex items-center justify-center h-screen">
            <div className={`flex items-center justify-center p-5 ${isLoaded ? 'animate-enter' : ''}`}>
                    
                    {isLoaded ? (                      
                        <div className="flex flex-col justify-center items-center gap-4 ml-0 md:ml-10 lg:ml-0">
                            <h1 className="text-2xl md:text-3xl lg:text-5xl mb-2 text-center font-bold text-blue-gray-900 md:mb-10 text-gray-400">
                                I'm Manuel Marin
                            </h1>
                            <LetterBox/>
                        </div>

                    ) : (
                        <div className="flex flex-col justify-center items-center gap-4">
                                                                                      
                            <h1 className="text-xl mb-8 text-center font-bold text-blue-gray-900 md:mb-10 text-white">
                                I'm Manuel Marin
                            </h1>
                            
                            <LetterBox/>
                            
                        </div>
                    )} 
                </div>
            </div>
        </section>
    );
};

export default Home;
