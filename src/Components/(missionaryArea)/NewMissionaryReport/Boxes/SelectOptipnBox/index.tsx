import Link from "next/link";

const SelectOptipnBox = ({ href, img, title, details }) => {
    return (
        <Link href={`/${href}`}>
            <div className="bg-[#F4F4F4] flex gap-x-4 py-4 px-3 rounded-lg mb-[18px]">
                <div className="w-[76px] h-[73px] rounded-[6px] flex-shrink-0">
                    <img src={img} alt="" className="w-[76px] h-[73px] rounded-[6px]" />
                </div>
                <div className="text-[#4f4f4f] flex flex-col justify-center items-start gap-y-2">
                    <span className="font-medium text-sm leading-4">{title}</span>
                    <p className="font-light text-xs leading-5 text-justify">
                        {details}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default SelectOptipnBox;