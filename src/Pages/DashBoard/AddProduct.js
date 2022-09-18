import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '0d9bc21d276c1d4306f63f1c65070111';


    const onSubmit = async (data) => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        img: img,
                        desc: data.desc,
                        price: parseInt(data.price),
                        qty: parseInt(data.qty),
                        minOrderQty: parseInt(data.minOrderQty)
                    }
                    // send to database
                    fetch('https://rocky-sierra-81256.herokuapp.com/parts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log('doctor', inserted);
                            if (inserted.insertedId) {
                                toast.success("Doctor added successfully");
                                reset();
                            }
                            else {
                                toast.error("Failed to add the doctor");
                            }
                        });
                }
                console.log('imgbb', result);
            });
    }


    return (
        <div>
            <h2 className='text-2xl'>Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} >

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Parts Name</span>
                    </label>
                    <input type="text" placeholder="Parts Name" className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            },
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea type="desc" placeholder="Description" className="textarea textarea-bordered"
                        {...register("desc", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })} />
                    <label className="label">
                        {errors.desc?.type === 'required' && <span className="label-text-alt text-red-500">{errors.desc.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Per Unit Price</span>
                    </label>
                    <input type="text" placeholder="Per Unit Price" className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            },
                        })} />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="text" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs"
                        {...register("qty", {
                            required: {
                                value: true,
                                message: 'Quantity is Required'
                            },
                        })} />
                    <label className="label">
                        {errors.qty?.type === 'required' && <span className="label-text-alt text-red-500">{errors.qty.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input type="text" placeholder="Minimum Order Quantity" className="input input-bordered w-full max-w-xs"
                        {...register("minOrderQty", {
                            required: {
                                value: true,
                                message: 'Minimum Quantity is Required'
                            },
                        })} />
                    <label className="label">
                        {errors.minOrderQty?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minOrderQty.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            },
                        })} />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs' type="submit" value='Add Product' />

            </form>
        </div>
    );
};

export default AddProduct;