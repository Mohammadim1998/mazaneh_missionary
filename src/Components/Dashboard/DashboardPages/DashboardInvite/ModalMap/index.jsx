"use client";
import { useEffect, useState } from "react";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import SettingModal from "./SettingModal";
import ModalSheet from "./ModalSheet";


const ModalMap = ({ openModalMap, setOpenModalMap }) => {
    const [dataMap, setDataMap] = useState(
        {
            id: 3,
            gotoPlace: [35.793685522439645, 51.44145317157504],
            title: "مسجد کربلا",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            img: "/images/slider/slide-6.jpg",
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

    const [openModalSheet, setOpenModalSheet] = useState(false);
    const [openSettingModal, setOpenSettingModal] = useState(false);
    const [openModalSheetBack, setOpenModalSheetBack] = useState(false);

    const [lenghtOfCapacity, setLenghtOfCapacity] = useState(0);

    const modalCloseHandler = () => {
        setOpenModalSheetBack(false);
        setOpenSettingModal(false);
    }

    return (
        <div className={`z-[80] fixed left-0 ${openModalMap ? "bottom-0" : "bottom-[-100%]"} w-full h-full transition-all duration-200`}>
            <div className="relative w-full h-full">

                <div className="z-50 flex gap-x-3 absolute top-4 left-4 right-4 h-10 child:rounded-md child:shadow-[0px_2px_6px_0px_#00000026]">
                    <div onClick={() => setOpenModalMap(false)} className="shrink-0 w-10 h-full flex justify-center items-center cursor-pointer bg-white"><img src="/images/svg/map/close.svg" alt="" className="w-[14px] h-[14px]" /></div>

                    <div className="w-full h-full bg-white font-semibold text-xs flex justify-center items-center gap-x-2">
                        <span className="text-[#37AD21]">{lenghtOfCapacity} ظـرفیـت</span>

                        <span className="text-[#4F4F4F]">قابل پذیرش در قم</span>
                    </div>

                    <div
                    onClick={() => {setOpenSettingModal(true)}}
                    className="shrink-0 w-10 h-full flex justify-center items-center cursor-pointer bg-white"><img src="/images/svg/invite/filter.svg" alt="" className="w-[14px] h-[14px]" /></div>
                </div>


                <div className="relative z-20 w-full h-full invite-map">
                    <div className="w-full h-full flex flex-col justify-between">
                        <section className="z-10 w-full h-full">
                            <Map dataMap={dataMap} setDataMap={setDataMap} setOpenModalSheet={setOpenModalSheet} setLenghtOfCapacity={setLenghtOfCapacity} />
                        </section>
                    </div>
                </div>
            </div>


            {/**************** ModalSheet ***********************/}
            <ModalSheet dataMap={dataMap} openModalSheet={openModalSheet} />
            {/**************** End ModalSheet ***********************/}
            {/**************** Setting Modal ***********************/}
            <SettingModal modalCloseHandler={modalCloseHandler} setOpenModalSheetBack={setOpenModalSheetBack} setOpenSettingModal={setOpenSettingModal} openSettingModal={openSettingModal} />
            {/**************** End Setting Modal ***********************/}
            <div
                onClick={() => modalCloseHandler()}
                className={`z-20 ${openModalSheetBack ? "flex" : "hidden"}  fixed top-0 left-0 bottom-16 right-0 bg-transparent`}>
            </div>
        </div>
    );
}

export default ModalMap;