import React from 'react';
import Image from 'next/image';
import CategoryPopular1 from '../../../public/images/CategoryPopular1.png';
import CategoryPopular2 from '../../../public/images/CategoryPopular2.png';
import CategoryPopular3 from '../../../public/images/CategoryPopular3.png';
import Link from 'next/link';

const CategoryPopular = () => {
    const CPopular = [
        {
            id: 1,
            img: CategoryPopular1,
            name: 'Sports'
        },
        {
            id: 2,
            img: CategoryPopular2,
            name: 'Popular'
        },
        {
            id: 3,
            img: CategoryPopular3,
            name: 'Casino'
        }
    ];

    return (
        <div className='lg:max-w-[1440px] xl:px-[460px] mx-auto'>
            <div className='bg-darkgreey px-[20px] pt-[15px]'>
                <div className='bg-bg px-[10px] py-[5px] rounded-[10px]'>
                    <div className='flex flex-wrap items-center'>
                        {CPopular.map((category) => (
                            <div key={category.id} className='w-[33.33%]'>
                                <Link href="#" passHref>
                                    <div>
                                        <Image src={category.img} alt={category.name} width={100} height={100} className='m-auto'/>
                                    </div>
                                    <div>
                                        <p className='text-[16px] font-bold font-jakarta text-greey text-center '>{category.name}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPopular;