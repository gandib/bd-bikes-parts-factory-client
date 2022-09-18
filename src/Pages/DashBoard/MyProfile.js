import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [education, setEducation] = useState('');
    const [district, setDistrict] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [userProfile, setUserProfile] = useState([]);

    const [user] = useAuthState(auth);


    useEffect(() => {
        fetch(`https://rocky-sierra-81256.herokuapp.com/userprofiles/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUserProfile(data));
    }, [userProfile, user]);

    useEffect(() => {
        setEducation(userProfile[0]?.education);
        setDistrict(userProfile[0]?.district);
        setPhone(userProfile[0]?.phone);
        setLinkedin(userProfile[0]?.linkedin);
    }, []);



    const handleSubmit = (event) => {
        event.preventDefault();

        const userProfile = {
            education: education,
            district: district,
            phone: phone,
            linkedin: linkedin
        }
        // send to database
        const url = `https://rocky-sierra-81256.herokuapp.com/userprofile/${user?.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userProfile)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log('userProfile', inserted);
                if (inserted.result.modifiedCount) {
                    toast.success("Profile updated successfully");
                }
                else {
                    toast.error("Failed to updated your profile!");
                }
            });
    }

    const onChangeEducation = (event) => {
        const education = event.target.value;
        setEducation(education);
    }
    const onChangeDistrict = (event) => {
        const district = event.target.value;
        setDistrict(district);
    }
    const onChangePhone = (event) => {
        const phone = event.target.value;
        setPhone(phone);
    }
    const onChangeLinkedin = (event) => {
        const linkedin = event.target.value;
        setLinkedin(linkedin);
    }



    return (
        <div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-col-2 gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mt-10">My Profile</h2>
                        <p className='mt-5'>Name: {user?.displayName}</p>
                        <p>Email: {user?.email}</p>
                        <p>Education: {userProfile[0]?.education}</p>
                        <p>District: {userProfile[0]?.district}</p>
                        <p>Phone: {userProfile[0]?.phone}</p>
                        <p>LinkedIn Link: {userProfile[0]?.linkedin}</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Update Profile</h2>

                        <form onSubmit={handleSubmit} >

                            <div className="form-control w-full max-w-xs mb-2">
                                <input type="text" placeholder="Name" value={user?.displayName} className="input input-bordered w-full max-w-xs"
                                    name='name' readOnly />
                            </div>

                            <div className="form-control w-full max-w-xs mb-2">
                                <input type="desc" placeholder="Email" value={user?.email} className="input input-bordered w-full max-w-xs"
                                    name='email' readOnly />
                            </div>


                            <div className="form-control w-full max-w-xs mb-2">
                                <input onChange={onChangeEducation} type="text" placeholder="Education Qualification"
                                    className="input input-bordered w-full max-w-xs"
                                    name='education' value={education || ''} />

                            </div>

                            <div className="form-control w-full max-w-xs mb-2">
                                <input onChange={onChangeDistrict} type="text" placeholder="District" className="input input-bordered w-full max-w-xs"
                                    name='district' value={district || ''} />
                            </div>

                            <div className="form-control w-full max-w-xs mb-2">
                                <input onChange={onChangePhone} type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs"
                                    name='phone' value={phone || ''} />
                            </div>

                            <div className="form-control w-full max-w-xs mb-2">
                                <input onChange={onChangeLinkedin} type="text" placeholder="LinkedIn Address" className="input input-bordered w-full max-w-xs"
                                    name='linkedin' value={linkedin || ''} />
                            </div>

                            <input className='btn w-full max-w-xs' type="submit" value='Update Profile' />

                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;