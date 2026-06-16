"use client";
const box = ({ setLocId, id }) => {
    const datas = [
        {
            id: 1,
            title: "مسجد امیر المومنین علی ابن ابی طالب علیه السلام",
            subTitle: "قم، قم، خیابان جمهوی",
            star: "2.4",
            historyOfCase: "24",
            kindOfOccupy: "خانوادگی",
            kindOfPreference: "توافقی",
            img1: "/images/svg/actions/action3.jpg",
            img2: "/images/svg/actions/action1.jpg",
            img3: "/images/svg/actions/action2.jpg",
        },
        {
            id: 2,
            title: "مسجد امیر المومنین علی ابن ابی طالب علیه السلام",
            subTitle: "تهران تهران خیابان جمهوی",
            star: "2.4",
            historyOfCase: "24",
            kindOfOccupy: "خانوادگی",
            kindOfPreference: "توافقی",
            img1: "/images/svg/actions/action1.jpg",
            img2: "/images/svg/actions/action2.jpg",
            img3: "/images/svg/actions/action3.jpg",
        },

    ];

    return (
        <div className={`absolute w-10 h-10  transition-all duration-500`}
            onClick={() => {
                setLocId(datas.find((data) => data.id == id))
            }}
        >
            <img src={"/images/svg/actions/locationRed.svg"} alt="" className="w-[33px] h-[28px] transition-all duration-500" />
        </div>

    );
}

export default box;