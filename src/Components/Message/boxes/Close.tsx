import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const Close = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="w-full h-[249px] py-6 px-4 bg-white">
            <div className="w-full flex gap-x-[14px] mb-4">
                <div className="w-11 h-11 flex justify-center items-center bg-[#5461CA14] rounded-full">
                    <div className="w-[22px] h-[22px] flex justify-center items-center bg-[#5461CA14] rounded-full">
                        <img src="/images/svg/message.svg" alt="" className="" />
                    </div>
                </div>

                <div className="flex flex-col gap-y-[6px]">
                    <span className="text-[#3A3A3A] font-semibold text-xs leading-5">لغو مراسم هیئت هفتگی</span>
                    <span className="text-[#616161] font-normal text-xs leading-5">باسلام لطفا لغو مراسم من را به علت مشکلاتی که داشتم...</span>
                </div>
            </div>

            <div className="w-full h-[71px] bg-[#FAFAFA] px-6 mb-3 rounded-lg flex justify-between items-center">

                <div className="flex flex-col items-center justify-center">
                    <span className="text-[#828282CC] font-medium text-[10px] leading-4 mb-1">اولویت</span>
                    <span className="text-[#4F4F4F] font-normal text-xs leading-5">بحرانی</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-[#828282CC] font-medium text-[10px] leading-4 mb-1">گیرنده</span>
                    <span className="text-[#4F4F4F] font-normal text-xs leading-5">مدیر شهرستان</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <span className="text-[#828282CC] font-medium text-[10px] leading-4 mb-1">شناسه</span>
                    <span className="text-[#4F4F4F] font-normal text-xs leading-5">#۴۴۱۵۲۳۵۱</span>
                </div>

            </div>

            <div className="w-full h-[29px] bg-[#E6E6E6] mb-[10px] rounded font-normal text-xs leading-5 text-[#3A3A3A] flex justify-center items-center">بسته شده</div>

            <div className="w-full flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-[#828282CC] font-medium text-[10px] leading-5">زمان آخرین پاسخ:</div>

                    <div className="flex justify-center items-center mr-[6px] text-[#3A3A3A] font-normal text-xs child:leading-5">
                        <span className="">۱۵ : ۳۶</span>
                        <div className="mx-1">-</div>
                        <span className="">۱۴۰۲ /۰۵ / ۱۴</span>
                    </div>
                </div>

                <div onClick={() => setOpenModal(true)} className="flex justify-normal items-center gap-x-[3px]">
                    <span className="text-[#5461CA] font-medium text-xs leading-6">مشاهده گفتگو</span>
                    <div className="w-[14px] h-[14px] flex justify-center items-center"><img src="/images/svg/leftArrowBlue.svg" alt="" className="" /></div>
                </div>
            </div>

            {/************************ CHAT *************************/}
            <div className={`fixed left-0 w-full h-full ${openModal ? "bottom-0" : "bottom-[-100%]"} p-4 bg-[#5e30f7] transition-all duration-300`}>
                <div onClick={() => setOpenModal(false)} className="w-8 h-8 absolute left-4 top-4 cursor-pointer"><IoCloseCircleOutline className="w-full h-full" /></div>

                <div className="w-full h-full mt-16">

                    {/************ client **************/}
                    <div className="dirCustom mb-1">
                        <div className="bg-[#5462CA] text-white inline-block py-2 px-4 mr-auto rounded-t-xl rounded-r-xl">سلام</div>
                    </div>
                    {/************ client **************/}
                    <div className="dirCustom mb-1">
                        <div className="bg-[#5462CA] text-white inline-block py-2 px-4 mr-auto rounded-t-xl rounded-r-xl">خسته نباشید</div>
                    </div>

                    {/************ Operator **************/}
                    <div className="mb-1">
                        <div className="bg-[#27A963] inline-block text-white py-2 px-4 mr-auto rounded-t-xl rounded-r-xl">سلام به شما</div>
                    </div>
                    {/************ Operator **************/}
                    <div className="mb-1">
                        <div className="bg-[#27A963] inline-block text-white py-2 px-4 mr-auto rounded-t-xl rounded-r-xl">درخدمتیم</div>
                    </div>

                    {/************ client **************/}
                    <div className="dirCustom mb-1">
                        <div className="bg-[#5462CA] text-white inline-block py-2 px-4 mr-auto rounded-t-xl rounded-r-xl">بنده حدود یک هفته پیش یک فعالیت تبلیغی ثبت کردم که هنوز تایید نشده</div>
                    </div>
                    {/************ client **************/}
                    <div className="dirCustom mb-1">
                        <div className="bg-[#5462CA] text-white inline-block py-2 px-4 mr-auto rounded-t-xl rounded-r-xl">ممنون میشم اگر بررسی بفرمایید</div>
                    </div>
                    {/************ Operator **************/}
                    <div className="mb-1">
                        <div className="bg-[#27A963] inline-block text-white py-2 px-4 mr-auto rounded-t-xl rounded-r-xl">تیم پشتیبانی درحال بررسی فعالیت شما هستند</div>
                    </div>
                    {/************ Operator **************/}
                    <div className="mb-1">
                        <div className="bg-[#27A963] inline-block text-white py-2 px-4 mr-auto rounded-t-xl rounded-r-xl">فعالیت شما بعد از بررسی تایید شد</div>
                    </div>

                </div>

                <form className="w-full">
                    <div className="absolute bottom-6 left-6 right-6 h-10 border-[1px] border-gray-400 rounded bg-[#EFF3F6]">
                        <input type="text" placeholder="متن خودرا وارد کنید..." className="w-full h-full bg-inherit outline-none pr-12 pl-2 rounded" />
                        <div className="absolute top-1 right-2 shrink-0 w-8 h-8 rotate-45"><IoIosSend className="shrink-0 w-full h-full text-blue-700" /></div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Close;