
const SquareBox = ({ img, title }) => {
    return (
        <div className="h-[145px] flex flex-col justify-center items-center cursor-pointer pb-2 bg-[#FFFFFF] shadow-[0px_1px_2px_0px_#00000040] rounded-[8px] ">
            <div className="h-[100px] flex justify-center items-center">
                <div className="w-[50px] h-[50px] flex justify-center items-center">
                    <img src={img} alt="daicon-1" className="w-[50px] h-[50px]" />
                </div>
            </div>
            <span className="text-[#616161] h-[40px] font-medium text-sm leading-5 text-center">{title}</span>
        </div>
    );
}

export default SquareBox;