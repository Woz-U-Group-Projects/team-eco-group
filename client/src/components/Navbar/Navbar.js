import React, { Component } from 'react';
import './Navbar.css';
import Logo from '../../images/logo.svg';

class Navbar extends Component {
    render() {
        return (
            <div className="nav-container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <img src={Logo} alt="recycle"></img>
                    <a className="navbar-brand" href="www.facebook.com">U-Recycle</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="website.com">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="test.com">Donate!</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
               </nav>
            </div>
        );
    }
}

export default Navbar