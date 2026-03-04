
import Link from 'next/link'
import Footer from '../components/Footer'
import { LuCircleChevronLeft } from "react-icons/lu";
import logo from '@/app/assets/images/logo.png'
import Image from 'next/image';
import fileIcon from '@/app/assets/images/file.svg'
import graduateIcon from '@/app/assets/images/graduate.svg'


export default function PlanPage() {
    return (
        <>
            <div className='min-h-screen flex flex-col justify-between'>
                <div>
                    <Link className='text-4xl ml-20 mt-20 inline-block' href={'/'}><LuCircleChevronLeft /></Link>
                    <div className='text-center px-5 mb-30'>
                        <Image src={logo} alt="Logo" className="w-45 mx-auto" />
                        <p className='mt-15 text-white text-[25px] mb-21'>Choisissez votre plan !</p>
                        <div className="flex justify-between max-w-3xl mx-auto gap-4 ">
                            <div className='max-w-78.5 w-full border-2 border-white rounded-[17px] h-78.5 flex flex-col justify-center text-center bg-[#BCA2EF]'>
                                <Image src={fileIcon} alt="File icon" className="w-25.5 mx-auto" />
                                <h6 className='mt-7.5 max-w-60 mx-auto font-semibold text-[25px] leading-none text-white'>Vendre votre produit digital</h6>
                            </div>
                            <div className='max-w-78.5 w-full border-2 border-white rounded-[17px] h-78.5 flex flex-col justify-center text-center bg-white'>
                                <Image src={graduateIcon} alt="Graduate icon" className="w-39.5 mx-auto" />
                                <h6 className='-mt-6 max-w-60 mx-auto font-semibold text-[25px] leading-none text-black'>Vendre votre cours en ligne</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
