import Image from "next/image";
import logo from "@/app/assets/images/logo.png";
import SocialLogin from "../component/SocialLogin";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <>
            <Image src={logo} alt="Logo" className="w-25 mx-auto" />
            <h2 className="font-bold text-5xl leading-none text-white mt-6.5 max-w-100 mx-auto">Bienvenue parmis nous</h2>

            <form className="space-y-6 mt-15">
                <div>
                    <input type="email" placeholder="Adresse e-mail" className="input_design" />
                </div>
                <div>
                    <input type="password" placeholder="Mot de passe" className="input_design" />
                </div>
                <div>
                    <button className="button_design w-full py-4.5!" type="submit">Suivant</button>
                </div>
            </form>
            <p className="text-white font-semibold mt-6.5 mb-7.5">Ou</p>
            <SocialLogin />

            <p className="opacity-50 mt-10">Vous avez déjà un compte ?</p>
            <Link href="/login" className="font-bold text-white hover:text-primary mt-6 inline-block">Se connecter</Link>
        </>
    )
}
