import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ComingSoonParts from './ComingSoonParts';
import Parts from './Parts';
import ProductsRequest from './ProductsRequest';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
            <ComingSoonParts></ComingSoonParts>
            <ProductsRequest></ProductsRequest>

        </div>
    );
};

export default Home;