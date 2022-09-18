import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ deleteOrder, setDeleteOrder, refetch }) => {
    const { partsName, _id } = deleteOrder;

    const handleDelete = async () => {
        const url = `https://rocky-sierra-81256.herokuapp.com/order/${_id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success("Successfully canceled your order");
                    refetch();
                    setDeleteOrder(null);
                }
            });
    }

    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to dalete {partsName}!</h3>
                    <div className="modal-action">
                        <button onClick={handleDelete} className='btn btn-xs btn-error'>Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrderModal;