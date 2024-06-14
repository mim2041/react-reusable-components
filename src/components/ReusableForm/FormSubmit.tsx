import React, { useContext } from 'react';
import cn from '../../utils/cn';
import { FormElementContext } from './Form';

export const FormSubmit = () => {
    const { double } = useContext(FormElementContext);
    return (
        <div className={cn('flex items-center justify-center ', {
                'md:grid-cols-2': 'double',
            })}>
                <button type='submit' className='bg-violet-500 text-white rounded-lg px-3 py-1.5 w-full md:w-24'>Submit</button>
            </div>
    );
};

