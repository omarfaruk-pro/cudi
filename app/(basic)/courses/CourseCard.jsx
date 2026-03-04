import Image from "next/image";
import Link from "next/link";
import courseImg from '@/app/assets/images/course-img.png'
import playIcon from '@/app/assets/images/play-icon.svg'


export default function CourseCard() {
    return (
        <>
            <Link href="/music" className="max-w-75 w-full">
                <div className="relative">
                    <Image src={courseImg} alt="Template" className="w-full rounded-2xl" />
                    <Image src={playIcon} alt="Template" className="w-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="mt-4.25 px-4.5">
                    <h2 className="text-black text-sm">MAGNITOS</h2>
                    <p className="text-xl font-extrabold text-black">62,30 €</p>
                </div>
            </Link>
        </>
    )
}
