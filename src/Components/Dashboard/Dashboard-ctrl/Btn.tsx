"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Btn = ({ img, img1, title, active, setActive, openModalItems,setOpenModalItems, href }) => {
    const router = useRouter();
    const path = usePathname();

    const [place, setPlace] = useState("");

    useEffect(() => {
        setPlace(path)
    }, [path]);

    return (
        <div
            onClick={() => {
                setOpenModalItems(false);
                router.push(`${href}`);
            }}
            className="w-full">
            <div className="flex flex-col gap-y-[6px] justify-center items-center">

                <div className="w-6 h-6 flex justify-center items-center">
                    <img src={path === href ? img1 : img} alt="" className={"active:scale-50  transition-all duration-75"} />
                </div>

                <span className={path === href
                    ? "text-[#2B39A1] font-medium text-[11px] leading-4"
                    : "text-[#818181CC] font-medium text-[10px] leading-4"}>{title}</span>
            </div>
        </div>
    );
}

export default Btn;
