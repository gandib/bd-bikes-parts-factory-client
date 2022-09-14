import React from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayParts = ({ part }) => {
    const { name, img, qty, minOrderQty, price, desc, _id } = part;
    const navigate = useNavigate();
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{desc}</p>
                <p>Available Quantity: {qty}</p>
                <p>Minimum Order Quantity: {minOrderQty}</p>
                <p>Per Unit Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-primary">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayParts;