import { useState } from "react";

import { Typography } from "@material-tailwind/react";
import '../../assets/css/font.css';

function Home () {

    const hero = {
        fontSize: '205px'
    }
  
    
    return (
        <div className="flex items-center justify-center h-screen" >            
            <div className="flex items-center justify-center p-5 bg-transparent" >
                <div className="flex flex-col justify-center items-center bg-transparent">
                    <h1 className="bg-transparent text-7xl lg:text-9xl text-center"> MANUEL MARIN</h1>
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 bg-transparent"
                    >
                        Your nice developer     
                    </Typography>

                </div>

            </div>
        </div>
    );
}

export default Home;