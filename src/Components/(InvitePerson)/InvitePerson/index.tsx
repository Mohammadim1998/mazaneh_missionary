import HeaderInviteBox from "../Boxes/HeaderInviteBox";
import SelectOptipnBox from "../Boxes/SelectOptipnBox";

const InvitePerson = () => {
    return (
        <main className="relative w-full h-screen">
            <div className="absolute top-0 left-0 w-full">
                <HeaderInviteBox title={"انتخاب نوع مبلغ"} href={"dashboardHome"} />
            </div>

            <section className="w-full pt-[68px] px-4">
                <span className="text-[#757579] font-medium text-xs leading-5">لطفا نوع مبلغی مد نظر خود را برای جلسه تان انتخاب کنید.</span>
                <div className="w-full mt-4">
                    <SelectOptipnBox href={"selectAddress"} img={"/images/jpg/person-1.jpg"} title={"سخنران"} details={"شما با انتخاب این گزینه می‌توانید سخنران هیئت یا مسجد و... خود را انتخاب نمایید."} />
                    <SelectOptipnBox href={"selectAddress"} img={"/images/jpg/person-2.jpg"} title={"امام جماعت "} details={"شما با انتخاب این گزینه می‌توانید سخنران هیئت یا مسجد و... خود را انتخاب نمایید. "} />
                    <SelectOptipnBox href={"selectAddress"} img={"/images/jpg/person-3.jpg"} title={"روحانی مستقر"} details={"شما با انتخاب این گزینه می‌توانید سخنران هیئت یا مسجد و... خود را انتخاب نمایید. "} />
                </div>
            </section>
        </main>
    );
}

export default InvitePerson;