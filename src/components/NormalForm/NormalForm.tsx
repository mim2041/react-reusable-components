import React from 'react';
import { FieldValues, useForm, FormProvider } from 'react-hook-form';
import Button from '../ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema, TNormalForm } from './Validation';
import InputField from './InputField';
import cn from '../../utils/cn';


const NormalForm = () => {

    const methods = useForm<TNormalForm>({
        resolver: zodResolver(SignUpSchema)
    })

    const { 
        register, 
        handleSubmit,
        watch, 
        formState: {errors}
    } = methods;

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    }

    // console.log(watch('name'));

    return (
        <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='border border-gray-300 rounded-lg shadow-sm max-w-5xl p-5 mx-auto'>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 p-5'>
            <div className='w-full max-w-md'>
                <label htmlFor="name" className='block'>Name</label>
                <input type="text" id="name" {...register('name', { required: true })} className=''/>
                {errors.name && <span className='text-xs text-red-500'>{errors.name.message}</span>}
            </div>
            <div className='w-full max-w-md'>
                <label htmlFor="email" className='block'>Email</label>
                <input type="email" id="email" {...register('email')} className='w-full'/>
                {errors.email && <span className='text-xs text-red-500'>{errors.email.message}</span>}
            </div>
            <div className='w-full max-w-md'>
                <label htmlFor="password" className='block'>Password</label>
                <input type="password" id="password" {...register('password', { minLength: 8 })} className='w-full'/>
                {errors.password && <span className='text-xs text-red-500'>{errors.password.message}</span>}
            </div>
            <div className='w-full max-w-md'>
                <label htmlFor="text" className='block'>Something</label>
                <InputField />
                {errors.password && <span className='text-xs text-red-500'>{errors.password.message}</span>}
            </div>
            
            </div>
            <div className={cn('flex items-center justify-center ', {
                'md:grid-cols-2': 'double',
            })}>
                <button type='submit' className='bg-violet-500 text-white rounded-lg px-3 py-1.5 w-full md:w-24'>Submit</button>
            </div>
        </form>
        </FormProvider>
    );
};

export default NormalForm;