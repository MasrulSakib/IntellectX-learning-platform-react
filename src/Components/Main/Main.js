import React from 'react';
import { Outlet } from 'react-router-dom';
import SidePanal from '../SidePanal/SidePanal';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-4 container mx-auto'>
                <div className='grid grid-cols-1 mt-10 justify-center'>
                    <SidePanal></SidePanal>
                </div>
                <div className='grid col-span-3 justify-center'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default Main;