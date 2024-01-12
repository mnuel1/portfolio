import { useState, useEffect } from 'react';
import Navbar from './layouts/navigation';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

import { BiLogoFacebook,BiLogoLinkedin,BiLogoGithub } from 'react-icons/bi'

import './css/tailwind.css';

const App = () => {
    
    const [activePage, setActivePage] = useState('0');    

    let pageContent;
 
    switch (activePage) {
        case '0':
            pageContent = <About />;
            break;
        case '1':
            pageContent = <Work />;
            break;
        case '2':
            pageContent = <Contact />;
            break;
        default:            
            pageContent = <About />;
    }
    
    return (
        <>                       
            <div className='flex items-center justify-center flex-col z-10' id='bg'>               
                <div className='h-screen flex justify-center flex-col'>
                    <div className='grid grid-cols-2'>
                        <div className='col-span-2 mb-4'>
                            <Home />                            
                        </div>
                        
                        <div className='flex justify-center items-center col-span-2 mb-4 '>
                            <div className='col-span-1 border-r mb-4 '>
                                <Navbar setActivePage={setActivePage} />
                            </div>
                            <div className='col-span-1 p-2 w-1/2'>
                                <div className='flex justify-center items-center p-2 '>
                                    {pageContent}
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            
                            <div className='flex justify-center items-center p-4 flex-col'>
                                

                                <h5>If you have a project in mind and would like me to participate, let's get in touch.</h5>
                                <div className='flex gap-2 mt-4'>
                                    <a href="https://www.facebook.com/manuel.marin.37669528" className=" p-2 rounded-full transition-colors hover:bg-blue-500 ease-in-out duration-300" >
                                        <BiLogoFacebook className="text-2xl"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/mnuelrin/" className=" p-2 rounded-full transition-colors hover:bg-blue-900 ease-in-out duration-300">
                                        <BiLogoLinkedin className="text-2xl"/>
                                    </a>
                                    <a href="https://github.com/mnuel1" className=" p-2 rounded-full transition-colors hover:bg-gray-800 ease-in-out duration-300">
                                        <BiLogoGithub className="text-2xl"/>
                                    </a>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                

                </div>
            </div> 

           
           
           
                 
            
        </>
    );
};

export default App;
