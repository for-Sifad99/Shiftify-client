import React from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router';

const AuthLogin = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();

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
                <input type="password" className="input" {...register('password', { required: true})} placeholder="Password" />

                {/* forgot password */}
                <div><a className="link link-hover">Forgot password?</a></div>

                {/* errors */}
                {errors?.password?.type === 'required' && <p className='text-xs text-red-500 font-medium leading-4 -mt-1'>Password must be required.</p> }
                <button className="btn btn-primary text-black mt-2">Login</button>

                {/* toggle link */}
                <div><p className="text-xs leading-4 my-1">Don't have an account? <Link to='/auth-register' className='link link-hover text-green-700 font-medium'>Create one!</Link></p></div>
            </fieldset>
        </form>

        {/* social login */}
        <SocialLogin />
    </>
};

export default AuthLogin;