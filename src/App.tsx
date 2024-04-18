import Home from './pages/Home';
import Work from './pages/Work';



import './css/tailwind.css';

const App = () => {
    
    return (
        <>                       
            <div className='flex flex-col z-10' id='bg'>     
                <div className='grid grid-rows-3 min-h-screen'>
                    <div className='ml-2 flex flex-col justify-center row-span-1 p-6'>
                        <Home />                            
                    </div>                    
                    <div className='flex justify-center row-span-2 p-6'>
                        <Work />
                    </div>
                    
                </div>   
                

            </div> 

           
           
           
                 
            
        </>
    );
};

export default App;
