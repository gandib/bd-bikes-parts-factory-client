import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><span className='font-bold'>Name: </span> Gandib Dhari Roy</h2>
                    <p className=''><span className='font-bold'>Email: </span>gandibroy11@gmail.com</p>

                    <p className=''><span className='font-bold'>Educational Background: </span>Bachelor of arts with Honours in English, National University, Bangladesh.</p>

                    <p className=''><span className='font-bold'>Technologies : </span>
                        <p className='text-indigo-700 font-semibold'>HTML</p>
                        <p className='text-indigo-700 font-semibold'>CSS</p>
                        <p className='text-indigo-700 font-semibold'>BOOTSTRAP</p>
                        <p className='text-indigo-700 font-semibold'>TAILWIND</p>
                        <p className='text-indigo-700 font-semibold'>JAVASCRIPT</p>
                        <p className='text-indigo-700 font-semibold'>REACT JS</p>
                        <p className='text-indigo-700 font-semibold'>MONGODB</p>
                    </p>

                    <p className=''><span className='font-bold'>My Best Three Live Projects Link: </span>
                        <p className='font-bold text-green-500'><a href='https://car-inventory-bfad1.web.app/'>Car Inventory</a></p>
                        <p className='font-bold text-green-500'><a href='https://redonionbygandib.netlify.app/'>Red Onion</a></p>
                        <p className='font-bold text-green-500'><a href='https://gyanangkur-wedding-photography.web.app/'>Gyanangkur Wedding Photography</a></p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;