import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="container">
                <img src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png" alt="SpaceX"/>
                    <ul>
                        <li><button>Twitter</button></li>
                        <li><button>YouTube</button></li>
                        <li><button>Flickr</button></li>
                        <li><button>Instagram</button></li>
                    </ul>

                    <p>&copy; 2017 SPACE EXPLORATION TECHNOLOGIES CORP.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;