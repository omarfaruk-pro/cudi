"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import searchIcon from "@/app/assets/images/search.svg";

export default function SearchArea() {
    const [isOpen, setIsOpen] = useState(false);

    const modalRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (
                modalRef.current &&
                !modalRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        }

        function handleEsc(e) {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <>
            {/* Search Button */}
            <div className="relative w-10 bg-white shrink-0">
                <button
                    ref={buttonRef}
                    className="bg-white w-full cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <Image
                        src={searchIcon}
                        alt="Search icon"
                        className="w-6.5 absolute top-1/2 left-6 -translate-y-1/2"
                    />
                </button>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/45 flex items-center justify-center p-5 z-50">
                    <div
                        ref={modalRef}
                        className="max-w-lg w-full bg-white rounded-xl relative p-10"
                    >
                        <input
                            type="search"
                            placeholder="Search..."
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none"
                        />
                    </div>
                </div>
            )}

            {/* Normal Search Input */}
            <div className="relative max-w-lg w-full shrink-0">
                <Image
                    src={searchIcon}
                    alt="Search icon"
                    className="w-6.5 absolute top-1/2 left-6 -translate-y-1/2"
                />
                <input
                    type="search"
                    className="pl-17 pr-6 bg-theme-white rounded-4xl text-lg text-dark placeholder:text-[#9C9C9C] w-full py-3.25 font-medium focus:outline-none"
                    placeholder="Que souhaite-vous chercher ?"
                />
            </div>
        </>
    );
}