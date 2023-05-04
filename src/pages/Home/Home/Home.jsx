import React from 'react';
import Chef from '../../../components/card/Chef/Chef';
import About from '../About/About';
import Service from '../Service/Service';
import Banner from '../../../components/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Chef></Chef>
           <About></About>
           <Service></Service>
        </div>
    );
};

export default Home;