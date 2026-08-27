import { FaInstagram, FaFacebook, FaEnvelope, FaRegCopyright } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer 
            className="flex flex-col gap-4 p-4 bg-dark-brown text-white font-patrick-hand"
        >

            {/* MOBILE ONLY */}
            <div className="md:hidden">

                {/* TOP PART */}
                <div className="flex items-center py-4 mb-2 justify-center text-2xl">
                    <p>
                        La Compagnie eu<span className="font-euphoria-script text-3xl">F</span>orie
                    </p>
                    <img
                        src="/images/cie-euforie-logo-blanc.png"
                        alt="Logo de la Compagnie euForie"
                        className="w-[38px] h-[38px]"
                    />
                </div>

                {/* MIDDLE PART */}
                <div className="flex justify-between w-full max-w-md mx-auto py-2">
                    {/* SOCIALS PARTS */}
                    <div className="flex flex-col gap-2">
                        <p className="text-xl">Suivez-nous :</p>
                        <nav className="grid grid-cols-2 gap-2 text-2xl cursor-pointer" aria-label="Réseaux sociaux">
                            <a href="https://www.instagram.com/euforiecompagnie?igsh=OW03bXZmaGNkeXZo" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.youtube.com/@euforienara1812" target="_blank" rel="noopener noreferrer">
                                <FiYoutube />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100077664937365" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <FaEnvelope />
                            </a>
                        </nav>
                    </div>
                    {/* PRACTICAL INFORMATIONS  */}
                    <div className="flex flex-col gap-2 pr-4">
                        <p className="text-xl">Infos pratiques :</p>
                        <nav className="flex flex-col cursor-pointer" aria-label="Informations pratiques">
                            <Link to="/spectacles">
                                Les spectacles
                            </Link>
                            <Link to="/presentation">
                                Présentation
                            </Link>
                            <Link to="/agenda">
                                Agenda
                            </Link>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>

            {/* TABLET AND DESKTOP ONLY */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-16 md:max-w-3xl md:w-full md:mx-auto md:justify-items-center lg:max-w-5xl">

                {/* TOP PART */}
                <div className="flex flex-col-reverse items-center justify-center gap-2 text-2xl">
                    <p className="text-center">
                        La Compagnie eu<span className="font-euphoria-script text-3xl">F</span>orie
                    </p>
                    <img
                        src="/images/cie-euforie-logo-blanc.png"
                        alt="Logo de la Compagnie euForie"
                        className="w-[60px] h-[60px]"
                    />
                </div>

                {/* SOCIALS PARTS */}
                <div className="flex flex-col gap-2 order-3">
                    <p className="text-xl">Suivez-nous :</p>
                    <nav className="grid grid-cols-2 gap-2 text-2xl cursor-pointer md:flex" aria-label="Réseaux sociaux">
                        <a href="https://www.instagram.com/euforiecompagnie?igsh=OW03bXZmaGNkeXZo" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/@euforienara1812" target="_blank" rel="noopener noreferrer">
                            <FiYoutube />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100077664937365" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope />
                        </a>
                    </nav>
                </div>

                {/* PRACTICAL INFORMATIONS  */}
                <div className="flex flex-col gap-2 order-2">
                    <p className="text-xl">Infos pratiques :</p>
                    <nav className="flex flex-col cursor-pointer" aria-label="Informations pratiques">
                        <Link to="/spectacles">
                            Les spectacles
                        </Link>
                        <Link to="/presentation">
                            Présentation
                        </Link>
                        <Link to="/agenda">
                            Agenda
                        </Link>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>

            {/* BOTTOM PART */}
            <div className="border-t-1 pt-6">
                <nav
                    className="flex flex-col text-center gap-2 md:flex-row md:flex-wrap md:justify-between md:gap-x-6 md:gap-y-2 md:max-w-5xl md:w-full md:mx-auto"
                    aria-label="Informations légales"
                >
                    <p className="flex items-center justify-center gap-1">
                        <FaRegCopyright /> 2026 Compagnie euForie - Tous droits réservés
                    </p>
                    <Link to="/mentions-legales" className="hidden md:block">
                        Mention légales
                    </Link>
                    <Link to="/politique-confidentialite" className="hidden md:block">
                        Politique de confidentialité
                    </Link>
                    <a href="https://mathieu-bourasseau.vercel.app/" target="_blank">Site réalisé par Mathieu Bourasseau</a>
                </nav>
            </div>
        </footer>
    )
}
