"use client";
import Box from "./Box";
import { dataAddress } from "@/Components/Services";

const TestApp = () => {

    return (
        <div className="w-full">
            {
                dataAddress.map((item) => (
                    <Box item={item} key={item.id} />
                ))
            }
        </div>
    );
}

export default TestApp;