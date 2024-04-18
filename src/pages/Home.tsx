
import '../css/tailwind.css'
import '../css/animation.css'
import About from './About';


const Home = () => {
    
    return (
        <>
            <div className='flex relative justify-center flex-col lg:flex-row items-center h-full gap-2'>
               
                <div className='flex flex-col h-full justify-center'>
                    <About/>
                </div>
                <div className='flex lg:items-center lg:justify-center flex-col h-full w-full lg:w-[30%] gap-6 my-6 '>
                    <h1 className='text-xl italic text-center'>"You can't rise if you don't stand"
                        <h3 className='text-sm mt-2 text-right font-semibold'> - useless quote from me</h3>
                    </h1>

                    <div className='flex justify-center items-center gap-2'>
                        <img src="https://media1.tenor.com/m/8Q08-FYEIfcAAAAC/duck.gif" alt="" width={100}/>
                        <p className='text-center text-[#f4abc4]'>dancing duck.</p>
                    </div>
                </div>
                
                <div className='border-t-2 border-dashed w-full absolute bottom-[-10px]'></div>
            </div>


            

            
        </>
            
      
    );
};

export default Home;
