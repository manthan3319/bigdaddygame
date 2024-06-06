import React from 'react'
import Image from 'next/image';
import gamecategory4 from '../../../public/images/gamecategory4.png';
import gamecategory5 from '../../../public/images/gamecategory5.png';
import Link from 'next/link';
const ChildCategory = () => {
    const categories = [
        {
            id: 1,
            img: gamecategory4,
            name: 'Rummy'
        },
        {
            id: 2,
            img: gamecategory5,
            name: 'Fishing'
        }
        // Add more categories as needed
    ];
    return (
        <div className='lg:max-w-[1440px] xl:px-[460px] mx-auto '>
            <div className='bg-darkgreey px-[20px] pt-[15px]'>
                <div className='flex flex-row gap-[10px] justify-center'>
                    {categories.map((category) => (
                        <div key={category.id} className='p-[10px] bg-bg w-[50%] rounded-[10px] '>
                            <Link href="#" passHref>
                                <div className='flex flex-row items-center justify-between'>
                                    <div>
                                        <Image src={category.img} width={100} height={100} alt={category.name} />
                                    </div>
                                    <div>
                                        <p className='text-[16px] font-bold font-jakarta text-greey '>{category.name}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ChildCategory;