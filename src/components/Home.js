import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Advertisers from './Advertisers';
import AdFormats from './AdFormats';
import Publishers from './Publishers';
import Footer from './Footer';
import Influencers from './Influencers';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Advertisers></Advertisers>
            <AdFormats></AdFormats>
            <Publishers></Publishers>
            <Influencers></Influencers>
            <Footer></Footer>
        </div>
    );
};

export default Home;