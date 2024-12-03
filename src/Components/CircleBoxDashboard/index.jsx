const CircleBoxDashboard = ({ img, title, subTitle }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[52px] h-[52px] flex justify-center items-center bg-[#ffffff] rounded-[35px] mb-2">
                <div className="w-[28px] h-[28px] flex justify-center items-center">
                    <img src={img} alt="daicon-1" className="" />
                </div>
            </div>
            <span className="text-white  font-medium text-[11px] leading-4 text-center mb-1">{title}</span>
            <span className="text-white  font-medium text-[11px] leading-4 text-center">{`${subTitle.toLocaleString("fa-IR")} مورد`}</span>
        </div>
    );
}

export default CircleBoxDashboard;