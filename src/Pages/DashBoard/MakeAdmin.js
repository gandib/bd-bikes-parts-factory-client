import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery(['users'], () =>
        fetch(`http://localhost:5000/user`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }


    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made an admin`);
                    refetch();
                }
            });
    }


    return (
        <div>
            <h2>Make Admin</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <td>{user.role === 'admin' ? 'Admin' : <button onClick={() => makeAdmin(user.email)} class="btn btn-xs">Make Admin</button>}</td>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;