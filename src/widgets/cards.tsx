
interface WorkCardProps {
    id : number,
    title : string,
    description: string,
    add: string,
    role: string,
    techstack: string,
    image: string,
}

  
export const WorkCard: React.FC<{ workCardProps: WorkCardProps }> = ({ workCardProps }) => {
    return (
        
        <div className="box-content h-[450px] w-[400px] overflow-hidden inline-block text-[white] relative bg-[white] 
        group hover:cursor-pointer hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
            <img src={workCardProps.image} alt="" 
                className="h-[450px] w-[400px] transition-transform duration-300 ease-in-out " />
            <div className="h-[450px] w-[400px] bg-[rgba(0,0,0,0)] absolute transition-[background-color] 
                duration-300 ease-in-out left-0 top-0 group-hover:bg-[rgba(0,0,0,0.9)]"
            >
                <p className="text-[#ff8cc2] text-center mt-4 opacity-0 group-hover:opacity-100 ">{workCardProps.techstack}</p>
                <div className="absolute left-[20px] bottom-[5px] group-hover:-translate-y-5 opacity-0 
                    group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <p className="text-[#F4ABC4]">{workCardProps.title}</p>
                    <p className="text-[0.8em] opacity-90 text-[#ffd8ea]">{workCardProps.role}</p>
                    <p className="text-[0.8em] opacity-70">{workCardProps.description}</p>
                    <p className="text-[0.6em] opacity-50">--{workCardProps.add}</p>
                </div>
            </div>
        </div>

        
    )
}

