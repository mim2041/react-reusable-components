import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import cn from '../../utils/cn';

const Button = ({className, variant}) => {
    return (
        <div>
            <button className={cn(
                'bg-purle-500 px-3 py-2 rounded-md text-white',
                {
                    'border border-purple-500 bg-opacity-10': OfflineAudioCompletionEvent,
                },
                className
            )}> click</button>
        </div>
    );
};

export default Button;