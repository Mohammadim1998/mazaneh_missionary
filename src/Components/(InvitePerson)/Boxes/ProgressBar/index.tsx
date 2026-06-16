const ProgressBar = () => {
    return (
        <section className="step-wizard" dir='ltr'>
        <ul className="step-wizard-list">
            <li className="step-wizard-item">
                <span className="progress-count"><div className="w-2 h-2 bg-[#B9976C] rounded-full"></div></span>
                <span className="progress-label font-extralight text-[10px] leading-4">ثبت درخواست</span>
            </li>
            <li className="step-wizard-item">
                <span className="progress-count"><div className="w-2 h-2 bg-[#B9976C] rounded-full"></div></span>
                <span className="progress-label font-extralight text-[10px] leading-4">اعلان آمادگی مبلغ</span>
            </li>
            <li className="step-wizard-item current-item">
                <span className="progress-count"><div className="w-2 h-2 bg-[#B9976C] rounded-full"></div></span>
                <span className="progress-label font-extralight text-[10px] leading-4">تایید میزبان</span>
            </li>
            <li className="step-wizard-item">
                <span className="progress-count"><div className="w-2 h-2 bg-[#B9976C] rounded-full"></div></span>
                <span className="progress-label font-extralight text-[10px] leading-4">نظرسنجی</span>
            </li>
        </ul>
    </section>
    );
}

export default ProgressBar;