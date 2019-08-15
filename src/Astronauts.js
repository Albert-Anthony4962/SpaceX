import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import './Astronauts.css';

class Astronauts extends Component{
    render(){
        return(
            <div className="Astronauts">
                <Header/>
                <div className="astroContainer">
                    <div className="article">
                        <a href="https://www.spacex.com/news">SpaceX News</a> &rarr; Article
                    </div>
                    <div className="titleContainer">
                        <p>August 04, 2018</p>
                        <h1>Nasa Astronauts Flying Aboard Crew Dragon</h1>
                    </div>
                    <div className="newsContainer">
                        <p>On Friday, August 3, 2018, NASA announced the first four astronauts who will launch aboard Crew Dragon (also known as Dragon 2) to the International Space Station as part of NASA’s Commercial Crew Program, which will return human spaceflight capability to the United States for the first time since the Space Shuttle Program was retired in 2011.</p>
                        <img src=" http://www.spacex.com/sites/spacex/files/spacexcrew_20180803_bi0i1604.jpg" alt="NASA Astronauts"/>
                        <i>"Top row, left to right: NASA Astronauts Victor Glover and Mike Hopkins; bottom row, left to right:  NASA Astronauts Bob Behnken and Doug Hurley"</i>
                        <p>Following SpaceX’s first demonstration mission without humans aboard Crew Dragon targeted for November 2018, Bob Behnken and Doug Hurley will be the first two NASA astronauts to fly in the Dragon spacecraft. This mission, currently targeted for April 2019, will liftoff from historic Launch Complex 39A at NASA’s Kennedy Space Center in Florida with the astronauts aboard Crew Dragon atop a Falcon 9 rocket.</p>
                        <img src=" http://www.spacex.com/sites/spacex/files/bobdouginterior_20180802_bi0i0687.jpg" alt="Bob Behnken and Doug Hurley"/>
                        <i>From left to right: NASA Astronauts Bob Behnken and Doug Hurley</i>
                        <p>After Crew Dragon’s demonstration mission with crew is complete, Victor Glover and Mike Hopkins will be the first two NASA astronauts to launch aboard Crew Dragon to the International Space Station for a long-duration mission. This mission will mark SpaceX’s first operational crew mission under our current Commercial Crew Transportation Capability contract with NASA.</p>
                        <img src=" http://www.spacex.com/sites/spacex/files/victormikeexterior_bi0i0824.jpg" alt="Victor Glover and Mike Hopkins"/>
                        <i>From left to right: NASA Astronauts Victor Glover and Mike Hopkins</i>
                        <p>As Dragon prepares to carry humans for the first time, the spacecraft continues to make regular trips to the International Space Station carrying cargo under SpaceX’s Commercial Resupply Services contract with NASA. Currently, Dragon is the only spacecraft flying that is capable of returning significant amounts of cargo to Earth.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Astronauts;