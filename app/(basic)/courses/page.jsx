import CourseCard from "./CourseCard";
import PdfCard from "./PdfCard";
import SearchInput from "./SearchInput";
import Tabs from "./Tabs";


export default async function CoursesPage({ searchParams }) {
    const params = await searchParams;

    const tab = params.tab ?? "video";
    const q = params.q ?? "";
    return (
        <>
            <div className="px-10 pt-25 pb-10">
                <Tabs currentTab={tab} />
                <SearchInput defaultValue={q} />
                {
                    tab === "video" &&
                    <div className=" flex gap-x-10 gap-y-7.5 flex-wrap mt-8">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>

                }
                {
                    tab === "pdf" &&
                    <div className=" flex gap-x-10 gap-y-7.5 flex-wrap mt-8">
                        <PdfCard />
                        <PdfCard />
                        <PdfCard />
                        <PdfCard />
                        <PdfCard />
                    </div>
                }
            </div>
        </>
    )
}
