import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import usalogo from '../../../public/images/usalogo.png';
const Navbar = () => {
    return (
        <div className='lg:max-w-[1440px] xl:px-[460px] mx-auto fixed top-0 w-[100%]' style={{zIndex:9999}}>
            <div className='bg-greey px-[20px] py-[10px]'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <div>
                            <Image src={logo} alt="logo" width={100} height={50} />
                        </div>
                        <div className='flex flex-row gap-[45px] items-center mt-[5px]'>
                            <div>
                                <Image src={usalogo} alt='logo' width={25} height={50} />
                            </div>
                            <div>
                                <p className='text-[#d9ac4f] font-jakarta font-semibold'>Welcome to BDG Game</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-row bg-bg gap-[8px] px-[5px] py-[4px] rounded-[10px] text-[#292d2e] items-center mt-[5px]'>
                            <div>
                                <sapn className="text-[20px]"><i class="fa fa-cloud-download" aria-hidden="true"></i></sapn>
                            </div>
                            <div>
                                <p className='text-[14px] font-jakarta font-medium'>Download APP</p>
                            </div>
                        </div>

                        <div className='flex flex-row bg-bg gap-[8px] px-[5px] py-[4px] rounded-[10px] text-[#292d2e] items-center mt-[5px]'>
                            <div>
                                <sapn className="text-[20px]"><i class="fa fa-headphones" aria-hidden="true"></i></sapn>
                            </div>
                            <div>
                                <p className='text-[14px] font-jakarta font-medium'>Customer Service</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default Navbar;