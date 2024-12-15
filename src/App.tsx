import Home from './pages/Home';
import Work from './pages/Work';

// import Navigation from './components/navigation';
import MotionWrapper from './components/motion';
import Logo from './components/logo';
import './css/tailwind.css';

const App = () => {
    
    return (
        <>      
            <Logo />
            <div className='flex flex-col items-center justify-center z-10 min-h-screen p-4' id='bg'>                       
                <MotionWrapper id='home'>
                    <Home />
                </MotionWrapper>
                <MotionWrapper id='work'>
                    <Work />
                </MotionWrapper>
            
                       
           
            
           
            </div>

           
           
           
                 
            
        </>
    );
};

export default App;
