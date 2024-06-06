"use client"
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../../../public/images/lotterycategory1.png'
import img2 from '../../../public/images/lotterycategory2.png';
import img3 from '../../../public/images/lotterycategory3.png';
import img4 from '../../../public/images/lotterycategory4.png';
import Link from 'next/link';
import FadeIn from 'react-fade-in';
export const Lottery = () => {
    const allItems = [
        { id: 1, img: img1, title: "Win Go 1Min" },
        { id: 2, img: img2, title: "Win Go 3Min" },
        { id: 3, img: img3, title: "Win Go 5Min" },
        { id: 4, img: img4, title: "Win Go 10Min" }
    ];

    const winGoItems = [
        { id: 1, img: img1, title: "Win Go 1Min" },
        { id: 2, img: img2, title: "Win Go 3Min" },
        { id: 3, img: img3, title: "Win Go 5Min" },
    ];

    const k3Items = [
        { id: 1, img: img1, title: "K3 1" },
        { id: 2, img: img2, title: "K3 2" },
    ];

    const d5Items = [
        { id: 1, img: img1, title: "5D 1" },
        { id: 2, img: img2, title: "5D 2" },
        { id: 3, img: img3, title: "5D 3" },
    ];

    const trxWinItems = [
        { id: 1, img: img1, title: "Trx Win 1" },
        { id: 2, img: img2, title: "Trx Win 2" },
        { id: 3, img: img3, title: "Trx Win 3" },
        { id: 4, img: img4, title: "Trx Win 4" }
    ];

    const renderItems = (items) => {
        return items.map(item => (

            <div
                key={item.id}
                className='relative w-[31%] h-[153px] bg-cover bg-center flex items-end'
                style={{ backgroundImage: `url(${item.img.src})` }}
            >
                <p className='text-yellowlight text-[12px] text-center w-full py-[10px] bg-yellowlight font-bold font-jakarta bg-opacity-50'>{item.title}</p>
            </div>
        ));
    };

    return (
        <div className='lg:max-w-[1440px] xl:px-[460px] mx-auto'>
            <div className='bg-darkgreey px-[20px] pt-[15px] '>
                <div className='flex gap-[5px]'>
                    <span className='bg-bg w-[3px] h-[22px] mt-[2px]'></span>
                    <h1 className='text-[19px] font-bold font-jakarta'>Lottery</h1>
                </div>

                <div className='mt-[15px]'>
                    <Tabs>
                        <TabList>
                            <Tab>All</Tab>
                            <Tab>Win Go</Tab>
                            <Tab>K3</Tab>
                            <Tab>5D</Tab>
                            <Tab>Trx Win</Tab>
                        </TabList>

                        <TabPanel>
                            <FadeIn>
                                <div className='flex flex-wrap gap-[11px]'>
                                    {renderItems(allItems)}
                                </div>
                            </FadeIn>
                        </TabPanel>
                        <TabPanel>
                            <FadeIn>
                                <div className='flex flex-wrap gap-[11px]'>
                                    {renderItems(winGoItems)}
                                </div>
                            </FadeIn>
                        </TabPanel>
                        <TabPanel>
                            <FadeIn>
                                <div className='flex flex-wrap gap-[11px]'>
                                    {renderItems(k3Items)}
                                </div>
                            </FadeIn>
                        </TabPanel>
                        <TabPanel>
                            <FadeIn>
                                <div className='flex flex-wrap gap-[11px]'>
                                    {renderItems(d5Items)}
                                </div>
                            </FadeIn>
                        </TabPanel>
                        <TabPanel>
                            <FadeIn>
                                <div className='flex flex-wrap gap-[11px]'>
                                    {renderItems(trxWinItems)}
                                </div>
                            </FadeIn>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
