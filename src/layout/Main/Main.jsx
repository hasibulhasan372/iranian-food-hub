import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Main = () => {
    return (
        <>
        <Header></Header>
        <div className='outlet-height'>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
            
        </>
    );
};

export default Main;