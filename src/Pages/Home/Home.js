import React from 'react';
import Faq from '../DashBoard/Faq';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
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
            <ProductsRequest></ProductsRequest>
            <Faq></Faq>
        </div>
    );
};

export default Home;