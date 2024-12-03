const Box = ({image,title,text}) => {
    return (
        <div className="shrink-0 mb-16 border-[1px] border-[#2C3370] relative shadow-[0px_31px_52.7px_-5px_#C5C9EFB2] flex flex-col justify-start items-center bg-white rounded-[35px] p-[33px_16px_40px_16px]">
            <div className="w-[45px] h-[45px] sm:w-[78px] sm:h-[78px] bg-[#2C3370] rounded-full flex justify-center items-center mb-3 sm:mb-[22px]">
                <div className="w-[20px] h-[20px] sm:w-[34px] sm:h-[34px]"><img src={image} alt="" className="" /></div>
            </div>

            <span className="text-[#2C3370] font-bold text-xs sm:text-xl leading-8 mb-4">{title}</span>

            <p className="text-[#2C3370] font-normal text-center text-sm leading-5 line-clamp-2 sm:line-clamp-4">{text}</p>

            <div className="absolute bottom-[-35px]"><img src="/images/professors/svg/vector.svg" alt="" className="" /></div>
        </div>
    );
}

export default Box;