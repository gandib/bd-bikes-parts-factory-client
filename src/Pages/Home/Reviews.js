import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import DisplayReview from '../DashBoard/DisplayReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();
    const [check, setCheck] = useState();


    useEffect(() => {
        const getMyReviews = async () => {
            const url = `http://localhost:5000/review`;
            try {
                const { data } = await axiosPrivate.get(url);
                setReviews(data);
            }
            catch (error) {
                console.log(error.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getMyReviews();

    }, [navigate]);

    return (
        <div>
            <h2 className='text-5xl font-bold mt-10 mb-5'>Reviews</h2>
            <div className='grid lg:grid-cols-3 gap-10'>
                {
                    reviews?.map(review => <DisplayReview
                        key={review._id}
                        review={review}
                    ></DisplayReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;