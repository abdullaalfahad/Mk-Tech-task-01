import React from 'react';
import CountUp from 'react-countup';

const Publishers = () => {
    return (
        <div id='publishers' className='py-16 lg:py-28 bg-primary text-white'>
            <div class="text-center text-2xl lg:text-4xl">PUBLISHERS</div>
            <div className='container mx-auto mt-12 lg:mt-20'>
                <div className='grid md:grid-cols-3 gap-12 lg:gap-4'>
                    <div className='text-center border-dotted border-2 rounded-full mx-auto py-24' style={{ width: '300px', height: '300px' }}>
                        <div className='text-4xl font-medium'>
                            <CountUp delay={2} end={1} /> <span>BN+</span>
                        </div>
                        <h4 className='text-xl mt-3'>Daily Impressions</h4>
                    </div>
                    <div className='text-center bg-white text-primary rounded-full mx-auto py-24' style={{ width: '300px', height: '300px' }}>
                        <div className='text-4xl font-medium'>
                            <span>$</span><CountUp delay={1} end={500} /> <span>K+</span>
                        </div>
                        <h4 className='text-xl mt-3'>Paid</h4>
                    </div>
                    <div className='text-center bg-secondary rounded-full mx-auto py-24' style={{ width: '300px', height: '300px' }}>
                        <div className='text-4xl font-medium'>
                            <CountUp delay={2} end={8} /> <span>K+</span>
                        </div>
                        <h4 className='text-xl mt-3'>Global Publishers</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Publishers;