import Home from './pages/Home';
import Work from './pages/Work';

import { BiLogoFacebook, BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi'

import './css/tailwind.css';

const App = () => {
    
    return (
        <>                       
            <div className='flex flex-col z-10' id='bg'>     
                <div className='grid grid-rows-3 min-h-screen'>
                    <div className='flex flex-col justify-center row-span-1'>
                        <Home />                            
                    </div>
                    
                    <div className='flex justify-center row-span-2 '>
                        <Work />
                    </div>
                    <div className='mt-4 row-span-1'>
                        <div className='bg-[#02020A] flex flex-col justify-evenly items-center p-2'>
                                

                                <h5 className='text-center'>If you have a project in mind and would like me to participate, let's get in touch.</h5>
                                <div className='flex justify-center items-center gap-2 mr-12'>
                                    <a href="https://www.facebook.com/manuel.marin.37669528" className="group p-2 rounded-full 
                                        transition-colors hover:bg-blue-500 ease-in-out duration-300" >
                                        <BiLogoFacebook className="text-2xl bg-[#02010A] group-hover:bg-blue-500"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/mnuelrin/" className="group p-2 rounded-full 
                                    transition-colors hover:bg-blue-900 ease-in-out duration-300">
                                        <BiLogoLinkedin className="text-2xl bg-[#02010A] group-hover:bg-blue-900"/>
                                    </a>
                                    <a href="https://github.com/mnuel1" className="group p-2 rounded-full 
                                    transition-colors hover:bg-gray-800 ease-in-out duration-300">
                                        <BiLogoGithub className="text-2xl bg-[#02010A] group-hover:bg-gray-800"/>
                                    </a>
                                </div>
                            </div>

                    </div>
                </div>   
                

            </div> 

           
           
           
                 
            
        </>
    );
};

export default App;
