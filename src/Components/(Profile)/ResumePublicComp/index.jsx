"use client";
import Link from "next/link";
import React, { useState } from "react"

import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"

import "react-multi-date-picker/styles/layouts/mobile.css"
import { AutocompleteStyleDesign, CustomSelect, StyledTextField } from "../Resume/Inputs";

{/*****************************************/ }
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { provices } from "@/Components/Services";
import { MdDelete } from "react-icons/md";
{/*****************************************/ }

const ResumePublicComp = () => {
    const [startDateCooperation, setStartDateCooperation] = useState();
    const [endDateCooperation, setEndDateCooperation] = useState();
    const [startDateAuthorship, setStartAuthorship] = useState();

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            forms: [{}],
            forms2: [{}],
            forms3: [{}],
        },
    })

    const submitData = () => {
        const data = {
            history: watch("forms"),
            history2: watch("form2"),
            history3: watch("forms3"),
        };
        console.log(data);
    }

    // const { fields, append, remove } = useFieldArray(
    //     { control, name: "forms", }
    // );

    const {
        fields: foodFields,
        append: foodAppend,
        remove: foodRemove
    } = useFieldArray({ control, name: "forms" });
    const {
        fields: drinkFields,
        append: drinkAppend,
        remove: drinkRemove
    } = useFieldArray({ control, name: "forms2" });
    const {
        fields: eatFields,
        append: eatAppend,
        remove: eatRemove
    } = useFieldArray({ control, name: "forms3" });

    return (
        <div className="relative w-full bg-[#F0F0F1] mb-[150px]">
            <div className="w-full h-12 bg-[#5461CA] flex justify-start items-center ">
                <div className="pr-[17px] flex justify-start items-center gap-x-2">
                    <Link
                        href={"/dashboardProfile"}
                        className="w-[14px] h-[14px]">
                        <img src="/images/resume/arrowRight.svg" alt="" className="w-[14px] h-[14px]" />
                    </Link>
                    <span className="text-white font-medium text-sm leading-5">رزومه عمومی</span>
                </div>
            </div>

            {/* <div className="w-full h-[51px] flex justify-center items-center mb-1 gap-x-[17px] bg-white px-4 pt-4 pb-[14px]">
                <div className="">
                    <div className="w-[98px] h-[2px] bg-[#B0B0B0]"></div>
                    <span className="text-[#B0B0B0] font-light text-[10px] leading-4">پروفایل فردی </span>
                </div>

                <div className="">
                    <div className="w-[98px] h-[2px] bg-[#5461CA]"></div>
                    <span className="text-[#5461CA] font-medium text-[10px] leading-4">رزومه عمومی</span>
                </div>

                <div className="">
                    <div className="w-[98px] h-[2px] bg-[#B0B0B0]"></div>
                    <span className="text-[#B0B0B0] font-light text-[10px] leading-4">رزومه دعوت</span>
                </div>
            </div> */}

            <form className="w-full" onSubmit={handleSubmit(submitData)}>
                <div className="w-full bg-white mb-2">
                    <div className="w-full min-h-[270px] bg-white px-4 py-[14px] flex flex-col">
                        <span className="text-[#4F4F4F] font-medium text-sm leading-5 mb-4">سوابق تحصیلی</span>


                        {foodFields.map((field, index) => (
                            <div key={field.id} className="pb-4">
                                <div className="w-full grid grid-cols-1 mb-2">
                                    <StyledTextField
                                        id="outlined-basic" label="نام حوزه/دانشگاه"
                                        {...register(`forms.${index}.school`, {
                                            required: true
                                        })}
                                    />
                                    {errors.forms?.[index]?.school.type === "required" && (
                                        <p role="alert" className="text-rose-400 mr-4">مقدار نباید خالی باشد</p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-y-4">
                                    <div className="grid grid-cols-2 gap-x-4">

                                        <div className="">
                                            <AutocompleteStyleDesign
                                                id="provices"
                                                disablePortal
                                                options={provices || []}
                                                getOptionLabel={(option) => option?.name}
                                                renderInput={(params) => (
                                                    <TextField {...params} label="استان محل تحصیل"
                                                        {...register(`forms.${index}.province`, {
                                                            required: true
                                                        })}
                                                    />
                                                )}
                                            />

                                            {errors.forms?.[index]?.province && errors.forms?.[index].province.type === "required" && (
                                                <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                                            )}
                                        </div>

                                        <div className="">
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">مقطع</InputLabel>
                                                <CustomSelect
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="مقطع"
                                                    {...register(`forms.${index}.level`, {
                                                        required: true
                                                    })}
                                                >
                                                    <MenuItem value={"0"}>آقا</MenuItem>
                                                    <MenuItem value={"1"}>خانم</MenuItem>
                                                </CustomSelect>
                                            </FormControl>

                                            {errors.forms?.[index]?.level?.type === "required" && (
                                                <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                                            )}
                                        </div>

                                    </div>

                                    <div className="grid grid-cols-2 gap-x-4">
                                        <div className="">
                                            <StyledTextField
                                                id="outlined-basic" label="رشته تحصیلی"
                                                {...register(`forms.${index}.study`, {
                                                    required: true
                                                })}
                                            />

                                            {errors.forms?.[index]?.study?.type === "required" && (
                                                <p role="alert" className="text-rose-400 mr-4">مقدار نباید خالی باشد</p>
                                            )}
                                        </div>

                                        <div className="">
                                            <StyledTextField
                                                id="outlined-basic" label="گرایش/تخصص"
                                                {...register(`forms.${index}.expert`, {
                                                    required: true
                                                })}
                                            />

                                            {errors.forms?.[index]?.expert?.type === "required" && (
                                                <p role="alert" className="text-rose-400 mr-4">مقدار نباید خالی باشد</p>
                                            )}
                                        </div>

                                    </div>
                                </div>
                                {index === 0 ? "" : (
                                    <div onClick={() => foodRemove(index)} className="w-6 h-6 flex mr-auto mt-3 cursor-pointer"><MdDelete className="w-6 h-6" /></div>
                                )}
                                <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
                            </div>
                        ))}

                        <div onClick={() => foodAppend()} className="flex justify-start items-center gap-x-1">
                            <div className="w-[9px] h-[9px]"><img src="/images/svg/resume/plusBlue.svg" alt="" className="" /></div>
                            <span className="text-[#2FBFD3] font-normal text-xs leading-5">ثبت جدید</span>
                        </div>
                    </div>
                </div >

                <div className="w-full bg-white mb-2">
                    <div className="w-full min-h-[270px] px-4 py-[14px] flex flex-col">
                        <span className="text-[#4F4F4F] font-medium text-sm leading-5 mb-4">سوابق اجرائی</span>

                        {drinkFields.map((field, index) => (
                            <div key={field.id} className="pb-4 flex flex-col gap-y-4">
                                <div className="w-full grid grid-cols-1">
                                    <StyledTextField
                                        id="outlined-basic" label="نام موسسه/ارگان"
                                        {...register(`forms2.${index}.institute`, {
                                            required: true
                                        })}
                                    />

                                    {errors.forms2?.[index]?.institute.type === "required" && (
                                        <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                                    )}
                                </div>

                                <div className="flex">
                                    <div className="grid grid-cols-2 gap-x-4">
                                        <div className="z-10">
                                            <AutocompleteStyleDesign
                                                id="provices"
                                                disablePortal
                                                options={provices || []}
                                                getOptionLabel={(option) => option?.name}
                                                renderInput={(params) => (
                                                    <TextField {...params} label="استان محل فعالیت"
                                                        {...register(`forms2.${index}.action`, {
                                                            required: true
                                                        })}
                                                    />
                                                )}
                                            />

                                            {errors.forms2?.[index]?.action && errors.forms2?.[index].action.type === "required" && (
                                                <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                                            )}
                                        </div>

                                        <div className="h-[40px]">
                                            <StyledTextField
                                                id="outlined-basic" label="نوع فعالیت/سمت"
                                                {...register(`forms2.${index}.kind`, {
                                                    required: true
                                                })}
                                            />

                                            {errors.forms2?.[index]?.kind.type === "required" && (
                                                <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full flex justify-between items-center gap-x-4">
                                    <div>
                                        <DatePicker
                                            value={startDateCooperation}
                                            onChange={setStartDateCooperation}
                                            className="rmdp-mobile"
                                            inputClass="custom-input-startHour w-full outline-none py-[10px] font-normal leading-5 px-4 border-[1px] focus:placeholder:text-transparent border-[#E1E2E6] placeholder:text-[#AAAAAE] rounded-lg"
                                            calendar={persian}
                                            locale={persian_fa}
                                            calendarPosition="bottom-right"
                                            placeholder="تاریخ شروع"
                                            animations={[
                                                opacity(),
                                                transition({
                                                    from: 40,
                                                    transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                                }),
                                            ]}
                                            {...register(`forms2.${index}.start`, {
                                                required: true
                                            })}
                                        />
                                        {errors.forms2?.[index]?.start.type === "required" && (
                                            <p role="alert" className="text-rose-400 mt-2 mr-4 block">مقدار نباید خالی باشد</p>
                                        )}
                                    </div>
                                    <div>
                                        <DatePicker
                                            value={endDateCooperation}
                                            onChange={setEndDateCooperation}
                                            className="rmdp-mobile"
                                            inputClass="custom-input-startHour w-full outline-none py-[10px] font-normal leading-5 px-4 border-[1px] focus:placeholder:text-transparent border-[#E1E2E6] placeholder:text-[#AAAAAE] rounded-lg"
                                            calendar={persian}
                                            locale={persian_fa}
                                            calendarPosition="bottom-right"
                                            placeholder="تاریخ پایان"
                                            animations={[
                                                opacity(),
                                                transition({
                                                    from: 40,
                                                    transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                                }),
                                            ]}
                                            {...register(`forms2.${index}.end`, {
                                                required: true
                                            })}
                                        />
                                        {errors.forms2?.[index]?.end.type === "required" && (
                                            <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                                        )}
                                    </div>
                                </div>
                                {index === 0 ? "" : (
                                    <div onClick={() => drinkRemove(index)} className="w-6 h-6 flex mr-auto mt-3 cursor-pointer"><MdDelete className="w-6 h-6" /></div>
                                )}
                                <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
                            </div>
                        ))}

                        <div className="flex items-center gap-x-1">
                            <div className="w-[9px] h-[9px]"><img src="/images/svg/resume/plusBlue.svg" alt="" className="" /></div>
                            <span onClick={() => drinkAppend()} className="text-[#2FBFD3] font-normal text-xs leading-5">ثبت جدید</span>
                        </div>
                    </div>
                </div>


                <div className="w-full h-[170px] bg-white">

                    <div className="w-full min-h-[270px] px-4 pb-20 pt-[14px] flex flex-col">
                        <span className="text-[#4F4F4F] font-medium text-sm leading-5 mb-4">سوابق پژوهشی</span>

                        {eatFields.map((field, index) => (
                            <div key={field.id} className="flex flex-col gap-y-4 pb-4">
                                <div className="w-full grid grid-cols-2 gap-x-4 justify-between items-center">
                                    <div className="">
                                        <StyledTextField
                                            id="outlined-basic" label="عنوان"
                                            {...register(`forms3.${index}.author`, {
                                                required: true
                                            })}
                                        />

                                        {errors.forms3?.[index]?.author?.type === "required" && (
                                            <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                                        )}
                                    </div>

                                    <div className="">
                                        <StyledTextField
                                            id="outlined-basic" label="ناشر"
                                            {...register(`forms3.${index}.title`, {
                                                required: true
                                            })}
                                        />

                                        {errors.forms3?.[index]?.title?.type === "required" && (
                                            <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                                        )}
                                    </div>
                                </div>

                                <div className="w-full grid grid-cols-2 gap-x-4">
                                    <div className="">
                                        <StyledTextField
                                            id="outlined-basic" label="لینک مربوطه"
                                            {...register(`forms3.${index}.link`, {
                                                required: true
                                            })}
                                        />

                                        {errors.forms3?.[index]?.link?.type === "required" && (
                                            <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                                        )}
                                    </div>

                                    <div className="">
                                        <DatePicker
                                            value={startDateAuthorship}
                                            onChange={setStartAuthorship}
                                            className="rmdp-mobile"
                                            inputClass="custom-input-startHour w-[190px] outline-none py-[12px] font-normal text-xs leading-5 px-4 border-[1px] focus:placeholder:text-transparent border-[#E1E2E6] placeholder:text-[#AAAAAE] rounded-lg"
                                            calendar={persian}
                                            locale={persian_fa}
                                            calendarPosition="bottom-right"
                                            placeholder="تاریخ تالیف"
                                            animations={[
                                                opacity(),
                                                transition({
                                                    from: 40,
                                                    transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                                }),
                                            ]}
                                            {...register(`forms3.${index}.startH`, {
                                                required: true
                                            })}
                                        />
                                        {errors.forms3?.[index]?.startH?.type === "required" && (
                                            <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                                        )}
                                    </div>
                                </div>

                                {index === 0 ? "" : (
                                    <div onClick={() => eatRemove(index)} className="w-6 h-6 flex mr-auto mt-3 cursor-pointer"><MdDelete className="w-6 h-6" /></div>
                                )}
                                <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
                            </div>
                        ))}

                        <div className="flex items-center gap-x-1">
                            <div className="w-[9px] h-[9px]"><img src="/images/svg/resume/plusBlue.svg" alt="" className="" /></div>
                            <span
                                onClick={() => eatAppend()}
                                className="text-[#2FBFD3] font-normal text-xs leading-5">ثبت جدید</span>
                        </div>
                    </div>
                </div>

                <div className="z-50 fixed bottom-0 left-0 right-0 w-full h-[58px] bg-white py-[10px] px-4 shadow-[0px_-1px_4px_0px_#00000026]">
                    {/* <Link href={"/dashboardProfile"}> */}
                    <button type="submit" className="w-full h-full bg-[#5461CA] text-white font-medium text-sm leading-5 rounded cursor-pointer">ذخیره</button>
                    {/* </Link> */}
                </div>
            </form>
        </div >
    );
}

export default ResumePublicComp;