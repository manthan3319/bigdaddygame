import React from 'react';
import Image from 'next/image';
import category1img from '../../../public/images/gamecategory1.png';
import category2img from '../../../public/images/gamecategory2.png';
import category3img from '../../../public/images/gamecategory3.png';
import Link from 'next/link';

 const Category = () => {
    const categories = [
        {
            id: 1,
            img: category1img,
            name: 'Lottery'
        },
        {
            id: 2,
            img: category2img,
            name: 'Original'
        },
        {
            id: 3,
            img: category3img,
            name: 'slots'
        },
        // Add more categories as needed
    ];

    return (
        <div className='lg:max-w-[1440px] xl:px-[460px] mx-auto '>
            <div className='bg-darkgreey px-[20px] pt-[30px]'>
                <div className='flex sm:flex-wrap sm:gap-[10px] xs:gap-[10px] xs:flex-wrap sm:justify-center'>
                    {categories.map((category) => (

                        <div key={category.id} className='p-[10px] bg-bg sm:w-[31.60%] xs:w-[31%] rounded-[10px] relative min-h-[100px]'>
                            <Link href="#" passHref>
                                <div>
                                    <Image src={category.img} width={100} height={100} alt={category.name} className='absolute catgory-img ' />
                                </div>
                                <div>
                                    <p className='text-[16px] font-bold font-jakarta text-greey pt-[70px]'>{category.name}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
