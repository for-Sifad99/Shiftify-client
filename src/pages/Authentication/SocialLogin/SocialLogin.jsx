import React from 'react';
import useAuth from '../../../hooks/useAuth/useAuth.jsx';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = () => {
        googleSignIn()
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
                                    title: "Now you can continue..."
                                });
                
                                setTimeout(async () => {
                                    navigate(location?.state || '/');
                                }, 3000);
            }).catch(error => {
                console.log(error);
            });
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-xl text-[#71717a] font-medium mb-2'>Or</h1>
            <button onClick={handleSubmit} className="btn w-full bg-[#e9ecf1] text-black border-none shadow-none rounded-md">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#e9ecf1"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>

        </div>
    );
};

export default SocialLogin;