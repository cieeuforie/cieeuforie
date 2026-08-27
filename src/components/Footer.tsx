import { FaInstagram, FaFacebook, FaEnvelope, FaRegCopyright } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer 
            className="flex flex-col gap-4 p-4 bg-dark-brown text-white font-patrick-hand"
        >

            {/* TOP PART */}
            <div 
                className="flex items-center py-4 justify-center text-xl"
            >
                <p>
                    La Compagnie eu<span className="font-euphoria-script text-2xl">F</span>orie
                </p>
                <img
                    src="/images/cie-euforie-logo-blanc.png"
                    alt="Logo de la Compagnie euForie"
                    className="w-[32px] h-[32px]"
                />
            </div>

            {/* MIDDLE PART */}
            <div className="flex justify-between w-full max-w-xl mx-auto">

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

            {/* BOTTOM PART */}
            <div className="flex flex-col text-center border-t-1 pt-6">
                <p className="flex items-center justify-center gap-1">
                    <FaRegCopyright /> 2026 Compagnie euForie - Tous droits réservés
                </p>
                <p>Site réalisé par Mathieu Bourasseau</p>
            </div>
        </footer>
    )
}
