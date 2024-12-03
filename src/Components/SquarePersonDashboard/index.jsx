const SquarePersonDashboard = ({ img, title }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[70px] h-[70px] rounded-[8px] mb-2">
                <img src={img} alt="daicon-1" className="w-full h-full" />
            </div>
            <span className="text-[#818181]  font-medium text-[12px] leading-4 text-center ">{title}</span>
        </div>
    );
}

export default SquarePersonDashboard;