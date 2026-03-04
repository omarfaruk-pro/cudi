"use client"
import { useRouter, useSearchParams } from "next/navigation";


export default function SearchInput({ defaultValue }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const searchText = (q) => {
        const tab = searchParams.get('tab');
        router.push(`/courses?q=${q}&tab=${tab}`);
    }
    return (
        <>
            <div>
                <input type="text" defaultValue={defaultValue} placeholder="Recherche" onChange={(e) => searchText(e.target.value)} />
            </div>
        </>
    )
}
