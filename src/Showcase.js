import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Showcase.css';

class Showcase extends Component{
    render(){
        return(
            <section id="Showcase">
                <div className="container">
                    <h1>Our future is on <span>Mars.</span></h1>
                </div>
                <div className="newsletterContainer">
                        <h1 className="newsletterTitle">Amos-17 Mission</h1>
                        {/* <a onClick={this.props.amos} href="https://www.spacex.com/webcast">Watch Replay</a> */}
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
                </nav>
            </section>
        );
    }
}

export default Showcase;