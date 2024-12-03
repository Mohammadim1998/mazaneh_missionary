"use client";
import "./style.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

import "video-react/dist/video-react.css";
import { Player } from 'video-react';

const About = () => {
    const router = useRouter();

    return (
        <div className="w-full h-full about pb-8">
            <div className="w-full h-12 bg-[#2B39A1] flex justify-start items-center gap-x-2 p-4">
                <div className="w-[14px] h-[14px]"><img src="/images/svg/profile/rightArrowWhite.svg" alt="" /></div>
                <span onClick={() => router.back()} className="text-white font-medium text-sm leading-5">درباره ما</span>
            </div>

            <div className="w-full">
                <div className="w-full bg-white px-4 my-8">
                    <div className="relative w-full bg-[#F2F2F2] py-8 px-10 rounded-xl">
                        <span className="text-[#1d256d] font-bold text-2xl block mb-4">این چه شمعی است؟</span>

                        <p className="text-justify text-[#1d256d] font-medium text-[15px] leading-8">
                            «شمع» سامانه ای است برای پاسخ دهی به مهمترین نیازهای تبلیغی کشور.
                            سامانه ای که علاوه بر تسهیل گیری و کمک به جریان دعوت از سخنرانان
                            مجالس مذهبی کشور، تحلیل و رصد عرصه های تبلیغی را نیز عهده دار است.
                            سامانه شمع تنها سامانه رسمی و دولتی است که در سازمان تبلیغات اسلامی،
                            ساماندهی امور تبلیغی کشور را دنبال می کند.
                            مخاطب این سامانه هم مردم اند و هم سخنرانان مذهبی. در واقع سخنرانان
                            با ثبت نام در این سامانه و پس از تائید هویت تبلیغی شان می توانند
                            اطلاعات و توانمندی های خود را در این سامانه به نمایش بگذارند. از طرف
                            دیگر مسئولان فرهنگی و میزبانان مجالس مذهبی می توانند به سادگی برای
                            مجالس خود از این سخنرانان دعوت کنند.
                        </p>
                        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] opacity-[0.1] h-[300px]"><img src="/images/home/shabaketabligh.png" alt="" className="h-full" /></div>
                    </div>
                </div>

                <div className="w-full bg-[#1D256D] py-10 px-4">
                    <div className="flex flex-col gap-y-2 justify-center items-center mb-8">
                        <span className="text-white font-bold text-base">آماری از مخاطبان سامانهٔ «شمع» آمار مختصر شمع</span>
                        <span className="text-[#8D91B5] font-light text-[12px]">آماری مختصر از نتایج سامانه شمع</span>
                    </div>

                    <div className="w-full grid grid-cols-2 grid-rows-2 gap-4 child:rounded-2xl mb-8">
                        <div className="borderC relative h-[200px] flex flex-col justify-center items-center">
                            <span className="text-[#BF9a66] font-bold text-[28px] block">17903</span>
                            <span className="text-white font-bold text-base block mb-1">سخنران</span>
                            <span className="text-white font-light text-xs block">عضو در شمع</span>

                            <div className="absolute bottom-0 left-[50%] translate-x-[-50%]"><img src="/images/svg/home/bottom.svg" alt="" /></div>
                            <div className="absolute top-0 left-[50%] translate-x-[-50%]"><img src="/images/svg/home/top.svg" alt="" /></div>
                        </div>


                        <div className="borderC relative h-[200px] flex flex-col justify-center items-center">
                            <span className="text-[#BF9a66] font-bold text-[28px] block">379551</span>
                            <span className="text-white font-bold text-base block mb-1">سخنرانی</span>
                            <span className="text-white font-light text-xs block">انجام شده</span>

                            <div className="absolute bottom-0 left-[50%] translate-x-[-50%]"><img src="/images/svg/home/bottom.svg" alt="" /></div>
                            <div className="absolute top-0 left-[50%] translate-x-[-50%]"><img src="/images/svg/home/top.svg" alt="" /></div>
                        </div>

                        <div className="borderC relative h-[200px] flex flex-col justify-center items-center">
                            <span className="text-[#BF9a66] font-bold text-[28px] block">7282</span>
                            <span className="text-white font-bold text-base block mb-1">دعوت کننده</span>
                            <span className="text-white font-light text-xs block">عضو در شمع</span>

                            <div className="absolute bottom-0 left-[50%] translate-x-[-50%]"><img src="/images/svg/home/bottom.svg" alt="" /></div>
                            <div className="absolute top-0 left-[50%] translate-x-[-50%]"><img src="/images/svg/home/top.svg" alt="" /></div>
                        </div>

                        <div className="borderC relative h-[200px] flex flex-col justify-center items-center">
                            <span className="text-[#BF9a66] font-bold text-[28px] block">20</span>
                            <span className="text-white font-bold text-base block mb-1">موضوع</span>
                            <span className="text-white font-light text-xs block">تخصص سخنرانی</span>

                            <div className="absolute bottom-0 left-[50%] translate-x-[-50%]"><img src="/images/svg/home/bottom.svg" alt="" /></div>
                            <div className="absolute top-0 left-[50%] translate-x-[-50%]"><img src="/images/svg/home/top.svg" alt="" /></div>
                        </div>

                    </div>

                    <div className="w-full ">
                        <p className="text-justify text-[#FFFFFF80] font-light text-sm leading-8">
                            «شمع» تا امروز افتخار میزبانی بیش از ۵۰ هزار سخنران و ۵ هزار
                            فعال فرهنگی را در سراسر ایران دارد و تلاش می‌کند با تسهیل‌گری
                            برای دعوت از سخنران مجالس مذهبی در کشور از مجالس و هیئت‌های
                            نوپا و تازه تأسیس و در حال رشد نیز حمایت کند.
                            دعوت آسان از سخنرانان مذهبی، اطلاع از نقطه‌های تبلیغی کشور،
                            حمایت از مجالس دینی، تسهیل‌گری در امر دعوت سخنران از جمله
                            امکاناتی است که این سامانه در اختیار کاربران قرار می‌گیرد.
                        </p>
                    </div>

                </div>

                <div className="w-full bg-white py-10 px-4">
                    <span className="text-[#BF9A66] font-bold text-xl block mb-12">آشنایی با فعالیت‌های بخش‌های مختلف سامانهٔ شمع</span>

                    <div className="w-full flex flex-col gap-y-16">

                        <div className="relative w-full h-[150px] bg-white flex flex-col justify-center items-center gap-y-2 border-[2px] border-b-[12px] border-[#DFCCB2] rounded-2xl">
                            <div className="text-[#1d256d] text-base font-medium">رشد و ارتقاء کمی کیفی</div>
                            <div className="text-[#1d256d] text-base font-medium">طرح ها و برنامه های «شمع»</div>

                            <div className="absolute -top-3 left-[50%] translate-x-[-50%] bg-white px-2"><span className="text-[#BF9A66] font-bold text-base">مدیریت سامانه شمع</span></div>

                            <div className="absolute -bottom-9 rotate-180"><img src="/images/svg/home/atop.svg" alt="" /></div>
                        </div>

                        <div className="relative w-full h-[150px] bg-white flex flex-col justify-center items-center gap-y-2 border-[2px] border-b-[12px] border-[#DFCCB2] rounded-2xl">
                            <div className="text-[#1d256d] text-base font-medium">ثبت و تأیید هویت سخنرانان</div>
                            <div className="text-[#1d256d] text-base font-medium">ثبت و تکمیل رزومه‌های تبلیغی</div>

                            <div className="absolute -top-3 left-[50%] translate-x-[-50%] bg-white px-2"><span className="text-[#BF9A66] font-bold text-base">مدیریت شبکهٔ مبلغان</span></div>

                            <div className="absolute -bottom-9 rotate-180"><img src="/images/svg/home/atop.svg" alt="" /></div>
                        </div>

                        <div className="relative w-full h-[150px] bg-white flex flex-col justify-center items-center gap-y-2 border-[2px] border-b-[12px] border-[#DFCCB2] rounded-2xl">
                            <div className="text-[#1d256d] text-base font-medium">ثبت و تأیید نقاط تبلیغی (مجالس)</div>
                            <div className="text-[#1d256d] text-base font-medium">ثبت و تأیید گزارشات تبلیغی</div>

                            <div className="absolute -top-3 left-[50%] translate-x-[-50%] bg-white px-2"><span className="text-[#BF9A66] font-bold text-base">مدیریت بخش دعوت</span></div>

                            <div className="absolute -bottom-9 rotate-180"><img src="/images/svg/home/atop.svg" alt="" /></div>
                        </div>

                        <div className="relative w-full h-[150px] bg-white flex flex-col justify-center items-center gap-y-2 border-[2px] border-b-[12px] border-[#DFCCB2] rounded-2xl">
                            <div className="text-[#1d256d] text-base font-medium">پاسخ‌گویی آنلاین به کاربران سامانه</div>
                            <div className="text-[#1d256d] text-base font-medium">رفع مشکلات فنی سامانه</div>

                            <div className="absolute -top-3 left-[50%] translate-x-[-50%] bg-white px-2"><span className="text-[#BF9A66] font-bold text-base">پشتیبانی «شمع»</span></div>

                            <div className="absolute -bottom-9 rotate-180"><img src="/images/svg/home/atop.svg" alt="" /></div>
                        </div>

                    </div>

                </div>

                <div className="w-full bg-[#F2F2F2] py-12 px-4">
                    <span className="text-[#1d256d] font-bold text-base">
                        چـون شمـع تازیانـهٔ پروانه‌ایم مـا
                        عشّاق را به تیغِ زبان گرم می‌کنیم‌
                    </span>

                    <div className="w-full h-[217px] mt-16">
                        <div className="w-full h-[217px]">
                        <Player
                            className="w-full h-full"
                            playsInline
                            poster="/images/slider/slide-1.jpg"
                            src="/videos/video2.mp4"
                        />
                        </div>
                    </div>

                    <div className="relative w-full mt-8">
                        <p className="text-[#1d256d] leading-8 font-medium text-sm text-justify">
                            مثل شمعی که پروانه‌ها را به حرکت وا می‌دارد مبلّغ، با زبان خود، با دل خود، با جان خود، با روح خود،
                            با همـــّت خود و با روشــــن‌بینی خـــود حرکت می‌کند. انقلاب هم همیــن‌طور پیروز شد... همـــین
                            طلبــه‌های بــــی‌نام‌و‌نشـان و بــی‌ادّعا و بی‌توقّع رفتند اطــرافِ عالم اسلام را، اطراف کشــــــور را،
                            روستاهــــا را، شهـــــــرها را، مسجـدها را، محــلّات را، داخــــل خـــانه‌ها را روشــــن کردنـــد.
                            هـرجـا رفتند، چراغی روشن کردند و هــمه‌جــا نــوربــاران شـــد. دل‌هــا که روشن شـــد،
                            جان‌ها که آگاه شــد، جسم‌هــا و زبــان‌ها به حرکــت می‌افتــد و اراده‌ها کار مـــی‌کند.
                            امروز هم همین‌طور است، فردا هم همـین‌گونــه اســـت؛ منتهــا در هر زمانــی،
                            هنر مبّلغ دین این است که مخاطب را با آنچه که نیاز اوســت، آشنا کند.
                        </p>

                        <div className="w-full flex flex-col gap-y-2 mt-4">
                            <span className="text-[#1d256d] font-medium text-sm">بیانات در دیدار جمعی از روحانیون</span>
                            <span className="text-[#1d256d] font-medium text-sm">23فروردین1378</span>
                        </div>

                        <div className="absolute bottom-0 left-[50%] opacity-10 translate-x-[-50%] w-[250px] h-[350px]"><img src="/images/candle.png" alt="" className="w-full h-full" /></div>
                    </div>

                </div>

                <div className="w-full bg-white py-12 px-4">
                    <div className="flex justify-center items-center gap-x-6 mb-10">
                        <div>
                            <p className="text-[#1d256d] font-semibold text-sm flex flex-col gap-y-4 items-center">
                                <span >هستیم، سراپا، پابه‌رکابِ یاری‌تان</span>
                                <span >برای پیونددادنِ شما به مبلّغان دینی،</span>
                                <span >برای تأمین بسته‌های محتوایی مبلّغان،</span>
                                <span >برای ترسیم عملیات‌های تبلیغی در مناسبت‌ها.</span>
                            </p>
                        </div>

                        <div className="w-[100px] h-[220px]"><img src="/images/jpg/sham.png" alt="" className="w-full h-full" /></div>
                    </div>

                    <div className="w-full flex flex-col items-end gap-y-4 mb-12">
                        <div className="flex justify-center items-center gap-x-2">
                            <Link href={""} className="text-[#1d256d] font-semibold text-sm">ShabakeTabligh.ir</Link>
                            <div className="w-[30px] h-[30px]"><img src="/images/jpg/ws-social-website.png" alt="" className="w-full h-full" /></div>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <Link href={""} className="text-[#1d256d] font-semibold text-sm">eitaa.com/ShabakeTabligh</Link>
                            <div className="w-[30px] h-[30px]"><img src="/images/jpg/ws-social-eitaa.png" alt="" className="w-full h-full" /></div>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <Link href={""} className="text-[#1d256d] font-semibold text-sm">aparat.com/shabaketabligh.ir</Link>
                            <div className="w-[30px] h-[30px]"><img src="/images/jpg/ws-social-aparat.png" alt="" className="w-full h-full" /></div>
                        </div>
                        <div className="flex justify-center items-center gap-x-2">
                            <Link href={""} className="text-[#1d256d] font-semibold text-sm">instagram.com/ShabakeTabligh</Link>
                            <div className="w-[30px] h-[30px]"><img src="/images/jpg/ws-social-instagram.png" alt="" className="w-full h-full" /></div>
                        </div>
                    </div>

                    <div className="relative w-full flex flex-col justify-center items-center bg-[#BF9A66] py-12 px-8 rounded-3xl">

                        <span className="text-white font-bold text-2xl block mb-4">پشتیبانی و راهنمایی سامانه</span>
                        <span className="text-white font-light opacity-70 text-base block text-center mb-5">کارشناسان سامانه شمع در سریع‌ترین زمان ممکن شما را راهنمایی می‌کنند</span>

                        <div className="w-[90px] h-[90px] bg-white mb-6 rounded-full flex justify-center items-center">
                            <div className="w-[33px] h-[33px] flex justify-center items-center"><img src="/images/jpg/ws-phone.png" alt="" />  </div>
                        </div>

                        <span className="text-white font-medium text-3xl block">تلفـــــــــــن‌تمـــاس:</span>
                        <div className="dirCustom w-[250px] h-[63px] bg-[#ad8a5a] my-3 flex justify-center items-center text-white font-semibold text-4xl tracking-wider px-2 rounded-xl">۰۲۱ ۹۱ ۳۰۰ ۳۲۲</div>
                        <span className="text-white font-medium text-3xl block">از سـاعــت ۸ الــی ۲۰</span>

                        <div className="absolute bottom-0 left-[50%] translate-x-[-50%]"><img src="/images/svg/home/atop.svg" alt="" /></div>
                        <div className="absolute top-0 left-[50%] translate-x-[-50%] rotate-180"><img src="/images/svg/home/atop.svg" alt="" /></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;