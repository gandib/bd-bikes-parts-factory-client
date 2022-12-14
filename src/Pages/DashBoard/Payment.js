import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51LgoZgK79rUC6lA1ZTZO0CCHKVoEkbm8E6Q6MpywOt65pr4cpIS0ozifFn4pW9f4NyoWjsunW9yRnXuIwhqfF6ED00hZkGm0Dz');

const Payment = () => {
    const { orderId } = useParams();
    const [stateRefresh, setStateRefresh] = useState(false);
    const url = `https://bd-bike-parts-factory-server-e5dcruwo6-gandib.vercel.app/order/${orderId}`;

    const { data: order, isLoading } = useQuery(['orders', orderId], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    );
    console.log(order)
    useEffect(() => {
        if (order?.paid === true) {
            setStateRefresh(true);
        }
    }, [order?.paid]);

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello, {order?.name}</p>
                    <h2 className="card-title">Please pay for <span className='text-yellow-500'>{order?.partsName}</span></h2>
                    <p>Please pay: ${order?.totalPrice}</p>
                    {order?.paid === true && <p className='text-green-500 font-bold'>Paid</p>}
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;