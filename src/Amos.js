import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import './Amos.css';

class Amos extends Component{
    render(){
        return(
            <div className="Amos">
                <Header/>
                <div className="container">
                    <div className="amosContainer">
                        <h1>Amos-17 Mission</h1>
                        <p>On Tuesday, August 6, SpaceX’s Falcon 9 rocket successfully lifted off from Space Launch Complex 40 (SLC-40) at Cape Canaveral Air Force Station, Florida, carrying the AMOS-17 satellite for Spacecom. Liftoff occurred at 7:23 p.m. EDT, or 23:23 UTC and the satellite was deployed approximately 31 minutes after liftoff.</p>
                        <p>This was the third and final flight for this particular Falcon 9 first stage, having previously supported the Telstar-19 VANTAGE mission in July 2018 and the Es’hail-2 mission in November 2018.</p>
                        <p>You can watch a replay of the launch webcast below and learn more about the mission in our <a href="https://www.spacex.com/sites/spacex/files/amos-17_mission_press_kit_8_6_2019.pdf" target="blank">press kit.</a></p>
                        <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="506" src="https://www.youtube.com/embed/fZh82-WcCuo" width="900"></iframe>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Amos;