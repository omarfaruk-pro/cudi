"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, className = "" }) {
    const pathname = usePathname();

    const isActive =
        pathname === href || pathname.startsWith(href + "/");

    return (
        <Link
            href={href}
            className={`${isActive
                ? "bg-[rgba(99,99,99,0.31)]"
                : ""
                } ${className}`}
        >
            {children}
        </Link>
    );
}