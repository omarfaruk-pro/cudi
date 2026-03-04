"use client"
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import searchIcon from '@/app/assets/images/search.svg'

export default function SearchInput({ defaultValue }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const q = searchParams.get('q');

    const searchText = (value) => {
        const tab = searchParams.get('tab');
        router.push(`/courses?q=${value}&tab=${tab}`);
    }
    return (
        <>

            <div className="relative  max-w-56 w-full shrink-0 my-10">
                <Image src={searchIcon} alt="Search icon" className="w-4 absolute top-1/2 left-2.5 -translate-y-1/2" />
                <input type="search" value={q || ''} placeholder="Recherche" onChange={(e) => searchText(e.target.value)} className="pl-8 pr-2.5 bg-white rounded-[36px] text-[13px] text-background placeholder:text-[#9C9C9C] w-full py-2.25 font-medium focus:outline-none leading-none" />
            </div>
        </>
    )
}
