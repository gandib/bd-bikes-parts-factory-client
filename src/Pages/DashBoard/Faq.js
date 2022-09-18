import React from 'react';

const Faq = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold mt-10 mb-3'>FAQs Related to Bike Parts</h2>
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the types of bike parts?
                </div>
                <div className="collapse-content">
                    <p> Bike parts list includes brakes, tires & tubes, handlebars, stems, side panel, engine, cables, wheels, suspension, clutch pressure, oil seal kit, & several others components.
                    </p>
                </div>
            </div>
            <div tabIndex="1" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Are bike parts compatible with all brands?
                </div>
                <div className="collapse-content">
                    <p>There are various bike parts which are universal & compatible with all brands of bike. Branded bike parts are also available</p>
                </div>
            </div>
            <div tabIndex="1" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Are bike parts durable & reliable?
                </div>
                <div className="collapse-content">
                    <p>Yes, all bike spare parts are durable & reliable as they are manufactured from high-quality material utilizing cutting-edge technology.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;