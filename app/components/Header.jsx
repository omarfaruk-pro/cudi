import Link from "next/link";
import cartIcon from '@/app/assets/images/cart.svg'
import heartIcon from '@/app/assets/images/heart.svg'
import logo from '@/app/assets/images/logo.png'
import Image from "next/image";
import searchIcon from '@/app/assets/images/search.svg'



export default function Header() {
    return (
        <>
            <header className="bg-black px-12 flex items-center justify-between py-7">
                <div className="flex items-center gap-17">
                    <Link href="/" className="block w-20 shrink-0">
                        <Image src={logo} alt="Logo" className="w-full" />
                    </Link>
                    <div className="relative max-w-lg w-full shrink-0">
                        <Image src={searchIcon} alt="Search icon" className="w-6.5 absolute top-1/2 left-6 -translate-y-1/2" />
                        <input type="search" className="pl-17 pr-6 bg-theme-white rounded-4xl text-lg text-dark placeholder:text-[#9C9C9C] w-full py-3.25 font-medium focus:outline-none" placeholder="Que souhaite-vous chercher ?" />
                    </div>
                </div>

                <div className="flex items-center">
                    <Link href="/plan" className="button_design">Vendre avec CUDI</Link>
                    <span className="inline-block h-9.5 w-[1.5px] bg-white mx-15"></span>
                    <div className="relative w-6.5">
                        <Image src={heartIcon} alt="Wishlist icon" className="w-full" />
                        <span className="absolute -top-2.5 -right-1 font-extrabold text-base text-primary">0</span>
                    </div>
                    <div className="mx-10"><Image src={cartIcon} alt="Cart icon" /></div>
                    <Link href="/register" className="font-semibold text-base mr-5 inline-block text-white hover:text-primary">S’inscrire</Link>
                    <Link href="/login" className="button_design white_btn">Se connecter</Link>
                </div>
            </header>
        </>
    )
}
