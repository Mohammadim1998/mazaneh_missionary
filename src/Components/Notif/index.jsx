import Link from "next/link";
import Box from "./box";

const Notif = () => {
    return (
        <>
            <div className="w-full bg-[#5461CA] flex justify-between items-center py-[13px] px-4">
                <Link href={"/dashboardHome"} className="flex items-center gap-x-2">
                    <img src="/images/svg/notif/arrowRight.svg" alt="" className="w-[14px] h-[14px]" />
                    <span className="text-[#FFFFFF] font-medium text-sm leading-5">اعلان ها</span>
                </Link>
                <div className="flex flex-col gap-y-[3px]">
                    <span className="w-[3px] h-[3px] bg-[#FFFFFF] rounded-full"></span>
                    <span className="w-[3px] h-[3px] bg-[#FFFFFF] rounded-full"></span>
                    <span className="w-[3px] h-[3px] bg-[#FFFFFF] rounded-full"></span>
                </div>
            </div>
            <div className="py-5 px-4">
                <Box
                    active={true}
                    title={"محتوای تبلیغی ویژه ماه مبارک رمضان"}
                    subTitle={"محتوای  منبر به مناسبت جشن میلاد امام حسن مجتبی علیه السلام در بخش محتوا بارگذاری شد"}
                    sort={"محتوای تبلیغی"}
                    time={"۱۵:۳۶"}
                    date={"۱۴۰۲/۰۵/۱۴"}
                />
                <Box
                    active={false}
                    title={"محتوای تبلیغی ویژه ماه مبارک رمضان"}
                    subTitle={"محتوای  منبر به مناسبت جشن میلاد امام حسن مجتبی علیه السلام در بخش محتوا بارگذاری شد"}
                    sort={"محتوای تبلیغی"}
                    time={"۱۵:۳۶"}
                    date={"۱۴۰۲/۰۵/۱۴"}
                />
                <Box
                    active={false}
                    title={"محتوای تبلیغی ویژه ماه مبارک رمضان"}
                    subTitle={"محتوای  منبر به مناسبت جشن میلاد امام حسن مجتبی علیه السلام در بخش محتوا بارگذاری شد"}
                    sort={"محتوای تبلیغی"}
                    time={"۱۵:۳۶"}
                    date={"۱۴۰۲/۰۵/۱۴"}
                />
                <Box
                    active={true}
                    title={"محتوای تبلیغی ویژه ماه مبارک رمضان"}
                    subTitle={"محتوای  منبر به مناسبت جشن میلاد امام حسن مجتبی علیه السلام در بخش محتوا بارگذاری شد"}
                    sort={"محتوای تبلیغی"}
                    time={"۱۵:۳۶"}
                    date={"۱۴۰۲/۰۵/۱۴"}
                />
                <Box
                    active={true}
                    title={"محتوای تبلیغی ویژه ماه مبارک رمضان"}
                    subTitle={"محتوای  منبر به مناسبت جشن میلاد امام حسن مجتبی علیه السلام در بخش محتوا بارگذاری شد"}
                    sort={"محتوای تبلیغی"}
                    time={"۱۵:۳۶"}
                    date={"۱۴۰۲/۰۵/۱۴"}
                />
                <Box
                    active={false}
                    title={"محتوای تبلیغی ویژه ماه مبارک رمضان"}
                    subTitle={"محتوای  منبر به مناسبت جشن میلاد امام حسن مجتبی علیه السلام در بخش محتوا بارگذاری شد"}
                    sort={"محتوای تبلیغی"}
                    time={"۱۵:۳۶"}
                    date={"۱۴۰۲/۰۵/۱۴"}
                />
                <Box
                    active={false}
                    title={"محتوای تبلیغی ویژه ماه مبارک رمضان"}
                    subTitle={"محتوای  منبر به مناسبت جشن میلاد امام حسن مجتبی علیه السلام در بخش محتوا بارگذاری شد"}
                    sort={"محتوای تبلیغی"}
                    time={"۱۵:۳۶"}
                    date={"۱۴۰۲/۰۵/۱۴"}
                />
                <Box
                    active={true}
                    title={"محتوای تبلیغی ویژه ماه مبارک رمضان"}
                    subTitle={"محتوای  منبر به مناسبت جشن میلاد امام حسن مجتبی علیه السلام در بخش محتوا بارگذاری شد"}
                    sort={"محتوای تبلیغی"}
                    time={"۱۵:۳۶"}
                    date={"۱۴۰۲/۰۵/۱۴"}
                />
                <Box
                    active={true}
                    title={"محتوای تبلیغی ویژه ماه مبارک رمضان"}
                    subTitle={"محتوای  منبر به مناسبت جشن میلاد امام حسن مجتبی علیه السلام در بخش محتوا بارگذاری شد"}
                    sort={"محتوای تبلیغی"}
                    time={"۱۵:۳۶"}
                    date={"۱۴۰۲/۰۵/۱۴"}
                />
            </div>
        </>
    );
}

export default Notif;