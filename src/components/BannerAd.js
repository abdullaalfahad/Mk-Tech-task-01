import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const BannerAd = () => {
    return (
        <div className='w-11/12 mx-auto container grid lg:grid-cols-2 gap-8 mt-12 lg:mt-20'>
            <div>
                <img src="https://www.outbrain.com/blog/wp-content/uploads/2018/07/OB-Blog-Native-Ads-Vs-Display-Ads.jpg" alt="" />
            </div>
            <div className='self-center'>
                <h1 className='text-secondary text-3xl mb-4'>BANNER AD</h1>
                <p className='mb-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A cupiditate obcaecati accusamus necessitatibus aliquam assumenda est laboriosam illum, consectetur placeat explicabo pariatur, dolores, voluptatibus quisquam saepe voluptas voluptatum ipsa animi veritatis adipisci debitis corrupti? Reprehenderit explicabo voluptates eos non dolorum veritatis in minima, sed saepe exercitationem animi ipsum eum quisquam consectetur. Blanditiis ex itaque facere quos, fuga expedita assumenda adipisci.</p>
                <a href="#" className='text-primary font-medium text-xl'>Learn more<FontAwesomeIcon className='ml-2 text-lg' icon={faArrowUpRightFromSquare} /></a>
            </div>
        </div>
    );
};

export default BannerAd;