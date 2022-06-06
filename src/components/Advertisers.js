import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faPaperPlane, faUsersLine } from '@fortawesome/free-solid-svg-icons'

const Advertisers = () => {
    return (
        <div id='advertisers' className='mt-16 pb-16 lg:pb-28'>
            <div class="divider text-xl lg:text-4xl text-primary">AVAILABLE FOR EVERYONE</div>
            <p className='text-center mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <div className='container mx-auto mt-12 lg:mt-20'>
                <div className='grid md:grid-cols-3 gap-12 lg:gap-4'>
                    <div className='text-center'>
                        <div className='text-5xl text-primary'><FontAwesomeIcon className='bg-white rounded-full p-10' icon={faBullhorn} /></div>
                        <p className='mt-4 mb-6'>Lorem ipsum dolor sit.</p>
                        <p className='bg-primary rounded-full p-2 text-white w-6/12 mx-auto'>Hello 1</p>
                    </div>
                    <div className='text-center'>
                        <div className='text-5xl text-primary'><FontAwesomeIcon className='bg-white rounded-full p-10' icon={faPaperPlane} /></div>
                        <p className='mt-4 mb-6'>Lorem ipsum dolor sit.</p>
                        <p className='bg-primary rounded-full p-2 text-white w-6/12 mx-auto'>Hello 2</p>
                    </div>
                    <div className='text-center'>
                        <div className='text-5xl text-primary'><FontAwesomeIcon className='bg-white rounded-full p-10' icon={faUsersLine} /></div>
                        <p className='mt-4 mb-6'>Lorem ipsum dolor sit.</p>
                        <p className='bg-primary rounded-full p-2 text-white w-6/12 mx-auto'>Hello 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertisers;