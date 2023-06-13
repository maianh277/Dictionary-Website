import React from "react";
import Us from "../component/AboutUs/Us";
import AboutUsBg from "../assets/Aboutus.png";

const AboutUs = () => {
    return (
        <div className="lex bg-white min-h-[650px]">
            <div className="">
                <Us />
            </div>
            <div className="bg-local">
                <img className="" src={AboutUsBg} alt="AbouUsDictionary" />
            </div>
        </div>

    );
}

export default AboutUs;
