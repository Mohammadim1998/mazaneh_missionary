"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { otherNews } from "../Services";

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFormNext } from "react-icons/gr";

// Import Swiper styles
import './style.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import PaginationMUI from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const News = () => {
    const router = useRouter();

    return (
        <div className="w-full h-full pb-6">
            <div className="w-full h-12 bg-[#2B39A1] flex justify-start items-center gap-x-2 p-4">
                <div className="w-[14px] h-[14px]"><img src="/images/svg/profile/rightArrowWhite.svg" alt="" /></div>
                <span onClick={() => router.back()} className="text-white font-medium text-sm leading-5">درباره ما</span>
            </div>

            <div className="w-full  bg-gray-100 mt-8 px-4">
                <div className="w-full h-[30px] bg-[#1D266C] flex justify-center items-center rounded text-white font-extrabold text-base mb-4">آخرین خبرها</div>

                <div className="last-news relative w-full h-full mb-6 bg-white shadow-[0px_1.25px_4px_0.5px_#00000040]">
                    <Swiper
                        slidesPerView={1}
                        centeredSlides
                        spaceBetween={30}
                        autoplay={{
                            delay: 500,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        freeMode={true}
                        pagination={{
                            el: '.last-news.swiper-pagination',
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.last-news .swiper-button-next',
                            prevEl: '.last-news .swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        className="relative last-news"
                    >
                        {otherNews.map((item) => (
                            <SwiperSlide key={item.id} className="w-full h-full">
                                <div className="relative pb-24">
                                    <Link href={`/news/${item.slug}`} className="w-full h-full flex flex-col justify-start items-center rounded-lg px-4 py-8">
                                        <div className="shrink-0 w-[121px] h-[121px] rounded-lg mb-4"><img src={item.img} alt="" className="w-full h-full rounded-lg object-fill" /></div>

                                        <span className="text-[#1d266c] font-bold text-base mb-4 block">{item.title}</span>

                                        <p className="text-black font-light text-[10px] line-clamp-3">{item.subTitle}</p>
                                    </Link>

                                    <div className="absolute bottom-4 left-4 flex justify-start items-center gap-x-1">
                                        <div className="w-5 h-5 opacity-70 flex justify-center items-center"><img src="/images/svg/home/calendar.svg" alt="" className="w-full h-full" /></div>
                                        <span className="text-[#4f4f4f] opacity-70 font-light text-xs">{item.date}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="z-50 absolute bottom-6 right-14">
                        <div className="last-news swiper-button-next shrink-0 -mr-2 rounded-full bg-white border-[2px] border-[#BF9A66] after:hidden rotate-180"><GrFormNext className="text-[#BF9A66]" /></div>
                        <div className="last-news swiper-button-prev shrink-0 rounded-full bg-white border-[2px] border-[#BF9A66] after:hidden"><GrFormNext className="text-[#BF9A66]" /></div>
                    </div>
                    <div className="last-news swiper-pagination hidden"></div>
                </div>

                <div className="w-full h-[30px] bg-[#1D266C] flex justify-center items-center rounded text-white font-extrabold text-base mb-4">سایر خبرها</div>
            </div>


            <div className="w-full mt-6 px-4">
                <div className="w-full flex flex-col gap-y-6">
                    {otherNews.map((item) => (
                        <div key={item.id} className="relative w-full h-[107px]">
                            <Link className="w-full h-full flex justify-center items-center gap-x-4 p-3 bg-[#F5F5F5] rounded-2xl" href={`/news/${item.slug}`}>
                                <div className="shrink-0 w-[83px] h-[83px] rounded-xl"><img src={item.img} alt="" className="w-full h-full rounded-xl" /></div>

                                <div className="w-full h-full flex flex-col justify-start gap-y-4">
                                    <div>
                                        <span className="text-[#1D266C] text-xs font-semibold block mb-2">{item.title}</span>
                                        <p className="text-[#212529] font-light text-[10px] line-clamp-3">{item.subTitle}</p>
                                    </div>

                                    <div className="absolute left-4 top-[-8px] w-12 h-4 bg-[#B9976C] rounded-sm flex justify-center items-center gap-x-1">
                                        <span className="text-white font-light text-[10px]">{item.date}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-center items-center mt-8">
                <Stack spacing={2}>
                    <PaginationMUI count={40} variant="outlined" shape="rounded" />
                </Stack>
            </div>
        </div>
    );
}

export default News;