import React, {useState, useEffect} from "react"
interface WorkCardProps {
    id : number,
    title : string,    
    techstack: string,
    image: string,
}

export const WorkCard: React.FC<{ workCardProps: WorkCardProps }> = ({ workCardProps }) => {
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const isSmall = window.matchMedia('(max-width: 1024px)').matches;
            setIsSmallScreen(isSmall);
        };

        // Initial check
        checkScreenSize();

        // Event listener for screen size changes
        const resizeListener = () => {
            checkScreenSize();
        };
        window.addEventListener('resize', resizeListener);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);
    return (
        <>
            
            <div className="box-content md:w-full md:h-full overflow-hidden inline-block text-[white] relative bg-[white] 
            group hover:cursor-pointer hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
                {workCardProps.image ? (
                    <img src={workCardProps.image} alt={`image ${workCardProps.title}`} 
                    className="md:w-full md:h-full transition-transform duration-300 ease-in-out" />
                ) : (
                    <div 
                        className="w-[300px] h-[180px] transition-transform duration-300 ease-in-out bg-white" />
                )}
                
                {!isSmallScreen && <div className="md:w-full md:h-full bg-[rgba(0,0,0,0)] absolute transition-[background-color] 
                    duration-300 ease-in-out left-0 top-0 group-hover:bg-[rgba(0,0,0,0.9)]"
                >                 
                    <p className="text-[#ff8cc2] text-center mt-4 opacity-0 group-hover:opacity-100 text-sm">{workCardProps.techstack}</p>
                    <div className="absolute md:left-[20px] bottom-[5px] group-hover:-translate-y-5 opacity-0 
                        group-hover:opacity-100 transition-all duration-300 ease-in-out">
                        <p className="text-[#F4ABC4]">{workCardProps.title}</p>                       
                    </div>
                </div>}
                
            </div>
        
       
        </>
        
    )
}

