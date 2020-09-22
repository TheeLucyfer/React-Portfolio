import React from "react"
import "./style.css"

function Portfolio(){
    return  <div>
        <div className="container bigMargin" id="portfolio">
    <div className="row">
        <div className="col-1"></div>
        <div className="col-5">
            <a target="_blank" href="https://github.com/TheeLucyfer/Smasual">
                <img src={require("../../images/smasual.png")} className="projectPictures"/>
                <h3 className="blackText">Smasual </h3>
                <h4 className="blackText">Casual hookup website with accounts, filters, and profile pictures</h4>
            </a>
        </div>
        <div className="col-5">
        <img src={require("../../images/discordicon.png")} className="projectPictures"/>
            <a target="_blank" href="https://github.com/TheeLucyfer/Stream-Bot">
                <h3 className="blackText">Discord Stream Bot</h3>
                <h4 className="blackText">Monitors end users status, and dynamically assigns/removes appropiate roles.
                </h4>
            </a>
        </div>
        <div className="col-1"></div>
    </div>
</div>


<div class="container bigMargin">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-5">
                <a target="_blank" href="https://github.com/TheeLucyfer/Eater" >
                <img src={require("../../images/project.png")} className="projectPictures"/>
                    <h3 class="blackText">Eater</h3>
                    <h4 class="blackText">Recipe searching that displays results, and uses local storage for recent
                        searches </h4>
                </a>
            </div>
            <div class="col-5">
                <a target="_blank" href="https://github.com/TheeLucyfer/Role-Bot">
                <img src={require("../../images/discordicon.png")} className="projectPictures"/>
                    <h3 class="blackText">Role Bot</h3>
                    <h4 class="blackText">A bot that takes in users current roll, and assigns them a new one on an emote
                        reaction</h4>
                </a>
            </div>
        </div>
    </div>

    <div className="container bigMargin" id="portfolio">
    <div className="row">
        <div className="col-1"></div>
        <div className="col-5">
            <a target="_blank" href="https://github.com/TheeLucyfer/portfolio">
                <img src={require("../../images/portfolio.png")} className="projectPictures"/>
                <h3 className="blackText"> </h3>
                <h4 className="blackText">Portfolio Website</h4>
            </a>
        </div>
        <div className="col-5">
        <img src={require("../../images/discordicon.png")} className="projectPictures"/>
            <a target="_blank" href="https://github.com/TheeLucyfer/Portolio">
                <h3 className="blackText">Discord Mute Bot</h3>
                <h4 className="blackText">Monitors end users status, and dynamically assigns/removes appropiate roles.
                </h4>
            </a>
        </div>
        <div className="col-1"></div>
    </div>
</div>





    </div>
    
}
export default Portfolio 