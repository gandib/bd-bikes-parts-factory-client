import React from 'react';
import banner1 from '../../images/banner1.jpg';

const Banner = () => {
    return (
        <div>
            <div className="hero " style={{ backgroundImage: `url(${banner1})`, height: '400px' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to BD Bike Parts Factory</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;