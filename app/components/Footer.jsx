import logo from "@/app/assets/images/logo.png"
import Image from "next/image"
import Link from "next/link";
import { FaInstagram, FaPinterestP, FaYoutube, FaTiktok, FaWhatsapp, FaFacebookF } from "react-icons/fa6";
import paymentImg from "@/app/assets/images/payment.png"


export default function Footer() {
    return (
        <>
            <footer className="px-2.5">
                <div className="bg-black px-20 pt-20 pb-17 rounded-b-[10px]">
                    <div className="grid grid-cols-4">
                        <div className="pt-7">
                            <Image src={logo} alt="Logo" className="w-20" />
                            <div className="flex mt-6 gap-4 text-xl text-white">
                                <a href="#" target="_blank">
                                    <FaFacebookF />
                                </a>
                                <a href="#" target="_blank">
                                    <FaInstagram />
                                </a>
                                <a href="#" target="_blank">
                                    <FaPinterestP />
                                </a>
                                <a href="#" target="_blank">
                                    <FaYoutube />
                                </a>
                                <a href="#" target="_blank">
                                    <FaTiktok />
                                </a>
                                <a href="#" target="_blank">
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-xl font-bold mb-1.5">CUDI</h5>
                            <ul className="columns-2">
                                <li><Link className="block text-xl leading-relaxed" href="#">Template</Link></li>
                                <li><Link className="block text-xl leading-relaxed" href="#">Ebooks</Link></li>
                                <li><Link className="block text-xl leading-relaxed" href="#">Software</Link></li>
                                <li><Link className="block text-xl leading-relaxed" href="#">Music</Link></li>
                                <li><Link className="block text-xl leading-relaxed" href="#">UI Kits</Link></li>
                                <li><Link className="block text-xl leading-relaxed" href="#">Photos</Link></li>
                                <li><Link className="block text-xl leading-relaxed" href="#">Courses</Link></li>
                                <li><Link className="block text-xl leading-relaxed" href="#">PDF Editor</Link></li>
                            </ul>

                        </div>
                        <div>
                            <h5 className="text-xl font-bold mb-1.5">LEGAL</h5>
                            <ul>
                                <li><Link className="block text-xl leading-relaxed" href="#">Conditions générales de vente</Link></li>
                                <li><Link className="block text-xl leading-relaxed" href="#">Confidentialité</Link></li>
                                <li><Link className="block text-xl leading-relaxed" href="#">Mentions légales</Link></li>
                                <li><Link className="block text-xl leading-relaxed" href="#">Livraison & retours</Link></li>
                                <li><Link className="block text-xl leading-relaxed" href="#">Gérer mes cookies</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-xl font-bold mb-5">Inscrivez-vous à notre newsletter</h5>
                            <p className="text-[13px]">Inscrivez-vous à notre newsletter et obtenez 10% de reduction pour une première commande.</p>

                            <form className="flex px-2.25 py-1.5 border border-white rounded-3xl mt-4">
                                <input type="text" className="pl-5 py-1.5 focus:outline-none w-full text-xl" placeholder="E-mail" />
                                <button type="submit" className="px-5 rounded-[20px] flex items-center justify-center bg-[#D9D9D9] text-black hover:text-white hover:bg-primary">Envoyer</button>
                            </form>

                            <Image src={paymentImg} alt="payment" className="mt-4.5 h-18 mx-auto" />
                        </div>
                    </div>
                </div>

                <div className="mt-2.5 rounded-xl bg-linear-to-r from-primary to-[#BCA2EF] flex justify-between items-center px-14 py-5.5">
                    <p className="text-2xl font-semibold">Inscrivez-vous pamris nous !</p>
                    <Link href="/register" className="px-18 rounded-[54px] flex items-center justify-center bg-white text-black font-semibold text-2xl hover:text-white hover:bg-primary h-20.5">S&apos;inscrire</Link>
                </div>
            </footer>
        </>
    )
}
