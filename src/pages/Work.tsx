import { Pagination, Skeleton } from 'antd';
import '../css/tailwind.css'
import '../css/animation.css'

const Work = () => {
    const boxes = [
        { id: 1, color: 'red' },
        { id: 2, color: 'blue' },
        { id: 3, color: 'green' },
        { id: 4, color: 'yellow' },
        { id: 5, color: 'purple' },
        { id: 6, color: 'orange' },
        { id: 7, color: 'pink' },
        { id: 8, color: 'teal' },
        { id: 9, color: 'brown' },
        { id: 10, color: 'gray' },
        // Add more boxes as needed
      ];

    
    return (
        <>            
            <div className="w-[1700px] border border-gray-600 rounded-md bg-gray-900">
                <div className="flex flex-wrap gap-4 p-4">
                    {boxes.map((box) => (
                        <div className='flex flex-col items-center
                            justify-center gap-4'>
                            <div 
                                key={box.id} 
                                className={`flex items-center justify-center h-32 w-32 border rounded-md cursor-pointer`}>
                                <Skeleton.Image active={false} />
                            
                            </div>
                            Project {box.id}
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center p-4 '>
                    <Pagination defaultCurrent={1} total={50} className='border-gray-600 border rounded-md p-2 text-white'/>
                </div>
        </div>
        </>
        
    );
};

export default Work;
