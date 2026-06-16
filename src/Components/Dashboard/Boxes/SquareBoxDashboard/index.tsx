
const SquareBoxDashboard = ({ img, title }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[62px] h-[60px] flex justify-center items-center bg-[#FFFFFF] shadow-[0px_1px_2px_0px_#00000040] rounded-[8px] mb-2">
                <div className="w-[40px] h-[40px] flex justify-center items-center">
                    <img src={img} alt="daicon-1" className="" />
                </div>
            </div>
            <span className="text-[#616161] font-normal text-xs leading-4 text-center">{title}</span>
        </div>
    );
}

export default SquareBoxDashboard;