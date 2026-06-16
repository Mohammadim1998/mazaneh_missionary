const WaitingBox = () => {
    return (
        <div className="w-full py-6 px-4 bg-white">

            <div className="w-full flex justify-center items-center gap-x-[14px] mb-4">
                <div className="shrink-0 w-11 h-11 bg-[#5461CA14] rounded-full flex justify-center items-center">
                    <div className="w-[22px] h-[22px] flex justify-center items-center"><img src="/images/svg/certification/mosque.svg" alt="" className="" /></div>
                </div>

                <div className="w-full flex flex-col gap-y-[6px]">
                    <div className="text-[#3A3A3A] font-semibold text-xs leading-5">مسجد جلال‌الدین احمدآبادی</div>
                    <div className="text-[#4F4F4F] font-normal text-xs leading-5">آذربایجان غربی، مهاباد، قوپی باباعلی</div>
                </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-x-2 mb-2">
                <div className="bg-[#FAFAFA] text-[#4F4F4F] font-normal text-xs leading-5 py-2 flex justify-center items-center rounded-md">شروع از   ۱۴۰۳/۰۴/۰۱</div>
                <div className="bg-[#FAFAFA] text-[#4F4F4F] font-normal text-xs leading-5 py-2 flex justify-center items-center rounded-md">پایان تا   ۱۴۰۳/۰۵/۰۱</div>
            </div>

            <div className="w-full h-[71px] flex justify-between items-center p-4 mb-[10px] rounded-lg bg-[#FAFAFA]">
                <div className="flex flex-col">
                    <span className="mb-1 text-[#828282CC] font-medium text-[10px] leading-4">مناسبت</span>
                    <span className="text-[#4F4F4F] font-normal text-xs leading-5">موردی محرم  ۱۴۰۳</span>
                </div>

                <div className="flex flex-col">
                    <span className="mb-1 text-[#828282CC] font-medium text-[10px] leading-4">نوع مکان</span>
                    <span className="text-[#4F4F4F] font-normal text-xs leading-5">روضه خونگی</span>
                </div>

                <div className="flex flex-col">
                    <span className="mb-1 text-[#828282CC] font-medium text-[10px] leading-4">شناسه</span>
                    <span className="text-[#4F4F4F] font-normal text-xs leading-5">#۴۴۱۵۲۳۵۱</span>
                </div>
            </div>

            <div className="w-full h-[29px] bg-[#9C840714] rounded text-[#816D08] font-normal text-xs leading-5 flex justify-center items-center">در حال بررسی</div>

        </div>
    );
}

export default WaitingBox;