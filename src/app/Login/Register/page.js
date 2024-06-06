import React from 'react'
import { LoginMenu } from '../LoginMenu/page';
import Link from 'next/link';
 const Register = () => {
    return (
        <>
            <LoginMenu />
            <div className='lg:max-w-[1440px] xl:px-[460px] mx-auto min-h-screen flex items-center justify-center'>
                <div className='bg-darkgreey px-[20px] pt-[15px] w-full max-w-md min-h-[640px] flex flex-col justify-center'>
                    <div className='text-center mb-[50px]'>
                        <h1 className='text-yellowlight font-bold text-[19px]'>Register</h1>
                    </div>
                    <div>
                        <label className="text-[18px] text-white font-jakarta inline-block mb-[4px]">Phone number</label> <br />
                        <input type='text' className='w-[100%] px-[10px] py-[12px] text-white font-jakarta bg-greey rounded-[5px]' placeholder='Please enter the phone number' /> <br /><br />
                        <label className="text-[18px] text-white font-jakarta inline-block mb-[4px]">Set password</label> <br />
                        <input type='password' className='w-[100%] px-[10px] py-[12px] text-white font-jakarta bg-greey rounded-[5px]' placeholder='Password' /> <br /><br />
                        <label className="text-[18px] text-white font-jakarta inline-block mb-[4px]">password</label> <br />
                        <input type='password' className='w-[100%] px-[10px] py-[12px] text-white font-jakarta bg-greey rounded-[5px]' placeholder='Password' /> <br /><br />
                        <label className="text-[18px] text-white font-jakarta inline-block mb-[4px]">Invite code</label> <br />
                        <input type='password' className='w-[100%] px-[10px] py-[12px] text-white font-jakarta bg-greey rounded-[5px]' placeholder='Password' /> <br /><br />
                        <div className='px-[50px] mt-[20px]'>
                            <Link href="/" className='text-center font-jakarta font-bold text-[15px] w-[100%] text-white hover:text-black hover:bg-bg inline-block py-[10px] rounded-[50px] border-[2px] border-bg mb-[10px]'>Register</Link>
                            <Link href="/Login" className='text-center font-jakarta inline-block w-[100%] text-yellowlight'> I have an account <span className='ml-[5px] font-bold text-[15px]'>Login</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;