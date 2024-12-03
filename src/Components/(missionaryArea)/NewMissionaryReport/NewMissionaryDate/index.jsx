"use client";
import Link from "next/link";
import HeaderInviteBox from "../Boxes/HeaderInviteBox";
import { useEffect, useState } from "react";

import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DatePicker from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"
import "react-multi-date-picker/styles/layouts/mobile.css"
import ProgressBarMUI from "../../../module/ProgressBarMUI";
import { steps } from "@/Components/Services";

{/*****************************************/ }
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { MdDelete } from "react-icons/md";

const NewMissionaryDate = () => {
    const [valueStart, setValueStart] = useState([]);
    const [stepPage, setStepPage] = useState(1);
    const [cal, setCal] = useState([]);

    useEffect(() => {
        setCal(valueStart.flat());
    }, [valueStart]);

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            forms: [{}],
        },
    })

    const submitData = () => {
        const data = { history: watch("forms"), };
        console.log(data);
    }

    const {
        fields: foodFields,
        append: foodAppend,
        remove: foodRemove
    } = useFieldArray({ control, name: "forms" });


    return (
        <div className="relative w-full">
            <HeaderInviteBox title={"انتخاب نوع مبلغ"} href={"selectNewMissionaryAddress"} />

            <div className="w-full py-2 border-b-[1px] border-b-gray-300">
                {/* <ProgressBar /> */}
                <ProgressBarMUI stepPage={stepPage} steps={steps} />
                {/* End ProgressBar */}
            </div>

            <div className="w-full px-4 mt-8 mx-auto">
                <form onSubmit={handleSubmit(submitData)} className="w-full">
                    <span className="text-[#4f4f4f] flex justify-center font-medium text-base leading-5 mb-12">زمان فعالیت خود را انتخاب کنید</span>
                    {foodFields.map((field, index) => (
                        <div key={field.id} className="flex justify-start items-center gap-x-0 p-4 bg-purple-400">
                            <div className="w-6 h-6 flex justify-center items-center rounded-sm bg-white"><img src="/images/svg/calander.svg" alt="" className="w-full h-full" /></div>
                            <DatePicker
                                value={valueStart}
                                onChange={setValueStart}
                                className="rmdp-mobile"
                                inputClass={`w-44 h-6 text-sm pr-1 ${valueStart.length ? "text-white" : "text-black"} focus:placeholder:text-transparent placeholder:text-black`}
                                multiple
                                range
                                placeholder="افزودن"
                                dateSeparator=" تا "
                                multipleRangeSeparator="&"
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom-right"
                                animations={[
                                    opacity(),
                                    transition({
                                        from: 40,
                                        transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                    }),
                                ]}
                                {...register(`forms.${index}.province`, {
                                    required: true
                                })}
                            />
                            {index === 0 ? "" : (
                                <div onClick={() => foodRemove(index)} className="w-6 h-6 flex mr-auto mt-3 cursor-pointer"><MdDelete className="w-6 h-6" /></div>
                            )}
                            {errors.forms?.[index]?.province && errors.forms?.[index].province.type === "required" && (
                                <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                            )}
                        </div>
                    ))}
                    <div onClick={() => foodAppend()} className="flex justify-start items-center gap-x-1">
                        <div className="w-[9px] h-[9px]"><img src="/images/svg/resume/plusBlue.svg" alt="" className="" /></div>
                        <span className="text-[#2FBFD3] font-normal text-xs leading-5">ثبت جدید</span>
                    </div>
                </form>

                {/*w-[400px] outline-none py-[10px] font-normal text-xs leading-5 px-4 border-[1px] focus:placeholder:text-transparent border-[#E1E2E6] placeholder:text-[#AAAAAE] rounded-lg */}
                {valueStart.length > 0
                    ? (
                        <div className="w-full flex flex-col justify-center items-center mt-12">
                            <div className="w-full grid grid-cols-2 gap-x-2">
                                <div className="flex justify-center items-center text-base font-semibold py-1">شروع</div>
                                <div className="flex justify-center items-center text-base font-semibold py-1">پایان</div>
                            </div>
                            <div className="relative w-full grid grid-cols-2 gap-2 child:shrink-0">
                                {cal?.map((item, index) => (
                                    <div key={index} className="text-black font-bold text-base leading-6 border-[1px] border-purple-700 flex justify-start items-center py-1 px-4">
                                        {`${item?.year}/${item?.month}/${item?.day}`}
                                    </div>
                                ))}
                            </div>
                            <div onClick={() => setValueStart([])} className="flex justify-center items-center bg-blue-400 px-8 py-2 rounded-md mt-4">پاک کردن</div>
                        </div>
                    )
                    : (<div className="text-rose-600 text-base font-semibold mx-auto flex justify-center items-center mt-8">شما هنوز هیچ تاریخی را انتخاب نکردید</div>)
                }
            </div>

            <Link href={"/newMissionaryContact"} className={"fixed h-[70px] bottom-0 left-0 right-0 flex justify-center items-center bg-white box-shadow-[0px_-1px_9px_0px_#1D266C26] px-4 z-20"}>
                <button onClick={() => setStepPage(2)} className="bg-[#5461CA] rounded-[4px] w-full h-10 text-white font-medium text-sm leading-5">تایید مکان جلسه</button>
            </Link>

        </div>
    );
}

export default NewMissionaryDate;