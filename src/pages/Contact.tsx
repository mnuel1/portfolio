import '../css/tailwind.css'
import '../css/animation.css'

function Contact() {
           
            
    return (
        <div className="w-[1700px] border border-gray-600 rounded-md bg-gray-900">
            <h1 className="flex justify-between w-full py-4 px-6 text-center border-b border-gray-600 color-black text-sm">
                Contact Me               
            </h1>
           
                <div className="py-4 px-6 rounded-md flex flex-col ">
                    {/* <p><sub className="text-gray-500">You can message me here...</sub></p> */}
                    <p><sub className="text-gray-100">Currently not working...</sub></p>
                    <div className="mt-6 grid grid-cols-2 gap-4 opacity-80 ">
                        <div className="flex flex-col gap-2">
                            <p className="text-md text-gray-400">Name . . . . . . </p>
                            <p className="text-md text-gray-400">Email . . . . . </p>
                            <p className="text-md text-gray-400">Message . . . . </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <input type="text" className="bg-transparent border-b outline-none text-md" placeholder='name'/>
                            <input type="email" className="bg-transparent border-b outline-none text-md" placeholder='email@gmail.com'/>
                            <input type="text" className="bg-transparent border-b outline-none text-md" placeholder='hello there'/>
                        </div>                      
                    </div>
                </div>
            
        </div>
    );
};

export default Contact;

