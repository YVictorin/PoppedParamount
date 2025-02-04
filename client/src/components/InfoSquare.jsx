import React from 'react';

const InfoSquare = ({ color = "gray" }) => {
    return (
        <div className='w-10 h-10 text-center m-3 flex items-center justify-center' style={{border: `2px solid ${color}`}}>
            <p className={`text-${color}-400 text-xl font-serif`}>i</p>
        </div>
    );
}

export default InfoSquare;
