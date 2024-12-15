import '../css/tailwind.css'
import '../css/animation.css'

import manuel_cv from '../../public/cv.pdf'

function About() {

    
    return (
        <div className='text-center max-w-2xl'>
            <p className='text-lg md:text-xl'>
                I am <b>Manuel</b>, a <b>full stack developer</b> who 
                can build/develop a <b> web </b> or <b>mobile</b> applications.
                    
                
                <p className='mt-2 text-xs md:text-sm'>                
                    -- Currently, I work as a freelance developer, helping students with their project and thesis applications. 
                    I also take on projects from startup businesses. --
                </p>
            </p>

                <div className='flex justify-center items-center mt-4'>

                
                    <a href={manuel_cv}>
                        <button className="bg-[#F4ABC4] hover:bg-[#b84b7e] p-2 rounded-md text-black transition 
                        duration-300 ease-in-out transform hover:scale-105 md:w-fit">Download CV</button>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mnuelmrin21@gmail.com&su=subject&body=body">
                        <button className="ml-2 sm:ml-4 border border-[#F4ABC4] hover:border-[#b84b7e] hover:bg-[#b84b7e] p-2 rounded-md transition 
                        duration-300 ease-in-out transform hover:scale-105 md:w-fit">Contact Me</button>
                    </a>
                </div>
        </div>
        
        
    );
};

export default About;

