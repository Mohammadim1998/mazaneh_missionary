import { useFieldArray, useForm } from "react-hook-form";

const formsSocial = () => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            forms: [{}],
        },
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "forms",
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center justify-center"
        >
            {fields.map((item, index) => (
                <div key={item.id} className="w-full flex flex-col items-center gap-y-2">
                    <div className="w-full">
                        <input
                            className="w-full h-10 border-[1px] border-orange-600 rounded-lg px-2"
                            {...register(`forms.${index}.name`, {
                                required: "این فیلد اجباری است",
                            })}
                            placeholder="نام"
                        />
                        {errors.forms?.[index]?.name && (
                            <div style={{ color: "red" }}>
                                {errors.forms[index].name.message}
                            </div>
                        )}
                    </div>

                    <div className="w-full">
                        <input
                            className="w-full h-10 border-[1px] border-orange-600 rounded-lg px-2"
                            {...register(`forms.${index}.family`, {
                                required: "این فیلد اجباری است",
                            })}
                            placeholder="نام خانوادگی"
                        />
                        {errors.forms?.[index]?.family && (
                            <div style={{ color: "red" }}>
                                {errors.forms[index].family.message}
                            </div>
                        )}
                    </div>


                    {index == 0 ? (
                        ""
                    ) : (
                        <button
                            className="bg-blue-600 flex px-2 py-1 text-white rounded-sm mt-4"
                            onClick={() => remove(index)}
                        >
                            حذف فرم
                        </button>
                    )}
                </div>
            ))}

            <button
                className="bg-blue-600 px-2 py-1 text-white rounded-sm mt-4"
                onClick={() => append({})}
            >
                افزودن فرم جدید
            </button>
            <br />
            <button type="submit">
                ارسال
            </button>
        </form>
    );
}

export default formsSocial;