import Box from "./Box";

const HostComp = () => {
    return (
        <div className="w-full pb-24">
            <div className="flex  bg-[#F6F6F6] flex-col gap-y-2">
                <Box read={1} stepPage={1} />
                <Box read={0} stepPage={2} />
                <Box read={1} stepPage={1} />
                <Box read={0} stepPage={2} />
            </div>
        </div>
    );
}

export default HostComp;