import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import home from '../../../public/images/svg-image-7.svg';
import activity from '../../../public/images/svg-image-8.svg';
import promotion from '../../../public/images/svg-image-9.svg';
import wallet from '../../../public/images/svg-image-10.svg';
import Account from '../../../public/images/svg-image-11.svg';
const Menubar = () => {
    return (
        <div className='lg:max-w-[1435px] xl:px-[460px] mx-auto fixed bottom-0 w-[100%]'>
            <div className='bg-lightgreey px-[20px] py-[10px]'>
                <div className=''>
                    <ul className='flex flex-row gap-[10px] justify-between items-center text-center'>
                        <li><Link href="#" passHref className='flex flex-col items-center text-yellowlight font-semibold font-jakarta'><span><Image src={home} hight={35} width={35} alt='img' className='m-auto xs:w-[20px] sm:w-[35px]'/></span> <span className='mt-[5px]'>Home</span></Link></li>
                        <li><Link href="#" passHref className='flex flex-col items-center text-yellowlight font-semibold font-jakarta'><span><Image src={activity} hight={35} width={35} alt='img' className='m-auto  xs:w-[20px] sm:w-[35px]'/></span> <span className='mt-[5px]'>Activity</span></Link></li>
                        <li><Link href="#" passHref className='flex flex-baseline flex-col items-center text-yellowlight font-semibold font-jakarta relative'><span ><Image src={promotion}  hight={35} width={35} alt='img'className='m-auto daimondicon xs:w-[20px] sm:w-[35px]' /></span> <span className='xs:mt-[29px] sm:mt-[39px] promotion_text'>Promotion</span></Link></li>
                        <li><Link href="#" passHref className='flex flex-col items-center text-yellowlight font-semibold font-jakarta'><span><Image src={wallet} hight={35} width={35} alt='img' className='m-auto  xs:w-[20px] sm:w-[35px]'/></span> <span className='mt-[5px] '>Wallet</span></Link></li>
                        <li><Link href="/Login" passHref className='flex flex-col items-center text-yellowlight font-semibold font-jakarta'><span><Image src={Account} hight={35} width={35} alt='img' className='m-auto  xs:w-[20px] sm:w-[35px]'/></span> <span className='mt-[5px]'>Account</span></Link></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menubar;
