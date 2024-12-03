"use client";
import React, { useState } from 'react';
import Waiting from "./boxes/Waiting";
import Answer from "./boxes/Answer";
import Close from "./boxes/Close";
import Link from "next/link";

const Message = () => {

    return (
        <div className="w-full bg-[#F0F0F1] pb-6">
            <div className="w-full h-10 bg-[#5461CA] px-4 flex items-center">
                <div className="w-full flex justify-between items-center">

                    <Link href={"/dashboardHome"} className="flex items-center gap-x-2">
                        <img src="/images/svg/notif/arrowRight.svg" alt="" className="w-[14px] h-[14px]" />
                        <span className="text-[#FFFFFF] font-medium text-sm leading-5">پیام‌های شما</span>
                    </Link>

                    <div className="flex flex-col gap-y-[3px]">
                        <div className="w-[3px] h-[3px] bg-[#FFFFFF]"></div>
                        <div className="w-[3px] h-[3px] bg-[#FFFFFF]"></div>
                        <div className="w-[3px] h-[3px] bg-[#FFFFFF]"></div>
                    </div>

                </div>
            </div>

            <div className="w-full flex flex-col gap-y-[6px]">
                <Waiting />
                <Answer />
                <Close />
                <Answer />
                <Close />
            </div>

        </div>
    );
}

export default Message;









































