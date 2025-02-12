import React from 'react'

const Input = ({label,...props}) => {
    return (
        <div>
            < label htmlFor={props.id}>{label}</label>
            <input className='border border-blue-500'{...props} />
        </div>
    );
};

export default Input;