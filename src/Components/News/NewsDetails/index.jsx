"use client"
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';
import { Navigation } from 'swiper/modules';
import { MdKeyboardArrowLeft } from "react-icons/md";

import { otherNews } from '@/Components/Services';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const NewsDetails = ({ params }) => {
    const [swiperRef, setSwiperRef] = useState(null);
    const [data, setData] = useState(null);
    const router = useRouter();

    useEffect(() => {
        let temp = otherNews.filter((item) => item.slug == params.slug);
        setData(temp[0])
    }, []);

    return (
        <div className="w-full h-full bg-white">
            <div className="w-full h-12 bg-[#2B39A1] flex justify-start items-center gap-x-2 p-4">
                <div onClick={() => router.back()} className="w-[14px] h-[14px]"><img src="/images/svg/profile/rightArrowWhite.svg" alt="" /></div>
                <span className="text-white font-medium text-sm leading-5">اخبار تبلیغ</span>
            </div>

            <div className="w-full p-4">
                <div className="w-full bg-[#EBEBEB] h-[35px] text-[#616161] font-light text-xs flex justify-start items-center gap-x-2 rounded px-[10px] py-2">
                    <Link href={"/news"}>
                        <span className="">اخبار تبلیغ</span>
                    </Link>
                    <div className="w-3 h-3"><img src="/images/svg/leftArrowGray.svg" alt="" className="w-full h-full" /></div>
                    <span className="">{data?.title}</span>
                </div>

                <div className="w-full mt-2 bg-white h-[35px] mb-4 flex justify-between items-center gap-x-2 text-[#616161] font-light text-xs rounded py-2">
                    <div className="flex justify-start items-center gap-x-1">
                        <div className="w-4 h-4"><img src="/images/svg/idea.svg" alt="" className="w-full h-full" /></div>
                        <span className="">۲۵ نظر</span>
                    </div>

                    <div className="flex justify-start items-center gap-x-1">
                        <div className="w-4 h-4"><img src="/images/svg/calander.svg" alt="" className="w-full h-full" /></div>
                        <span className="">تاریخ انتشار:</span>
                        <span className="">۱۴۰۱/۴/۶</span>
                    </div>
                </div>

                <div className="w-full bg-[#F6F6F6] p-4 rounded-md mb-6">
                    <div className="w-full h-[296px] rounded-md mb-1"><img src={data?.img} alt="" className="object-cover w-full h-full rounded-md" /></div>
                    <h1 className="text-[#1D266C] font-bold text-base my-4">نشست گفتمان انقلاب مشهد مقدس</h1>
                    <div className="w-full">
                        <p className="text-[#4F4F4F] font-light text-base leading-8 text-justify">یکی از مهم‌ترین مأموریت‌های سازمان تبلیغات اسلامی، تبیین و ترویج گفتمان اسلام ناب و انقلاب است. گفتمانی که امامین انقلاب مطرح کرده‌اند و در سخنرانی‌ها و کتاب‌هایشان به تبیین آن پرداخته‌اند. در بین تمام اقشار و بسترهای فرهنگی اثرگذار در جامعه، ظرفیت تبلیغی طلاب اصیل ترین و غنی ترین نقش گفتمان سازی را در راستای تحقق تمدن نوین اسلامی ایفا می کند.                        </p>
                    </div>
                </div>

                <div className="w-full">
                    <div className="w-[98px] h-[31px] flex justify-start items-center gap-x-1 mb-8">
                        <div className="w-[3px] h-full bg-[#1D266C]"></div>
                        <div className="w-full h-full bg-[#EBEBEB] flex justify-center items-center rounded text-[#1D266C] font-extrabold text-base">شرح خبر</div>
                    </div>

                    <span className="text-[#B9976C] font-semibold text-sm mb-6 block">سخنرانی آیت‌الله میرباقری در همایش تبلیغ نو</span>
                    <div className="w-full">
                        <p className="text-[#4F4F4F] font-light text-base leading-8 text-justify">
                            آیت‌الله میرباقری در همایش« همگرایی مبلغین دغدغه مند در تحول تبلیغ براساس نیازهای جامعه( تبلیغ نو) که به همت سازمان تبلیغات اسلامی و با همکاری حوزه علمیه خواهران، معاونت تبلیغ حوزه‌های علمیه خواهران، بنیاد فرهنگی خاتم اوصیا (ص)، مرکز مدیریت حوزه‌های علمیه خواهران، تشکل فراگیرتبلیغ گروهی طلاب، و چند نهاد و سازمان دیگر در سالن بیداری جامعة الزهرا(س) در قم برگزار شد، گفت: امروز در حوزه، پژوهش هایی در مسائل مختلف انجام می شود و حاصل آن، چون تفسیر، علم اصول و علم کلام و ... است؛ اما در بین همه این ها، دانشی که روی آن تمرکز شده و مستمر است، فقه است. فقه یعنی دانشی که تلاش شده به حجیت برسد. حوزه در این بازه زمانی هزار و چند ساله تلاش کرده، فقهی تحویل جامعه بدهد که نتیجه آن سبک زندگی مردم باشد، ولی باید این فقه به حجیت برسد و برای رسیدن به حجیت، باید پشتوانه داشته باشد. اما این کار جدی در سایر موضوعات مانند تفسیر و کلام وجود ندارد.

                            وی، اظهار داشت: امروز این فقه جایگاه خوبی در بین مردم دارد و مبلغین از همین فقه که دارای پشتوانه علمی است، مسائل دینی و شرعی را بیان می کنند.

                            رئیس فرهنگستان علوم اسلامی، ادامه داد: در همین حوزه فقه با این که تلاش خوبی کردیم، ولی شاهد کاستی و نواقصی هستیم، لذا کاستی ها سبب شده، امروز فقه موجود ما آنچنان که هست نتواند نیازمندی موجود را کفایت و حل کند. مراد این می باشد که سطح دیگری از مسائل است که باید به آن پاسخ داده شود. اگر تفقه دین را نتوانیم ارتقاء ببخشیم، نمی توانیم اداره جامعه را دینی کنیم. مراد این نیست که در همه موارد باید فقه باشد، باید علوم دیگر هم باشد. ولی تفقه دینی باید در مقیاس دنیای معاصر به روز باشد.

                            آیت‌الله میرباقری، گفت: دانش و برنامه ریزی از جمله عوامل مؤثر برای موفقیت در هر اموری از جمله تبلیغ است.

                            عضو خبرگان رهبری، بیان داشت: اگر قرار است فقه به عرصه سرپرستی اداره اجتماعی وارد شود، باید تفقه دیگری اتفاق بیفتد تا بتواند پاسخگو باشد. این رساله ای که ما داریم، احکام اداره جامعه نیست. بیانگر سبک زندگی است.

                            وی، اظهار داشت: اگر احکام اداره نداریم، چون احکام اداره در مقیاس اداره، استنباط نشده و این مأموریت امروز حوزه است. نواقص جدی داریم و این امر موجب شده، مُبلغ هم از ابزار لازم برای حضور در اداره و سرپرستی جامعه برخوردار نباشد.

                            رئیس فرهنگستان علوم اسلامی، ادامه داد: امروز در حوزه هایی چون کلام و اخلاق، همین ایراد وجود دارد و نتوانسته به درستی اثرگذار باشد. این نشان می دهد که در عرصه های دیگر تفقه کامل نداریم.

                            آیت‌الله میرباقری، گفت: امروز نیازمند به علم کلام، اخلاق و تبلیغی هستیم که بتواند برای مدیران خط حرکت ترسیم و برای عموم جامعه موضع گیری تمدنی ایجاد کند.

                            عضو خبرگان رهبری، بیان داشت: آیا امروز سطحی از اعتقادات که به مردم ارائه می کنیم، برای موضع گیری تمدنی کفایت می کند، قطعا کفایت نمی کند. اگر قرار باشد، جوان و مؤمن را به موضع گیری آگاهانه نسبت به مسائل پیرامونی برساند، احتیاج به استنباط گسترده در مسائل مختلف داریم. اگر تفقه در استنباط است، باید این تفقه اخلاق و حکمت را ارتقاء بخشد و به مرحله اداره اجتماعی برسد.

                            وی، اظهار داشت: سخن ما این است، امروز دست ما به لحاظ محتوا برای تبلیغ پر است، اما در حوزه فقه، کلام و اخلاق دست ما خالی است. مبلغ می خواهد مسئله بگوید، به راحتی بیان می کند، اما همین مبلّغ، بخواهد برای مدیریت اجتماع حرف بزند، می بیند، حرفی برای گفتن ندارد.

                            رئیس فرهنگستان علوم اسلامی، ادامه داد: محتوای اخلاقی داریم، ولی باید در سطحی باشد که بتواند اداره اجتماع کند و شبهات را پاسخ دهد.

                            آیت‌الله میرباقری، گفت: بسیاری از شبهاتی که ذهن جوانان ما را پر کرده است، سوالات تخصصی است. جوان دانشجو، روانشناسی تخصصی می خواند و در این حوزه برای او شبهه پیش می آید.

                            عضو خبرگان رهبری، بیان داشت: وقتی شبهه تخصصی شد، باید تبلیغ تخصصی شود. تبلیغ باید به نقطه ای برسد که بتواند در بحران های اجتماعی وارد شود و مدیریت کند.

                            وی، اظهار داشت: ما احتیاج به عقبه علمی و پژوهشی داریم که بتوانیم از این عقبه برای اداره اجتماع و جامعه بهره ببریم.

                            رئیس فرهنگستان علوم اسلامی، ادامه داد: تبلیغ ما باید به این مرحله برسد. این نیاز امروز تبلیغ است. باید برای این مسئله کار جدی کرد و برای آینده پیش رو برنامه ریزی قوی شود.

                            آیت‌الله میرباقری، گفت: ما با دشمنی مواجه هستیم که در عرصه تمدنی تولید دانش کرده و برای ده سال بعدی هم در حال تولید برنامه است. تبلیغ باید به این مرحله برسد که بتواند این نیازمندی را پاسخ دهد.

                            عضو خبرگان رهبری بیان داشت: تبلیغ نیاز به شبکه استنباط و عقبه علمی فقه و علوم انسانی دارد. حوزه علمیه، باید سطح فقهی خود را به سطح فقه تمدن ساز و کلام تمدن ساز و فقه اداره ارتقاء دهد تا بتواند پاسخگوی نیازمندی مدیریت جامعه امروز باشد.

                            استاد حوزه علمیه قم، ادامه داد: اگر گفته می شود باید فقه به عرصه استنباط مدیریت جامعه برسد، باید این نقطه ارتقاء پیدا کند. با دنیای مدرن و پیچیده مواجه هستیم که تمدن خود را جهانی کرده است.</p>
                    </div>
                </div>

                <div className="w-full mb-8">
                    <div className="relative w-full bg-white py-6 mb-4">
                        <div className="w-[148px] h-[31px] flex bg-white gap-x-[3px] rounded-sm mb-6 px-4">
                            <div className="w-[3px] h-full bg-[#1D266C] rounded-sm"></div>
                            <div className="w-[142px] bg-[#EBEBEB] text-[#1D266C] rounded-sm font-semibold text-sm leading-6 flex justify-center items-center">تصاویر</div>
                        </div>

                        <div className="costumSlider relative w-[80%] mx-auto h-[128px]">
                            <Swiper
                                onSwiper={setSwiperRef}
                                slidesPerView={3}
                                centeredSlides={false}
                                spaceBetween={0}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <div className="shrink-0 w-[84px] h-[84px] rounded-md"><img src="/images/content/slider1.jpg" alt="" className="w-full h-full rounded-md" /></div>
                                        <span className="text-[#616161] font-semibold text-[10px] leading-5 text-center block">طرح درس‌های ماه مبارک رمضان</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <div className="shrink-0 w-[84px] h-[84px] rounded-md"><img src="/images/content/slider2.jpg" alt="" className="w-full h-full rounded-md" /></div>
                                        <span className="text-[#616161] font-semibold text-[10px] leading-5 text-center block">طرح درس‌های ماه مبارک رمضان</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <div className="shrink-0 w-[84px] h-[84px] rounded-md"><img src="/images/content/slider3.jpg" alt="" className="w-full h-full rounded-md" /></div>
                                        <span className="text-[#616161] font-semibold text-[10px] leading-5 text-center block">طرح درس‌های ماه مبارک رمضان</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <div className="shrink-0 w-[84px] h-[84px] rounded-md"><img src="/images/content/slider2.jpg" alt="" className="w-full h-full rounded-md" /></div>
                                        <span className="text-[#616161] font-semibold text-[10px] leading-5 text-center block">طرح درس‌های ماه مبارک رمضان</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <div className="shrink-0 w-[84px] h-[84px] rounded-md"><img src="/images/content/slider1.jpg" alt="" className="w-full h-full rounded-md" /></div>
                                        <span className="text-[#616161] font-semibold text-[10px] leading-5 text-center block">طرح درس‌های ماه مبارک رمضان</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <div className="shrink-0 w-[84px] h-[84px] rounded-md"><img src="/images/content/slider3.jpg" alt="" className="w-full h-full rounded-md" /></div>
                                        <span className="text-[#616161] font-semibold text-[10px] leading-5 text-center block">طرح درس‌های ماه مبارک رمضان</span>
                                    </div>
                                </SwiperSlide>

                            </Swiper>


                            <div className="costumSlider absolute -left-10 -right-10 top-[35%]">
                                <div className="costumSlider swiper-button-prev"><MdKeyboardArrowLeft className="text-gray-400" /></div>
                                <div className="costumSlider swiper-button-next rotate-180"><MdKeyboardArrowLeft className="text-gray-400" /></div>
                            </div>

                        </div>
                    </div>

                    <div className="w-full mb-12">
                        <div className="w-[148px] h-[31px] flex bg-white gap-x-[3px] rounded-sm mb-6">
                            <div className="w-[3px] h-full bg-[#1D266C] rounded-sm"></div>
                            <div className="w-[142px] bg-[#EBEBEB] text-[#1D266C] rounded-sm font-semibold text-sm leading-6 flex justify-center items-center">برچسب ها</div>
                        </div>

                        <div className="w-full flex flex-wrap gap-4">
                            <div className="bg-[#F9F9F9] px-5 py-2 rounded-2xl inline text-[#828282] font-medium text-xs"># اخبار</div>
                            <div className="bg-[#F9F9F9] px-5 py-2 rounded-2xl inline text-[#828282] font-medium text-xs"># اخبار تبلیغ</div>
                            <div className="bg-[#F9F9F9] px-5 py-2 rounded-2xl inline text-[#828282] font-medium text-xs"># نشست گفتمان سازی</div>
                            <div className="bg-[#F9F9F9] px-5 py-2 rounded-2xl inline text-[#828282] font-medium text-xs"># جمعیت</div>
                            <div className="bg-[#F9F9F9] px-5 py-2 rounded-2xl inline text-[#828282] font-medium text-xs"># اخبار</div>
                            <div className="bg-[#F9F9F9] px-5 py-2 rounded-2xl inline text-[#828282] font-medium text-xs"># اخبار تبلیغ</div>
                        </div>
                    </div>

                    <div className="w-full mb-12">
                        <div className="w-[148px] h-[31px] flex bg-white gap-x-[3px] rounded-sm mb-6">
                            <div className="w-[3px] h-full bg-[#1D266C] rounded-sm"></div>
                            <div className="w-[142px] bg-[#EBEBEB] text-[#1D266C] rounded-sm font-semibold text-sm leading-6 flex justify-center items-center">سایر اخبار</div>
                        </div>

                        <ul className="w-full flex flex-col gap-y-4">
                            <li className="w-full flex justify-start items-center gap-x-3">
                                <div className="shrink-0 w-[6px] h-[6px] bg-[#000000] rounded-full"></div>
                                <span className="text-[#4F4F4F] text-sm font-semibold leading-6">رویداد «هم‌آهنگ» با هدف ترویج ازدواج آسان</span>
                            </li>
                            <li className="w-full flex justify-start items-center gap-x-3">
                                <div className="shrink-0 w-[6px] h-[6px] bg-[#000000] rounded-full"></div>
                                <span className="text-[#4F4F4F] text-sm font-semibold leading-6">نشست هم‌اندیشی مبلغان برتر کشوری</span>
                            </li>
                            <li className="w-full flex justify-start items-center gap-x-3">
                                <div className="shrink-0 w-[6px] h-[6px] bg-[#000000] rounded-full"></div>
                                <span className="text-[#4F4F4F] text-sm font-semibold leading-6">گزارش نشست هم‌اندیشی گفتمان انقلاب در مسجد مقدس جمکران</span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full">
                        <div className="w-[148px] h-[31px] flex bg-white gap-x-[3px] rounded-sm mb-6">
                            <div className="w-[3px] h-full bg-[#1D266C] rounded-sm"></div>
                            <div className="w-[142px] bg-[#EBEBEB] text-[#1D266C] rounded-sm font-semibold text-sm leading-6 flex justify-center items-center">نظر شما</div>
                        </div>

                        <div className="w-full">
                            <form className="w-full flex flex-col justify-center items-center">
                                <div className="w-full h-10 mb-[10px]">
                                    <input type="text" className="w-full h-full outline-none border-[#E0E0E0] border-[1px] rounded-xl px-4 py-2" placeholder='نام' />
                                </div>

                                <div className="w-full h-10 mb-[10px]">
                                    <input type="number" className="w-full h-full outline-none border-[#E0E0E0] border-[1px] rounded-xl px-4 py-2" placeholder='شماره موبایل (اختیاری)' />
                                </div>

                                <div className="w-full h-[133px] mb-[14px]">
                                    <textarea name="" className="w-full h-full border-[#E0E0E0] border-[1px] rounded-xl px-4 py-2" placeholder='نظر شما'></textarea>
                                </div>

                                <div className="w-full grid grid-cols-[2fr,1fr] mb-6">
                                    <div className="w-full h-10">
                                        <input type="number" className="w-full h-full outline-none border-[#E0E0E0] border-[1px] rounded-xl px-4 py-2" placeholder='اعداد تصویر مقابل را وارد نمایید' />
                                    </div>

                                    <div className="w-full h-10 flex justify-end items-center gap-x-4">
                                        <div className="h-full flex justify-center items-center rounded-xl text-green-400 font-extrabold px-4 border-[1px] border-dashed border-gray-400">2658</div>
                                        <div className="w-6 h-6 flex justify-center items-center"><img src="/images/refresh.png" alt="" className="" /></div>
                                    </div>

                                </div>

                                <button type='submit' className="w-[116px] h-10 bg-[#1D266C] rounded text-white font-extrabold text-base leading-7">ارسال</button>
                            </form>
                        </div>

                    </div>
                </div>

                <div className="w-full">
                    <div className="w-[148px] h-[31px] flex bg-white gap-x-[3px] rounded-sm mb-6 px-4">
                        <div className="w-[3px] h-full bg-[#1D266C] rounded-sm"></div>
                        <div className="w-[142px] bg-[#EBEBEB] text-[#1D266C] rounded-sm font-semibold text-sm leading-6 flex justify-center items-center">نظرات</div>
                    </div>

                    <div className="w-full flex flex-col gap-y-[14px]">
                        <div className="w-full h-[253px] bg-[#F8F8F8] rounded p-[14px]">
                            <div className="w-full flex justify-between items-center mb-2">
                                <div className="w-full flex items-center gap-x-2">
                                    <div className="w-6 h-6"><img src="/images/person.svg" alt="" className="w-full h-full" /></div>
                                    <span className="text-[#B9976C] font-semibold text-xs leading-5">مهدی محمدی نژاد</span>
                                </div>

                                <div className="shrink-0 h-[29px] bg-[#EDEDED] flex justify-center items-center rounded text-[#838383] font-normal text-xs px-2 py-[5px]">در تاریخ  ۱ شهریور  ۱۴۰۱</div>
                            </div>

                            <div className="w-full">
                                <p className="text-[#4F4F4F] font-light leading-8 text-base text-justify">وقتی دشمن مقابل نور علی بن موسی رضا (علیه السلام) کم می‌آورد، چه می‌کند؟ می‌خواهد هتک خورشید کند. او نابودی خودش را دیده، دست به انتحار می‌زند، یک روز به ساحت نور عالم امکان یعنی رسول‌الله (ص) اهانت می‌کند. نوری که پیغمبر فرمود: «اولین نوری که خدا در این عالم خلق کرد، نور من بود.</p>
                            </div>

                        </div>

                        <div className="w-full h-[253px] bg-[#F8F8F8] rounded p-[14px]">
                            <div className="w-full flex justify-between items-center mb-2">
                                <div className="w-full flex items-center gap-x-2">
                                    <div className="w-6 h-6"><img src="/images/person.svg" alt="" className="w-full h-full" /></div>
                                    <span className="text-[#B9976C] font-semibold text-xs leading-5">مهدی محمدی نژاد</span>
                                </div>

                                <div className="shrink-0 h-[29px] bg-[#EDEDED] flex justify-center items-center rounded text-[#838383] font-normal text-xs px-2 py-[5px]">در تاریخ  ۱ شهریور  ۱۴۰۱</div>
                            </div>

                            <div className="w-full">
                                <p className="text-[#4F4F4F] font-light leading-8 text-base text-justify">وقتی دشمن مقابل نور علی بن موسی رضا (علیه السلام) کم می‌آورد، چه می‌کند؟ می‌خواهد هتک خورشید کند. او نابودی خودش را دیده، دست به انتحار می‌زند، یک روز به ساحت نور عالم امکان یعنی رسول‌الله (ص) اهانت می‌کند. نوری که پیغمبر فرمود: «اولین نوری که خدا در این عالم خلق کرد، نور من بود.</p>
                            </div>

                        </div>

                        <div className="w-full h-[253px] bg-[#F8F8F8] rounded p-[14px]">
                            <div className="w-full flex justify-between items-center mb-2">
                                <div className="w-full flex items-center gap-x-2">
                                    <div className="w-6 h-6"><img src="/images/person.svg" alt="" className="w-full h-full" /></div>
                                    <span className="text-[#B9976C] font-semibold text-xs leading-5">مهدی محمدی نژاد</span>
                                </div>

                                <div className="shrink-0 h-[29px] bg-[#EDEDED] flex justify-center items-center rounded text-[#838383] font-normal text-xs px-2 py-[5px]">در تاریخ  ۱ شهریور  ۱۴۰۱</div>
                            </div>

                            <div className="w-full">
                                <p className="text-[#4F4F4F] font-light leading-8 text-base text-justify">وقتی دشمن مقابل نور علی بن موسی رضا (علیه السلام) کم می‌آورد، چه می‌کند؟ می‌خواهد هتک خورشید کند. او نابودی خودش را دیده، دست به انتحار می‌زند، یک روز به ساحت نور عالم امکان یعنی رسول‌الله (ص) اهانت می‌کند. نوری که پیغمبر فرمود: «اولین نوری که خدا در این عالم خلق کرد، نور من بود.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NewsDetails;