
import Link from "next/link";
import cartIcon from '@/app/assets/images/cart.svg'
import heartIcon from '@/app/assets/images/heart.svg'
import logo from '@/app/assets/images/logo.png'
import Image from "next/image";
import Hamburger from "./Hamburger";
import UserModal from "./UserModal";
import SearchArea from "./SearchArea";



export default function Header() {

    return (
        <>
            <header className="bg-black px-12 flex items-center justify-between py-7">
                <div className="flex items-center gap-17">
                    <Hamburger />
                    <Link href="/" className="block w-20 shrink-0">
                        <Image src={logo} alt="Logo" className="w-full" />
                    </Link>
                    <SearchArea />
                </div>

                <div className="flex items-center">
                    <Link href="/plan" className="button_design">Vendre avec CUDI</Link>
                    <span className="inline-block h-9.5 w-[1.5px] bg-white mx-15"></span>
                    <div className="relative w-6.5">
                        <Image src={heartIcon} alt="Wishlist icon" className="w-full" />
                        <span className="absolute -top-2.5 -right-1 font-extrabold text-base text-primary">0</span>
                    </div>
                    <div className="mx-10 w-6.5"><Image src={cartIcon} className="w-100" alt="Cart icon" /></div>
                    <Link href="/register" className="font-semibold text-base mr-5 inline-block text-white hover:text-primary">S’inscrire</Link>
                    <Link href="/login" className="button_design white_btn">Se connecter</Link>

                    <UserModal />
                </div>
            </header>
        </>
    )
}
