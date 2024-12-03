"use client";
import Link from "next/link";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import { socialMediaNames, provices } from "@/Components/Services";
import { MdDelete } from "react-icons/md";
import { AutocompleteStyleDesign, CustomSelect, StyledTextField } from "./Inputs";


const ResumeComp = () => {
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
        const data = {
            religious: watch("religious"),
            gender: watch("gender"),
            marrid: watch("marrid"),
            children: watch("children"),
            network: watch("network"),
            sign: watch("sign"),
            city: watch("city"),
            town: watch("town"),
            vilage: watch("vilage"),
            code: watch("code"),
            code: watch("forms"),
        };
        console.log(data);
    }

    const { fields, append, remove } = useFieldArray({
        control,
        name: "forms",
    });

    return (
        <div className="relative w-full h-auto overflow-y-scroll bg-[#F0F0F1] mb-[84px]">
            <div className="w-full h-12 bg-[#5461CA] flex justify-start items-center ">
                <div className="pr-[17px] flex justify-start items-center gap-x-2">
                    <Link
                        href={"/dashboardProfile"}
                        className="w-[14px] h-[14px]">
                        <img src="/images/resume/arrowRight.svg" alt="" className="w-[14px] h-[14px]" />
                    </Link>
                    <span className="text-white font-medium text-sm leading-5">پروفایل فردی</span>
                </div>
            </div>

            {/* <div className="w-full h-[51px] flex justify-center items-center mb-1 gap-x-[17px] bg-white px-4 pt-4 pb-[14px]">
                <div className="">
                    <div className="w-[98px] h-[2px] bg-[#5461CA]"></div>
                    <span className="text-[#5461CA] font-medium text-[10px] leading-4">پروفایل فردی</span>
                </div>

                <div className="">
                    <div className="w-[98px] h-[2px] bg-[#B0B0B0]"></div>
                    <span className="text-[#B0B0B0] font-light text-[10px] leading-4">رزومه عمومی</span>
                </div>

                <div className="">
                    <div className="w-[98px] h-[2px] bg-[#B0B0B0]"></div>
                    <span className="text-[#B0B0B0] font-light text-[10px] leading-4">رزومه دعوت</span>
                </div>
            </div> */}

            <div className="w-full h-[188px] flex justify-center items-center bg-white mb-1">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="relative w-20 h-20 rounded-full bg-[#7681D526] mb-3 flex justify-center items-center">
                        <span className="text-[#616161] font-light text-[9px] leading-4">تصویر پروفایل</span>
                        <div className="absolute bottom-1 right-1 w-5 h-5 bg-[#616161] rounded-full flex justify-center items-center cursor-pointer">
                            <div className="w-[9.5px] h-[9.5px]">
                                <img src="/images/resume/plus.svg" alt="" className="w-[9.5px] h-[9.5px]" />
                            </div>
                        </div>
                    </div>

                    <span className="text-[#2B39A1] font-medium text-sm leading-5">محمد پورحسین سقائی</span>
                    <div className="flex items-center gap-x-1 mt-1">
                        <span className="text-[#919191] font-light text-[10px] leading-4">تاریخ تولد:</span>
                        <span className="text-[#616161] font-normal text-xs leading-4">۱۳۷۹/۰۷/۰۳</span>
                    </div>
                    <div className="flex items-center gap-x-1 mt-1">
                        <span className="text-[#919191] font-light text-[10px] leading-4">کدملی:</span>
                        <span className="text-[#616161] font-normal text-xs leading-4">۰۰۲۳۴۷۷۶۵۲</span>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit(submitData)} className="">
                <div className="w-full bg-white px-4 pt-[14px] pb-8 mb-1">
                    <span className="text-[#4F4F4F] font-medium text-sm leading-5 block mb-4">اطلاعات تکمیلی</span>

                    <div className="w-full grid grid-cols-2 gap-y-4 gap-x-4 mb-8">
                        <div className="">
                            <StyledTextField
                                id="outlined-basic" label="مذهب"
                                {...register("religious", {
                                    required: true
                                })}
                            />

                            {errors.religious?.type === "required" && (
                                <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                            )}
                        </div>

                        <div className="">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">جنسیت</InputLabel>
                                <CustomSelect
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="جنسیت"
                                    {...register("gender", {
                                        required: true
                                    })}
                                >
                                    <MenuItem value={0}>آقا</MenuItem>
                                    <MenuItem value={1}>خانم</MenuItem>
                                </CustomSelect>
                            </FormControl>

                            {errors.gender?.type === "required" && (
                                <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                            )}
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-y-4 gap-x-4">

                        <div className="">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label2">وضعیت تاهل</InputLabel>
                                <CustomSelect
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select2"
                                    // value={age}
                                    label="وضعیت تاهل"
                                    // onChange={handleChange}
                                    // variant="outlined"

                                    sx={{
                                    }}

                                    {...register("marrid", {
                                        required: true
                                    })}
                                >
                                    <MenuItem value={0}>متاهل</MenuItem>
                                    <MenuItem value={1}>مجرد</MenuItem>
                                </CustomSelect>
                            </FormControl>

                            {errors.marrid?.type === "required" && (
                                <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                            )}
                        </div>

                        <div className="">
                            <StyledTextField id="outlined-basic" label="تعداد فرزندان" variant="outlined"
                                {...register("children", {
                                    required: true
                                })}
                            />
                            {errors.children?.type === "required" && (
                                <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                            )}
                        </div>

                    </div>

                </div>
                {/************************************************************** */}
                {/************************************************************** */}
                {/************************************************************** */}
                {/************************************************************** */}
                {/************************************************************** */}
                {/************************************************************** */}
                {/************************************************************** */}
                {/************************************************************** */}
                {/************************************************************** */}
                <div className="w-full bg-white px-4 pt-[14px] pb-[18px] mb-1">
                    <div className="flex items-center mb-3">
                        <span className="text-[#4F4F4F] font-medium text-sm leading-5">شبکه اجتماعی</span>
                        <span className="text-[#4F4F4F] font-normal text-[9px] leading-4 mr-1">(اختیاری)</span>
                    </div>

                    {fields.map((field, index) => (
                        <div key={field.id} className="w-full flex flex-col gap-y-6 mb-8">
                            <div className="flex gap-x-4">
                                <div className="w-40">
                                    <AutocompleteStyleDesign
                                        id="socialMediaNames"
                                        disablePortal
                                        options={socialMediaNames || []}
                                        getOptionLabel={(option) => option?.name}
                                        renderInput={(params) => (
                                            <TextField {...params} label="نام شبکه"
                                                {...register(`forms.${index}.socilas`, {
                                                    required: true
                                                })}
                                            />
                                        )}
                                    />

                                    {errors.forms?.[index]?.socilas && errors.forms?.[index].socilas.type === "required" && (
                                        <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                                    )}
                                </div>

                                <div className="">
                                    <StyledTextField id="outlined-basic" label="شناسه" variant="outlined"
                                        {...register(`forms.${index}.sign`, {
                                            required: true
                                        })}
                                    />

                                    {errors.forms?.[index]?.sign && errors.forms?.[index].sign.type === "required" && (
                                        <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                                    )}
                                </div>

                                {index === 0 ? (<div className="p-[11px]"></div>) : (
                                    <div onClick={() => remove(index)} className="w-6 h-6 flex mr-auto translate-y-[50%] cursor-pointer"><MdDelete className="w-6 h-6" /></div>
                                )}
                            </div>


                        </div>
                    ))}

                    <div onClick={() => append()} className="flex items-center w-28 gap-x-1 mr-4">
                        <div className="w-[9px] h-[9px]"><img src="/images/svg/resume/plusBlue.svg" alt="" className="" /></div>
                        <span className="text-[#2FBFD3] font-normal text-xs leading-5">ثبت جدید</span>
                    </div>

                </div>
                {/************************************************************** */}
                {/************************************************************** */}
                {/************************************************************** */}
                {/************************************************************** */}
                {/************************************************************** */}
                {/************************************************************** */}
                {/************************************************************** */}
                {/************************************************************** */}
                {/************************************************************** */}

                <div className="w-full bg-white px-4 py-[24px] flex flex-col gap-y-4 mb-1" >
                    <span className="text-[#4F4F4F] font-medium text-sm leading-5">اطلاعات تماس</span>
                    <div className="w-full grid grid-cols-2 gap-x-4 items-center">
                        <div className="">
                            <StyledTextField id="outlined-basic" label="شماره منزل" variant="outlined"
                                {...register("phone", {
                                    required: true
                                })}
                            />

                            {errors.phone && errors.phone.type === "required" && (
                                <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                            )}
                        </div>

                        <div className="">
                            <StyledTextField id="outlined-basic" label="شماره همراه" variant="outlined"
                                {...register("mobile", {
                                    required: true
                                })}
                            />

                            {errors.mobile && errors.mobile.type === "required" && (
                                <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                            )}
                        </div>
                    </div>
                </div>


                <div className="w-full h-[215px] bg-white px-4 py-[14px] flex flex-col gap-y-4">
                    <span className="text-[#4F4F4F] font-medium text-sm leading-5">اطلاعات محل سکونت</span>

                    <div className="grid grid-cols-2  gap-x-4">
                        <div className="">
                            <AutocompleteStyleDesign
                                id="provices"
                                disablePortal
                                options={provices || []}
                                getOptionLabel={(option) => option?.name}
                                // sx={}
                                renderInput={(params) => (
                                    <TextField {...params} label="استان"
                                        {...register("city", {
                                            required: true
                                        })}
                                    />
                                )}
                            />

                            {errors.city && errors.city.type === "required" && (
                                <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                            )}
                        </div>

                        <div className="">
                            <AutocompleteStyleDesign
                                id="provices2"
                                disablePortal
                                options={provices || []}
                                getOptionLabel={(option) => option?.name}
                                // sx={}
                                renderInput={(params) => (
                                    <TextField {...params} label="شهرستان"
                                        {...register("town", {
                                            required: true
                                        })}
                                    />
                                )}
                            />

                            {errors.town && errors.town.type === "required" && (
                                <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                            )}
                        </div>

                        <div className="mt-1">
                            <AutocompleteStyleDesign
                                id="provices3"
                                disablePortal
                                options={provices || []}
                                getOptionLabel={(option) => option?.name}
                                // sx={}
                                renderInput={(params) => (
                                    <TextField {...params} label="شهر/روستا"
                                        {...register("vilage", {
                                            required: true
                                        })}
                                    />
                                )}
                            />

                            {errors.vilage && errors.vilage.type === "required" && (
                                <p role="alert" className="text-rose-400 mt-2 mr-4">مقدار نباید خالی باشد</p>
                            )}
                        </div>

                        <div className="mt-1">
                            <StyledTextField id="outlined-basic" label="کد پستی" variant="outlined"
                                {...register("code", {
                                    required: true
                                })}
                            />
                            {errors.code && errors.code.type === "required" && (
                                <p role="alert" className="text-rose-400 mt-1 mr-4">مقدار نباید خالی باشد</p>
                            )}
                        </div>
                    </div>

                </div>

                <div className="z-50 fixed bottom-0 left-0 right-0 w-full h-[58px] bg-white py-[10px] px-4 shadow-[0px_-1px_4px_0px_#00000026]">
                    {/* <Link href={"/dashboardProfile"}> */}
                    <button
                        type="submit"
                        className="w-full h-full bg-[#5461CA] text-white font-medium text-sm leading-5 rounded cursor-pointer">ذخیره</button>
                    {/* </Link> */}
                </div>
            </form >


        </div>
    );
}

export default ResumeComp;