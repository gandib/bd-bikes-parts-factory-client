import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayParts from './DisplayParts';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data));
    }, []);

    // sorting array
    const mapped = parts.map((v, i) => {
        return { i, value: (v) };
    });
    const descParts = mapped.sort((a, b) => (b.i) - (a.i));

    return (
        <div>
            <h2 className='mt-10 text-5xl font-bold'>Parts</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-3'>
                {
                    descParts.slice(0, 6).map(part => <DisplayParts
                        key={part._id}
                        part={part.value}
                    ></DisplayParts>)
                }
            </div>
        </div>
    );
};

export default Parts;