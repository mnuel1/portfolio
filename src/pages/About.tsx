import '../css/tailwind.css'
import '../css/animation.css'

import manuel_cv from '../../public/cv.pdf'

function About() {

    
    return (
        <div className='mt-4 text-left max-w-4xl'>
            <p className='text-lg md:text-xl'>
                <p className='text-4xl mb-2'>Hey there!</p> I am <b>Manuel</b>, a <b>full stack developer</b> who 
                can build/develop a <b> web </b> or <b>mobile</b> applications.
                    
                
                <p className='mt-2 text-xs md:text-sm'>                
                    -- Currently, I am working as a freelancer developer, 
                    primarily catering to clients who are students 
                    engaged in their project and thesis applications. 
                    Additionally, I have projects from startup 
                    enterprises.
                </p>
            </p>
           
                <a href={manuel_cv}>
                    <button className="mt-4 bg-[#F4ABC4] hover:bg-[#b84b7e] p-2 rounded-md text-[#060930] transition 
                    duration-300 ease-in-out transform hover:scale-105 md:w-[17%]">Download CV</button>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mnuelmrin21@gmail.com&su=subject&body=body">
                    <button className="mt-2 ml-2 sm:ml-4 border border-[#F4ABC4] hover:border-[#b84b7e] hover:bg-[#b84b7e] p-2 rounded-md transition 
                    duration-300 ease-in-out transform hover:scale-105 md:w-[17%]">Contact Me</button>
                </a>             
        </div>
        
        
    );
};

export default About;

