"use client";
import "./btn.css";

const Btn = ({ title, content, setContent, setActive, active }) => {
    return (
        <div
            onClick={() => {
                setContent(content);
                setActive(content);
            }}
            className={content === active
                ? "shrink-0 h-full flex justify-center items-center text-[#2B39A1] border-b-[#2B39A1] border-b-[2px] rounded-sm font-bold text-[10px] leading-4 act-b"
                : "shrink-0 h-full flex justify-center items-center text-[#3A3A3A] font-normal text-[10px] leading-4"}
        >{title}</div>
    );
}

export default Btn;