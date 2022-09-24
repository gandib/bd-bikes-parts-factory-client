import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams();
    const [parts, setParts] = useState({});
    const [user] = useAuthState(auth);
    const [orderQuantity, setOrderQuantity] = useState(0);
    const [error, setError] = useState('');



    useEffect(() => {
        const url = `https://bd-bike-parts-factory-server-e5dcruwo6-gandib.vercel.app/parts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data));
        setOrderQuantity(parts?.minOrderQty)
    }, [id, parts?.minOrderQty]);

    const handleSubmit = event => {
        event.preventDefault();
        const totalPrice = orderQuantity * parts?.price;
        console.log(totalPrice)
        const order = {
            name: user?.displayName,
            email: user?.email,
            partsName: parts?.name,
            address: event.target.address.value,
            phone: event.target.phone.value,
            quantity: orderQuantity,
            totalPrice,
            status: 'pending'
        }
        console.log(order)
        fetch('https://bd-bike-parts-factory-server-e5dcruwo6-gandib.vercel.app/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast.success("Your order placed");
                }
                else {
                    toast.error("Failed to place an order");
                }

            });

        event.target.reset();
    }


    const onChangeQty = event => {
        const quantity = event.target.value;
        setOrderQuantity(parseInt(quantity));

        if (quantity < parts?.minOrderQty) {
            setError(`Order quantity not less than ${parts?.minOrderQty}`);
        }
        else if (quantity > parts?.qty) {
            setError(`Order quantity not more than ${parts?.qty}`);
        }
        else {
            setError('');
        }

        console.log(quantity);
    }


    return (
        <div className='flex h-screen justify-center items-center'>


            <div className="card  w-96 bg-base-100 shadow-xl">
                <div className='card-body'>
                    <form className='grid grid-cols-1 gap-3' onSubmit={handleSubmit}>
                        <input className="input input-bordered w-full max-w-xs"
                            value={user?.displayName || ''} readOnly />

                        <input className="input input-bordered w-full max-w-xs"
                            value={user?.email || ''} readOnly />

                        <input className="input input-bordered w-full max-w-xs"
                            value={parts?.name || ''} readOnly />

                        <input className="input input-bordered w-full max-w-xs"
                            placeholder="Address" name='address' type='text' required />

                        <input className="input input-bordered w-full max-w-xs" placeholder="Phone Number" type="number" name='phone' required />

                        <input onChange={onChangeQty} className="input input-bordered w-full max-w-xs"
                            value={orderQuantity || ''} type="number" placeholder="Order Quantity" name='quantity' />
                        <p>{error}</p>

                        <input className="btn btn-primary" type="submit"
                            disabled={error} value='Place Order' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;