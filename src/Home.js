import React, {Component} from 'react';
import Header from './Header';
import Showcase from './Showcase';
import Boxes from './Boxes';
import Footer from './Footer';

class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Showcase/>
                <Boxes/>
                <Footer/>
            </div>
        );
    }
}

export default Home;