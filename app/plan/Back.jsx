"use client";

import { useRouter } from "next/navigation";
import { LuCircleChevronLeft } from "react-icons/lu";

export default function BackButton() {
  const router = useRouter();

  return (
    <button className="text-4xl ml-15 mt-15 inline-block cursor-pointer" onClick={() => router.back()}>
      <LuCircleChevronLeft />
    </button>
  );
}