import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';
import { BiArrowBack } from 'react-icons/bi';

const ForgotPassword = () => {
    const [mailSent,setMailSent] = useState(false);
    const[email,setEmail]=useState("");
    const {loading}=useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        dispatch(getPasswordResetToken(email,setMailSent));
    }
  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        {
            loading?(
                <div className="spinner"></div>
            ):(
                <div className="max-w-[500px] p-4 lg:p-8">
                    <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
                        {
                            !mailSent ? "Reset Your Password":"Check Your Email"
                        }
                    </h1>
                    <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
                        {
                            !mailSent ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                            : `We have sent the reset password email to ${email}`
                        }
                    </p>
                    <form onSubmit={handleOnSubmit}>
                        {
                            !mailSent &&(
                                <label>
                                    <p>Email Address</p>
                                    <input
                                    required
                                    type='email'
                                    name="email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder='Enter your email address'
                                    style={{
                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                      }}
                                      className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                                    />
                                </label>
                            )
                        }
                        <button
                        type="submit"
                        className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
                        >
                            {
                                !mailSent ? "Reset Password": "Resend Email"
                            }
                        </button>
                        <div className="mt-6 flex items-center justify-between">
                            <Link to='/login'>
                            <p className="flex items-center gap-x-2 text-richblack-5">
                                <BiArrowBack /> Back To Login
                            </p>
                            </Link>
                        </div>
                    </form>
                </div>
            )
        }
    </div>
  )
}

export default ForgotPassword