import React from 'react';
import bgPic from '../../images/easy-sourcing.jpg';
import { toast } from 'react-toastify';

const ProductsRequest = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        toast("Your Request Submitted Successfully!");
        event.target.reset();
    }
    return (
        <div>
            <h2 className='text-5xl font-bold mt-10 mb-5'>Products Request</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10' style={{
                backgroundImage: `url(${bgPic})`,
                backgroundRepeat: 'no-repeat'
                // height: '400px'
            }}>
                <div className='m-5'>
                    <h2 className='mt-10 text-3xl font-bold mb-10'>EASY SOURCING</h2>
                    <div>An easy way to post your sourcing requests and get quotes.
                        <p className='mt-10'>One request, multiple quotes</p>
                        <p>Verified suppliers matching</p>
                        <p>Quotes comparison and sample request</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl m-5 lg:ml-20 opacity-90">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h2 className="card-title mb-5">Want to get quotations?</h2>
                        <input type="text" placeholder="Product Name or Id" className="input input-bordered w-full max-w-xs" required />

                        <textarea className="textarea textarea-bordered" placeholder="Product Description" required></textarea>

                        <input type="text" placeholder="Purchase Quantity" className="input input-bordered w-full max-w-xs" required />
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary">Post Your Request Now</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ProductsRequest;