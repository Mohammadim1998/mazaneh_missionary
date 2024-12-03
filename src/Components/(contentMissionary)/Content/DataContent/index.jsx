"use client"
import Link from "next/link";
import Comment from "./Comment";
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';
import { Navigation } from 'swiper/modules';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/audio.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react"
import { DefaultVideoLayout, defaultLayoutIcons } from '@vidstack/react/player/layouts/default';

const DataContent = () => {
    // import required modules
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <div className="relative w-full flex flex-col gap-y-5 bg-[#F0F0F1] pb-8">
            <div className="z-50 fixed top-0 left-0 right-0 w-full h-12 flex justify-between items-center bg-[#5461CA] px-4 py-[13px]">
                <div className="flex justify-start items-center gap-x-2">
                    <div className="w-[14px] h-[14px]"><img src="/images/svg/content/rightArrow.svg" alt="" className="w-full h-full" /></div>
                    <Link href={"/contentMissionary"}>
                        <span className="text-white font-medium text-sm leading-5">محتوای تبلیغی</span>
                    </Link>
                </div>

                <div className="flex flex-col gap-y-[3px]">
                    <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                    <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                    <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                </div>
            </div>

            <div className="w-full bg-white px-4 pt-5 pb-6 mt-12">
                <div className="w-full h-[289px] rounded-md shadow-[0px_4px_4px_0px_#00000040]"><img src="/images/content/image5.jpg" alt="" className="w-full h-full rounded-md" /></div>

                <div className="w-full mt-[18px] flex flex-col gap-y-2 px-4">
                    <span className="text-[#4F4F4F] font-bold text-base leading-6">خورشید مقدس</span>
                    <p className="text-[#616161] font-normal text-xs leading-8">متن سخرانی ویژه ولادت امام‌رضا علیه‌السلام در پاسخ به اهانت به مقام نورانی امام مهربانی</p>
                </div>

                <div className="w-full flex flex-col gap-y-5 px-6 mt-5 mb-6">
                    <div className="flex justify-start items-center gap-x-2">
                        <div className="w-4 h-4"><img src="/images/svg/content/content.svg" alt="" className="w-full h-full" /></div>
                        <div className="flex justify-start items-center gap-x-1 font-normal text-sm">
                            <span className="text-[#AAAAAA]">نوع محتوا: </span>
                            <span className="text-[#787878]">کتاب</span>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                        <div className="w-4 h-4"><img src="/images/svg/content/author.svg" alt="" className="w-full h-full" /></div>
                        <div className="flex justify-start items-center gap-x-1 font-normal text-sm">
                            <span className="text-[#AAAAAA]">نویسنده:</span>
                            <span className="text-[#787878]">مصطفی طالبی</span>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                        <div className="w-4 h-4"><img src="/images/svg/content/event2.svg" alt="" className="w-full h-full" /></div>
                        <div className="flex justify-start items-center gap-x-1 font-normal text-sm">
                            <span className="text-[#AAAAAA]">مناسبت:</span>
                            <span className="text-[#787878]">محرم ۱۴۰۱</span>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                        <div className="w-4 h-4"><img src="/images/svg/content/publishDate.svg" alt="" className="w-full h-full" /></div>
                        <div className="flex justify-start items-center gap-x-1 font-normal text-sm">
                            <span className="text-[#AAAAAA]">تاریخ انتشار:</span>
                            <span className="text-[#787878]">۱۴۰۱/۰۳/۲۰</span>
                        </div>
                    </div>
                </div>

                {/* <div className="w-full h-[1px]  my-6"></div> */}
                <div className="w-full px-4">
                    <div className="w-full border-t-[#0000001A] border-t-[1px] pt-6 ">
                        <div className="w-full flex justify-between items-center">
                            <div className="flex items-center gap-x-2">
                                <div className="w-5 h-5 flex items-center justify-center"><img src="/images/svg/content/star2.svg" alt="" className="" /></div>

                                <div className="flex items-center justify-center gap-x-1 text-[#787878] font-semibold text-xs leading-5">
                                    <span className="">۴.۵</span>امتیاز
                                </div>
                            </div>

                            <div className="flex items-center gap-x-[14px]">
                                <div className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/content/save.svg" alt="" className="" /></div>
                                <div className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/content/share.svg" alt="" className="" /></div>
                                <div className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/content/message.svg" alt="" className="" /></div>
                            </div>

                        </div>
                        <button className="flex justify-center items-center gap-x-2 w-full h-[46px] bg-[#B9976C] mt-5 rounded-md">
                            <div className="w-[21px] h-[20px]"><img src="/images/svg/content/downloadWhite.svg" alt="" className="" /></div>
                            <span className="text-[#FFFFFF] font-semibold text-sm leading-5">دانلود خورشید مقدس</span>
                        </button>
                    </div>
                </div>

            </div>

            <div className="w-full bg-white pt-6 px-4 pb-5">
                <div className="w-[135px] h-[31px] flex bg-white gap-x-[3px]">
                    <div className="w-[3px] h-full bg-[#1D266C] rounded-sm"></div>
                    <div className="w-[135px] bg-[#EBEBEB] text-[#1D266C] rounded-sm font-semibold text-sm leading-6 flex justify-center items-center">معرفی محصول</div>
                </div>

                <div className="relative w-full">
                    <p className="text-[#686868] font-semibold text-xs leading-8 text-justify mt-[18px] mb-3">«جایگاه امید و امیدآفرینی در قیام سیدالشهداء و نقش آن در تحولات انقلاب اسلامی و بهبود و تعالی جامعه اسلامی برای زمینه‌سازی ظهور»</p>
                    <p className="text-[#686868] font-normal text-sm leading-8 mb-6 text-justify">وقتی دشمن مقابل نور علی بن موسی رضا (علیه السلام) کم می‌آورد، چه می‌کند؟ می‌خواهد هتک خورشید کند. او نابودی خودش را دیده، دست به انتحار می‌زند، یک روز به ساحت نور عالم امکان یعنی رسول‌الله (ص) اهانت می‌کند. نوری که پیغمبر فرمود: «اولین نوری که خدا در این عالم خلق کرد، نور من بود؛ أَوَّلُ مَا خَلَقَ اللَّهُ نُورِی.» وقتی دشمن، متعرض به وجود نورانی امام رضا (علیه السلام) می‌شود معلوم می‌شود که کار امام رضا(علیه السلام) در جهان گرفته است.</p>

                    <div className="relative">
                        <div className="w-full h-[217px]">
                            <MediaPlayer
                                src='/videos/video2.mp4'
                                viewType='video'
                                streamType='on-demand'
                                logLevel='warn'
                                crossOrigin
                                playsInline
                                // title='Sprite Fight'
                                poster='/images/jpg/poster1.jfif'
                            >
                                <MediaProvider>
                                    <Poster className="vds-poster" />
                                    {/* {textTracks.map(track => (
                                        <Track {...track} key={track.src} />
                                    ))} */}
                                </MediaProvider>
                                <DefaultVideoLayout
                                    thumbnails=''
                                    icons={defaultLayoutIcons}
                                />
                            </MediaPlayer>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-y-8 w-full bg-white px-4 pt-6 pb-8">
                {/* <div className="flex flex-col gap-y-6">
                    <div className="w-[135px] h-[31px] flex bg-white gap-x-[3px]">
                        <div className="w-[3px] h-full bg-[#1D266C] rounded-sm"></div>
                        <div className="w-[85px] bg-[#EBEBEB] text-[#1D266C] rounded-sm font-semibold text-sm leading-6 flex justify-center items-center">دانلود</div>
                    </div>

                    <div className="flex items-center gap-x-[10px]">
                        <div className="w-[21px] h-[20px]"><img src="/images/svg/content/download.svg" alt="" className="w-full h-full" /></div>
                        <span className="text-[#1D266C] font-medium text-sm leading-6">دانلود خورشید مقدس جلد ۱</span>
                    </div>

                </div> */}

                <div className="flex flex-col gap-y-6">
                    <div className="w-[135px] h-[31px] flex bg-white gap-x-[3px]">
                        <div className="w-[3px] h-full bg-[#1D266C] rounded-sm"></div>
                        <div className="w-[85px] bg-[#EBEBEB] text-[#1D266C] rounded-sm font-semibold text-sm leading-6 flex justify-center items-center">مطالعه</div>
                    </div>

                    <div className="flex items-center gap-x-[10px] px-2">
                        <div className="w-[21px] h-[20px]"><img src="/images/svg/content/study.svg" alt="" className="w-full h-full" /></div>
                        <span className="text-[#1D266C] font-medium text-sm leading-6">مطالعه آنلاین خورشید مقدس جلد ۱</span>
                    </div>

                </div>


            </div>

            <div className="w-full flex flex-col justify-center bg-white pt-7 pb-6">
                <div className="flex flex-col justify-center items-center">
                    <span className="text-[#AAAAAA] mb-5">این محتوا را چگونه ارزیابی می کنید؟</span>
                    <div className="flex items-center gap-x-3 mb-9">
                        <div className="flex items-center gap-x-[4.5px]">
                            {new Array(5 - 3).fill(0).map((item, index) => (
                                <div className="w-6 h-6 flex justify-center items-center"><img src="/images/svg/content/starEmpty.svg" alt="" className="w-5 h-[19px]" /></div>
                            ))}
                            {new Array(3).fill(0).map((item, index) => (
                                <div className="w-6 h-6 flex justify-center items-center"><img src="/images/svg/content/starFull.svg" alt="" className="w-5 h-[19px]" /></div>
                            ))}
                        </div>
                        <div className="text-[#AAAAAA]">(۲  از  ۵)</div>
                    </div>

                    {/* <div className="flex gap-x-[7px] justify-center items-center w-[126px] h-[39px] border-[1px] border-[#B9976C] rounded-lg">
                        <div className="w-[14px] h-4"><img src="/images/svg/content/share.svg" alt="" className="w-full h-full" /></div>
                        <span className="text-[#B9976C] font-medium text-xs leading-5">کپی لینک محتوا</span>
                    </div> */}

                </div>

                <div className="w-full px-4">
                    <form className="w-full h-[123px] mb-[14px] rounded">
                        <textarea className="w-full h-full outline-none placeholder:text-[#838383] font-normal text-xs leading-5 border-[1px] border-[#DBDAD7] rounded p-4" placeholder="نظر شما درباره این محتوا...">

                        </textarea>
                    </form>

                    <button className="w-full h-[38px] bg-[#1D266C1A] text-[#1D266C] font-medium text-sm leading-5 cursor-pointer rounded">ارسال</button>
                </div>
            </div>

            <div className="w-full bg-white px-4 pt-7 pb-5">
                <div className="flex justify-between items-center mb-6">
                    <div className="w-[135px] h-[31px] flex bg-white gap-x-[3px]">
                        <div className="w-[3px] h-full bg-[#1D266C] rounded-sm"></div>
                        <div className="w-[85px] bg-[#EBEBEB] text-[#1D266C] rounded-sm font-semibold text-sm leading-6 flex justify-center items-center">دیدگاه</div>
                    </div>

                    <div className="flex gap-x-1 text-[#AAAAAA] font-medium text-xs leading-5">
                        <span>تعداد دیدگاه‌ها:</span>
                        <span>۲۱</span>
                    </div>
                </div>

                {/* <div className="w-full h-[52px] border-[1px] border-[#DBDAD7] rounded mb-5">
                    <form className="w-full h-full">
                        <div className="flex justify-between items-center w-full h-full p-3">
                            <input type="text" className="w-full h-full px-1 placeholder:text-[#838383] outline-none text-black font-normal text-xs leading-5" placeholder="دیدگاه‌تان را پیرامون این محتوا بنویسید" />

                            <button className="shrink-0 cursor-pointer w-[61px] h-7 bg-[#1D266C] text-white font-semibold text-xs leading-5 rounded">ارسال</button>
                        </div>
                    </form>
                </div> */}

                <div className="w-full flex flex-col gap-y-[14px] bg-white">

                    <Comment
                        name={"مهدی محمدی نژاد"}
                        date={"در تاریخ  ۱ شهریور  ۱۴۰۱"}
                        content={"وقتی دشمن مقابل نور علی بن موسی رضا (علیه السلام) کم می‌آورد، چه می‌کند؟ می‌خواهد هتک خورشید کند. او نابودی خودش را دیده، دست به انتحار می‌زند، یک روز به ساحت نور عالم امکان یعنی رسول‌الله (ص) اهانت می‌کند. نوری که پیغمبر فرمود: «اولین نوری که خدا در این عالم خلق کرد، نور من بوددر تاریخ  ۱ شهریور  ۱۴۰۱"}
                    />
                    <Comment
                        name={"مهدی محمدی نژاد"}
                        date={"در تاریخ  ۱ شهریور  ۱۴۰۱"}
                        content={"وقتی دشمن مقابل نور علی بن موسی رضا (علیه السلام) کم می‌آورد، چه می‌کند؟ می‌خواهد هتک خورشید کند. او نابودی خودش را دیده، دست به انتحار می‌زند، یک روز به ساحت نور عالم امکان یعنی رسول‌الله (ص) اهانت می‌کند. نوری که پیغمبر فرمود: «اولین نوری که خدا در این عالم خلق کرد، نور من بوددر تاریخ  ۱ شهریور  ۱۴۰۱"}
                    />
                    <Comment
                        name={"مهدی محمدی نژاد"}
                        date={"در تاریخ  ۱ شهریور  ۱۴۰۱"}
                        content={"وقتی دشمن مقابل نور علی بن موسی رضا (علیه السلام) کم می‌آورد، چه می‌کند؟ می‌خواهد هتک خورشید کند. او نابودی خودش را دیده، دست به انتحار می‌زند، یک روز به ساحت نور عالم امکان یعنی رسول‌الله (ص) اهانت می‌کند. نوری که پیغمبر فرمود: «اولین نوری که خدا در این عالم خلق کرد، نور من بوددر تاریخ  ۱ شهریور  ۱۴۰۱"}
                    />
                    <Comment
                        name={"مهدی محمدی نژاد"}
                        date={"در تاریخ  ۱ شهریور  ۱۴۰۱"}
                        content={"وقتی دشمن مقابل نور علی بن موسی رضا (علیه السلام) کم می‌آورد، چه می‌کند؟ می‌خواهد هتک خورشید کند. او نابودی خودش را دیده، دست به انتحار می‌زند، یک روز به ساحت نور عالم امکان یعنی رسول‌الله (ص) اهانت می‌کند. نوری که پیغمبر فرمود: «اولین نوری که خدا در این عالم خلق کرد، نور من بوددر تاریخ  ۱ شهریور  ۱۴۰۱"}
                    />

                </div>
            </div>

            <div className="w-full bg-white py-6">
                <div className="w-[148px] h-[31px] flex bg-white gap-x-[3px] mb-6 px-4">
                    <div className="w-[3px] h-full bg-[#1D266C] rounded-sm"></div>
                    <div className="w-[142px] bg-[#EBEBEB] text-[#1D266C] rounded-sm font-semibold text-sm leading-6 flex justify-center items-center">محتواهای مرتبط</div>
                </div>

                <div className="costumSlider w-full h-[128px]">
                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={3}
                        centeredSlides={false}
                        spaceBetween={18}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="flex flex-col gap-y-2">
                            <img src="/images/content/slider1.jpg" alt="" className="shrink-0" />
                            <span className="text-[#616161] font-semibold text-[10px] leading-5 text-center">طرح درس‌های ماه مبارک رمضان</span>
                        </SwiperSlide>
                        <SwiperSlide className="flex flex-col gap-y-2">
                            <img src="/images/content/slider2.jpg" alt="" className="shrink-0" />
                            <span className="text-[#616161] font-semibold text-[10px] leading-5 text-center">طرح درس‌های ماه مبارک رمضان</span>
                        </SwiperSlide>
                        <SwiperSlide className="flex flex-col gap-y-2">
                            <img src="/images/content/slider3.jpg" alt="" className="shrink-0" />
                            <span className="text-[#616161] font-semibold text-[10px] leading-5 text-center">طرح درس‌های ماه مبارک رمضان</span>
                        </SwiperSlide>
                        <SwiperSlide className="flex flex-col gap-y-2">
                            <img src="/images/content/slider2.jpg" alt="" className="shrink-0" />
                            <span className="text-[#616161] font-semibold text-[10px] leading-5 text-center">طرح درس‌های ماه مبارک رمضان</span>
                        </SwiperSlide>
                        <SwiperSlide className="flex flex-col gap-y-2">
                            <img src="/images/content/slider3.jpg" alt="" className="shrink-0" />
                            <span className="text-[#616161] font-semibold text-[10px] leading-5 text-center">طرح درس‌های ماه مبارک رمضان</span>
                        </SwiperSlide>
                        <SwiperSlide className="flex flex-col gap-y-2">
                            <img src="/images/content/slider1.jpg" alt="" className="shrink-0" />
                            <span className="text-[#616161] font-semibold text-[10px] leading-5 text-center">طرح درس‌های ماه مبارک رمضان</span>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="w-full bg-white px-4 py-6">
                <div className="w-[148px] h-[31px] flex bg-white gap-x-[3px] mb-6">
                    <div className="w-[3px] h-full bg-[#1D266C] rounded-sm"></div>
                    <div className="w-[124px] bg-[#EBEBEB] text-[#1D266C] rounded-sm font-semibold text-sm leading-6 flex justify-center items-center">کلمات کلیدی</div>
                </div>

                <div className="w-full flex gap-x-[18px] gap-y-4 flex-wrap px-4">
                    <div className="flex items-center gap-x-1 text-[#1D266C] text-sm leading-5">
                        <span className="font-normal">#</span>
                        <span className="font-medium">خورشید مقدس</span>
                    </div>
                    <div className="flex items-center gap-x-1 text-[#1D266C] text-sm leading-5">
                        <span className="font-normal">#</span>
                        <span className="font-medium">امام رضا علیه السلام</span>
                    </div>
                    <div className="flex items-center gap-x-1 text-[#1D266C] text-sm leading-5">
                        <span className="font-normal">#</span>
                        <span className="font-medium">کتاب</span>
                    </div>
                    <div className="flex items-center gap-x-1 text-[#1D266C] text-sm leading-5">
                        <span className="font-normal">#</span>
                        <span className="font-medium">کتاب</span>
                    </div>
                    <div className="flex items-center gap-x-1 text-[#1D266C] text-sm leading-5">
                        <span className="font-normal">#</span>
                        <span className="font-medium">ولادت امام رضا علیه السلام</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DataContent;