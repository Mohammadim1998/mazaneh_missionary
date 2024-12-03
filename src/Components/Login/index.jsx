import Link from "next/link";

const LoginCom = () => {

    return (
        <div className="bg-[#26328D] w-screen h-dvh max-sm:block hidden overflow-x-hidden">
            <div className="relative bg-inherit w-full h-[25%] flex justify-center items-center">
                <Link href={"/sliderPage"}>
                    <div className="absolute top-4 left-4"><img src="/images/svg/arrowLeft.svg" className="w-6 h-6" /></div>
                </Link>
                <img src="/images/svg/logo1.svg" alt="" width={"75px"} height={"90px"} />
            </div>

            <div className="bg-white w-full h-[75%] rounded-t-[28px] flex flex-col items-center px-6 pt-12 ">
                <div className="w-full">
                    <h1 className="text-[#4F4F4F]  font-bold text-[17px] leading-7 text-center mb-3">ورود یا ثبت‌نام</h1>
                    <h3 className="text-[#AAAAAA]  font-normal leading-6 mb-6 text-[15px] text-center">کد ملی خود را برای ثبت‌نام یا ورود به سامانه وارد کنید</h3>
                    <form>
                        <input type="number" placeholder="کد ملی" className="w-full h-[48px] mb-6 border-[1px] border-[#DBDAD7]  pr-[8px] py-3 rounded-lg
                        outline-[#1d266dad]" />
                    </form>
                    <Link href={"/dashboardHome"}><button className="w-full h-[48px] bg-[#26328D] rounded-lg text-white  font-normal leading-6 text-base mb-12">تایید و ادامه</button></Link>
                </div>
                <div className="w-full border-[1px] border-solid border-[#00000033] mb-[10px]"></div>
                <span className="text-[#4F4F4F]  font-medium text-center leading-5 text-sm mb-6">یا</span>

                <div className="w-full h-full flex flex-col justify-between pb-10">
                    <button className="bg-[#D7DAF4] rounded-lg gap-x-2 flex justify-center items-center w-full h-[48px]">
                        <img src="/images/svg/godlogo.svg" alt="godlogo" className="w-[22px] h-[22px]" />
                        <span className="text-[#26328D] Medium font-semibold text-base leading-6">احراز هویت با دولت من</span>
                    </button>

                    <div className="flex justify-center items-center gap-x-2  text-sm leading-5 ">
                        <span className="text-[#4F4F4FCC]  font-normal">نیاز به پشتیبانی دارید؟</span>
                        <Link href={"#"} className="text-[#26328D] font-medium ">ارتباط با پشتیبانی</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginCom;