import React from 'react';
import { Outlet } from 'react-router-dom';
import SidePanal from '../SidePanal/SidePanal';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid md:grid-cols-4 grid-cols-1 container mx-auto'>
                <div className='grid grid-cols-1 mt-10 justify-center'>
                    <SidePanal></SidePanal>
                </div>
                <div className='grid md:col-span-3 col-span-1 justify-center'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Main;