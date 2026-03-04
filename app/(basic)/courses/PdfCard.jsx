import Image from "next/image";
import Link from "next/link";
import courseImg from '@/app/assets/images/pdf-img.png'

export default function PdfCard() {
    return (
        <>
            <Link href="/courses" className="max-w-75 w-full">
                <div className="relative">
                    <Image src={courseImg} alt="Template" className="w-full rounded-2xl" />
                </div>
                <div className="mt-2.5 px-4.5 text-black text-[15px] font-semibold ">
                    <h2>Titre</h2>
                    <p className="mt-1 mb-1">Rates</p>
                    <p>Prix</p>
                </div>
            </Link>
        </>
    )
}
