import Box from "./Box";

const YourInvitesComp = () => {
    return (
        <div className="pb-24">
            <div className="flex flex-col bg-[#F6F6F6] gap-y-2">
                <Box read={1} stepPage={3} />
                <Box read={0} stepPage={2} />
                <Box read={1} stepPage={1} />
                <Box read={0} stepPage={2} />
                <Box read={0} stepPage={3} />
                <Box read={1} stepPage={2} />
                <Box read={0} stepPage={5} />
            </div>
        </div>
    );
}

export default YourInvitesComp;