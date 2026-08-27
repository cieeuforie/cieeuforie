import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>

            {/* TOP PART */}
            <div>
                <p>
                    La Compagnie eu<span className="font-euphoria-script text-xl">F</span>orie
                </p>
                <img
                    src="/images/cie-euforie-logo-blanc.png"
                    alt="Logo de la Compagnie euForie"
                    className="w-[32px] h-[32px]"
                />
            </div>

            {/* MIDDLE PART */}
            <div>

                {/* SOCIALS PARTS */}
                <div>
                    <p>Suivez-nous</p>
                    <nav aria-label="Réseaux sociaux">
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
                <div>
                    <p>Infos pratiques:</p>
                    <nav aria-label="Informations pratiques">
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
            <div>
                <p>2026 Compagnie euForie - Tous droits réservés</p>
                <p>Site réalisé par Mathieu Bourasseau</p>
            </div>
        </footer>
    )
}
