import Link from "next/link";

const HeaderInviteBox = ({ title, href }) => {
    return (
        <div className="w-full h-[48px] bg-white flex justify-between items-center p-[12px_16px_11px_16px] child:cursor-pointer border-b-[1px] border-b-[#D2D2D2] shadow-[0px_1px_9px_0px_#1D266C1A]">
            <span className="font-semibold text-base text-[#4F4F4F]">{title}</span>
            {href ? (<Link href={`/${href}`}>
                <span className="w-5 h-5"><img src="/images/svg/invite/arrowLeft.svg" alt="" className="w-full h-full" /></span>
            </Link>) : null}
        </div>
    );
}

export default HeaderInviteBox;