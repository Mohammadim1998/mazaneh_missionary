const Description = () => {
    return (
        <div className="w-full bg-white py-4 px-[10px]">
            <div className="w-full mb-8">
                <div className="text-[#4F4F4F] font-semibold text-sm leading-5 mb-[10px] border-r-[2px] border-r-[#E0AD70] pr-2">درباره من</div>
                <p className="text-[#616161] font-light text-xs leading-6 text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون. </p>
            </div>

            <div className="w-full">
                <div className="text-[#4F4F4F] font-semibold text-sm leading-5 mb-[10px] border-r-[2px] border-r-[#E0AD70] pr-2">زبان هایی که من به آن مسلط هستم</div>

                <div className="w-full flex gap-x-[10px] gap-y-4 child:shrink-0 flex-wrap">
                    <div className="w-[77px] h-[27px] bg-[#318FA81A] rounded-3xl text-[#000000] font-light leading-5 text-xs flex justify-center items-center">فارسی</div>
                    <div className="w-[77px] h-[27px] bg-[#318FA81A] rounded-3xl text-[#000000] font-light leading-5 text-xs flex justify-center items-center">عربی</div>
                </div>

            </div>
        </div>
    );
}

export default Description;