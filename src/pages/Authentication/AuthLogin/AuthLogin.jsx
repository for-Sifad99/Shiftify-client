import React from 'react';
import { useForm } from 'react-hook-form';

const AuthLogin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    
    return <>
        <form onSubmit={handleSubmit(onSubmit)} className="px-2">
            <h1 className="sm:text-4xl text-3xl font-extrabold mb-1">Welcome Back!</h1>
            <fieldset className="fieldset">
                {/* email */}
                <label className="label" >Email</label>
                <input type="email" className="input" {...register('email')} placeholder="Email" />

                {/* password */}
                <label className="label">Password</label>
                <input type="password" className="input" {...register('password', { required: true, minLength: 6 })} placeholder="Password" />

                {/* forgot password */}
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-primary text-black mt-4">Login</button>
            </fieldset>
        </form>
    </>
};

export default AuthLogin;