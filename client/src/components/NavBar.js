import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {
    render() {
        return(
            <div>
                <div className="navigation container">
                    <div className="navtext">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;