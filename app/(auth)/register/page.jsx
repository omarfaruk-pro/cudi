import Image from "next/image";
import logo from "@/app/assets/images/logo.png";
import SocialLogin from "../component/SocialLogin";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <>
            <Image src={logo} alt="Logo" className="w-25 mx-auto" />
            <h2 className="font-bold text-[4rem] leading-none text-white mt-6.5 max-w-100 mx-auto">Bienvenue parmis nous</h2>

            <form className="space-y-12 mt-20">
                <div>
                    <input type="email" placeholder="Adresse e-mail" className="input_design" />
                </div>
                <div>
                    <input type="password" placeholder="Mot de passe" className="input_design" />
                </div>
                <div>
                    <button className="button_design w-full" type="submit">Suivant</button>
                </div>
            </form>
            <p className="text-white font-semibold mt-6.5 mb-7.5">Ou</p>
            <SocialLogin />

            <p className="text-[17px] opacity-50 mt-12">Vous avez déjà un compte ?</p>
            <Link href="/login" className="text-[17px] font-bold text-white hover:text-primary mt-6.5 inline-block">Se connecter</Link>
        </>
    )
}
