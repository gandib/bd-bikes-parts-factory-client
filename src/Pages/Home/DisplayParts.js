import React from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayParts = ({ part }) => {
    const { name, img, qty, minOrderQty, price, desc, _id } = part;
    const navigate = useNavigate();
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{desc}</p>
                <p>Available Quantity: {qty}</p>
                <p>Minimum Order Quantity: {minOrderQty}</p>
                <p>Per Unit Price: ${price}</p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigate(`/purchase/${_id}`)} class="btn btn-primary">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayParts;