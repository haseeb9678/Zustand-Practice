import React from 'react'
import { useForm } from 'react-hook-form'

const ZordForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

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
                        {...register("firstName", {
                            required: "First name is required",
                            minLength: {
                                value: 3,
                                message: "Minimum 3 characters required"
                            }

                        })}
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
                        {...register("lastName", {
                            required: "Last name is required",
                            minLength: {
                                value: 3,
                                message: "Minimum 3 characters required"
                            }

                        })}
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
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email format"
                            }
                        })}
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
                        {...register("age", {
                            required: "Age is required",
                            min: {
                                value: 1,
                                message: "Age must be greater than 0"
                            }

                        })}
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
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Minimum 8 characters required"
                            }

                        })}
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
                        {...register("confirmPassword", {
                            required: "Please confirm password",
                            minLength: {
                                value: 8,
                                message: "Minimum 8 characters required"
                            },
                            validate: (value) => value === watch("password") || "Password do not matched"

                        })}
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