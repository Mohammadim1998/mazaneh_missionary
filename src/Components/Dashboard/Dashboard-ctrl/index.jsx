"use client";
import { useState } from "react";
import Btn from "./Btn";
import ModalItems from "./ModalItems";

const Layout = () => {
    const [openModalItems, setOpenModalItems] = useState(false);
    const [active, setActive] = useState("dashboardHome");

    return (
        <div className="w-full h-[70px] shadow-[0px_-1.5px_3px_0px_#0000001A]">
            <div className="z-50 bg-white relative flex gap-x-5 items-center w-full h-full py-[12px] px-4">
                <div className="w-full h-full flex gap-x-[20px]">
                    <Btn img={"/images/svg/home/home.svg"} img1={"/images/svg/home/home1.svg"} href={"/dashboardHome"} active={active} setActive={setActive} title={"خانه"} openModalItems={openModalItems} setOpenModalItems={setOpenModalItems} />
                    <Btn img={"/images/svg/home/file.svg"} img1={"/images/svg/home/file1.svg"} href={"/dashboardManageRequests"} active={active} setActive={setActive} title={"گزارش ها"} openModalItems={openModalItems} setOpenModalItems={setOpenModalItems} />
                    {/* <Btn img={"/images/svg/home/compas.svg"} img1={"/images/svg/home/compas1.svg"} href={"/"} active={active} setActive={setActive} title={"نقشه"} /> */}
                </div>

                <div
                    onClick={() => setOpenModalItems(prev => !prev)}
                    className="shrink-0 z-50 gradiantBackground -mt-10 flex justify-center items-center w-[74px] h-[74px] bg-white rounded-full">
                    <div className="flex justify-center items-center w-[72.25px] h-[72.25px] bg-white rounded-full">

                        <div className="w-14 h-14 flex justify-center items-center bg-[#6C7DFF] rounded-full border-[#FFFFFFB2] border-[3px]">
                            <div className="w-5 h-5 transition-all duration-800">
                                <img src={"/images/svg/menu/plus.svg"} alt="" className={`w-5 h-5 ${openModalItems ? "rotate-45" : "rotate-0"} transition-all duration-800`} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full flex gap-x-[20px]">
                    <Btn img={"/images/svg/home/invite.svg"} img1={"/images/svg/home/invite1.svg"} href={"/dashboardInvite"} active={active} setActive={setActive} title={"دعوت ها"} openModalItems={openModalItems} setOpenModalItems={setOpenModalItems} />
                    <Btn img={"/images/svg/home/profile.svg"} img1={"/images/svg/home/profile1.svg"} href={"/dashboardProfile"} active={active} setActive={setActive} title={"پروفایل"} openModalItems={openModalItems} setOpenModalItems={setOpenModalItems} />
                </div>
            </div>

            <div className={`z-30 fixed ${openModalItems ? "bottom-[124px] delay-200" : "bottom-[-400px]"}  left-0 w-full transition-all duration-500`}>
                <ModalItems openModalItems={openModalItems} />
            </div>

            <div className={`z-10 fixed top-0 left-0 bottom-[70px] right-0 ${openModalItems ? "w-[100%]" : "w-[0]"} bg-[#00000080] backdrop-blur-sm `}></div>

        </div>
    );
}

export default Layout;