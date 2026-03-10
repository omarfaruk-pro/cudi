"use client"
import { useContext } from "react";
import { SidebarContext } from "../context/sidebar/context";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export default function Hamburger() {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext)

    return (
        <>
            <button className="cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)}>{sidebarOpen ? <RxCross2 /> : <FaBars />}</button>
        </>
    )
}
