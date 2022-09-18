import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [ratingValue, setRatingValue] = useState(2);
    const [user] = useAuthState(auth);


    const handleSubmit = event => {
        event.preventDefault();
        const review = {
            name: user?.displayName,
            email: user?.email,
            description: event.target.description.value,
            rating: ratingValue
        }
        fetch('https://agile-tundra-59085.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast.success("Congrats! Your review added");
                }
                else {
                    toast.error("Failed to add your review");
                }
            });
        event.target.reset();
    }

    const handleChange = e => {

        const rating = e.target.value;
        console.log(rating)
        setRatingValue(rating);
    }

    return (
        <div>
            <h2>Add a Review</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Please add a review</h2>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1'>
                        <textarea name='description' className="textarea textarea-bordered" placeholder="Description"></textarea>
                        <div onChange={handleChange} className="rating justify-center mb-5 mt-5">
                            <input type="radio" name="rating-4" value='1' className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" value='2' className="mask mask-star-2 bg-green-500" checked />
                            <input type="radio" name="rating-4" value='3' className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" value='4' className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" value='5' className="mask mask-star-2 bg-green-500" />
                        </div>

                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Add Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;