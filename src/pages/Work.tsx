import { useState } from 'react';
import { WorkCard } from '../widgets/cards';
import { Pagination, Skeleton } from 'antd';

import '../css/tailwind.css'
import '../css/animation.css'

import pa from '../../public/pa.jpg'
import pos from '../../public/pos.png'
import sos from '../../public/sos.jpg'
import skin from '../../public/skin.png'
import tas from '../../public/tas.png'
import recipe from '../../public/recipe.png'

const boxes = [
    {   
        id: 1,              
        title: 'Productivity App', 
        description: "This is a mobile application is made for a local government to schedule and manage their own events",
        add: 'Developed with my olleagues',
        role: 'Fullstack Developer',
        techstack: 'React-Native, Express, Postgres',
        image: pa
    },
    { 
        id: 2,  
        title: 'POS', 
        description: `This web application, known as a Point of Sale (POS), 
        is crafted to adhere to BIR policies in accordance with the client's tax specialist specifications.`,
        add: 'Developed with my colleagues',
        role: 'Fullstack Developer',
        techstack: 'HTML/CSS, PHP, MySQL',
        image: pos
    },
    { 
        id: 3,
        title: 'SOS', 
        description: `This mobile application, developed as a school project for my client, revolves around assisting motorists. 
        Its concept enables users to seek help from mechanics, view the mechanics' locations, 
        and promptly share their own locations for swift assistance.`,
        add: 'Developed this with myself',
        role: 'Fullstack Developer',
        techstack: 'Java/Kotlin , XML, SQLite',
        image: sos
    },
    { 
        id: 4,
        title: 'Skin Disease Detection', 
        description: `This mobile application, developed as our school project. We utilize machine learning
        to build an AI that can identify 7 classes of diseases.`,
        add: 'Developed with my colleague',
        role: 'Fullstack Developer',
        techstack: 'Python, Flutter, Dart',
        image: skin
    },
    { 
        id: 5,
        title: 'Transportation Appointment System', 
        description: `This web application, created as part of a school project for a client, 
        focuses on a unique concept—an appointment system designed 
        exclusively for vehicle services within a specific barangay.`  ,
        add: 'Developed this with myself',
        role: 'Fullstack Developer',
        techstack: 'PHP/Laravel, React/TailwindCSS, MySQL',
        image: tas
    },
    { 
        id: 6,
        title: "Tito's Zah Recipe", 
        description: `A web application where you can search various Filipino's dishes recipe. 
        A fun rush project`  ,
        add: 'Developed with my colleague',
        role: 'Backend Developer',
        techstack: 'React/TailwindCSS, Express, MySQL',
        image: recipe
    },
    { 
        id: 7,
        title: 'Todo', 
        description: "A desktop application that can manage your to-do. A clone of microsoft todo desktop app."  ,
        add: 'Developed this with myself',
        role: 'Fullstack Developer',
        techstack: 'C++ with QT Framework',
        image: ''
    },        
    // Add more boxes as needed
];

const Work = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => {
      setCurrentPage(page);
    };
    const itemsPerPage = 3;
    
    const renderBoxes = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
    
        return boxes.slice(startIndex, endIndex).map((box) => (
          <div key={box.id} className="flex flex-col items-center justify-center gap-4">
            {/* Assuming WorkCard is your component to render individual boxes */}
            <WorkCard workCardProps={box} />
          </div>
        ));
    };
    

    
    return (
        <>            
            <div className="w-[1700px] border border-gray-600 rounded-md bg-gray-900">
                <div className="flex flex-wrap justify-around p-4">{renderBoxes()}</div>
                <div className="flex justify-center items-center p-4">
                    <Pagination
                    current={currentPage}
                    defaultCurrent={1}
                    pageSize={itemsPerPage}
                    total={boxes.length}
                    onChange={onPageChange}
                    className="border-gray-600 border rounded-md p-2 text-white"
                    />
                </div>
            </div>
        </>
        
    );
};

export default Work;
