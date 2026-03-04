"use client";
import closeIcon from "@/app/assets/images/close-icon.svg";
import NavLink from "@/app/components/NavLink";
import Image from "next/image";
import { useState } from "react";
import templateIcon from "@/app/assets/images/template-icon.svg";
import ebooksIcon from "@/app/assets/images/ebooks-icon.svg";
import softwareIcon from "@/app/assets/images/software-icon.svg";
import musicIon from "@/app/assets/images/music-icon.svg";
import uiKitsIcon from "@/app/assets/images/ui-kits-icon.svg";
import photosIcon from "@/app/assets/images/photo-icon.svg";
import coursesIcon from "@/app/assets/images/courses-icon.svg";
import pdfEditorIcon from "@/app/assets/images/pdf-editor-icon.svg";

export default function SidebarWrap({ children }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="flex gap-2.5 p-2.5">
                <div className={`${open ? "sidebar-open" : "sidebar-close"} sidebar w-full shrink-0 bg-black py-15 rounded-xl sticky top-0 h-[calc(100vh-10px)]`}>
                    <div>
                        <button onClick={() => setOpen(!open)} className={`${open ? "px-9" : "px-5.5"} font-extrabold text-[28px] flex gap-5 items-center cursor-pointer`}>
                            <Image src={closeIcon} alt="Close" className={`w-8 ${!open && "rotate-180"}`} />
                            <span className={`${!open && "hidden"}`}>Bibliothèque</span>
                        </button>
                        <ul className="mt-13 space-y-3 overflow-x-auto h-[calc(100vh-180px)]">
                            <li>
                                <NavLink href="/template">
                                    <Image src={templateIcon} alt="Template" className="w-8" />
                                    <span>Template</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/ebooks">
                                    <Image src={ebooksIcon} alt="Template" className="w-8" />
                                    <span>Ebooks</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/software">
                                    <Image src={softwareIcon} alt="Template" className="w-8" />
                                    <span>Software</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/music">
                                    <Image src={musicIon} alt="Template" className="w-8" />
                                    <span>Music</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/ui-kits">
                                    <Image src={uiKitsIcon} alt="Template" className="w-8" />
                                    <span>UI Kits</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/photos">
                                    <Image src={photosIcon} alt="Template" className="w-8" />
                                    <span>Photos</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/courses">
                                    <Image src={coursesIcon} alt="Template" className="w-8" />
                                    <span>Courses</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/pdf-editor">
                                    <Image src={pdfEditorIcon} alt="Template" className="w-8" />
                                    <span>PDF Editor</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full bg-foreground rounded-xl text-black">{children}</div>
            </div>
        </>
    )
}
