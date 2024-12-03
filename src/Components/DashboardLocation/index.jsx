"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import Modal from "./Modal";
import ModalSheet from "./ModalSheet";
import SettingModal from "./SettingModal";

const DashboardLocationComp = () => {

    const [dataMap, setDataMap] = useState(
        {
            id: 3,
            gotoPlace: [35.793685522439645, 51.44145317157504],
            title: "مسجد کربلا",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-5.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
            ],
            score: 5,
            meets: 15,
            accupy: "خانوادگی",
            step: "قانون کار"
        },
    );

    const Map = useMemo(
        () =>
            dynamic(() => import("./Map"), {
                ssr: false,
                loading: () => <div className="w-full h-full bg-slate-5 animate-pulse" />,
            }),
        [],
    );

    const [openSearchbar, setopenSearchbar] = useState(false);
    const [openModalSheet, setOpenModalSheet] = useState(false);
    const [openSettingModal, setOpenSettingModal] = useState(false);
    const [openModalSheetBack, setOpenModalSheetBack] = useState(false);

    const modalCloseHandler = () => {
        setOpenModalSheetBack(false);
        setOpenModalSheet(false);
        setOpenSettingModal(false);
    }
  

    return (
        <main className="w-full h-full overflow-y-hidden">
            <div className="relative w-full h-screen">

                <Link href={"/dashboardHome"}>
                    <div className="shrink-0 z-40 absolute top-4 right-4 w-10 h-10 rotate-180 flex justify-center items-center shadow-[0px_2px_6px_0px_#00000033] cursor-pointer bg-white rounded-full"><img src="/images/svg/map/leftArrowDark.svg" alt="" className="" /></div>
                </Link>

                <div className="relative z-20 w-full h-full">
                    <div className="w-full h-full flex flex-col justify-between">
                        <section className="z-10 w-full h-full">
                            <Map dataMap={dataMap} setOpenModalSheet={setOpenModalSheet} />
                        </section>
                    </div>
                </div>

                <div className="z-30 absolute bg-white bottom-0 left-0 right-0 flex gap-x-2 justify-center items-center w-full h-20 px-4 pt-[18px] pb-5">
                    <form className="w-full">
                        <div
                            onClick={() => setopenSearchbar(true)}
                            className="relative w-full h-[42px]">
                            <input type="text" placeholder="جستجوی نقطه" className="w-full h-full bg-[#F5F5F5] pr-10 pl-4 outline-none rounded-[54px] text-[#AAAAAA] font-medium text-[11px] leading-5" />

                            <div className="absolute top-3 right-4 flex items-center justify-center w-4 h-4 cursor-pointer">
                                <img src="/images/svg/actions/search.svg" alt="" className="w-full h-full " />
                            </div>
                        </div>
                    </form>

                    <div className="shrink-0 z-40 w-[42px] h-[42px] flex items-center justify-center bg-[#F5F5F5] rounded-full">
                        <div
                            onClick={() => {
                                setOpenSettingModal(true);
                                setOpenModalSheetBack(true);
                                setOpenModalSheet(false);
                            }}
                            className=" w-3 h-3 cursor-pointer">
                            <img src="/images/svg/actions/setting.svg" alt="" className="w-full h-full" />
                        </div>
                    </div>
                </div>

                <div className="z-30 flex justify-center items-center cursor-pointer absolute bottom-[100px] right-4 w-10 h-10 bg-white rounded-full">
                    <img src="/images/svg/map/currentLocation.svg" alt="" className="" />
                </div>


            </div>
            {/**************** Modal ***********************/}
            <div className={`z-50 fixed top-0 left-0 right-0 bottom-0 w-full ${openSearchbar ? "h-full" : "h-0 overflow-y-hidden"} transition-all duration-300 bg-[#F0F0F1]`}>
                <Modal setDataMap={setDataMap} setopenSearchbar={setopenSearchbar} setOpenModalSheet={setOpenModalSheet} />
            </div>
            {/**************** End Modal ***********************/}

            {/**************** ModalSheet ***********************/}

            <ModalSheet dataMap={dataMap} openModalSheet={openModalSheet} setOpenModalSheet={setOpenModalSheet} />

            {/**************** End ModalSheet ***********************/}
            {/**************** Setting Modal ***********************/}
            <SettingModal modalCloseHandler={modalCloseHandler} setOpenModalSheetBack={setOpenModalSheetBack} setOpenSettingModal={setOpenSettingModal} openSettingModal={openSettingModal} />
            {/**************** End Setting Modal ***********************/}
            <div
                onClick={() => modalCloseHandler()}
                className={`z-20 ${openModalSheetBack ? "flex" : "hidden"}  fixed top-0 left-0 bottom-16 right-0 bg-transparent`}>
            </div>
        </main>
    );
}

export default DashboardLocationComp;