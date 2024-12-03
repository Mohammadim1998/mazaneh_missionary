"use client";
import { provinces, allCities } from "@/Components/Services";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";

const ListOfCities = ({ setOpenListOfCities }) => {
    const [openCity, setOpenCity] = useState(false);
    const [provice_id, setProvice_id] = useState(null);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        setCities(allCities.filter((city) => city.province_id == provice_id));
    }, [provice_id]);

    return (
        <div className={`w-full h-full pb-8`}>
            <div className="w-full h-full bg-white">

                <div className="w-full h-full flex flex-col p-4">
                    <div className="w-full flex justify-between items-center border-b-[1px] border-[#E0E0E2] px-1 pb-4 mb-8">
                        <span className="text-[#3f4064] font-semibold text-base block">انتخاب شهر</span>
                        <div onClick={() => setOpenListOfCities(false)} className="w-6 h-6"><IoClose className="w-full h-full text-[#3f4064]" /></div>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center">
                        {provinces.map((province) => (
                            <div onClick={() => {
                                setOpenCity(true);
                                setProvice_id(province.id);
                            }}
                                key={province.id} className="w-full flex justify-between items-center border-b-[1px] border-[#F0F0F1] py-4 px-1">
                                <span className="text-[#3f4064] font-medium text-base">{province.name}</span>
                                <div className="w-6 h-6"><MdOutlineKeyboardArrowLeft className="w-full h-full text-[#3f4064]" /></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className={`w-full h-full fixed left-0 right-0 ${openCity ? "bottom-0" : "bottom-[-100%]"} flex flex-col p-4 bg-white overflow-y-scroll`}>
                <div className="w-full flex justify-between items-center border-b-[1px] border-[#E0E0E2] px-1 pb-4 mb-8">
                    <span className="font-semibold text-base block text-[#3f4064]">انتخاب شهر</span>
                    <div onClick={() => {
                        setOpenListOfCities(false);
                        setOpenCity(false);
                    }
                    } className="w-6 h-6"><IoClose className="w-full h-full text-[#3f4064]" /></div>
                </div>

                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full flex justify-start items-center gap-x-4 px-1 mb-4">
                        <div onClick={() => setOpenCity(false)} className="w-6 h-6"><FiArrowRight className="w-full h-full text-[#3f4064]" /></div>
                        <span className="text-[#3f4064] font-medium text-base block">بازگشت به لیست استان ها</span>
                    </div>

                    {cities.map((city) => (
                        <div key={city.id} className="w-full flex justify-between items-center border-b-[1px] border-[#F0F0F1] py-4 px-1">
                            <span className="text-[#3f4064] font-medium text-base">{city.name}</span>
                            <div className="w-6 h-6"><MdOutlineKeyboardArrowLeft className="w-full h-full text-[#3f4064]" /></div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default ListOfCities;