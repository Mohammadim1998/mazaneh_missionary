import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"
import "react-multi-date-picker/styles/layouts/mobile.css"


const SomeHistory = () => {
    const [calanderStart, setCalanderStart] = useState();
    const [calanderEnd, setCalanderEnd] = useState();

    return (
        <div className="w-full bg-white">
            <div className="relative w-full bg-[#F6F6F6] rounded-md p-[8px_6px_8px_6px]">
                <div className="absolute top-2 right-[6px] w-4 h-4"><img src="/images/svg/certification/notice.svg" alt="" className="w-full h-full" /></div>
                <p className="w-full text-[#616161] font-normal text-xs leading-[18px] pr-[22px] pl-[4px] text-justify">
                    سوابق تبلیغی شما در سامانه شمع از تاریخ <span className="font-semibold">«۱۳۹۷/۰۱/۰۱»</span> شروع می شود و تاریخ پایان آن <span className="font-semibold">«۱۴۰۰/۰۱/۰۱»</span> است؛ تاریخ انتخابی شروع و پایان مجاز برای گزینش سوابق، باید بین این بازه باشد
                </p>
            </div>

            <div className="w-full ">
                <div className="w-full">

                    <div className="w-full h-[43px] bg-[#BF9A6608] flex justify-center items-center gap-x-[26px] mb-4 border-[1px] border-[#E0E0E0] rounded-[10px] mt-4">
                        <div className="relative h-[31px] bg-[#505AA414] rounded-lg">
                            <div className="absolute top-[50%] right-2 translate-y-[-50%] w-4 h-4"><img src="/images/svg/certification/selectDate.svg" alt="" className="w-full h-full" /></div>
                            <DatePicker
                                value={calanderStart}
                                onChange={setCalanderStart}
                                className="rmdp-mobile"
                                inputClass="custom-input-startHour w-[127px] pr-[30px] h-[31px] outline-none font-medium bg-inherit text-xs leading-4 text-[#4f4f4f] placeholder:text-[#1D256D] hover:bg-[#505AA414] rounded-lg focus:bg-[#505AA41F]"
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom-right"
                                placeholder="انتخاب تاریخ شروع"
                                animations={[
                                    opacity(),
                                    transition({
                                        from: 40,
                                        transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                    }),
                                ]}
                            />
                        </div>

                        <div className="relative h-[31px] bg-[#505AA414] rounded-lg">
                            <div className="absolute top-[50%] right-2 translate-y-[-50%] w-4 h-4"><img src="/images/svg/certification/selectDate.svg" alt="" className="w-full h-full" /></div>
                            <DatePicker
                                value={calanderEnd}
                                onChange={setCalanderEnd}
                                className="rmdp-mobile"
                                inputClass="custom-input-startHour w-[127px] pr-[30px] h-[31px] outline-none font-medium bg-inherit text-xs leading-4 text-[#4f4f4f] placeholder:text-[#1D256D] hover:bg-[#505AA414] rounded-lg focus:bg-[#505AA41F]"
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom-right"
                                placeholder="انتخاب تاریخ پایان"
                                animations={[
                                    opacity(),
                                    transition({
                                        from: 40,
                                        transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                    }),
                                ]}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        {/* <div className="h-[46px] selectInstitution"></div> */}

                        <div className="w-full h-[85px] flex justify-evenly items-center bg-[#FDFCFA] border-[1px] border-[#E0E0E0] rounded-[10px] ">
                            <div className="flex flex-col gap-y-6">
                                <div className="flex justify-center gap-x-[6px]">
                                    <span className="text-[#1D256DCC] font-light leading-5 text-xs">شروع از تاریخ:</span>
                                    <span className="text-[#1D256D] font-bold text-xs leading-5">۱۴۰۰/۱۲/۲۱</span>
                                </div>
                                <div className="flex justify-center gap-x-[6px]">
                                    <span className="text-[#1D256DCC] font-light leading-5 text-xs">پایان به تاریخ:</span>
                                    <span className="text-[#1D256D] font-bold text-xs leading-5">۱۴۰۰/۱۲/۲۵</span>
                                </div>
                            </div>

                            <div className="w-[1px] h-full bg-[#E0DFDC]"></div>

                            <div className="flex flex-col gap-y-6">
                                <div className="flex justify-center gap-x-[6px]">
                                    <span className="text-[#1D256DCC] font-light leading-5 text-xs">جمع روز تبلیغ:</span>
                                    <span className="text-[#1D256D] font-bold text-xs leading-5">۴۴  روز</span>
                                </div>
                                <div className="flex justify-center gap-x-[6px]">
                                    <span className="text-[#1D256DCC] font-light leading-5 text-xs">سوابق انتخابی:</span>
                                    <span className="text-[#1D256D] font-bold text-xs leading-5">۲۱  مورد</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="relative w-full h-[70vh] overflow-y-scroll flex flex-col gap-y-[10px] pb-4">
                        <div className="w-full flex flex-col gap-y-[10px] border-[1px] border-[#E0E0E0] rounded-[10px] p-[10px_16px]">

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">نوع تبلیغ:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">دهه اول محرم  ۱۴۰۱</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">تاریخ شروع:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">۱۴۰۱/۰۶/۰۶</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">تاریخ پایان:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">۱۴۰۱/۰۶/۰۶</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">موقعیت:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">آذربایجان غربی - مهاباد - قوپی باباعلی</span>
                            </div>

                        </div>

                        <div className="w-full flex flex-col gap-y-[10px] border-[1px] border-[#E0E0E0] rounded-[10px] p-[10px_16px]">

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">نوع تبلیغ:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">دهه اول محرم  ۱۴۰۱</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">تاریخ شروع:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">۱۴۰۱/۰۶/۰۶</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">تاریخ پایان:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">۱۴۰۱/۰۶/۰۶</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">موقعیت:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">آذربایجان غربی - مهاباد - قوپی باباعلی</span>
                            </div>

                        </div>

                        <div className="w-full flex flex-col gap-y-[10px] border-[1px] border-[#E0E0E0] rounded-[10px] p-[10px_16px]">

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">نوع تبلیغ:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">دهه اول محرم  ۱۴۰۱</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">تاریخ شروع:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">۱۴۰۱/۰۶/۰۶</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">تاریخ پایان:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">۱۴۰۱/۰۶/۰۶</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">موقعیت:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">آذربایجان غربی - مهاباد - قوپی باباعلی</span>
                            </div>

                        </div>

                        <div className="w-full flex flex-col gap-y-[10px] border-[1px] border-[#E0E0E0] rounded-[10px] p-[10px_16px]">

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">نوع تبلیغ:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">دهه اول محرم  ۱۴۰۱</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">تاریخ شروع:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">۱۴۰۱/۰۶/۰۶</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">تاریخ پایان:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">۱۴۰۱/۰۶/۰۶</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">موقعیت:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">آذربایجان غربی - مهاباد - قوپی باباعلی</span>
                            </div>

                        </div>

                        <div className="w-full flex flex-col gap-y-[10px] border-[1px] border-[#E0E0E0] rounded-[10px] p-[10px_16px]">

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">نوع تبلیغ:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">دهه اول محرم  ۱۴۰۱</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">تاریخ شروع:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">۱۴۰۱/۰۶/۰۶</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">تاریخ پایان:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">۱۴۰۱/۰۶/۰۶</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">موقعیت:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">آذربایجان غربی - مهاباد - قوپی باباعلی</span>
                            </div>

                        </div>

                        <div className="w-full flex flex-col gap-y-[10px] border-[1px] border-[#E0E0E0] rounded-[10px] p-[10px_16px]">

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">نوع تبلیغ:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">دهه اول محرم  ۱۴۰۱</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">تاریخ شروع:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">۱۴۰۱/۰۶/۰۶</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">تاریخ پایان:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">۱۴۰۱/۰۶/۰۶</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">موقعیت:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">آذربایجان غربی - مهاباد - قوپی باباعلی</span>
                            </div>

                        </div>

                        <div className="w-full flex flex-col gap-y-[10px] border-[1px] border-[#E0E0E0] rounded-[10px] p-[10px_16px]">

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">نوع تبلیغ:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">دهه اول محرم  ۱۴۰۱</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">تاریخ شروع:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">۱۴۰۱/۰۶/۰۶</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">تاریخ پایان:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">۱۴۰۱/۰۶/۰۶</span>
                            </div>

                            <div className="flex items-center gap-x-[6px]">
                                <span className="text-[#828282CC] font-normal text-xs leading-5">موقعیت:</span>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">آذربایجان غربی - مهاباد - قوپی باباعلی</span>
                            </div>

                        </div>
                    </section>



                </div>
            </div>
        </div>
    );
}

export default SomeHistory;