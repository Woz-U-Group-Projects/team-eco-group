import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Navbar.css';
import Logo from '../../images/logo.svg';
import Body from '../body/Body';

class Navbar extends Component {
    render() {
        return (
            <div className="nav-container">
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <img src={Logo} alt="recycle"></img>
                        <Link className="navbar-brand" to="/">U-Recycle</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/donate">Donate!</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <Route exact path="/" component={Body} />
                </Router>
            </div>
        );
    }
}

export default Navbar