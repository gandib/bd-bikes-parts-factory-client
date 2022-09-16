import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
import DeleteOrderModal from './DeleteOrderModal';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [deleteOrder, setDeleteOrder] = useState(null);


    const { data: orders, isLoading, refetch } = useQuery(['orders'], () =>
        fetch(`http://localhost:5000/order?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2>My Orders {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Parts</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.partsName}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                                <td>{order.quantity}</td>
                                <td>{order.totalPrice}</td>
                                <td>{order.status}</td>
                                <td>
                                    {(order.totalPrice && !order.paid) &&
                                        <>
                                            <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>

                                            <label onClick={() => setDeleteOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error ml-2">Cancel</label>
                                        </>
                                    }
                                    {(order.totalPrice && order.paid) && <span className='text-success'>Paid</span>}
                                </td>
                                <td><p className='text-success'>{order.transactionId}</p></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteOrder &&
                <DeleteOrderModal
                    deleteOrder={deleteOrder}
                    refetch={refetch}
                    setDeleteOrder={setDeleteOrder}
                ></DeleteOrderModal>
            }
        </div>
    );
};

export default MyOrders;