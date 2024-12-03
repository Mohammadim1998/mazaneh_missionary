"use client";
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';
import SwiperCore from 'swiper';

// import required modules
import { Parallax, Navigation, Pagination, EffectFade } from 'swiper/modules';
import Link from 'next/link';
SwiperCore.use([Pagination]);

export function SliderPortfolio() {
  const swiperRef = useRef(null);

  // useEffect(() => {
  //   const swiperInstance = swiperRef.current.swiper;
  //   const updatePagination = () => {
  //     if (swiperInstance.activeIndex === 5) { // Assuming you want to hide pagination for the second slide
  //       swiperInstance.pagination.disable();
  //     } else {
  //       swiperInstance.pagination.enable();
  //     }
  //     swiperInstance.pagination.update();
  //   };

  //   swiperInstance.on('slideChange', updatePagination);

  //   // Clean up event listener
  //   return () => {
  //     swiperInstance.off('slideChange', updatePagination);
  //   };
  // }, []);

  return (
    <div className='relative mainSliderRoot flex-row-reverse w-full h-dvh bg-white'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          'direction': 'ltr'
        }}
        speed={600}
        parallax={true}
        spaceBetween={0}
        effect='fade'
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Parallax, EffectFade, Navigation, Pagination]}
        className="mainSliderRoot"
        ref={swiperRef}
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="relative w-full h-dvh grid grid-cols-1 grid-rows-2 bg-white">
            <section className="w-full bg-white">
              <div className="relative w-full h-full flex justify-center items-start">

                <div className='z-30 absolute right-0 top-6'><img src="/images/portfolio/Vector-1-1.svg" alt="" /></div>
                <div className='z-30 absolute left-0 bottom-0 w-[40%]'><img src="/images/portfolio/Vector-1-2.svg" alt="" /></div>

                <div className='z-10 absolute left-0 w-[75%] top-[50%] translate-y-[-50%]'><img src="images/portfolio/bgportfolio.png" alt="" /></div>

                <div className="absolute -top-2 z-30 w-[60%] h-full flex justify-center items-center">
                  <img src="/images/portfolio/4.png" alt="" />
                </div>
              </div>
            </section>

            <section className="relative w-full bg-white">
              <div className="absolute bottom-36 left-[50%] translate-x-[-50%] px-9 w-full flex flex-col justify-center items-center gap-y-2">
                <div className="absolute -top-6"><img src="/images/portfolio/icon-1.svg" alt="" className="w-full h-full" /></div>
                <h1 data-swiper-parallax="-400" className="title text-[#000000] Medium text-base font-semibold leading-6 mt-14 mb-2">ثبت آسان فعالیت‌های تبلیغی</h1>
                <p data-swiper-parallax="-400" className="subtitle text-[#4F4F4F] font-light  text-sm leading-6 text-center">
                  فعالیت‌های تبلیغی خود را در قالب‌های متعدد می‌توانید اینجا ثبت نمایید و از مزایای آن بهره‌مند شوید
                </p>
              </div>

              <Link href={"/login"}>
                <span className="absolute bottom-10 left-[50%] translate-x-[-50%] text-[#6E75AB] font-normal text-lg leading-6">رد کردن</span>
              </Link>
            </section>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-dvh grid grid-cols-1 grid-rows-2 bg-white">
            <section className="w-full bg-white">
              <div className="relative w-full h-full flex justify-center items-start">
                <div className='z-30 absolute left-0 top-2 w-[50%]'><img src="/images/portfolio/Vector-2-1.svg" alt="" /></div>
                <div className='z-40 absolute right-0 -bottom-2 w-[40%]'><img src="/images/portfolio/Vector-2-2.svg" alt="" /></div>

                <div className='z-10 absolute w-[75%] top-[50%] translate-y-[-50%] right-0 rotate-180'><img src="images/portfolio/bgportfolio.png" alt="" /></div>

                <div className="absolute right-8 -top-2 z-30 w-[60%] h-full flex justify-center items-center">
                  <img src="/images/portfolio/2.png" alt="" />
                </div>
              </div>
            </section>

            <section className="relative w-full bg-white">
              <div className="absolute bottom-36 left-[50%] translate-x-[-50%] px-9 w-full flex flex-col justify-center items-center gap-y-2">
                <div className="absolute -top-6"><img src="/images/portfolio/icon-2.svg" alt="" className="w-full h-full" /></div>
                <h1 data-swiper-parallax="-400" className="title text-[#000000] Medium font-semibold text-base leading-6 mt-14 mb-2">پذیرش و حضور در جلسات سخنرانی</h1>
                <p data-swiper-parallax="-400" className="subtitle text-[#4F4F4F] font-light  text-sm leading-6 text-center">
                  درخواست‌های جلسه‌ای که توسط میزبان‌ها به ثبت رسیده را می‌توانید مشاهده نموده و با بررسی آن اقدام به پذیرش نمایید
                </p>
              </div>
              <Link href={"/login"}>
                <span className="absolute bottom-10 left-[50%] translate-x-[-50%] text-[#6E75AB] font-normal text-lg leading-6">رد کردن</span>
              </Link>
            </section>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-dvh grid grid-cols-1 grid-rows-2 bg-white">
            <section className="w-full bg-white">
              <div className="relative w-full h-full flex justify-center items-start">
                <div className='z-30 absolute right-0 top-8 w-[30%]'><img src="/images/portfolio/Vector-3-1.svg" alt="" /></div>
                <div className='z-40 absolute left-0 -bottom-2 w-[40%]'><img src="/images/portfolio/Vector-3-2.svg" alt="" /></div>

                <div className='z-10 absolute left-0 w-[75%] top-[50%] translate-y-[-50%] right-12'><img src="images/portfolio/bgportfolio.png" alt="" /></div>

                <div className="absolute z-30 left-6 -top-2 w-[60%] h-full flex justify-center items-center">
                  <img src="/images/portfolio/1.png" alt="" />
                </div>
              </div>
            </section>

            <section className="relative w-full bg-white">
              <div className="absolute bottom-36 left-[50%] translate-x-[-50%] px-9 w-full flex flex-col justify-center items-center gap-y-2">
                <div className="absolute -top-6 left-[50%] translate-x-[-50%] h-[40%]"><img src="/images/portfolio/icon-3.svg" alt="" className="w-full h-full" /></div>
                <h1 data-swiper-parallax="-400" className="title text-[#000000] Medium font-semibold text-base leading-6 mt-14 mb-2">محتوای تبلیغی رایگان</h1>
                <p data-swiper-parallax="-400" className="subtitle text-[#4F4F4F] font-light  text-sm leading-6 text-center">
                  برای هر مناسبت تبلیغی می‌توانید محتوای جذاب و اختصاصی منبر خود را به شکل رایگان در قالب‌های متنوع به صورت رایگان دریافت کنید
                </p>
              </div>
              <Link href={"/login"}>
                <span className="absolute bottom-10 left-[50%] translate-x-[-50%] text-[#6E75AB] font-normal text-lg leading-6">رد کردن</span>
              </Link>
            </section>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-dvh grid grid-cols-1 grid-rows-2 bg-white">
            <section className="w-full bg-white">
              <div className="relative w-full h-full flex justify-center items-start">
                <div className='z-30 absolute left-0 top-8 w-[30%]'><img src="/images/portfolio/Vector-4-1.svg" alt="" /></div>
                <div className='z-40 absolute right-0 bottom-0 w-[30%]'><img src="/images/portfolio/Vector-4-2.svg" alt="" /></div>

                <div className='z-10 absolute w-[75%] right-0 top-[50%] translate-y-[-50%] rotate-180'><img src="images/portfolio/bgportfolio.png" alt="" /></div>

                <div className="absolute z-30 right-6 -top-2 w-[60%] h-full flex justify-center items-center">
                  <img src="/images/portfolio/3.png" alt="" />
                </div>
              </div>
            </section>

            <section className="relative w-full bg-white">
              <div className="absolute bottom-36 left-[50%] translate-x-[-50%] px-9 w-full flex flex-col justify-center items-center gap-y-2">
                <div className="absolute -top-6 left-[50%] translate-x-[-50%] h-[40%]"><img src="/images/portfolio/icon-4.svg" alt="" className="w-full h-full" /></div>
                <h1 data-swiper-parallax="-400" className="title text-[#000000] Medium font-semibold text-base leading-6 mt-14 mb-2">عضویت در شبکه های تبلیغی</h1>
                <p data-swiper-parallax="-400" className="subtitle text-[#4F4F4F] font-light  text-sm leading-6 text-center">
                  در سامانه شمع می‌توانید شبکه‌های تخصصی تبلیغی در موضاعات مختلف را مشاهده کرده و با عضویت در آنها تبلیغ خود را به شکل تخصصی انجام دهید
                </p>
              </div>

              <Link href={"/login"} className="registerBtn flex justify-center items-center w-[232px] h-[45px] Medium rounded-[8px] py-[10px] px-[6px] bg-[#26328D]
                   active:bg-[#5E6CD3] active:text-[#FFFFFF]  text-white hover:bg-[#26328D1C] font-semibold text-base leading-6 cursor-pointer">
                ورود و ثبت نام
              </Link>

            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}