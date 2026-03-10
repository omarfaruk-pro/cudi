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
                <div className={`${open ? "sidebar-open" : "sidebar-close"} sidebar w-full shrink-0 bg-black py-10 rounded-xl sticky top-0 h-[calc(100vh-10px)]`}>
                    <div>
                        <button
                                onClick={() => setOpen(!open)}
                                className={`font-bold text-2xl flex gap-5 items-center cursor-pointer transition-all duration-300 ease-in-out ${open ? "px-9" : "px-5.5"}`}
                            >
                                <Image
                                    src={closeIcon}
                                    alt="Close"
                                    className={`w-8 transition-transform duration-300 ${!open && "rotate-180"}`}
                                />
                                <span
                                    className={`transition-opacity duration-300 ease-in-out ${open ? "opacity-100" : "opacity-0"}`}
                                >
                                    Bibliothèque
                                </span>
                            </button>
                        <ul className="mt-8 space-y-3">
                            <li>
                                <NavLink href="/template">
                                    <Image src={templateIcon} alt="Template" className="w-10" />
                                    <span>Template</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/ebooks">
                                    <Image src={ebooksIcon} alt="Template" className="w-10" />
                                    <span>Ebooks</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/software">
                                    <Image src={softwareIcon} alt="Template" className="w-10" />
                                    <span>Software</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/music">
                                    <Image src={musicIon} alt="Template" className="w-10" />
                                    <span>Music</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/ui-kits">
                                    <Image src={uiKitsIcon} alt="Template" className="w-10" />
                                    <span>UI Kits</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/photos">
                                    <Image src={photosIcon} alt="Template" className="w-10" />
                                    <span>Photos</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/courses">
                                    <Image src={coursesIcon} alt="Template" className="w-10" />
                                    <span>Courses</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/pdf-editor">
                                    <Image src={pdfEditorIcon} alt="Template" className="w-10" />
                                    <span>PDF Editor</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full bg-theme-white rounded-xl text-black">{children}</div>
            </div>
        </>
    )
}
