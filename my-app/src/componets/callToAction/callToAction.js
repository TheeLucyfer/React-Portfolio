import React from "react"
import "./style.css"
// import cropped from "../../images"

function Call(){
    return <div className="container bigMargin " id="about">
    <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
            <h1 className="textCenter blackText">About Me</h1>
        </div>
        <div className="col-2"></div>
    </div>
    <div className="row">
        <div className="col-2"></div>
        <div className="col-8 textCenter">
            <img src={require("../../images/Cropped.png")} className="imgResizing contentCenter" />
        </div>
        <div className="col-2"></div>
    </div>
    <div className="row">
        <div className="col-2"></div>
        <div className="col-8 textCenter blackText">
            <p>So you got this far! A few things about me: I love biking, gaming, and creating. Biking is my excuse
                to leave the house sometimes and get some fresh air. Gaming is my excuse to stay inside, and get
                inspiration for creations. Now the big one (why you're here!) is creating. I started creating when I was
                a teenager, managing a local ubuntu server for a game called Garry's Mod. Which sent me down a
                rabbit hole of tech as a hobby. I ended up going into IT as a field technician, but it didn't quite
                satiate that thirst I had for creation. I decided I wanted to try and learn how to make a browser
                game and instantly fell in love with being able to manipulate what was on the browser. I decided to
                enroll in UC Berkley Extension's bootcamp and haven't looked back since.</p>
        </div>
        <div className="col-2"></div>
    </div>
</div>
}
export default Call