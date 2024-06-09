"use client"
import React from 'react';
import LoginMenu from './LoginMenu/page';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Image from 'next/image';
import mobileicon from '../../../public/images/mobile.png';
import usericon from '../../../public/images/user.png';
import emailnumber from '../../../public/images/emailnumber.png';
import emailicon from '../../../public/images/email.png';
import ForgetPass from '../ForgetPass/page';
import mobile2 from '../../../public/images/mobile2.png';
import password from '../../../public/images/password.png';
const Login = () => {
    return (
        <>
            <LoginMenu />
            <div className='lg:max-w-[1440px] xl:px-[460px] mx-auto min-h-screen flex items-center justify-center'>
                <div className='bg-darkgree px-[20px] pt-[90px] pb-[50px] w-full max-w-md min-h-[640px] flex flex-col justify-center'>
                    <Tabs>
                        <div className='text-center mb-[50px]'>
                            <div className=''>
                                <TabList className="tablist_login flex flex-row justify-between">
                                    <Tab className="w-[50%] ">
                                        <h1 className='p-[5px] font-jakarta text-[15px] flex flex-col gap-[2px] items-center'> <span><Image src={mobileicon} width={30} height={30} alt="img" /></span> <span>Log in with phone</span></h1>
                                    </Tab>
                                    <Tab className="w-[50%]">
                                        <h1 className='p-[5px] font-jakarta text-[15px] lex flex-col gap-[2px] items-center'><span className='flex justify-center gap-[3px]'><Image src={emailicon} alt='img' width={30} height={30} /> <Image src={usericon} alt='img' width={30} height={30} /></span> <span>Email / Account</span></h1>
                                    </Tab>
                                </TabList>
                            </div>
                        </div>
                        <TabPanel>
                            <div>
                                <span className='flex flex-row gap-[2px]'> <span><Image src={mobile2} alt='img' width={25} height={25} /></span><label className="text-[18px] text-white font-jakarta inline-block mb-[10px]">Phone Number</label></span>
                                <input type='text' className='w-[100%] px-[10px] py-[12px] text-white font-jakarta bg-greey rounded-[5px]' placeholder='Please enter the phone number' />  <br /><br />

                                <span className='flex flex-row gap-[2px]'> <span><Image src={password} alt='img' width={25} height={25} /></span><label className="text-[18px] text-white font-jakarta inline-block mb-[10px]">Password</label></span>
                                <input type='password' className='w-[100%] px-[10px] py-[12px] text-white font-jakarta bg-greey rounded-[5px]' placeholder='Password' /> <br /><br />

                                <div className='px-[50px] mt-[20px]'>
                                    <Link href="/" className='text-center font-jakarta font-bold text-[15px] w-[100%] text-white hover:text-black hover:bg-bg inline-block py-[10px] rounded-[50px] border-[2px] border-bg mb-[10px]'>Log in</Link>
                                    <Link href="/Login/Register" className='text-center font-jakarta font-bold text-[15px] w-[100%] text-white hover:text-black hover:bg-bg inline-block py-[10px] rounded-[50px] border-[2px] border-bg mb-[10px]'>Register</Link>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <span className='flex flex-row gap-[5px]'> <span><Image src={emailnumber} alt='img' width={25} height={25} /></span> <label className="text-[18px] text-white font-jakarta inline-block mb-[4px]">Email / Account Log in</label> </span>
                                <input type='text' className='w-[100%] px-[10px] py-[12px] text-white font-jakarta bg-greey rounded-[5px]' placeholder='Please input your email' /> <br /><br />

                                <span className='flex flex-row gap-[5px]'> <span><Image src={password} alt='img' width={25} height={25} /></span> <label className="text-[18px] text-white font-jakarta inline-block mb-[4px]">Password</label> </span>
                                <input type='password' className='w-[100%] px-[10px] py-[12px] text-white font-jakarta bg-greey rounded-[5px]' placeholder='Password' /> <br /><br />
                                <div className='px-[50px] mt-[20px]'>
                                    <Link href="/" className='text-center font-jakarta font-bold text-[15px] w-[100%] text-white hover:text-black hover:bg-bg inline-block py-[10px] rounded-[50px] border-[2px] border-bg mb-[10px]'>Log in</Link>
                                    <Link href="/Login/Register" className='text-center font-jakarta font-bold text-[15px] w-[100%] text-white hover:text-black hover:bg-bg inline-block py-[10px] rounded-[50px] border-[2px] border-bg mb-[10px]'>Register</Link>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>

                    <div>
                        <ForgetPass />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
