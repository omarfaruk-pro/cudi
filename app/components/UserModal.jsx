"use client"
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

export default function UserModal() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div>
                <button className="text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}><FaRegUserCircle /></button>
                {isOpen && <div className="absolute top-12 right-0 bg-white w-40 p-2 rounded-md shadow-md">User</div>}
            </div>
        </>
    )
}
