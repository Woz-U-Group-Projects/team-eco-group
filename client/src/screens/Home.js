import React from 'react';
import Logo2 from '../images/reduce.jpeg';
import Logo3 from '../images/oilyPlican.jpg';
import Logo4 from '../images/surfDebris1.jpg';
import './home.css';

const Home = () => (     
<div>
    <img style={{width: 800 ,height: 300}}src={Logo2}/>
    <h1>Reduce, Reuse, Recycle</h1>
    <p>Learn how reducing, reusing, and recycling can help you, <br></br>your community, and the environment by saving money, energy, and natural resources.<br>
    </br> Recycling programs are managed at the state and local level—find information on recycling in your community.</p> 
    {/* <hr /> */}

    <div className="row">
    <h3 className="picture1">Reduce and Reuse</h3>
    <h3 className="picture">Whats Next?</h3>
    </div>

    <div className="row">
    <img style={{width: 400, height: 300}}src ={Logo3}/>
    <img style={{width: 400, height: 300}}src ={Logo4}/>
    </div>

    <div className="row">    
    <ul className="row2">
    <li><a href="https://www.epa.gov/recycle/reducing-and-reusing-basics">Reduce and reuse basics and benefits.</a></li>
    <li><a href="https://www.epa.gov/recycle/reducing-and-reusing-basics#donate">Reuse by donating your stuff</a></li>
    </ul>    
    <ul>
    <li><a href="https://www.epa.gov/recycle/recycling-basics">Recycling basics and benefits</a></li>
    <li><a href="https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables">How do I recycle...</a> </li>
    <li><a href="https://www.epa.gov/recycle/frequent-questions-recycling">Frequent Questions on Recycling</a></li>
    <li><a href="https://www.epa.gov/recycle/america-recycles-day">America Recycles Day</a></li>
    </ul>
    </div>

</div>);

export default Home;