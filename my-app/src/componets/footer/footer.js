import React from "react"

function Footer(){
    return <div class="blackBackground footer" id="contact">
    <div class="container bigMargin bigPadding">
        <div class="row">
            <div class="col-1"> </div>
            <div class="col-10 textCenter">
                <a href="mailto:theelucylamperouge@gmail.com" class="noUnderLine">
                    <img class="icon mx-4" src={require("../../images/email.svg")}/>
                </a>
                
                <a target="_blank" href="https://www.linkedin.com/in/lucy-lamperouge-ba34961a0/" class="noUnderLine">
                    <img class='icon mx-4' src={require('../../images/linkedin.svg')} />
                </a>
                <a target="_blank" href="./public/My_Resume.pdf" class="noUnderLine">
                    <img class="icon mx-4" src={require("../../images/portfolio.svg")}/>
                </a>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
</div>
}
export default Footer