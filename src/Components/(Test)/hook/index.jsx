"use client";
import { useForm } from "react-hook-form";

const Hook = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const submiter = (data) => console.log(data);
    console.log(watch("name"));
    console.log(watch("age"));

    return (
        <div className="p-6">
            <form className="" onSubmit={handleSubmit(submiter)}>
                <div className="w-full grid grid-cols-1 gap-y-4">
                    <input type="text" placeholder="Enter Your Name" className="border-[1px] border-r-gray-400"
                        {...register("name")}
                    />

                    <input type="text" placeholder="Enter Your Age" className="border-[1px] border-r-gray-400"
                        {...register("age", {
                            required: true
                        })}
                    />
                    {errors.age && errors.age.type === "required" && <div className="text-rose-600">Fill this input</div>}

                    <select {...register("gender")}>
                        <option value="0">female</option>
                        <option value="1">male</option>
                        <option value="2">other</option>
                    </select>

                    <button type="submit" className="mt-8 bg-blue-400 px-6 py-2">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Hook;