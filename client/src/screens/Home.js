import React from 'react';

import './home.css';

const Home = () => (     
<div className="home">

<h1>Reduce, Reuse, Recycle</h1>
<hr />
<p>Learn how reducing, reusing, and recycling can help you, your community, and the environment by saving money, energy, and natural resources. Recycling programs are managed at the state and local level—find information on recycling in your community.</p> 


<h3 className="picture1">Reduce and Reuse</h3>


    
    <p className="row2"><a href="https://www.epa.gov/recycle/reducing-and-reusing-basics">Reduce and reuse basics and benefits.</a></p>
<p className="row2"><a href="https://www.epa.gov/recycle/reducing-and-reusing-basics#donate">Reuse by donating your stuff</a></p>
    
    <br />
    <h2 style={{"text-align": "center"}}>Whats Next</h2>
    <p className="row3"><a href="https://www.epa.gov/recycle/recycling-basics">Recycling basics and benefits</a></p>
    <p className="row3"><a href="https://www.epa.gov/recycle/how-do-i-recycle-common-recyclables">How do I recycle...</a> </p>
    <p className="row3"><a href="https://www.epa.gov/recycle/frequent-questions-recycling">Frequent Questions on Recycling</a></p>
    <p className="row3"><a href="https://www.epa.gov/recycle/america-recycles-day">America Recycles Day</a></p>
    
</div>
);

export default Home;