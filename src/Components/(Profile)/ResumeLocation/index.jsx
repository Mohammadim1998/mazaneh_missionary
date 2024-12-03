"use client";
import { useEffect, useState } from "react";
import Box from "./box";
import Link from "next/link";
import { useMemo } from "react";
import dynamic from "next/dynamic";

const resumeLocationComp = () => {
    const markers = [
        {
            gotoPlace: [34.60748058006762, 50.90726031582144],
            popup: "مسجد جامع قم",
        },
        {
            gotoPlace: [34.60073886290321, 50.8697674489971],
            popup: "مسجد حضرت زینب",
        },
        {
            gotoPlace: [35.797685885413344, 51.4641837632406],
            popup: "مسجد الرضا",
        },
        {
            gotoPlace: [35.793685522439645, 51.44145317157504],
            popup: "مسجد کربلا",
        },
        {
            gotoPlace: [35.78238878440862, 51.454560182899556],
            popup: "مسجد هدایت",
        },
        {
            gotoPlace: [35.774413649690054, 51.48323177017192],
            popup: "مسجد مبارک آباد",
        },
        {
            gotoPlace: [35.76370405024132, 51.43731199109132],
            popup: "مسجد الغدیر",
        },
        {
            gotoPlace: [35.749017066382905, 51.46207816564519],
            popup: "مسجد الزهرا",
        },
        {
            gotoPlace: [35.74109269944609, 51.43183485633422],
            popup: "مسجد الرضا",
        },
        {
            gotoPlace: [35.72272833015019, 51.4711273448091],
            popup: "مسجد الفاطمیه",
        },
        {
            gotoPlace: [35.70919398019333, 51.453743395362636],
            popup: "مسجد امام کاظم",
        },
        {
            gotoPlace: [35.721374998597256, 51.4156415883567],
            popup: "مسجد نور",
        },
        {
            gotoPlace: [35.70977407090814, 51.47065107222152],
            popup: "مسجد صفا",
        },
        {
            gotoPlace: [35.69372333720725, 51.46993666334016],
            popup: "مسجد حضرت محمد",
        },
        {
            gotoPlace: [35.676508719827616, 51.439455217735414],
            popup: "مسجد جامع تهران",
        },
        {
            gotoPlace: [35.701072266917606, 51.37611096358804],
            popup: "مسجد حضرت علی",
        },
        {
            gotoPlace: [35.76640925157217, 51.38349318869544],
            popup: "مسجد الزهرا",
        },
        {
            gotoPlace: [35.75694064442707, 51.37825419023213],
            popup: "مسجد جامع شهرک غرب",
        },
        {
            gotoPlace: [35.77848754727574, 51.35550040157627],
            popup: "مسجد باقر العلوم",
        },
        {
            gotoPlace: [35.74836149324854, 51.33593897540092],
            popup: "مسجد جامع باغ فیض",
        },
        {
            gotoPlace: [35.73134981229993, 51.34352401820361],
            popup: "مسجد جامع امام سجاد",
        },
        {
            gotoPlace: [35.65771592562385, 51.364740706976335],
            popup: "مسجد البرز",
        },
    ];

    const [locId, setLocId] = useState();
    let [active, setActive] = useState(false);

    useEffect(() => {
        locId ? setActive(true) : setActive(false);
    },)

    const Map = useMemo(
        () =>
            dynamic(() => import("./Map"), {
                ssr: false,
                loading: () => <div className="w-full h-full bg-slate-5 animate-pulse" />,
            }),
        [],
    );


    return (
        <div className="relative w-full h-dvh pt-[48px]">
            <div className="z-20 absolute w-full top-0 left-0 px-4 h-[48px] bg-[#5461CA] flex justify-start items-center gap-x-2">
                <Link
                    href={"/resume"}
                    className="w-[14px] h-[14px]">
                    <img src="/images/resume/arrowRight.svg" alt="" className="w-[14px] h-[14px]" />
                </Link>
                <span className="text-white font-medium text-sm leading-5">رزومه من</span>
            </div>

            <div className="z-20 absolute top-[70px] left-[50%] flex translate-x-[-50%] w-[86.6%] h-[39px] rounded-lg bg-white mx-auto">
                <div className="relative pl-3 w-full h-full flex justify-center items-center">
                    <div className="w-full h-full rounded-lg">
                        <input type="text" className="w-full h-full focus:placeholder:text-transparent text-[#4F4F4F] font-normal text-xs leading-5 outline-none rounded-lg py-[10px] pr-4 pl-[12px]" placeholder="قم، قم، محله نیروگاه" />
                    </div>
                    <div className="w-[19px] h-[19px] cursor-pointer">
                        <img src="/images/svg/resume/search.svg" alt="" className="w-full h-full" />
                    </div>
                </div>
            </div>

            <div className="z-10 w-full h-full flex flex-col justify-between">
                <section className="resumeMap z-10 w-full h-full">
                    <Map markers={markers} />
                </section>

                <Link href={"/resumePublic"} className="z-20 absolute bottom-0 left-0 right-0 bg-white box-shadow-[0px_-1px_9px_0px_#1D266C26] px-4 py-3">
                    <button className="bg-[#5461CA] rounded-[4px] w-full h-10 text-white font-medium text-sm leading-5">تایید مکان جلسه</button>
                </Link>
            </div>
        </div>
    );
}

export default resumeLocationComp;