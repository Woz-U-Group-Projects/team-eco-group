import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Body.css';
import Donate from '../../screens/Donate';
import Links from '../../screens/Links';
import Reasons from '../../screens/Reasons';
import Home from '../../screens/Home';

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/links" component={Links} />
                        <Route path="/reasons" component={Reasons} />
                        <Route path="/donate" component={Donate} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Body;