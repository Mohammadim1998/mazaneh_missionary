"use client";
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Link from 'next/link';
import MemberingBox from './MemberingBox';
import MemberedBox from './MemberedBox';
import { useRouter } from 'next/navigation';

const tabIndex = {
    0: "one",
    1: "two"
};

const MissNetwork = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [content, setContent] = useState("one");

    const getActiveIndex = (e) => {
        setContent(tabIndex[e.activeIndex])
    }

    const router = useRouter();
    const goBackRoute = () => {
        router.back()
    }

    return (
        <main className="customSlilder w-full bg-[#F6F6F7]">
            <div>
                <div className="w-full h-[119px] bg-[#FFFFFF] shadow-[0px_0.25px_6px_0px_#00000033] mb-4 px-4 pt-4">

                    <div
                        onClick={() => goBackRoute()}
                        href={"/dashboardProfile"} className='flex justify-start items-center gap-x-[10px]'>
                        <div className="w-[14px] h-[14px] flex justify-center items-center"><img src="/images/expertResume/arrowRight.svg" alt="" className="w-[14px] h-[14px]" /></div>
                        <span className="font-medium text-sm leading-5 text-[#4F4F4F]">شبکه‌ های تبلیغی</span>
                    </div>

                    <div className="w-[250px] h-[35px] bg-[#EEEFFA] mx-auto rounded-md">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={0}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper relative w-full h-full mt-[24px] grid grid-cols-2"
                        >
                            <SwiperSlide className={`mr-[13.5%] py-[3px]`}>
                                <div onClick={() => setContent("one")} className="flex flex-col items-center">
                                    <div className={content === "one"
                                        ? "cursor-pointer text-[#1D266C] w-[125px] h-[29px] bg-[#FFFFFF] shadow-[0px_1px_4px_0px_#00000040] rounded-md font-medium text-xs leading-5 flex justify-center items-center"
                                        : "bg-[#EEEFFA] w-[110px] h-[27px] font-normal text-xs leading-5 text-[#616161] flex justify-center items-center"
                                    }>درحال عضو گیری</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={`mr-[22.5%] py-[3px]`}>
                                <div onClick={() => setContent("two")} className="flex flex-col gap-y-[6px] items-center">
                                    <div className={content === "two"
                                        ? "cursor-pointer text-[#1D266C] w-[125px] h-[29px] bg-[#FFFFFF] shadow-[0px_1px_4px_0px_#00000040]  rounded-md font-medium text-xs leading-5 flex justify-center items-center"
                                        : "bg-[#EEEFFA] w-[110px] h-[27px] font-normal text-xs leading-5 text-[#616161] flex justify-center items-center"
                                    }>شبکه‌ های عضو شده</div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="w-full h-full pb-8 bg-[#F6F6F7]">
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        onSlideChange={getActiveIndex}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide className="sliderContainer1">
                            <div className="w-full h-full flex flex-col gap-y-2">
                                <div className="w-full h-[151px]">
                                    <MemberingBox
                                        title={"شبکه تربیت مربی مهد"}
                                        content={"عضویت در شبکه مهارت آموزشی و افزایش توانایی های ارتباطی با کودکان و نوجوانان  ۵  تا  ۱۰  ساله در شهرستان های سراسر کشور"}
                                        image={"/images/expertResume/per1.jpg"}
                                    />
                                </div>

                                <div className="w-full h-[151px]">
                                    <MemberingBox
                                        title={"شبکه تربیت مربی مهد"}
                                        content={"عضویت در شبکه مهارت آموزشی و افزایش توانایی های ارتباطی با کودکان و نوجوانان  ۵  تا  ۱۰  ساله در شهرستان های سراسر کشور"}
                                        image={"/images/expertResume/per2.jpg"}
                                    />
                                </div>

                                <div className="w-full h-[151px]">
                                    <MemberingBox
                                        title={"شبکه تربیت مربی مهد"}
                                        content={"عضویت در شبکه مهارت آموزشی و افزایش توانایی های ارتباطی با کودکان و نوجوانان  ۵  تا  ۱۰  ساله در شهرستان های سراسر کشور"}
                                        image={"/images/expertResume/per3.jpg"}
                                    />
                                </div>

                                <div className="w-full h-[151px]">
                                    <MemberingBox
                                        title={"شبکه تربیت مربی مهد"}
                                        content={"عضویت در شبکه مهارت آموزشی و افزایش توانایی های ارتباطی با کودکان و نوجوانان  ۵  تا  ۱۰  ساله در شهرستان های سراسر کشور"}
                                        image={"/images/expertResume/per1.jpg"}
                                    />
                                </div>

                                <div className="w-full h-[151px]">
                                    <MemberingBox
                                        title={"شبکه تربیت مربی مهد"}
                                        content={"عضویت در شبکه مهارت آموزشی و افزایش توانایی های ارتباطی با کودکان و نوجوانان  ۵  تا  ۱۰  ساله در شهرستان های سراسر کشور"}
                                        image={"/images/expertResume/per2.jpg"}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="sliderContainer1">
                            <div className="w-full h-full bg-[#F6F6F7] flex flex-col gap-y-2">
                                <div className="w-full h-[151px]">
                                    <MemberedBox
                                        title={"شبکه تربیت مربی مهد"}
                                        content={"عضویت در شبکه مهارت آموزشی و افزایش توانایی های ارتباطی با کودکان و نوجوانان  ۵  تا  ۱۰  ساله در شهرستان های سراسر کشور"}
                                        image={"/images/expertResume/per1.jpg"}
                                    />
                                </div>

                                <div className="w-full h-[151px]">
                                    <MemberedBox
                                        title={"شبکه تربیت مربی مهد"}
                                        content={"عضویت در شبکه مهارت آموزشی و افزایش توانایی های ارتباطی با کودکان و نوجوانان  ۵  تا  ۱۰  ساله در شهرستان های سراسر کشور"}
                                        image={"/images/expertResume/per2.jpg"}
                                    />
                                </div>

                                <div className="w-full h-[151px]">
                                    <MemberedBox
                                        title={"شبکه تربیت مربی مهد"}
                                        content={"عضویت در شبکه مهارت آموزشی و افزایش توانایی های ارتباطی با کودکان و نوجوانان  ۵  تا  ۱۰  ساله در شهرستان های سراسر کشور"}
                                        image={"/images/expertResume/per3.jpg"}
                                    />
                                </div>

                                <div className="w-full h-[151px]">
                                    <MemberedBox
                                        title={"شبکه تربیت مربی مهد"}
                                        content={"عضویت در شبکه مهارت آموزشی و افزایش توانایی های ارتباطی با کودکان و نوجوانان  ۵  تا  ۱۰  ساله در شهرستان های سراسر کشور"}
                                        image={"/images/expertResume/per1.jpg"}
                                    />
                                </div>

                                <div className="w-full h-[151px]">
                                    <MemberedBox
                                        title={"شبکه تربیت مربی مهد"}
                                        content={"عضویت در شبکه مهارت آموزشی و افزایش توانایی های ارتباطی با کودکان و نوجوانان  ۵  تا  ۱۰  ساله در شهرستان های سراسر کشور"}
                                        image={"/images/expertResume/per2.jpg"}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </main>
    );
}

export default MissNetwork;