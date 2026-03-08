import logo from "@/app/assets/images/logo.png"
import Image from "next/image"
import Link from "next/link";
import { FaInstagram, FaPinterestP, FaYoutube, FaTiktok, FaWhatsapp, FaFacebookF } from "react-icons/fa6";
import paymentImg from "@/app/assets/images/payment.png"


export default function Footer() {
    return (
        <>
            <footer className="px-2.5">
                <div className="bg-black px-12 pt-20 pb-17 rounded-lg">
                    <div className="flex justify-between flex-wrap gap-10">
                        <div className="pt-7">
                            <Image src={logo} alt="Logo" className="w-20" />
                            <div className="flex mt-6 gap-4 text-xl text-white">
                                <a href="#" target="_blank" className="hover:text-primary">
                                    <FaFacebookF />
                                </a>
                                <a href="#" target="_blank" className="hover:text-primary">
                                    <FaInstagram />
                                </a>
                                <a href="#" target="_blank" className="hover:text-primary">
                                    <FaPinterestP />
                                </a>
                                <a href="#" target="_blank" className="hover:text-primary">
                                    <FaYoutube />
                                </a>
                                <a href="#" target="_blank" className="hover:text-primary">
                                    <FaTiktok />
                                </a>
                                <a href="#" target="_blank" className="hover:text-primary">
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-xl font-bold mb-1.5">CUDI</h5>
                            <ul className="columns-2 gap-15">
                                <li><Link className="block text-xl hover:text-primary leading-relaxed" href="/template">Template</Link></li>
                                <li><Link className="block text-xl hover:text-primary leading-relaxed" href="/ebooks">Ebooks</Link></li>
                                <li><Link className="block text-xl hover:text-primary leading-relaxed" href="/software">Software</Link></li>
                                <li><Link className="block text-xl hover:text-primary leading-relaxed" href="/music">Music</Link></li>
                                <li><Link className="block text-xl hover:text-primary leading-relaxed" href="/ui-kits">UI Kits</Link></li>
                                <li><Link className="block text-xl hover:text-primary leading-relaxed" href="/photos">Photos</Link></li>
                                <li><Link className="block text-xl hover:text-primary leading-relaxed" href="/courses">Courses</Link></li>
                                <li><Link className="block text-xl hover:text-primary leading-relaxed" href="/pdf-editor">PDF Editor</Link></li>
                            </ul>

                        </div>
                        <div>
                            <h5 className="text-xl font-bold mb-1.5">LEGAL</h5>
                            <ul>
                                <li><Link className="block text-xl hover:text-primary leading-relaxed" href="#">Conditions générales de vente</Link></li>
                                <li><Link className="block text-xl hover:text-primary leading-relaxed" href="#">Confidentialité</Link></li>
                                <li><Link className="block text-xl hover:text-primary leading-relaxed" href="#">Mentions légales</Link></li>
                                <li><Link className="block text-xl hover:text-primary leading-relaxed" href="#">Livraison & retours</Link></li>
                                <li><Link className="block text-xl hover:text-primary leading-relaxed" href="#">Gérer mes cookies</Link></li>
                            </ul>
                        </div>
                        <div className="max-w-90">
                            <h5 className="text-xl font-bold mb-5">Inscrivez-vous à notre newsletter</h5>
                            <p className="text-[13px]">Inscrivez-vous à notre newsletter et obtenez 10% de reduction pour une première commande.</p>

                            <form className="flex p-2 border border-white rounded-full mt-4">
                                <input type="text" className="pl-5 py-1.5 focus:outline-none w-full text-white text-lg" placeholder="E-mail" />
                                <button type="submit" className="px-5 rounded-full flex items-center justify-center bg-[#D9D9D9] text-black hover:text-white hover:bg-primary cursor-pointer">Envoyer</button>
                            </form>

                            <Image src={paymentImg} alt="payment" className="mt-8 h-6" />
                        </div>
                    </div>
                </div>

                <div className="my-2.5 rounded-xl bg-linear-to-r from-primary to-[#BCA2EF] flex justify-between items-center px-12 py-5.5">
                    <p className="text-2xl font-semibold">Inscrivez-vous pamris nous !</p>
                    <Link href="/register" className="px-18 rounded-full flex items-center justify-center bg-white text-black font-semibold text-2xl hover:text-white hover:bg-primary h-20">S&apos;inscrire</Link>
                </div>
            </footer>
        </>
    )
}
