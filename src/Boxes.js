import React, {Component} from 'react';
import './Boxes.css';

class Boxes extends Component{
    render(){
        return(
            <section id="Boxes">
                <h1>SPACEX DESIGNS, MANUFACTURES AND LAUNCHES ADVANCED ROCKETS AND SPACECRAFT</h1>
                <div className="masterContainer">
                    <div className="cardContainer">                    
                        <img src="https://www.spacex.com/sites/spacex/files/home_block_reusable.jpg" alt="Rocket booster relanding"/>
                        <h3>REUSABILITY: WORLD’S FIRST REFLIGHT OF AN ORBITAL CLASS ROCKET</h3>                    
                        <a href="https://www.spacex.com">Learn More &rarr;</a>
                    </div>

                    <div className="cardContainer">                    
                        <img src="https://www.spacex.com/sites/spacex/files/home_block_commercial_crew.jpg" alt="Commercial crew room"/>
                        <h3>COMMERCIAL CREW: TAKING AMERICA’S ASTRONAUTS TO SPACE</h3>                    
                        <a href="https://www.spacex.com">Learn More &rarr;</a>
                    </div>

                    <div className="cardContainer">                    
                        <img src="https://www.spacex.com/sites/spacex/files/multiplanetary_thumbnail.jpg" alt="SpaceX commercial rocket"/>
                        <h3>MAKING LIFE MULTIPLANETARY</h3>                    
                        <a href="https://www.spacex.com">Learn More &rarr;</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Boxes;
















































{/* <div className="container">
    <div className="box">
        <div className="cardContainer">
            <img src="https://www.spacex.com/sites/spacex/files/home_block_reusable.jpg" alt="Rocket booster relanding"/>
            <h3>REUSABILITY: WORLD’S FIRST REFLIGHT OF AN ORBITAL CLASS ROCKET</h3>
            <a href="https://www.spacex.com">Learn More &rarr;</a>
        </div>
    </div>

    <div className="box">
        <div className="cardContainer">
            <img src="https://www.spacex.com/sites/spacex/files/home_block_commercial_crew.jpg" alt="Commercial crew room"/>
            <h3>COMMERCIAL CREW: TAKING AMERICA’S ASTRONAUTS TO SPACE</h3>
            <a href="https://www.spacex.com">Learn More &rarr;</a>
        </div>
    </div>

    <div className="box">
        <div className="cardContainer">
            <img src="https://www.spacex.com/sites/spacex/files/multiplanetary_thumbnail.jpg" alt="SpaceX commercial rocket"/>
            <h3>MAKING LIFE MULTIPLANETARY</h3>
            <a href="https://www.spacex.com">Learn More &rarr;</a>
        </div>    
    </div>
</div> */}