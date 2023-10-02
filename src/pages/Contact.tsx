
import { useState } from 'react';

import '../css/tailwind.css'
import '../css/animation.css'

function Contact() {

    
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
 
      
    // function Icon({ id, open }) {
    //     return (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth={2}
    //         stroke="currentColor"
    //         className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    //       >
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    //       </svg>
    //     );
    //   }
      
      

    return (
        <div className="fixed bottom-0 w-4/12 shadow-lg z-50 border border-gray-600 rounded-md bg-main-color">
            <button
                className="flex justify-between w-full py-4 px-6 text-center border-b border-gray-600 color-black text-sm"
                onClick={toggleAccordion}
            >
                Contact Me
                <div className="flex gap-2">
                    <p className='text-sm'>Spaces: 2</p>
                    <p className='text-sm'>UTF-8</p>
                    {/* <Icon id={1} open={isOpen}></Icon> */}
                </div>
            </button>
            {isOpen && (
                <div className="py-4 px-6 rounded-md ">
                    {/* <p><sub className="text-gray-500">You can message me here...</sub></p> */}
                    <p><sub className="text-gray-100">Currently not working...</sub></p>
                    <div className="mt-6 flex flex-col gap-4 opacity-80">
                        <div className="flex gap-2">
                            <p className="text-sm text-gray-400">Name . . . . . . . . . . . . .</p>
                            <input type="text" className="bg-transparent border-none outline-none" disabled/>
                        </div>  
                        <div className="flex gap-2">
                            <p className="text-sm text-gray-400">Email. . . . . . . . . . . . . .</p>
                            <input type="email" className="bg-transparent border-none outline-none" disabled/>
                        </div>
                        <div className="flex gap-2">
                            <p className="text-sm text-gray-400">Message . . . . . . . . . .</p>
                            <input type="text" className="bg-transparent border-none outline-none" disabled/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;

