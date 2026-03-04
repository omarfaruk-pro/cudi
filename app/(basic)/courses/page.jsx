import CourseCard from "./CourseCard";
import SearchInput from "./SearchInput";
import Tabs from "./Tabs";


export default async function CoursesPage({ searchParams }) {
    const tab = await searchParams.tab ?? 'video';
    const q = await searchParams.q ?? '';
    return (
        <>
            <div className="px-10 pt-25 pb-10">
                <Tabs currentTab={tab} />
                <SearchInput defaultValue={q} />
            </div>
            <div className=" flex justify-center gap-x-10 gap-y-17 flex-wrap ">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </>
    )
}
