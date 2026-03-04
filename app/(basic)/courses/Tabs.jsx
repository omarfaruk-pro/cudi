"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FiPlayCircle } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { PiLaptopLight } from "react-icons/pi";
import { useState } from "react";


export default function Tabs({ currentTab }) {
    const [tabActive, setTabActive] = useState("video");
    const router = useRouter();
    const searchParams = useSearchParams();

    const changeTab = (tab) => {
        const q = searchParams.get('q');
        setTabActive(tab);
        router.push(`/courses?q=&tab=${tab}`);
    }
    return (
        <>
            <div className="flex space-x-5 max-w-219 mx-auto justify-between items-center bg-[#BCA2EF] rounded-[30px] drop-shadow-[0px_2px_10px_rgba(0,0,0,0.25)] px-7.5 py-4.5 [&>button]:hover:text-primary text-xl font-semibold [&>button]:flex [&>button]:gap-1.25 [&>button]:items-center">
                <button className={`${tabActive === "video" ? "text-primary" : ""}`} onClick={() => changeTab("video")}><FiPlayCircle /> Vidéo course</button>
                <button className={`${tabActive === "pdf" ? "text-primary" : ""}`} onClick={() => changeTab("pdf")}> <FaRegFileAlt /> PDF files</button>
                <button className={`${tabActive === "live" ? "text-primary" : ""}`} onClick={() => changeTab("live")}> <PiLaptopLight /> Rendez-vous live coaching</button>
            </div>
        </>
    )
}
