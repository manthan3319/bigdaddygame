import React from 'react'
import LoginMenu from '../LoginMenu/page';
import mobileicon from '../../../../public/images/mobile3.png';
import Image from 'next/image';
import mobile2 from '../../../../public/images/mobile2.png';
import password from '../../../../public/images/password.png';
import invitcode from '../../../../public/images/invitcode.png';

import Link from 'next/link';
const Register = () => {
    return (
        <>
            <LoginMenu />
            <div className='lg:max-w-[1440px] xl:px-[460px] mx-auto min-h-screen flex items-center justify-center'>
                <div className='px-[20px] pt-[90px] pb-[40px] w-full max-w-md min-h-[640px] flex flex-col justify-center'>
                    <div className='text-center mb-[50px]'>
                        <h1 className='text-[#D9AC4F] font-jakarta flex flex-col border-b-[1px] pb-[8px] border-[#D9AC4F] items-center text-[15px]'> <span><Image src={mobileicon} width={30} height={30} alt="img" /></span> <span>Register your phone</span></h1>
                    </div>
                    <div>
                        <span className='flex flex-row gap-[5px]'> <span><Image src={mobile2} alt='img' width={25} height={25} /></span> <label className="text-[15px] text-white font-jakarta inline-block mb-[10px]">Phone number</label></span>
                        <input type='text' className='w-[100%] px-[10px] py-[12px] text-white font-jakarta bg-greey rounded-[5px]' placeholder='Please enter the phone number' /> <br /><br />
                       
                        <span className='flex flex-row gap-[5px]'> <span><Image src={password} alt='img' width={25} height={25} /></span><label className="text-[15px] text-white font-jakarta inline-block mb-[10px]">Set password</label></span>
                        <input type='password' className='w-[100%] px-[10px] py-[12px] text-white font-jakarta bg-greey rounded-[5px]' placeholder='Password' /> <br /><br />
                        
                        <span className='flex flex-row gap-[5px]'> <span><Image src={password} alt='img' width={25} height={25} /></span><label className="text-[15px] text-white font-jakarta inline-block mb-[10px]">password</label> </span>
                        <input type='password' className='w-[100%] px-[10px] py-[12px] text-white font-jakarta bg-greey rounded-[5px]' placeholder='Password' /> <br /><br />
                        
                        <span className='flex flex-row gap-[5px]'> <span><Image src={invitcode} alt='img' width={25} height={25} /></span><label className="text-[15px] text-white font-jakarta inline-block mb-[10px]">Invite code</label> </span> 
                        <input type='text' className='w-[100%] px-[10px] py-[12px] text-white font-jakarta bg-greey rounded-[5px]' placeholder='Password' /> <br /><br />
                        
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