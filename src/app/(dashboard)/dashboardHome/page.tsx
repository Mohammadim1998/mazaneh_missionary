import DashboardHome from "@/Components/Dashboard/DashboardPages/DashboardHome";
import Layout from "@/Components/Layout/Layout";

const page = () => {
    return (
        <div className="w-full h-full bg-[#F6F6F6]">

        <Layout>
            <DashboardHome />
        </Layout>
        </div>
    );
}

export default page;