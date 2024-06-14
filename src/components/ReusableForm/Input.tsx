import React from 'react';
import { useForm } from 'react-hook-form';

export const Input = ({ label, register, errors, type }) => {

    return (
        <div className='w-full max-w-md'>
                <label htmlFor="name" className='block'>{label}</label>
                <input type={type} id="name" {...register} className=''/>
                {errors.name && <span className='text-xs text-red-500'>{errors.name.message}</span>}
        </div>
    );
};

