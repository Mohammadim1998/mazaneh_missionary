"use client";
import { useEffect, useState } from "react";
import { Categories, Categoris_questions } from "../Services";
import Box from "./Box";
import { AutocompleteStyleDesign, StyledTextField } from "../(Profile)/Resume/Inputs";
import { useRouter } from "next/navigation";

const Faq = () => {
    const [activeCategory, setActiveCategory] = useState("allCategories");
    const [questionsArr, setQuestionsArr] = useState([]);
    const [search, setSearch] = useState(Categoris_questions[0]?.faq);

    const toggleCategory = (categoryID) => {
        setActiveCategory(categoryID == activeCategory ? categoryID : categoryID);
    };

    useEffect(() => {
        setQuestionsArr(Categoris_questions.filter(item => item.category === activeCategory));
    }, [activeCategory]);

    const [activeIndex, setActiveIndex] = useState(0);
    const handleIndex = (index) => {
        setActiveIndex(index)
    };
    const router = useRouter();

    return (
        <div className="w-full pb-8">
            <div className="w-full h-12 bg-[#2B39A1] flex justify-start items-center gap-x-2 p-4">
                <div onClick={() => router.back()} className="w-[14px] h-[14px]"><img src="/images/svg/profile/rightArrowWhite.svg" alt="" /></div>
                <span className="text-white font-medium text-sm leading-5">سوالات متداول</span>
            </div>

            <div className="w-full bg-[#e9f0ff] py-8 px-6">
                <h2 className="font-extrabold text-center text-2xl text-[#1d256d]">موضوع پرسش شما چیست؟</h2>

                <div className="w-full rounded-3xl mt-6">
                    <AutocompleteStyleDesign
                        id="search"
                        disablePortal
                        options={search || []}
                        getOptionLabel={(option) => option?.question}
                        renderInput={(params) => (
                            <StyledTextField {...params} label="جستجوی موضوع..." />
                        )}
                    />

                </div>
                <span className="font-extrabold text-center text-base text-[#1d256d] mt-2 mb-12 block">موضوع مورد نظرتان را جستجو کرده یا از دسته بندی زیر انتخاب کنید</span>

                <div className="w-full h-[2px] bg-white"></div>
            </div>

            <div className="w-full bg-[#e9f0ff] flex flex-col justify-center items-center">
                <h1 className="font-bold text-[#777777] text-base">دسته بندی پرسش ها</h1>

                <div className="w-full grid grid-cols-2 gap-6 child:rounded-2xl p-4">
                    {Categories.map((category, index) => (
                        <div key={index} onClick={() => {
                            toggleCategory(category.id);
                            handleIndex(index);
                        }} className={`h-[122px] ${index === activeIndex ? "bg-white" : "bg-[#FFFFFF40]"} flex flex-col gap-y-4 justify-center items-center p-4 border-[1px] border-[#ddd]`}>
                            <div className="w-11 h-11 flex justify-center items-center">
                                <img src={index === activeIndex ? category.img2 : category.img1} alt="" className="w-full h-full" />
                            </div>
                            <span className={`${index === activeIndex ? "text-[#1d266c]" : "text-[#999999]"} font-semibold text-xs text-center leading-5`}>{category.title}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full px-4 mt-8">
                <h2 className="font-extrabold text-center text-2xl text-[#1d256d] mb-4">پرسش های متداول</h2>
                {
                    questionsArr[0]?.faq.map((question) => (
                        <Box key={question.id} data={question} />
                    ))
                }
            </div>
        </div>
    );
}

export default Faq;