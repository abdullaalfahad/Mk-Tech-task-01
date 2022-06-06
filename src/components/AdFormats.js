import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdFormats = () => {
    return (
        <div id='ad-formats' className='pb-16 lg:pb-28'>
            <div class="divider text-xl lg:text-4xl text-primary">VERSATILE AD FORMATS</div>
            <div className='container mx-auto mt-12'>
                <div className='grid md:grid-cols-4 gap-12 lg:gap-4'>
                    <div className='text-center'>
                        <Link to='/'><button className='btn btn-neutral rounded-full px-8 shadow-lg shadow-neutral-500/100 focus:btn-secondary focus:text-white'>POP-UNDER</button></Link>
                    </div>
                    <div className='text-center'>
                        <Link to='/bannerAd'><button className='btn btn-neutral rounded-full px-8 shadow-lg shadow-neutral-500/100 focus:btn-secondary focus:text-white'>BANNER AD</button></Link>
                    </div>
                    <div className='text-center'>
                        <Link to="/native"><button className='btn btn-neutral rounded-full px-8 shadow-lg shadow-neutral-500/100 focus:btn-secondary focus:text-white'>NATIVE</button></Link>
                    </div>
                    <div className='text-center'>
                        <Link to="/skim"><button className='btn btn-neutral rounded-full px-8 shadow-lg shadow-neutral-500/100 focus:btn-secondary focus:text-white'>SKIM</button></Link>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdFormats;