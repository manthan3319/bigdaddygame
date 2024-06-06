import React from 'react';
import Image from 'next/image';
import user1 from '../../../public/images/user1.png';
import slotimg1 from '../../../public/images/slots1.png';
import slotimg2 from '../../../public/images/slot2.png';
import slotimg3 from '../../../public/images/slot3.png';
import slotimg4 from '../../../public/images/slot4.png';
import slotimg5 from '../../../public/images/slot5.png';
import slotimg6 from '../../../public/images/slot6.png';
import slotimg7 from '../../../public/images/slot7.png';

const WinningInfo = () => {
    const wininfo = [
        { id: 1, img1: user1, name: 'Mem***XNW', img2: slotimg1, earning: '3,763.20' },
        { id: 2, img1: user1, name: 'Mem***XNW', img2: slotimg2, earning: '3,763.20' },
        { id: 3, img1: user1, name: 'Mem***XNW', img2: slotimg3, earning: '3,763.20' },
        { id: 4, img1: user1, name: 'Mem***XNW', img2: slotimg4, earning: '3,763.20' },
    ];

    return (
        <div className='lg:max-w-[1440px] xl:px-[460px] mx-auto'>
            <div className='bg-darkgreey px-[20px] pt-[15px] pb-[100px]'>
                <div className='flex gap-[5px]'>
                    <span className='bg-bg w-[3px] h-[22px] mt-[2px]'></span>
                    <h1 className='text-[19px] font-bold font-jakarta'>Winning information</h1>
                </div>

                <div className='mt-[15px]'>
                    {wininfo.map((winner, index) => (
                        <div key={index} className='flex flex-row justify-between xs:gap-[10px] bg-lightgreey rounded-[10px] px-[10px] py-[4px] mb-[10px]'>
                            <div className='flex sm:flex-row sm:gap-[10px] xs:gap-[5px] items-center xs:flex-col'>
                                <div className='xs:w-[50%]'>
                                    <Image src={winner.img1} width={50} height={30} alt="User Image" className='rounded-[50%] winninginfo_img1'/>
                                </div>
                                <div>
                                    <p className='text-bold text-[#a6a9ae] font-jakarta'>{winner.name}</p>
                                </div>
                            </div>
                            <div className='flex flex-row gap-[10px]'>
                                <div>
                                    <Image src={winner.img2} width={70} height={100} alt="Slot Image" className='winninginfo_img border-[1px] border-[bg-bg]  rounded-[10px]'/>
                                </div>
                                <div>
                                    <h2 className='font-extrabold font-jakarta text-yellowlight text-[14px]'>Receive ₹{winner.earning}</h2>
                                    <p className='font-jakarka text-bold text-[#a6a9ae] mt-[10px]'>Winning amount</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WinningInfo;