import Image from "next/image";
import templateImg from '@/app/assets/images/template-img.png'
import Link from "next/link";
import { LuHeart } from "react-icons/lu";

export default function TemplateCard() {
    return (
        <>
            <Link href="/template" className="max-w-70 w-full">
                <div className="relative">
                    <Image src={templateImg} alt="Template" className="w-full rounded-3xl drop-shadow-[0px_4px_7.3px_rgba(0,0,0,0.25)] border border-white" />
                    <button className="absolute top-2 right-2 bg-primary text-white rounded-full p-0 w-7 aspect-square shadow-md hover:bg-red-600 transition-colors flex items-center justify-center cursor-pointer">
                        <LuHeart />
                    </button>
                </div>
                <div className="mt-5">
                    <h2 className="text-black text-sm">Invitation de mariage en acrylique doré - Fleurs séchées et sceau de cire</h2>
                    <p className="text-xl font-extrabold text-black mt-2">62,30 €</p>
                </div>
            </Link>
        </>
    )
}
