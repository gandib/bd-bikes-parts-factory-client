import React from 'react';
import notFoundPic from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center mt-5 text-red-500 text-3xl font-bold'>Oooops! Page not found!</h2>
            <img className='img-fluid w-full' src={notFoundPic} alt="" />
        </div>
    );
};

export default NotFound;