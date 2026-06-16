import { useState } from "react";
import Btn from "./Btn";

const MenuBar = ({ setContent }) => {
    const [active, setActive] = useState("aboutUs");

    return (
        <div className="h-full w-full flex items-center px-4 gap-x-[30px] overflow-x-scroll sliderContainer1">
            <Btn title={"درباره ما"} content={"aboutUs"} setContent={setContent} setActive={setActive} active={active} />
            <Btn title={"گراف نقطه"} content={"graph"} setContent={setContent} setActive={setActive} active={active} />
            <Btn title={"نظرات"} content={"comment"} setContent={setContent} setActive={setActive} active={active} />
            <Btn title={"امکانات"} content={"featur"} setContent={setContent} setActive={setActive} active={active} />
            <Btn title={"مبلغین نقطه"} content={"missinary"} setContent={setContent} setActive={setActive} active={active} />
            <Btn title={"ظرفیت های نقطه"} content={"capacity"} setContent={setContent} setActive={setActive} active={active} />
        </div>
    );
}

export default MenuBar;