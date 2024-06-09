import React from 'react'
import Image from 'next/image';
import forgetpass from '../../../public/images/forgetpassword.png';
import customer from '../../../public/images/customer.png';
 const ForgetPass = () => {
  return (
    <div className='flex flex-row justify-center gap-[80px] mt-[30px]'>
            <div className='flex flex-col items-center'>
                <Image src={forgetpass} alt='img' width={50} height={50}/>
                <p className='text-[12px] font-jakarta text-[#666]'>Forgot password</p>
            </div>

            <div className='flex flex-col items-center'>
                <Image src={customer} alt='img' width={50} height={50}/>
                <p className='text-[12px] font-jakarta text-[#666]'>Customer Service</p>
            </div>
    </div>
  )
}

export default ForgetPass
