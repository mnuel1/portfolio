import { useState } from "react";

import CardDefault from "../widgets/card";

import '../../assets/css/font.css';

function Services () {

    return (
        <div className="flex flex-col lg:flex-row gap-4 h-auto">
            <CardDefault title="Web Development" body="I do web apps"/>
            <CardDefault title="Desktop Applications" body="I do desktop apps"/>
            <CardDefault title="Empty" body="Still thinking for 3rd one"/>
        </div>
    );

}

export default Services;