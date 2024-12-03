import NewsDetails from "@/Components/News/NewsDetails";

const page = ({params}) => {
    
    return (
        <div>
            <NewsDetails params={params} />
        </div>
    );
}

export default page;