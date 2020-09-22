import React from "react"
import "./style.css"

function Header(){
    return <div className="header">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-3">
                <h3 className="headerFont"><a className="headerFont"href="#home">Full-Stack Web Developer</a></h3>
            </div>
            <div className="col-3"></div>
            <div className="col-1">
                <h3 className="headerFont"><a href="#about">About</a></h3>
            </div>
            <div className="col-1">
                <h3 className="headerFont"> <a href="#portfolio">Portfolio</a></h3>
            </div>
            <div className="col-1">
                <h3 className="headerFont"> <a href="#contact">Contact</a></h3>
            </div>
        </div>
    </div>
}
export default Header