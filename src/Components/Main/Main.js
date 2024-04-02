import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import SidePanal from '../SidePanal/SidePanal';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <div className='grid grid-cols-3'>
                    <div className='col-span-1'>
                        <SidePanal></SidePanal>
                    </div>
                    <div className='col-span-2'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;