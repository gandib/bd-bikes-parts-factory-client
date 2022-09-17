import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>

        </div>
    );
};

export default Home;