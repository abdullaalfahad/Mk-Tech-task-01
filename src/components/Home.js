import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Advertisers from './Advertisers';
import AdFormats from './AdFormats';
import Publishers from './Publishers';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Advertisers></Advertisers>
            <AdFormats></AdFormats>
            <Publishers></Publishers>
            <Footer></Footer>
        </div>
    );
};

export default Home;