import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const DisplayReview = ({ review }) => {
    const [value, setValue] = useState();

    useEffect(() => {
        if (review.rating) {
            setValue(parseInt(review.rating));
            console.log(value)
        }

    }, [review, value]);


    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
                <h2 className="card-title">{review.name}</h2>
                <p className='card-text'>{review.description}</p>
                <div className="rating justify-center mb-5 mt-5">
                    <input type="radio" name="rating-4" value='1' className="mask mask-star-2 bg-green-500" checked={value === 1} disabled />
                    <input type="radio" name="rating-4" value='2' className="mask mask-star-2 bg-green-500" checked={value === 2} disabled />
                    <input type="radio" name="rating-4" value='3' className="mask mask-star-2 bg-green-500" checked={value === 3} disabled />
                    <input type="radio" name="rating-4" value='4' className="mask mask-star-2 bg-green-500" checked={value === 4} disabled />
                    <input type="radio" name="rating-4" value='5' className="mask mask-star-2 bg-green-500" checked={value === 5} disabled />
                </div>
            </div>
        </div>
    );
};

export default DisplayReview;