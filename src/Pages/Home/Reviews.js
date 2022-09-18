import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import DisplayReview from './DisplayReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();
    const [check, setCheck] = useState();


    useEffect(() => {
        const getMyReviews = async () => {
            const url = `https://agile-tundra-59085.herokuapp.com/review`;
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

    // sorting array
    const mapped = reviews.map((v, i) => {
        return { i, value: (v) };
    });
    const descReviews = mapped.sort((a, b) => (b.i) - (a.i));

    return (
        <div>
            <h2 className='text-5xl font-bold mt-10 mb-5'>Reviews</h2>
            <div className='grid lg:grid-cols-3 gap-10'>
                {
                    descReviews?.map((review, index) => <DisplayReview
                        key={index}
                        review={review.value}
                    ></DisplayReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;