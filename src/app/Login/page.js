import React from 'react';
import LoginMenu  from './LoginMenu/page';
import Link from 'next/link';

const Login = () => {
    return (
        <>
            <LoginMenu />
            <div className='lg:max-w-[1440px] xl:px-[460px] mx-auto min-h-screen flex items-center justify-center'>
                <div className='bg-darkgree px-[20px] pt-[15px] w-full max-w-md min-h-[640px] flex flex-col justify-center'>
                    <div className='text-center mb-[50px]'>
                        <h1 className='text-yellowlight font-bold text-[19px]'>Log in</h1>
                    </div>
                    <div>
                        <label className="text-[18px] text-white font-jakarta inline-block mb-[4px]">Phone number</label> <br />
                        <input type='text' className='w-[100%] px-[10px] py-[12px] text-white font-jakarta bg-greey rounded-[5px]' placeholder='Please enter the phone number' /> <br /><br />
                        <label className="text-[18px] text-white font-jakarta inline-block mb-[4px]">Password</label> <br />
                        <input type='password' className='w-[100%] px-[10px] py-[12px] text-white font-jakarta bg-greey rounded-[5px]' placeholder='Password' /> <br /><br />
                        <div className='px-[50px] mt-[20px]'>
                            <Link href="/" className='text-center font-jakarta font-bold text-[15px] w-[100%] text-white hover:text-black hover:bg-bg inline-block py-[10px] rounded-[50px] border-[2px] border-bg mb-[10px]'>Log in</Link>
                            <Link href="/Login/Register" className='text-center font-jakarta font-bold text-[15px] w-[100%] text-white hover:text-black hover:bg-bg inline-block py-[10px] rounded-[50px] border-[2px] border-bg mb-[10px]'>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
