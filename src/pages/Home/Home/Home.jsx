import React from 'react';
import Chef from '../../../components/card/Chef/Chef';
import About from '../About/About';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
           <Chef></Chef>
           <About></About>
           <Service></Service>
        </div>
    );
};

export default Home;