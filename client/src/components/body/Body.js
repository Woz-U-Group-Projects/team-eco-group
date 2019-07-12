import React, { Component } from 'react';
import './Body.css';
import Axios1 from './components/Axios1';

class Body extends Component {
    render() {
        return(
            <div className="body">
                <p className="image-desc">This is your oceans</p>
            </div>
        );
    }
}

export default Body;