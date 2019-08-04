import React from 'react';
import './Reasons.css';
import Logo1 from '../images/bottles.jpeg'

const Reasons = () => (
    <div className="Reasons">
        <h1 className="App-title">Reasons To Recycle</h1>

        <h2>Reasons why I recycle and <b>You</b> should too!</h2>
        <img style={{width:1100,height:300}}src={Logo1}/>
        <h6>
            We will eventually run out of raw materials, <br />
            so recycling keeps us from running out sooner.<br />
            Avoids wasting precious space and time dealing with <br />
            where to put the wasted materials.</h6>
        <hr />
        <h4>More Recycling Information</h4>
        
        <br />
        <p>Saves energy because less energy is used to manufacture brand new products </p>
        <hr />
        <p>Produces less greenhouse gases because industries burn fewer fossil fuels </p>
        <hr />
        <p>Recycling programs cost less than waste disposal programs </p>
        <hr />
    <p className="bottom"></p>

</div>
);

export default Reasons;
