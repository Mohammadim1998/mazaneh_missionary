const EventFilterModal = ({ opneModalEvent, setOpenModalEvent }) => {
    return (
        <div onClick={() => setOpenModalEvent(false)} className={`z-[80] fixed ${opneModalEvent ? "bottom-0" : "bottom-[-100%]"} left-0 w-full h-full bg-[#0000008C]`}>
            <div onClick={(e) => e.stopPropagation()} className="absolute bottom-0 left-0 right-0 w-full h-[76%] rounded-t-[28px] shadow-[0px_-1px_6px_0px_#00000026] bg-white">
                <div onClick={() => setOpenModalEvent(false)} className="absolute top-2 left-[50%] translate-x-[-50%] w-16 h-1 bg-[#D9D9D9]"></div>
            </div>
        </div>
    );
}

export default EventFilterModal;