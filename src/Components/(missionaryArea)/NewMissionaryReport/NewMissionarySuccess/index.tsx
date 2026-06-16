import { TiTick } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";

const NewMissionarySuccess = () => {
    return (
        <div className="w-full pb-12">

            <div className="w-full mb-6 flex flex-col justify-center border-b-[10px] border-b-green-700 rounded-b-[15px] py-8 px-4">
                <div className="w-[121px] h-[121px] flex justify-center items-center bg-[#d0fdda75] mx-auto rounded-full">
                    <div className="w-20 h-20 rounded-full flex justify-center items-center text-white text-6xl mx-auto bg-[#23A26D]"><TiTick /></div>
                </div>

                <h1 className="font-bold flex justify-center items-center mt-4 text-green-700 text-base">گزارش شما با موفقیت ثبت شد</h1>


                <div className="mt-4 w-full flex flex-col justify-start items-center border-[#E1E2E6] border-[1px] rounded-3xl outline-none px-4 pt-4 pb-6">
                    <h3 className="text-center font-bold">محتوای گزارش</h3>

                    <div className="w-full h-[1px] bg-[#E1E2E6] rounded-md mt-2 mb-4"></div>

                    <div className="w-full flex flex-col gap-y-2 mb-4">
                        <div className="">
                            <span className="font-semibold">موقعیت:</span>
                            <span className="mr-1">قم . قم. حسینیه  موسی ابن جعفر</span>
                        </div>

                        <div className="">
                            <span className="font-semibold">تاریخ:</span>
                            <span className="mr-1">۱۴ شهریور ۱۴۰۲  _ ۱ مهر ۱۴۰۲</span>
                        </div>

                        <div className="">
                            <span className="font-semibold">مدت تبلیغ:</span>
                            <span className="mr-1">۱۰</span>
                        </div>

                        <div className="">
                            <span className="font-semibold">مناسبت:</span>
                            <span className="mr-1">محرم ۱۴۰۲</span>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-x-2">
                        <div className="text-2xl cursor-pointer flex justify-center items-center text-blue-600"><CiEdit /></div>
                        <button className="text-blue-600 font-semibold rounded-xl">ویرایش</button>
                    </div>
                </div>

            </div>

            <div className="px-4">

                <div className="flex flex-col justify-center items-center gap-y-4">


                    <div className="w-full mb-6 flex flex-col justify-center items-center border-[#E1E2E6] border-[1px] rounded-3xl px-4 py-6">
                        <p className="text-justify">
                            برای مشاهده روند پیگیری تایید و رد گزارشتان
                            به پیشخوان مراجعه فرمایید
                        </p>
                        <button className="w-32 h-10 bg-blue-600 rounded-xl text-white">پیشخوان</button>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center border-[#E1E2E6] border-[1px] rounded-3xl px-4 py-6">
                        <p className="text-justify">
                            اگر علاقه دارید اطلاعات تکمیلی تری را در اختیار دیگر مبلغین بگذارید میتوانید اطلاعات بیشتری را روی نقشه تبلیغی به  ثبت برسانید
                        </p>
                        <button className="w-32 h-10 bg-blue-600 rounded-xl text-white">تکمیل فرم گزارش</button>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default NewMissionarySuccess;