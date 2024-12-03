import { useState } from "react";
import OptionSelectProvince from "./OptionSelectProvince";
import OptionSelectTown from "./OptionSelectTown";
import OptionSelectCity from "./OptionSelectCity";

const SettingModal = ({ modalCloseHandler, openSettingModal }) => {
    const [province, setProvince] = useState("");
    const [townInput, setTownInput] = useState("");
    const [cityInput, setCityInput] = useState("");

    const [openProvinceModal, setOpenProvinceModal] = useState("");
    const [openTownModal, setOpenTownModal] = useState("");
    const [openCityModal, setOpenCityModal] = useState("");


    return (
        <div className={`z-50 fixed ${openSettingModal ? "bottom-0" : "bottom-[-375px]"} left-0 right-0 px-6 py-8 bg-white rounded-t-[14px] shadow-[0px_-3px_8px_0px_#0000000D] transition-all duration-500`}>
            <div
                onClick={() => modalCloseHandler()}
                className="absolute top-[5px] left-[50%] translate-x-[-50%] w-full flex justify-center">
                <div className="w-14 h-[5px] bg-[#D9D9D9] rounded-md cursor-pointer"></div>
            </div>

            <div className="w-full flex items-center gap-x-[10px] mb-10">
                <div
                    onClick={() => modalCloseHandler()}
                    className="w-[14px] h-[14px]"><img src="/images/svg/map/close.svg" alt="" className="" /></div>
                <div className="text-[#3A3A3A] font-semibold text-[13px] leading-5">
                    فیلترها
                </div>
            </div>

            <div className="flex flex-col gap-y-[18px]">
                <div
                    onClick={() => setOpenProvinceModal(true)}
                    className="w-full flex justify-between items-center cursor-pointer border-b-[#0000001A] border-b-[1px] pb-[18px]">
                    <div className="flex justify-start items-center gap-x-2">
                        {province !== "" ? (
                            <div className="w-[5px] h-[5px] bg-[#2B39A1] rounded-full"></div>
                        ) : null}
                        <input
                            value={province}
                            readOnly type="text" placeholder="انتخاب استان"
                            className="placeholder:text-[#838383] text-[#2B39A1] outline-none font-medium text-xs leading-5"
                        />
                    </div>
                    <div className="w-3 h-3"><img src="/images/svg/map/leftArrow.svg" alt="" className="" /></div>
                </div>

                <div
                    onClick={() => setOpenTownModal(true)}
                    className="w-full flex justify-between items-center cursor-pointer border-b-[#0000001A] border-b-[1px] pb-[18px]">
                    <div className="flex justify-start items-center gap-x-2">
                        {townInput !== "" ? (
                            <div className="w-[5px] h-[5px] bg-[#2B39A1] rounded-full"></div>
                        ) : null}
                        <input
                            value={townInput}
                            readOnly type="text" placeholder="انتخاب شهرستان"
                            className="placeholder:text-[#838383] text-[#2B39A1] outline-none font-medium text-xs leading-5"
                        />
                    </div>
                    <div className="w-3 h-3"><img src="/images/svg/map/leftArrow.svg" alt="" className="" /></div>
                </div>

                <div
                    onClick={() => setOpenCityModal(true)}
                    className="w-full flex justify-between items-center cursor-pointer border-b-[#0000001A] border-b-[1px] pb-[18px]">
                    <div className="flex justify-start items-center gap-x-2">
                        {cityInput !== "" ? (
                            <div className="w-[5px] h-[5px] bg-[#2B39A1] rounded-full"></div>
                        ) : null}
                        <input
                            value={cityInput}
                            readOnly type="text" placeholder="انتخاب شهر/روستا"
                            className="placeholder:text-[#838383] text-[#2B39A1] outline-none font-medium text-xs leading-5"
                        />
                    </div>
                    <div className="w-3 h-3"><img src="/images/svg/map/leftArrow.svg" alt="" className="" /></div>
                </div>
            </div>

            <div className={`${openProvinceModal ? "block" : "hidden"} fixed top-0 left-0 bottom-0 right-0 bg-white`}>
                <OptionSelectProvince setProvince={setProvince} setOpenProvinceModal={setOpenProvinceModal} />
            </div>
            <div className={`${openTownModal ? "block" : "hidden"} fixed top-0 left-0 bottom-0 right-0 bg-white`}>
                <OptionSelectTown setTownInput={setTownInput} setOpenTownModal={setOpenTownModal} />
            </div>
            <div className={`${openCityModal ? "block" : "hidden"} fixed top-0 left-0 bottom-0 right-0 bg-white`}>
                <OptionSelectCity setCityInput={setCityInput} setOpenCityModal={setOpenCityModal} />
            </div>

        </div>
    );
}

export default SettingModal;