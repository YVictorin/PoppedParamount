import React from 'react';

const Diamond = ({ color }) => {
    return (
        <div className={`w-10 h-10 rotate-45 origin-[0% 100%]`} style={{border: "1.5px solid #407498"}}></div>
    );
}

export default Diamond;
