import React from 'react';
import axios from 'axios';
//import Form from './form';
import './donate.css';
/*import SquarePaymentForm, {
    CreditCardNumberInput,
    CreditCardExpirationDateInput,
    CreditCardPostalCodeInput,
    CreditCardCVVInput,
    CreditCardSubmitButton
} from 'react-square-payment-form';
import 'react-square-payment-form/lib/default.css';*/


export default class Donate extends React.Component {
    constructor() {
        super();

        this.state = {
            donations: [],
            errorMessages: [],

            firstname: "",
            lastname: "",
            cause: "",
            amount: ""

        }
    }

    cardNonceResponseReceived = (errors, nonce, cardData) => {
        if (errors) {
            this.setState({ errorMessages: errors.map(error => error.message) })
            return
        }

        this.setState({ errorMessages: [] })
        console.log("Square: nonce created: " + nonce);

        return axios.post('http://localhost:5000/api/v3/donations/new',
            {
                nonce: nonce,
                donation_amount: 1.09,
                cause: "free energy research",
                firstname: "Jhnn",
                lastname: "Reinburger"
            })
            .then(res => console.log(res));
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
                <p>Thanks to these fine folks for donating:</p>
                <ul>
                    {this.state.donations.map(person =>
                        <li key={person.id}>{person.firstname} {person.lastname}, $
                    {person.donation_amount}{person.cause ? (' for ' + person.cause) : ''}
                        </li>)}
                </ul>
                <h2>Donate Today!</h2>
                <form className="form">
                    <label htmlFor="firstnameInput">First Name:</label>
                    <input id="firstnameInput" type="text" name="firstname" value={this.state.firstname}
                        onChange={(e) => this.setState({ firstname: e.target.value })} /><br />
                    <label htmlFor="lastnameInput">Last Name:</label>
                    <input id="lastnameInput" type="text" name="lastname" value={this.state.lastname}
                        onChange={(e) => this.setState({ lastname: e.target.value })} /><br />
                    <label htmlFor="amountedInput">Amount ($):</label>
                    <input id="amountedInput" type="text" name="amount"
                        onChange={(e) => this.setState({ amount: e.target.value })} /><br />
                    <label htmlFor="causedInput">Cause:</label>
                    <input id="causedInput" type="text" name="cause"
                        onChange={(e) => this.setState({ cause: e.target.value })} /><br />
                    <button onClick={e => {
                        e.preventDefault();
                        console.log(this.state);
                        axios.post('http://localhost:5000/api/v3/donations/new',
                            {
                                //nonce: nonce,
                                "firstname": this.state.firstname,
                                "cause": this.state.cause,
                                "donation_amount": parseFloat(this.state.amount),
                                "lastname": this.state.lastname
                            },
                            //lastname: this.state.fields.lastname
                        )
                            .then(res => {
                                alert('Thank you for your donation, ' + this.state.firstname + '!');
                                this.setState({
                                    donations: [...this.state.donations,
                                    {
                                        firstname: this.state.firstname,
                                        lastname: this.state.lastname,
                                        cause: this.state.cause,
                                        donation_amount: parseFloat(this.state.amount)
                                    }],
                                    firstname: "",
                                    lastname: "",
                                    cause: "",
                                    amount: ""
                                })
                            })
                            .catch(err => console.log(err));
                    }}
                    >Donate</button>
                </form>
                {/*<SquarePaymentForm
                    applicationId={'sandbox-sq0idp-Jbaskmn0qSl8wgWxBSnrNQ'}
                    locationId={'MB4DTCNJ9ABTM'}
                    cardNonceResponseReceived={this.cardNonceResponseReceived}>
                    <fieldset className="sq-fieldset">
                        <label htmlFor="amountedInput">Amount:</label>
                        <input id="amountedInput" type="text" name="amount" />
                        <p>Donate funds thru Square:</p>
                        <CreditCardNumberInput />
                        <div>
                            <CreditCardExpirationDateInput />
                        </div>

                        <div>
                            <CreditCardPostalCodeInput />
                        </div>

                        <div>
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
                    */}
            </div>

        )
    }
}


