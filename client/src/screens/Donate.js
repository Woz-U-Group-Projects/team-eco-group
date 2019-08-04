
import React from 'react';
import axios from 'axios';
import Form from './form';
import './donate.css';

export default class Donate extends React.Component {
    constructor() {
        super();
        
        this.state = {
            customers: [],

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

            <div className="donate-app" >
                <h2 style={{"text-align":"center"}}>Donate Today!</h2>
     <form className="form" style={{"text-align":"center"}}>
                <label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="name"/><br/>
<label htmlFor="emailedInput">Email:</label>
<input id="emailedInput" type="text" name="email"/><br/>
<label htmlFor="amountedInput">Amount:</label>
<input id="amountedInput" type="text" name="amount"/><br/>
<label htmlFor="causedInput">Cause:</label>
<input id="causedInput" type="text" name="cause"/><br/>
<Form />

</form>
                <ul>
                    {this.state.customers.map(person => <li>{person.firstName} {person.lastName}</li>)}
                </ul>
                
            </div>
        )
    }
}


  