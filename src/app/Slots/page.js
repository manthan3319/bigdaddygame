import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import slotimg1 from '../../../public/images/slots1.png';
import slotimg2 from '../../../public/images/slot2.png';
import slotimg3 from '../../../public/images/slot3.png';
import slotimg4 from '../../../public/images/slot4.png';
import slotimg5 from '../../../public/images/slot5.png';
import slotimg6 from '../../../public/images/slot6.png';
import slotimg7 from '../../../public/images/slot7.png';

const Slots = () => {
    const SlotImag = [
        { id: 1, img: slotimg1 },
        { id: 2, img: slotimg2 },
        { id: 3, img: slotimg3 },
        { id: 4, img: slotimg4 },
        { id: 5, img: slotimg5 },
        { id: 6, img: slotimg6 },
        { id: 7, img: slotimg7 }
    ];

    return (
        <div className='lg:max-w-[1440px] xl:px-[460px] mx-auto'>
            <div className='bg-darkgreey px-[20px] pt-[15px]'>
                <div className='flex gap-[5px]'>
                    <span className='bg-bg w-[3px] h-[22px] mt-[2px]'></span>
                    <h1 className='text-[19px] font-bold font-jakarta'>Slots</h1>
                </div>

                <div className='flex flex-wrap gap-[11px] mt-[15px]'>
                    {SlotImag.map((slot, index) => (
                        <div key={index} className='sm:w-[48.33%] xs:w-[48%]'>
                            <div>
                                <Link href="#" passHref>
                                    <Image src={slot.img} width={500} height={100} alt={`slot-${slot.id}`} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Slots;