import Image from "next/image";
import templateImg from '@/app/assets/images/template-img.png'
import Link from "next/link";

export default function TemplateCard() {
    return (
        <>
            <Link href="/template" className="max-w-70 w-full">
                <Image src={templateImg} alt="Template" className="w-full rounded-[23px] drop-shadow-[0px_4px_7.3px_rgba(0,0,0,0.25)] border border-white" />
                <div className="mt-6 px-1.5">
                    <h2 className="text-black text-sm">Invitation de mariage en acrylique doré - Fleurs séchées et sceau de cire</h2>
                    <p className="text-xl font-extrabold text-black">62,30 €</p>
                </div>
            </Link>
        </>
    )
}
