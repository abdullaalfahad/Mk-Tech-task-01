import React from 'react';

const Navbar = () => {
    const menuItems = <>
        <li><a href='' className='text-primary font-medium hover:text-secondary'>Home</a></li>
        <li><a href='' className='text-primary font-medium hover:text-secondary'>Advertisers</a></li>
        <li><a href='' className='text-primary font-medium hover:text-secondary'>Publishers</a></li>
        <li><a href='' className='text-primary font-medium hover:text-secondary'>Influencers</a></li>
        <li><a href='' className='text-primary font-medium hover:text-secondary'>Ad Formats</a></li>
        <li><a href='' className='text-primary font-medium hover:text-secondary'>Blog</a></li>
        <li><a href='' className='text-primary font-medium hover:text-secondary'>Contact Us</a></li>
    </>
    return (
        <nav>
            <div class="navbar">
                <div class="navbar-start">
                    <a class="btn btn-ghost normal-case text-xl">LOGO</a>
                </div>
                <div class="navbar-end">
                    <a class="mr-10"><span className='text-success'>BN</span> / EN</a>
                </div>
            </div>

            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary">
                            {menuItems}
                        </ul>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div class="navbar-end">
                    <p className='bg-white px-6 py-2 rounded-full'><button className='mr-3 text-accent'>LOGIN</button><button className='btn btn-secondary text-white rounded-full '>SIGN UP</button></p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;