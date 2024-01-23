// import { Cross as Hamburger } from 'hamburger-react'

import '../css/tailwind.css'
const Navbar = ({ setActivePage } : { setActivePage: (value: string) => void }, ) => {

    const handleClick = (value : string) => {
        setActivePage(value)
    }
    return (

        <>
            <div className='hidden md:flex flex-col gap-4 p-4'>
                <a className='text-sm md:text-3xl cursor-pointer' onClick={() => handleClick('0')}> {'->'} About</a>
                <a className='text-sm md:text-3xl cursor-pointer' onClick={() => handleClick('1')}> {'->'} Work</a>            
                <a className='text-sm md:text-3xl cursor-pointer' onClick={() => handleClick('2')}> {'->'} Contact</a>
            </div>
                    
            
            
                
            {/* <Hamburger rounded/>  */}
                
            

            
        </>
        
    );
};

export default Navbar;
