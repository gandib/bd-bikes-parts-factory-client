import React from 'react';
import banner1 from '../../images/banner1.jpg';

const Banner = () => {
    return (
        <div>
            <div class="hero " style={{ backgroundImage: `url(${banner1})`, height: '400px' }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Welcome to BD Bike Parts Factory</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;