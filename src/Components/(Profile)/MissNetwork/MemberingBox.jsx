const MemberingBox = ({ title, content, image }) => {
    return (
        <div className="w-full h-full p-4 flex gap-x-4 justify-center items-center bg-white">
            <div>
                <span className="text-[#4F4F4F] font-medium text-xs leading-4">{title}</span>
                <p className="text-[#616161] mt-[7px] font-normal text-[11px] leading-4">
                    {content}
                </p>
                <button className="bg-[#5462CA] p-[6px_16px_6px_16px] mt-[10px] rounded-md text-white font-semibold text-[11px] leading-4">درخواست عضویت</button>
            </div>

            <div className="shrink-0 w-[136px] h-[119px] rounded-l-lg rounded-r-full pr-2 border-r-[2px]">
                <img src={image} alt="" className="w-[128.5px] h-full object-cover rounded-l-lg rounded-r-full" />
            </div>
        </div>
    )
}

export default MemberingBox;