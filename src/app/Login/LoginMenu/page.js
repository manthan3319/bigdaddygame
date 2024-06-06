import React from 'react'
import Link from 'next/link';
import Logo from '../../../../public/images/logo.png';
import usalogo from '../../../../public/images/usalogo.png';
import Image from 'next/image';
 const LoginMenu = () => {
    return (
        <div className='lg:max-w-[1440px] xl:px-[460px] mx-auto fixed top-0 w-[100%]' style={{ zIndex: 9999 }}>
            <div className='bg-greey px-[20px] py-[10px]'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Link href="/" className='text-[25px] text-black w-[35px] h-[35px] text-center  inline-block bg-white rounded-[50px]'><i class="fa fa-angle-left" aria-hidden="true"></i></Link>
                    </div>

                    <div>
                        <Image src={Logo} alt="logo" width={100} height={100} />
                    </div>

                    <div>
                    <Image src={usalogo} alt='logo' width={25} height={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginMenu;