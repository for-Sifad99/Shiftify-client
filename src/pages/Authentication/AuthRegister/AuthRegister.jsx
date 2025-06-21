import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../hooks/useAuth/useAuth';
import Swal from 'sweetalert2';


const AuthRegister = () => {
    const { createUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { email, password } = data;
        createUser(email, password)
            .then(result => {
                console.log(result.user);

                // Sweet Alert:
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Successfully account created!"
                });

                setTimeout(async () => {
                    navigate(location?.pathname || '/');
                }, 3000);
            }).catch(error => {
                console.log(error);
            });
    };

    return <>
        <form onSubmit={handleSubmit(onSubmit)} className="px-2">
            <h1 className="sm:text-4xl text-3xl font-extrabold mb-1">Create One!</h1>
            <fieldset className="fieldset">
                {/* email */}
                <label className="label" >Email</label>
                <input type="email" className="input" {...register('email')} placeholder="Email" />

                {/* password */}
                <label className="label">Password</label>
                <input type="password" className="input" {...register('password', {
                    required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
                })} placeholder="Password" />

                {/* errors */}
                {errors?.password?.type === 'required' && <p className='text-xs text-red-500 font-medium leading-4 mt-1'>Password must be required.</p>}

                {errors?.password?.type === 'minLength' && <p className='text-xs text-red-500 font-medium leading-4 mt-1'>Password should be at least 6 character longer.</p>}

                {errors?.password?.type === 'pattern' && <p className='text-xs text-red-500 font-medium leading-4 mt-1'> Password must be uppercase, lowercase, number, and special character.</p>}

                {/* register button */}
                <button className={`btn btn-primary text-black ${errors ? 'mt-2' : 'mt-4'}`}>Register</button>

                {/* toggle link */}
                <div><p className="text-xs leading-4 my-1">Already have an account? <Link to='/auth-login' className='link link-hover text-green-700 font-medium'>Login there!</Link></p></div>
            </fieldset>
        </form>

        {/* social login */}
        <SocialLogin />
    </>
};

export default AuthRegister;