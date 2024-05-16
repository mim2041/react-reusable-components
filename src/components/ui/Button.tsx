import React from 'react';

const Button = ({className}) => {
    return (
        <div>
            <button className={`bg-red-500 ${className}`}> click</button>
        </div>
    );
};

export default Button;