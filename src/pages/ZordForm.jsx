import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { planSchema, userSchema } from '../schemas/userSchema'
import z from 'zod'

const ZordForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(
        { resolver: zodResolver(userSchema) }
    )

    const onSubmit = (data) => {
        console.log(data);
    }

    useEffect(() => {

        const parsePrac = () => {
            try {
                const plan = planSchema.parse({ name: "si", price: 4 })
                console.log(plan);

            } catch (error) {
                console.log("parse issues", error.issues);

            }
        }
        const safeParsePrac = () => {
            const result = planSchema.safeParse({ name: "s", price: 0 })

            if (result.success) {
                console.log(result.data);
            } else {
                console.log(result.error.flatten());


            }

        }
        safeParsePrac()

    }, [])

    return (
        <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-2xl text-center my-10'>React Hook Zord Form Practice</h2>
            <form
                method='POST'
                className='grid grid-cols-2 gap-4 w-max xl:min-w-150 mx-auto border border-gray-300 p-5 shadow rounded-xl bg-white'
                onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-1'>
                    <input
                        className='h-10 border border-gray-300 rounded-md p-2 outline-none'
                        {...register("firstName")}
                        type='text'

                        placeholder='Enter First Name'
                    />
                    {
                        errors?.firstName && <p className='text-red-600 text-xs'>{errors.firstName.message}</p>
                    }
                </div>
                <div className='flex flex-col gap-1'>
                    <input
                        className='h-10 border border-gray-300 rounded-md p-2 outline-none'
                        {...register("lastName")}
                        type='text'

                        placeholder='Enter Last Name'
                    />
                    {
                        errors?.lastName && <p className='text-red-600 text-xs'>{errors.lastName.message}</p>
                    }
                </div>
                <div className='flex flex-col gap-1'>
                    <input
                        className='h-10 border border-gray-300 rounded-md p-2 outline-none'
                        {...register("email")}
                        type='email'

                        placeholder='Enter your email'
                    />
                    {
                        errors?.email && <p className='text-red-600 text-xs'>{errors.email.message}</p>
                    }
                </div>
                <div className='flex flex-col gap-1'>
                    <input
                        className='h-10 border border-gray-300 rounded-md p-2 outline-none'
                        {...register("age")}
                        type='number'

                        placeholder='Enter your age'
                    />
                    {
                        errors?.age && <p className='text-red-600 text-xs'>{errors.age.message}</p>
                    }
                </div>
                <div className='flex flex-col gap-1'>
                    <input
                        className='h-10 border border-gray-300 rounded-md p-2 outline-none'
                        {...register("password")}
                        type='password'

                        placeholder='Enter password'
                    />
                    {
                        errors?.password && <p className='text-red-600 text-xs'>{errors.password.message}</p>
                    }
                </div>
                <div className='flex flex-col gap-1'>
                    <input
                        className='h-10 border border-gray-300 rounded-md p-2 outline-none'
                        {...register("confirmPassword")}
                        type='password'

                        placeholder='Cofirm Password'
                    />
                    {
                        errors?.confirmPassword && <p className='text-red-600 text-xs'>{errors.confirmPassword.message}</p>
                    }
                </div>


                <button
                    className='px-3 py-2 bg-green-600 text-white rounded-md w-full mt-4'
                    type="submit">Submit</button>
            </form>

        </div>
    )
}

export default ZordForm