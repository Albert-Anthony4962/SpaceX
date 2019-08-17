import React, {Component} from 'react';
import './Smallsat.css';
import Header from './Header';
import feature from './feature.mp4';
import pricing from './pricing.mp4';
import falcon from './falcon9.mp4';

class Smallsat extends Component{
    render(){
        return(
            <div className="Smallsat">
                <Header/>
                <section id="feature">
                    <video autoplay="true" loop="true" muted="true" className="videoPlayer" preload="auto" autobuffer="true"><source src={feature} type="video/mp4"/></video>
                    <div className="featureText">
                        <h1>Smallsat Rideshare Program</h1>
                        <h3>Dedicated Affordable Rideshare to Sun Synchronous Orbit</h3>
                    </div>
                </section>         
                <section className="missions">
                    <div className="missionsContainer">
                        <h3>Dedicated ASPA Class Missions as Low as $2.25M</h3>
                        <p>SpaceX’s SmallSat Rideshare Program will provide small satellite operators with regularly scheduled, dedicated Falcon 9 rideshare missions to SSO for ESPA class payloads for as low as $2.25M per mission, which includes up to 150 kg of payload mass.</p>
                        <p>Unlike traditional rideshare opportunities, these missions will not be dependent on a primary. These missions will be pre-scheduled and will not be held up by delays with co-passengers.</p>
                        <p>For payloads who run into development or production challenges leading up to launch, SpaceX will allow them to apply 100% of monies paid towards the cost of rebooking on a subsequent mission (rebooking fees may apply).</p>
                    </div>
                </section>
                <section className="rideshare">
                    <div className="rideshareContainer">
                        <p>Falcon 9 was the most frequently launched commercial rocket worldwide in both 2017 and 2018. With SpaceX as a launch partner, small satellites can fly on dedicated missions with the world’s leading commercial launch provider at a fraction of traditional costs.</p>
                    </div>
                </section>
                <section className="pricing">
                    <video autoplay="true" loop="true" muted="true" width="100%" height="100%" preload="auto" autobuffer="true"><source type="video/mp4" src={pricing}/></video>
                    <div className="pricingContainer">
                        <h2>Pricing To SSO</h2>
                        <img src="https://www.spacex.com/sites/spacex/files/static_pages/chart1_desktop.jpg" alt="Pricing Chart"/>
                        <p>Rideshare missions accommodate customer payloads on 15” or 24” ESPA ports. Cubesats can be aggregated and launched on a customer provided, ESPA-compatible deployer. </p>
                        <p>In addition, a single slot on top of the stack is also available for larger spacecraft interfacing with a 937mm, 1194mm clampband or a standard 1575mm bolt circle--please email sales@spacex.com for pricing.</p>
                    </div>
                </section>
                <section className="schedule">
                    <div className="scheduleContainer">
                        <h2>Schedule & Flexibility</h2>
                        <p>With SpaceX’s SmallSat Program, if you are ready to fly during the scheduled launch period, you will fly. Dedicated rideshare missions will not be delayed by co-passenger readiness. Passengers who run into delays that prevent them from launching can apply 100% of monies paid towards the cost of rebooking on a subsequent mission. Depending on timing of change rebooking fees may apply.</p>
                    </div>
                </section>
                <section className="falcon9">
                    <div className="falcon9Container1">
                        <h2>Missions</h2>
                        <img src="https://www.spacex.com/sites/spacex/files/static_pages/chart2_desktop.jpg" alt="Falcon9 Chart"/>
                    </div>
                    <video autoplay="true" loop="true" muted="true" width="100%" height="100%" preload="auto" autobuffer="true"><source type="video/mp4" src={falcon}/></video>
                    <div className="falcon9Container2">
                        <h2>Falcon 9</h2>
                        <p>Falcon 9 was designed from the ground up for maximum reliability. Falcon 9’s simple two-stage configuration minimizes the number of separation events — and with nine first-stage engines, it can safely complete its mission even in the event of an engine shutdown.</p>
                        <p>Falcon 9 is the world’s first orbital class rocket capable of reflight. As a result, SpaceX has an unparalleled understanding of vehicle performance which contributes to the overall reliability of the launch program.</p>
                        <img src="https://www.spacex.com/sites/spacex/files/static_pages/new_chart_falcon9_desktop.jpg" alt="Falcon 9 stats"/>
                    </div>
                </section>
                <section className="footer">
                    <p>Please contact <a href="#">sales@spacex.com</a> to book your launch</p>
                    <ul>
                        <li>SpaceX &copy; 2019</li>
                        <li><a href="#">YouTube</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Flickr</a></li>
                    </ul>
                </section>
            </div>
        );
    }
}

export default Smallsat;