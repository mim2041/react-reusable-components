import React, { Children, useContext } from 'react';
import cn from '../../utils/cn';
import { FormElementContext } from './Form';

export const FormSection = ({ children }) => {

    const { double } = useContext(FormElementContext);
    return (
        <div
        className={cn('mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 p-5', {
            'md:grid-cols-2': double,
        })}>
            {children}
        </div>
    );
};

