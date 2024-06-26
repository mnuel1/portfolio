import { useState } from 'react';
import { WorkCard } from '../widgets/cards';

import { BiLogoFacebook, BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi'

import '../css/tailwind.css'
import '../css/animation.css'

import pa from '../../public/Prod App.jpg'
import pos from '../../public/pos.png'
// import sos from '../../public/sos.jpg'
// import skin from '../../public/skin.png'
// import tas from '../../public/tas.png'
import recipe from '../../public/recipe website.jpg'
import d3xtra from '../../public/dextra1.jpg'
import ai from '../../public/ai.png'
import automata from '../../public/automata.png'

const workBox = [
    {   
        id: 1,              
        title: 'Productivity App', 
        description: "This is a mobile application is made for a local government to schedule and manage their own events",
        add: 'Developed with my colleagues',
        role: 'Fullstack Developer',
        techstack: 'HTML/CSS, React Native, Express.js, PostgreSQL',
        image: pa,
        link: "https://github.com/mnuel1/PA-Backend"
    },
    { 
        id: 2,
        title: 'D3xtra', 
        description: "Desktop app for swift, reliable routes in crisis. Real-time routes identification, identify obstacles, offline access.",
        add: 'Developed with my colleagues',
        role: 'Backend Developer',
        techstack: 'HTML/TailwindCSS, Electron.js, Python',
        image: d3xtra,
        link: "https://github.com/mnuel1/paths"
    },
    { 
        id: 3,
        title: "Tito's Zah Recipe", 
        description: `A web application where you can search various Filipino's dishes recipe. 
        A fun rush project`,
        add: 'Developed with my colleague',
        role: 'Backend Developer',
        techstack: 'HTML/TailwindCSS, React.js Express.js, MySQL',
        image: recipe,
        link: "https://github.com/mnuel1/recipe"
    },
    { 
        id: 4,  
        title: 'POS', 
        description: `This web application, known as a Point of Sale (POS), 
        is crafted to adhere to BIR policies in accordance with the client's tax specialist specifications.`,
        add: 'Developed with my colleagues',
        role: 'Fullstack Developer',
        techstack: 'HTML/CSS, PHP, MySQL',
        image: pos,
        link: "https://github.com/mnuel1/RESIBO-REACT"
    },
    { 
        id: 5,  
        title: 'TUP Navigation', 
        description: `This mobile application is developed to help both new/old students in navigating 
        and pinpointing specific rooms or buildings at TUP, similar to Google Maps but specific for campus 
        environments, utilizing an AI algorithm known as Ant Colony Optimization for pathfinding`,
        add: '',
        role: 'Fullstack Developer',
        techstack: 'React Native (Expo Go), Python',
        image: ai,
        link: "https://github.com/mnuel1/tup-navigation"
    },
    { 
        id: 6,  
        title: 'Personal Virtual assistant', 
        description: `A straightforward chatbot designed to assist with basic tasks, akin to Siri and other personal assistants, 
        though with limited functionalities.`,
        add: '',
        role: 'Fullstack Developer',
        techstack: 'Electron JS, Python',
        image: automata,
        link: "https://github.com/mnuel1/va-automata"
    },
    // { 
    //     id: 5,
    //     title: 'SOS', 
    //     description: `This mobile application, developed as a school project for my client, revolves around assisting motorists. 
    //     Its concept enables users to seek help from mechanics, view the mechanics' locations, 
    //     and promptly share their own locations for swift assistance.`,
    //     add: 'Developed this with myself',
    //     role: 'Fullstack Developer',
    //     techstack: 'Java/Kotlin , XML, SQLite',
    //     image: "",
    //     link:"https://github.com/mnuel1/sos"
    // },
    // { 
    //     id: 6,
    //     title: 'Skin Disease Detection', 
    //     description: `This mobile application, developed as our school project. We utilize machine learning
    //     to build an AI that can identify 7 classes of diseases.`,
    //     add: 'Developed with my colleague',
    //     role: 'Fullstack Developer',
    //     techstack: 'Python, Flutter, Dart',
    //     image: "",
    //     link: "https://github.com/mnuel1/skin-disease-detection-app"
    // },
    // { 
    //     id: 7,
    //     title: 'Transportation Appointment System', 
    //     description: `This web application, created as part of a school project for a client, 
    //     focuses on a unique concept—an appointment system designed 
    //     exclusively for vehicle services within a specific barangay.`,
    //     add: 'Developed this with myself',
    //     role: 'Fullstack Developer',
    //     techstack: 'PHP/Laravel, HTML/TailwindCSS/React.js, MySQL',
    //     image: "",
    //     link: "https://github.com/mnuel1/TAS"
    // },
    
    // { 
    //     id: 8,
    //     title: 'Todo', 
    //     description: "A desktop application that can manage your to-do. A clone of microsoft todo desktop app.",
    //     add: 'Developed this with myself',
    //     role: 'Fullstack Developer',
    //     techstack: 'C++ with QT Framework',
    //     image: '',
    //     link: "https://github.com/mnuel1/To-Do-App"
    // },
    
    // Add more boxes as needed
];


const Work = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const itemsPerPage = 4;
    const totalPages = Math.ceil(workBox.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    const currentItems = workBox.slice(startIndex, endIndex);
    const goToPage = (page: number) => {
        setCurrentPage(page);
    };
   
    return (

        <div className='flex flex-col gap-6 p-6 w-full h-fit'>
            <h1 className='text-xl md:text-xl'> Recent Works </h1>
            {/* <div className='flex gap-4'>
                <button className='bg-[#F4ABC4] hover:bg-[#b84b7e] p-2 rounded-md text-[#060930] transition 
                    duration-300 ease-in-out transform hover:scale-105'>All</button>
                <button className='bg-[#F4ABC4] hover:bg-[#b84b7e] p-2 rounded-md text-[#060930] transition 
                    duration-300 ease-in-out transform hover:scale-105'>Full Stack</button>
                <button className='bg-[#F4ABC4] hover:bg-[#b84b7e] p-2 rounded-md text-[#060930] transition 
                    duration-300 ease-in-out transform hover:scale-105'>Backend</button>
            </div> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                
                {currentItems.map((items, index) => (
                    <a href={items.link}>
                        <WorkCard key={index} workCardProps={items} />                    
                    </a>
                ))}            
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => goToPage(i + 1)}
                        className={`px-3 py-1 mx-1 rounded-full focus:outline-none ${
                            currentPage === i + 1 ? 'bg-[#F4ABC4] text-white' : 'bg-[#333456] text-gray-800'
                        }`}
                    >
                        {/* {i + 1} */}
                    </button>
                ))}
            </div>
            <div className='mt-4 row-span-1'>
                <div className='bg-[#02020A] flex flex-col justify-center items-center p-2'>
                    <h5 className='text-center'>If you have a project in mind and would like me to participate, let's get in touch.</h5>
                    <div className='flex justify-center items-center gap-2 '>
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
        
    );
};

export default Work;
