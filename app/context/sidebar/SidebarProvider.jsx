"use client"
import { useState } from "react";
import { SidebarContext } from "./context";


export default function SidebarProvider({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return <SidebarContext value={{ sidebarOpen, setSidebarOpen }}>{children}</SidebarContext>
}
