const Comment = ({ name, date, content }) => {
    return (
        <div className="w-full bg-[#F6F6F6] rounded px-[14px] pt-[14px] pb-[10px]">
            <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-x-[7px]">
                    <div className="w-4 h-4"><img src="/images/svg/content/person.svg" alt="" className="w-full h-full" /></div>
                    <span className="text-[#B9976C] font-semibold text-xs leading-5">{name}</span>
                </div>

                <div className="w-[115px] h-[29px] text-[#838383] bg-[#EDEDED] flex justify-center items-center font-normal text-xs leading-5 rounded">{date}</div>

            </div>

            <p className="text-[#4F4F4F] font-light text-sm leading-8 text-justify mt-2">{content}</p>
        </div>
    );
}

export default Comment;