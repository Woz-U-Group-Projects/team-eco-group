import React from 'react';
import axios from 'axios';

export default class Donate extends React.Component {
    constructor() {
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v1/`).then(res => {
            console.log(res);
            this.setState({ customers: res.data });
        });
    }
    render() {
        return (
            <div className="donate-app">
                <ul>
                    {this.state.customers.map(person => <li>{person.firstName} {person.lastName}</li>)}
                </ul>
            </div>
        )
    }
} 