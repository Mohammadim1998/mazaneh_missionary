import BoxComment from "./BoxComment";

const Comment = () => {
    return (
        <div className="pb-8">
            <div className="w-full bg-white pt-6 px-4 border-r-[#EBEBEB] border-b-[1px] pb-4">
                <div className="flex justify-start items-center gap-x-[6px] mb-4">
                    <div className="w-4 h-4"><img src="/images/svg/mosque/pointComment.svg" alt="" className="" /></div>
                    <span className="text-[#3A3A3A] font-bold text-[10px] leading-4">نظرات درباره این نقطه</span>
                </div>

                <BoxComment />
                <BoxComment />
                <BoxComment />
            </div>

            <div className="w-full bg-white pt-6 px-4">
                <div className="flex justify-start items-center gap-x-[6px] mb-4">
                    <div className="w-4 h-4"><img src="/images/svg/mosque/opinion.svg" alt="" className="" /></div>
                    <span className="text-[#3A3A3A] font-bold text-[10px] leading-4">نظرات درباره این نقطه</span>
                </div>

                <form className="relative w-full">
                    <textarea name="" id="" placeholder="نظرتان درباره این نقطه را بنویسید" className="w-full h-[100px] rounded text-[#616161CC] font-normal text-[11px] leading-5 px-3 py-[10px] border-[#EBEBEB] border-[1px]"></textarea>
                    <button className="absolute w-16 h-6 bg-[#EEEFF7] bottom-4 rounded left-[8px] text-[#2B39A1] font-medium text-[10px] leading-4">ارسال نظر</button>
                </form>
            </div>
        </div>
    );
}

export default Comment;