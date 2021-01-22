import React from 'react'
import Hero from "../../assets/header/hero.jpg"
import Particles from "react-tsparticles";
import particlesOptions from "../../particles.json";

function Header() {
    return (
        <div className="">
            <div className="justify-content-center">
                <Particles options={particlesOptions} height="250px" />
                <h1 className="header-h1">Jacob Wilde</h1>
                <h2 className="header-h2">Full Stack Developer</h2>
            </div>

        </div>

        // <div className="container-fluid header">
        //     <div className="row justify-content-center">
        //         <img className='hero' alt='Model of City Skyline' src={Hero}></img>

        //     </div>
        // </div>

    )
}

export default Header