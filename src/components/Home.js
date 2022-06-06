import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Advertisers from './Advertisers';
import AdFormats from './AdFormats';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Advertisers></Advertisers>
            <AdFormats></AdFormats>
        </div>
    );
};

export default Home;