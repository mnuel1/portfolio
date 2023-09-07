import { Button } from "@material-tailwind/react";

import InputWithOverlappingLabel from "../widgets/Input";
import '../css/tailwind.css'
import '../css/animation.css'

function Contact() {
    return (
        <>
        <div className="flex flex-col gap-4">        
            <h1 className="align-left w-full text-5xl mb-12"> Contact Me </h1>
            <div className="flex flex-col gap-6 md:flex-row md:justify-between md:gap-12">
                <div className="w-full md:w-1/2">
                <InputWithOverlappingLabel labelText="Name" inputType="text"/>
                
                </div>
                <div className="w-full md:w-1/2">
                <InputWithOverlappingLabel labelText="Email Address" inputType="email"/>
                </div>
            </div>
            <div className="w-full mt-4">
                <InputWithOverlappingLabel labelText="Message" inputType="text"/>
            </div>
            <div>
            <Button variant="filled" color="green" className="rounded-full w-full">
                Submit
            </Button>
            </div>
        </div>
        </>
        
    );
}

export default Contact;

