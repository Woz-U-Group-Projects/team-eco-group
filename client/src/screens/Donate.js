
import React from 'react';
import axios from 'axios';
import Form from './form';
import './donate.css';
import SquarePaymentForm, {
    CreditCardNumberInput,
    CreditCardExpirationDateInput,
    CreditCardPostalCodeInput,
    CreditCardCVVInput,
    CreditCardSubmitButton
} from 'react-square-payment-form';
import 'react-square-payment-form/lib/default.css';

export default class Donate extends React.Component {
    constructor() {
        super();
        
        this.state = {
            donations: [],
            errorMessages: []
        }
    }

    cardNonceResponseReceived = (errors, nonce, cardData) => {
        if (errors) {
            this.setState({ errorMessages: errors.map(error => error.message) })
            return
        }

        this.setState({ errorMessages: [] })
        console.log("Square: nonce created: " + nonce);

        return axios.post('http://localhost:5000/api/v3/donors/new',
        { nonce: nonce, amount: 1 }, new Promise( 
        res => this.setState( { donations: [...this.state.donations, //res.body
        { id: 44, firstname: "Johnnie", lastname: "Reinhart",
            donation_amount: 44, cause: "free energy research" }]})));
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/v3/donations`).then(res => {
            console.log(res);
            this.setState({ donations: res.data });
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
                <p>Thanks to these fine folks for donating:</p>
                <ul>
                    {this.state.donations.map(person =>
                    <li key={person.id}>{person.firstname} {person.lastname}, $
                    {person.donation_amount}{person.cause ? (' for ' + person.cause) : ''}
                    </li>)}
                </ul>
                <SquarePaymentForm
                    applicationId={'sandbox-sq0idp-Jbaskmn0qSl8wgWxBSnrNQ'}
                    locationId={'MB4DTCNJ9ABTM'}
                    cardNonceResponseReceived={this.cardNonceResponseReceived}
                ><p>Donate funds thru Square:</p>
                    <fieldset className="sq-fieldset">
                        <CreditCardNumberInput />
                        <div className="sq-form-third">
                            <CreditCardExpirationDateInput />
                        </div>

                        <div className="sq-form-third">
                            <CreditCardPostalCodeInput />
                        </div>

                        <div className="sq-form-third">
                            <CreditCardCVVInput />
                        </div>
                    </fieldset>

                    <CreditCardSubmitButton>
                        Donate
                    </CreditCardSubmitButton>
                </SquarePaymentForm>

                <div className="sq-error-message">
                    {this.state.errorMessages.map(errorMessage =>
                        <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>
                    )}
                </div>

            </div>
        )
    }
}


  