import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import DeleteProductModal from './DeleteProductModal';

const ManageProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { data: allParts, isLoading, refetch } = useQuery(['allProducts'], () =>
        fetch(`https://rocky-sierra-81256.herokuapp.com/parts`, {
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
            <h2>Manage Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allParts.map((parts, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-12 rounded-xl">
                                        <img src={parts.img} alt={parts.name} />
                                    </div>
                                </div></td>
                                <td>{parts.name}</td>
                                <td>
                                    <label onClick={() => setDeleteProduct(parts)} htmlFor="delete-confirm-product-modal" className="btn btn-xs btn-error ml-2">Cancel</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteProduct &&
                <DeleteProductModal
                    deleteProduct={deleteProduct}
                    refetch={refetch}
                    setDeleteProduct={setDeleteProduct}
                ></DeleteProductModal>
            }
        </div>
    );
};

export default ManageProducts;