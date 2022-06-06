import React, { useState } from 'react';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [english, setEnglish] = useState(false);

    const menuItems = <>
        <li><a href='index.html' className='text-primary font-medium hover:text-secondary'>Home</a></li>
        <li><a href='#advertisers' className='text-primary font-medium hover:text-secondary'>Advertisers</a></li>
        <li><a href='#publishers' className='text-primary font-medium hover:text-secondary'>Publishers</a></li>
        <li><a href='' className='text-primary font-medium hover:text-secondary'>Influencers</a></li>
        <li><a href='#ad-formats' className='text-primary font-medium hover:text-secondary'>Ad Formats</a></li>
        <li><a href='' className='text-primary font-medium hover:text-secondary'>Blog</a></li>
        <li><a href='' className='text-primary font-medium hover:text-secondary'>Contact Us</a></li>
    </>
    return (
        <nav>
            <div className="navbar">
                <div className="navbar-start">
                    <a href='index.html' className="btn btn-ghost normal-case text-2xl">DIGITALVISION</a>
                </div>
                <div className="navbar-end">
                    <p className="mr-10"><button className={english ? '' : 'text-success'} onClick={() => setEnglish(false)}>BN</button><span> / </span><button className={english ? 'text-success' : ''} onClick={() => setEnglish(true)}>EN</button></p>
                </div>
            </div>

            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <p className='bg-white px-12 py-2 rounded-full'><button className={click ? 'btn btn-secondary text-white rounded-full mr-4' : 'text-accent rounded-full mr-4'} onClick={() => setClick(true)}>LOGIN</button><button className={click ? 'text-accent rounded-full' : 'btn btn-secondary text-white rounded-full'} onClick={() => setClick(false)}>SIGN UP</button></p>
                </div>
                {/* className='mr-3 text-accent rounded-full focus:btn focus:btn-secondary focus:text-white focus:rounded-full' */}
            </div>
        </nav>
    );
};

export default Navbar;