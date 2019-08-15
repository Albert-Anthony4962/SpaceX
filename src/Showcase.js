import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Showcase.css';
import playPause from './playPause.png';

var slideIndex, slides, navBtns, captionText, buttonText, playPauseBtn, timer;
class Showcase extends Component{
    constructor(props){
        super(props);
        this.state={
            url: ["/amos", "/smallsat", "/astronauts"],
            num: 0
        };
        this.moveSlide = this.moveSlide.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
        this.setTimer = this.setTimer.bind(this);
        this.playPauseSlides = this.playPauseSlides.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.deactivateTimer = this.deactivateTimer.bind(this);
    }
    componentDidMount(){
        this.initGallery();
        this.setTimer();
        // window.onbeforeunload = () => {  //NEEDED
        //     console.log("worked");
        //     this.deactivateTimer();
        // }
        // window.onbeforeunload();
    }
    initGallery(){
        slideIndex = 0;
        slides = document.getElementsByClassName('imageHolder');
        slides[slideIndex].style.opacity = 1;
        
        captionText = document.querySelector('.captionHolder .captionText');
        captionText.innerText = slides[slideIndex].querySelector(".captionText").innerText;

        buttonText = document.querySelector('.captionHolder .buttonText');
        buttonText.innerText = slides[slideIndex].querySelector(".buttonText").innerText;

        navBtns=[];
        var navBtnsContainer = document.getElementById('navBtnsContainer');

        for(let i=0; i < slides.length; i++){
            var navBtn = document.createElement("span");
            navBtn.classList.add("navBtns");
            navBtn.addEventListener("click", () => {this.moveSlide(i); this.resetTimer();});
            navBtnsContainer.append(navBtn);
            navBtn.style.padding = "3rem 2rem 2rem 0rem";
            navBtn.style.color = "#fff";
            navBtn.style.borderLeft = ".2rem solid rgba(0, 0, 0, .25)";
            navBtn.style.borderRight = ".2rem solid rgba(0, 0, 0, .25)";
            navBtn.style.fontSize = "1.8rem";
            navBtns.push(navBtn);
        };

        navBtns[slideIndex].classList.add("active");
        navBtns[0].innerText = '01  AMOS-17 MISSION';
        navBtns[1].innerText = '02  SMALLSAT RIDESHARE PROGRAM';
        navBtns[2].innerText = '03  NASA ASTRONAUTS ON CREW DRAGON';
    }
    plusSlides(n){
        this.moveSlide(slideIndex + n);
    }
    moveSlide(n){
        var i, current, next;
        var moveSlideAnimClass = {
            forCurrent: "",
            forNext: ""
        };
        var slideTextAnimClass;
        if(n > slideIndex){
            if(n>=slides.length){n=0}
            moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
            moveSlideAnimClass.forNext = "moveLeftNextSlide";
            slideTextAnimClass = 'slideTextFromTop';
        } else if(n < slideIndex){
            if(n < 0){n = slides.length - 1}
            moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
            moveSlideAnimClass.forNext = "moveRightNextSlide";
            slideTextAnimClass = 'slideTextFromBottom';
        }
        if(n !== slideIndex){
            next = slides[n];
            current = slides[slideIndex];
            for(i=0; i<slides.length;i++){
                slides[i].className="imageHolder";
                slides[i].style.opacity=0;
                navBtns[i].classList.remove("active");
            }
            current.classList.add(moveSlideAnimClass.forCurrent);
            next.classList.add(moveSlideAnimClass.forNext);
            navBtns[n].classList.add("active");
            slideIndex=n;
            slides[slideIndex].style.opacity = 1;
        }
        captionText.style.display="none";
        captionText.className="captionText "+slideTextAnimClass;
        captionText.innerText=slides[n].querySelector(".captionText").innerText;
        captionText.style.display="inline-block";

        buttonText.style.display="none";
        buttonText.className="buttonText "+slideTextAnimClass;
        buttonText.innerText=slides[n].querySelector(".buttonText").innerText;
        buttonText.style.display="inline";
        this.setState({
            num: n
        });
    }
    timer = null;
    setTimer(){
        timer = setInterval(() => {
            this.plusSlides(1);
        }, 6000);
    }
    playPauseSlides(){
        playPauseBtn = document.getElementById("playPauseBtn");
        if(timer === null){
            this.setTimer();
            playPauseBtn.style.backgroundPositionY = "0";
        }else{
            clearInterval(timer);
            timer = null;
            playPauseBtn.style.backgroundPositionY = "-5rem";
        }
    }
    resetTimer(){
        clearInterval(timer);
        playPauseBtn = document.getElementById("playPauseBtn");
        playPauseBtn.style.backgroundPositionY = "0";
        this.setTimer();
    }
    deactivateTimer(){
        // playPauseBtn = document.getElementById("playPauseBtn");  //NEEDED
        // playPauseBtn.style.backgroundPositionY = "-5rem";    //NEEDED
        clearInterval(timer);
    }
    render(){
        return(
            <section id="Showcase"> {/*CONTAINS ALL SLIDING IMAGES*/}
                    <div id="right" onClick={() => {this.plusSlides(1); this.resetTimer()}}>NEXT&gt;</div>
                    <div id="left" onClick={() => {this.plusSlides(-1); this.resetTimer()}}>&lt;PREV</div>
                    <div id="playPauseBtn" onClick={() => this.playPauseSlides()}></div>

                <div className="captionHolder">
                    {/* <p className="captionText"></p> */}
                    <div className="captionHolderContainer">
                        <Link exact to={this.state.url[this.state.num]} onClick={() => this.deactivateTimer()} className="captionText"></Link>
                        <Link exact to={this.state.url[this.state.num]} onClick={() => this.deactivateTimer()} className="buttonText"></Link>
                    </div>
                </div>
                <div className="imageHolder"> {/*HOLDS ALL IMAGES HERE*/}
                    <img src="https://www.spacex.com/sites/spacex/files/amos17_v2.jpg" alt="Amos-17 Mission"/>
                    <p className="captionText">Amos-17 Mission</p>
                    <p className="buttonText">Watch Replay</p>
                </div>

                <div className="imageHolder"> {/*HOLDS ALL IMAGES HERE*/}
                    <img src="https://www.spacex.com/sites/spacex/files/v2_smallsatheader.png" alt="RideShare Missions"/>
                    <p className="captionText">Smallsat Rideshare Program</p>
                    <p className="buttonText">Learn More</p>
                </div>

                <div className="imageHolder"> {/*HOLDS ALL IMAGES HERE*/}
                    <img src="https://www.spacex.com/sites/spacex/files/nasa_astronauts3.jpg" alt="NASA Astronauts on crew Dragon"/>
                    <p className="captionText">NASA Astronauts on Crew Dragon</p>
                    <p className="buttonText">Learn More</p>
                </div>

                <div id="navBtnsContainer"></div>
            </section>
        );
    }
}

export default Showcase;