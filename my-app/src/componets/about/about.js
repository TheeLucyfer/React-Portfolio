import React from "react"
import "./style.css"

function About(){
    return <div className="container hero">
    <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
            <h1 className="headerFont mainText textShadow textCenter">
                Lucy Lamperouge
            </h1>
        </div>
        <div className="col-2"></div>
    </div>
    <br />
    
    <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
            <h4 className="subtext textShadow textCenter">
                If I don't know it, I can learn it.
            </h4>
        </div>
        <div className="col-2"></div>
    </div>

    <br />
    <div className="row">
        <div className="col-2"></div>
        <div className="col-8 textCenter">
            <a href="#about">
                <button type="button" className="reSize btn btn-success">
                    Learn More
                </button>
            </a>
        </div>
        <div className="col-2"></div>
    </div>
</div>
}
export default About