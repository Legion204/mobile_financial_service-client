import React from 'react';
import { useForm } from 'react-hook-form';
import { MdPhone } from 'react-icons/md';

const Login = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <section className=''>
            <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
                <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl rounded-md">
                    <div className="bg-gradient-to-b from-gray-700 to-gray-900 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[50px] p-4 md:py-4 md:px-6">
                        <p className='font-bold text-3xl text-white'>Login</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-12 md:px-20 md:py-17">
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            <MdPhone className="absolute ml-3 text-2xl"></MdPhone>
                            <input {...register("phone")} type="text" id="phone" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Phone Number" />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                                <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                            </svg>
                            <input {...register("pin")} type="password" id="pin" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Pin" />
                        </div>
                        <button type='submit' className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">Register</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;