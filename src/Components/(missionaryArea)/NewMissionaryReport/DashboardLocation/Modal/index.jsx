"use client";
import { useEffect, useState } from "react";
import SettingModalWhole from "./SettingModalWhole";

const Modal = ({ setopenSearchbar, setDataMap, setOpenModalSheet }) => {
    const datas = [
        {
            id: 1,
            gotoPlace: [34.60748058006762, 50.90726031582144],
            title: "مسجد جامع قم",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
            ],
            score: 4.8,
            meets: 24,
            accupy: "خانوادگی",
            step: "توافقی",
        },
        {
            id: 2,
            gotoPlace: [34.60073886290321, 50.8697674489971],
            title: "مسجد حضرت زینب",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-8.jpg" },
                { img: "/images/slider/slide-9.jpg" },
                { img: "/images/slider/slide-10.jpg" },
            ],
            score: 3.4,
            meets: 2,
            accupy: "مجردی",
            step: "توافقی",
        },
        {
            id: 3,
            gotoPlace: [35.793685522439645, 51.44145317157504],
            title: "مسجد کربلا",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-10.jpg" },
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-14.jpg" },
                { img: "/images/slider/slide-13.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-5.jpg" },
                { img: "/images/slider/slide-6.jpg" },
                { img: "/images/slider/slide-9.jpg" },
            ],
            score: 5,
            meets: 15,
            accupy: "خانوادگی",
            step: "قانون کار",
        },
        {
            id: 4,
            gotoPlace: [35.78238878440862, 51.454560182899556],
            title: "مسجد هدایت",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-11.jpg" },
                { img: "/images/slider/slide-12.jpg" },
                { img: "/images/slider/slide-13.jpg" },
                { img: "/images/slider/slide-14.jpg" },
                { img: "/images/slider/slide-5.jpg" },
                { img: "/images/slider/slide-6.jpg" },
                { img: "/images/slider/slide-8.jpg" },
                { img: "/images/slider/slide-9.jpg" },
                { img: "/images/slider/slide-1.jpg" },
            ],
            score: 4.4,
            meets: 23,
            accupy: "گروهی",
            step: "توافقی",
        },
        {
            id: 5,
            gotoPlace: [35.774413649690054, 51.48323177017192],
            title: "مسجد مبارک آباد",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-12.jpg" },
                { img: "/images/slider/slide-6.jpg" },
                { img: "/images/slider/slide-9.jpg" },
                { img: "/images/slider/slide-8.jpg" },
                { img: "/images/slider/slide-7.jpg" },
                { img: "/images/slider/slide-5.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-10.jpg" },
            ],
            score: 3.6,
            meets: 8,
            accupy: "مجردی",
            step: "توافقی",
        },
        {
            id: 6,
            gotoPlace: [35.76370405024132, 51.43731199109132],
            title: "مسجد الغدیر",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-5.jpg" },
                { img: "/images/slider/slide-6.jpg" },
                { img: "/images/slider/slide-7.jpg" },
                { img: "/images/slider/slide-8.jpg" },
                { img: "/images/slider/slide-9.jpg" },
            ],
            score: 2.9,
            meets: 36,
            accupy: "خانوادگی",
            step: "توافقی",
        },
        {
            id: 7,
            gotoPlace: [35.749017066382905, 51.46207816564519],
            title: "مسجد الرقیه",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-10.jpg" },
                { img: "/images/slider/slide-13.jpg" },
                { img: "/images/slider/slide-12.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-6.jpg" },
                { img: "/images/slider/slide-8.jpg" },
                { img: "/images/slider/slide-9.jpg" },
            ],
            score: 3.5,
            meets: 28,
            accupy: "گروهی",
            step: "توافقی",
        },
        {
            id: 8,
            gotoPlace: [35.74109269944609, 51.43183485633422],
            title: "مسجد الرضا",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-14.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-6.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-7.jpg" },
                { img: "/images/slider/slide-9.jpg" },
                { img: "/images/slider/slide-8.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-1.jpg" },
            ],
            score: 5,
            meets: 14,
            accupy: "خانوادگی",
            step: "توافقی",
        },
        {
            id: 9,
            gotoPlace: [35.72272833015019, 51.4711273448091],
            title: "مسجد الفاطمیه",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-6.jpg" },
                { img: "/images/slider/slide-14.jpg" },
                { img: "/images/slider/slide-8.jpg" },
                { img: "/images/slider/slide-7.jpg" },
                { img: "/images/slider/slide-5.jpg" },
                { img: "/images/slider/slide-12.jpg" },
                { img: "/images/slider/slide-11.jpg" },
            ],
            score: 4.6,
            meets: 18,
            accupy: "گروهی",
            step: "توافقی",
        },
        {
            id: 10,
            gotoPlace: [35.70919398019333, 51.453743395362636],
            title: "مسجد امام کاظم",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-12.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-6.jpg" },
                { img: "/images/slider/slide-8.jpg" },
                { img: "/images/slider/slide-7.jpg" },
                { img: "/images/slider/slide-8.jpg" },
                { img: "/images/slider/slide-5.jpg" },
                { img: "/images/slider/slide-1.jpg" },
            ],
            score: 4,
            meets: 27,
            accupy: "خانوادگی",
            step: "توافقی",
        },
        {
            id: 11,
            gotoPlace: [35.721374998597256, 51.4156415883567],
            title: "مسجد نور",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
            ],
            score: 4.8,
            meets: 5,
            accupy: "مجردی",
            step: "توافقی",
        },
        {
            id: 12,
            gotoPlace: [35.70977407090814, 51.47065107222152],
            title: "مسجد صفا",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
            ],
            score: 3.8,
            meets: 65,
            accupy: "خانوادگی",
            step: "توافقی",
        },
        {
            id: 13,
            gotoPlace: [35.69372333720725, 51.46993666334016],
            title: "مسجد حضرت محمد",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
            ],
            score: 4.1,
            meets: 3,
            accupy: "گروهی",
            step: "توافقی",
        },
        {
            id: 14,
            gotoPlace: [35.676508719827616, 51.439455217735414],
            title: "مسجد جامع تهران",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-10.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-11.jpg" },
                { img: "/images/slider/slide-12.jpg" },
                { img: "/images/slider/slide-6.jpg" },
                { img: "/images/slider/slide-13.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
            ],
            score: 3.6,
            meets: 48,
            accupy: "خانوادگی",
            step: "توافقی",
        },
        {
            id: 15,
            gotoPlace: [35.701072266917606, 51.37611096358804],
            title: "مسجد حضرت علی",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
            ],
            score: 3.9,
            meets: 14,
            accupy: "خانوادگی",
            step: "توافقی",
        },
        {
            id: 16,
            gotoPlace: [35.76640925157217, 51.38349318869544],
            title: "مسجد الزهرا",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
            ],
            score: 4.8,
            meets: 65,
            accupy: "مجردی",
            step: "توافقی",
        },
        {
            id: 17,
            gotoPlace: [35.75694064442707, 51.37825419023213],
            title: "مسجد جامع شهرک غرب",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-6.jpg" },
                { img: "/images/slider/slide-9.jpg" },
                { img: "/images/slider/slide-5.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-12.jpg" },
                { img: "/images/slider/slide-13.jpg" },
                { img: "/images/slider/slide-7.jpg" },
                { img: "/images/slider/slide-9.jpg" },
                { img: "/images/slider/slide-10.jpg" },
            ],
            score: 4.4,
            meets: 56,
            accupy: "خانوادگی",
            step: "توافقی",
        },
        {
            id: 18,
            gotoPlace: [35.77848754727574, 51.35550040157627],
            title: "مسجد باقر العلوم",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
            ],
            score: 3.6,
            meets: 89,
            accupy: "مجردی",
            step: "توافقی",
        },
        {
            id: 19,
            gotoPlace: [35.74836149324854, 51.33593897540092],
            title: "مسجد جامع باغ فیض",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
            ],
            score: 4.7,
            meets: 25,
            accupy: "خانوادگی",
            step: "توافقی",
        },
        {
            id: 20,
            gotoPlace: [35.73134981229993, 51.34352401820361],
            title: "مسجد جامع امام سجاد",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-10.jpg" },
                { img: "/images/slider/slide-12.jpg" },
                { img: "/images/slider/slide-13.jpg" },
                { img: "/images/slider/slide-14.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-8.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-9.jpg" },
            ],
            score: 2.8,
            meets: 204,
            accupy: "مجردی",
            step: "توافقی",
        },
        {
            id: 21,
            gotoPlace: [35.65771592562385, 51.364740706976335],
            title: "مسجد البرز",
            address: "قم، خیابان جمهوری، بلوار شهید ابراهیمی، کوچه  ۱۱",
            images: [
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
                { img: "/images/slider/slide-2.jpg" },
                { img: "/images/slider/slide-3.jpg" },
                { img: "/images/slider/slide-4.jpg" },
                { img: "/images/slider/slide-1.jpg" },
            ],
            score: 4.8,
            meets: 24,
            accupy: "خانوادگی",
            step: "توافقی",
        },
        /* End Mosques */
    ];

    let flag = false;
    const [valueInput, setValueInput] = useState("");
    const [valueArray, setValueArray] = useState([]);

    const addToRecent = (locate) => {
        valueArray.find((item) => {
            if (item.id === locate.id) {
                flag = true
            }
        })

        if (!flag) {
            if (valueArray.length == 2) {
                valueArray.pop()
            }
            valueArray.unshift(locate);
        }
    }

    const filteredArray = datas.filter(item1 =>
        !valueArray.some(item2 => item2.id === item1.id)
    );

    const [openSettingModal, setOpenSettingModal] = useState(false);

    return (
        <div className="">
            <div className="flex gap-x-2 justify-center items-center mb-1 w-full h-20 bg-white px-4 pt-[18px] pb-5">
                <form className="w-full">
                    <div className="relative w-full h-[42px]">
                        <input
                            autoFocus
                            value={valueInput}
                            onChange={(event) => setValueInput(event.target.value)}
                            type="text" placeholder="جستجوی نقطه"
                            className="w-full h-full bg-[#F5F5F5] pr-10 pl-4 outline-none rounded-[54px] text-[#AAAAAA] font-medium text-[11px] leading-5" />

                        <div className="absolute top-[14px] right-4 flex items-center justify-center w-4 h-4 cursor-pointer">
                            <img
                                onClick={() => setopenSearchbar(false)}
                                src="/images/svg/map/rightArrow.svg" alt="" className="w-full h-full " />
                        </div>
                    </div>
                </form>

                <div className="shrink-0 w-[42px] h-[42px] flex items-center justify-center bg-[#F5F5F5] rounded-full">
                    <div
                        onClick={() => {
                            setOpenSettingModal(true);
                        }}
                        className=" w-3 h-3 cursor-pointer">
                        <img src="/images/svg/actions/setting.svg" alt="" className="w-full h-full" />
                    </div>
                </div>
            </div>

            {valueInput.length || !valueArray.length == 0 ? (
                <ul className="w-full bg-white">

                    <div className="w-full h-[91vh] overflow-y-scroll px-4 pb-16">
                        <div className="w-full">
                            {valueArray.length == 0 ? null :
                                valueArray.map((recent, index) => (
                                    <li
                                        onClick={() => {
                                            if (valueInput.toLowerCase() !== recent.title.toLowerCase()) {
                                                setValueInput(recent.title.toLowerCase())
                                            }
                                            setDataMap(recent);
                                            setopenSearchbar(false);
                                            setOpenModalSheet(true);
                                        }}
                                        key={index} className={`w-full flex justify-start items-center gap-x-[10px] border-b-[#E5E5E5] border-b-[1px] pt-4 pb-3`}>
                                        <div className="shrink-0 w-8 h-8 flex justify-center items-center bg-[#2B39A114] rounded-full">
                                            <div className="w-3 h-3"><img src="/images/svg/map/recent.svg" alt="" className="w-full h-full" /></div>
                                        </div>

                                        <div className="w-full flex flex-col gap-y-[6px]">
                                            <span className="text-[#3A3A3A] font-normal text-xs leading-5">{recent.title}</span>
                                            <span className="text-[#616161] font-light text-[11px] leading-5">{recent.address}</span>
                                        </div>
                                    </li>
                                ))
                            }
                        </div>

                        {filteredArray.map((data) => (
                            <li key={data.id}
                                onClick={() => {
                                    addToRecent(data);
                                    setopenSearchbar(false);
                                    setOpenModalSheet(true);
                                    if (valueInput.toLowerCase() !== data.title.toLowerCase()) {
                                        setValueInput(data.title.toLowerCase());
                                        setDataMap(data);
                                    }
                                }}
                                className={`w-full ${data.title.trim().toLowerCase().includes(valueInput.trim().toLowerCase()) ? "flex" : "hidden"} ${valueInput.trim() == "" ? "hidden" : "block"} justify-start items-center gap-x-[10px] last:border-none border-b-[#E5E5E5] border-b-[1px] pt-4 pb-3`}>

                                <div className={`shrink-0 w-8 h-8 flex justify-center items-center bg-[#2B39A114] rounded-full`}>
                                    <div className="w-3 h-3"><img src="/images/svg/map/search.svg" alt="" className="w-full h-full" /></div>
                                </div>

                                <div className="w-full flex flex-col gap-y-[6px]">
                                    <span className={`text-[#3A3A3A] font-normal text-xs leading-5`}>{data.title.length > 25 ? data.title.substring(0, 25) + "..." : data.title}</span>
                                    <span className="text-[#616161] font-light text-[11px] leading-5">{data.address}</span>
                                </div>
                            </li>
                        ))}
                    </div>
                </ul>
            ) : (
                <div className="w-full h-[91vh]">
                    <div className="w-full h-[80%] flex flex-col gap-y-12 justify-center items-center">
                        <div className="w-20 h-20"><img src="/images/svg/map/search.png" alt="" className="w-full h-full" /></div>

                        <span className="text-[#3A3A3A] font-light text-sm leading-5">برای پیدا کردن نقطه مورد نظر جستجو کنید</span>
                    </div>
                </div>
            )}
            {/**************** Setting Modal ***********************/}
            <SettingModalWhole setOpenSettingModal={setOpenSettingModal} openSettingModal={openSettingModal} />
            {/**************** End Setting Modal ***********************/}
        </div>
    );
}

export default Modal;