import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import Loading from '../Shared/Loading';
import DeleteOrderModal from './DeleteOrderModal';
import { toast } from 'react-toastify';

const ManageAllOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null);
    const { data: allOrders, isLoading, refetch } = useQuery(['allOrders'], () =>
        fetch(`https://rocky-sierra-81256.herokuapp.com/orders`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleStatus = (id) => {
        const status = 'Shipped';
        const currentStatus = { status: status };
        const url = `https://rocky-sierra-81256.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(currentStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    toast.success("Status updated successfully");
                }
                else {
                    toast.error("Failed to updated status!");
                }
            })
    }

    return (
        <div>
            <h2>Manage All Orders {allOrders?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Parts</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders?.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.partsName}</td>
                                <td>{order.quantity}</td>
                                <td>{order.totalPrice}</td>
                                <td><button onClick={() => handleStatus(order._id)} className='btn btn-xs' disabled={!order.paid}>{order.status}</button></td>
                                <td>
                                    {(order.totalPrice && !order.paid) &&
                                        <>
                                            <button className='btn btn-xs btn-success'>Unpaid</button>

                                            <label onClick={() => setDeleteOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error ml-2">Cancel</label>
                                        </>
                                    }
                                    {(order.totalPrice && order.paid) && <span className='text-success'>Paid</span>}
                                </td>
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

export default ManageAllOrders;