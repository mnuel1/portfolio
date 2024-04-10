import { useState } from 'react';
import { WorkCard } from '../widgets/cards';

import '../css/tailwind.css'
import '../css/animation.css'

import pa from '../../public/Prod App.jpg'
import pos from '../../public/pos.png'
import sos from '../../public/sos.jpg'
import skin from '../../public/skin.png'
import tas from '../../public/tas.png'
import recipe from '../../public/recipe website.jpg'
import d3xtra from '../../public/dextra1.jpg'

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
        title: 'SOS', 
        description: `This mobile application, developed as a school project for my client, revolves around assisting motorists. 
        Its concept enables users to seek help from mechanics, view the mechanics' locations, 
        and promptly share their own locations for swift assistance.`,
        add: 'Developed this with myself',
        role: 'Fullstack Developer',
        techstack: 'Java/Kotlin , XML, SQLite',
        image: sos,
        link:"https://github.com/mnuel1/sos"
    },
    { 
        id: 6,
        title: 'Skin Disease Detection', 
        description: `This mobile application, developed as our school project. We utilize machine learning
        to build an AI that can identify 7 classes of diseases.`,
        add: 'Developed with my colleague',
        role: 'Fullstack Developer',
        techstack: 'Python, Flutter, Dart',
        image: skin,
        link: "https://github.com/mnuel1/skin-disease-detection-app"
    },
    { 
        id: 7,
        title: 'Transportation Appointment System', 
        description: `This web application, created as part of a school project for a client, 
        focuses on a unique concept—an appointment system designed 
        exclusively for vehicle services within a specific barangay.`,
        add: 'Developed this with myself',
        role: 'Fullstack Developer',
        techstack: 'PHP/Laravel, HTML/TailwindCSS/React.js, MySQL',
        image: tas,
        link: "https://github.com/mnuel1/TAS"
    },
    
    { 
        id: 8,
        title: 'Todo', 
        description: "A desktop application that can manage your to-do. A clone of microsoft todo desktop app.",
        add: 'Developed this with myself',
        role: 'Fullstack Developer',
        techstack: 'C++ with QT Framework',
        image: '',
        link: "https://github.com/mnuel1/To-Do-App"
    },
    
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

        <div className='flex flex-col gap-6 p-6'>
            <h1 className='text-xl md:text-xl'> Recent Works </h1>
            <div className="flex gap-4">
                
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
        </div>
        
    );
};

export default Work;
