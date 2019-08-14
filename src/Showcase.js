import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Showcase.css';
import playPause from './playPause.png';

var slideIndex, slides, navBtns, captionText, timer;
class Showcase extends Component{
    constructor(props){
        super(props);
        this.moveSlide = this.moveSlide.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
        this.setTimer = this.setTimer.bind(this);
        this.playPauseSlides = this.playPauseSlides.bind(this);
    }
    componentDidMount(){
        this.initGallery();
        this.setTimer();
    }
    initGallery(){
        slideIndex = 0;
        slides = document.getElementsByClassName('imageHolder');
        slides[slideIndex].style.opacity = 1;
        
        captionText = document.querySelector('.captionHolder .captionText');
        captionText.innerText = slides[slideIndex].querySelector(".captionText").innerText;

        navBtns=[];
        var navBtnsContainer = document.getElementById('navBtnsContainer');

        for(let i=0; i < slides.length; i++){
            var navBtn = document.createElement("span");
            navBtn.classList.add("navBtns");
            navBtn.addEventListener("click", () => {this.moveSlide(i)});
            navBtnsContainer.append(navBtn);
            navBtns.push(navBtn);
        };

        navBtns[slideIndex].classList.add("active");
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
        captionText.style.display="inline-block"
    }
    timer = null;
    setTimer(){
        timer = setInterval(() => {
            this.plusSlides(1);
        }, 6000);
    }
    playPauseSlides(){
        var playPauseBtn = document.getElementById("playPauseBtn");
        if(timer === null){
            this.setTimer();
            playPauseBtn.style.backgroundPositionY = "0";
        }else{
            clearInterval(timer);
            timer = null;
            playPauseBtn.style.backgroundPositionY = "-5rem";
        }
    }
    render(){
        return(
            <section id="Showcase"> {/*CONTAINS ALL SLIDING IMAGES*/}
                    <div id="right" onClick={() => this.plusSlides(1)}>NEXT&gt;</div>
                    <div id="left" onClick={() => this.plusSlides(-1)}>&lt;PREV</div>
                    <div id="playPauseBtn" onClick={() => this.playPauseSlides()}></div>

                <div className="captionHolder">
                    {/* <p className="captionText"></p> */}
                    <Link exact to="/amos" className="captionText"></Link>
                    <Link exact to="/amos">Watch Replay</Link>
                </div>
                <div className="imageHolder"> {/*HOLDS ALL IMAGES HERE*/}
                    <img src="https://www.spacex.com/sites/spacex/files/amos17_v2.jpg" alt="Amos-17 Mission"/>
                    <p className="captionText">Amos-17 Mission</p>
                </div>

                <div className="imageHolder"> {/*HOLDS ALL IMAGES HERE*/}
                    <img src="https://www.spacex.com/sites/spacex/files/v2_smallsatheader.png" alt="RideShare Missions"/>
                    <p className="captionText">Smallsat Rideshare Program</p>
                </div>

                <div className="imageHolder"> {/*HOLDS ALL IMAGES HERE*/}
                    <img src="https://www.spacex.com/sites/spacex/files/nasa_astronauts3.jpg" alt="NASA Astronauts on crew Dragon"/>
                    <p className="captionText">NASA Astronauts on Crew Dragon</p>
                </div>

                <div id="navBtnsContainer"></div>
            </section>
        );
    }
}

export default Showcase;
















{/* <div className="container">
                    <h1>Our future is on <span>Mars.</span></h1>
                </div>
                <div className="newsletterContainer">
                        <h1 className="newsletterTitle">Amos-17 Mission</h1>
                        <Link exact to="/amos">Watch Replay</Link>
                </div>

                <nav id="Newsletter">
                    <div className="container">
                        <ol>
                            <li>Amos-17</li>
                            <li>Amos-17</li>
                            <li>Amos-17</li>
                        </ol>
                    </div>
                </nav> */}