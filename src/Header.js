import React, {Component} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <header>
                <div className="container">
                    <div id="branding">
                        <NavLink exact to="/">
                            <img src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png" alt="SpaceX"/>
                        </NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li><button>Falcon 9</button></li>
                            <li><button>Falcon Heavy</button></li>
                            <li><button>Dragon</button></li>
                            <li><button>Updates</button></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;