import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

export default function Header() {

    // State
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Toggle menu for mobile 
    const handleMobileNav = (isOpen: boolean) => {
        setIsOpen(isOpen);
    }

    return (
        <header
            className="
                flex justify-between items-center bg-dark-brown text-white font-patrick-hand p-4 text-base relative
                md:text-lg
                "
        >
            {/* COMPANY AND LOGO */}
            <div
                className="flex items-center gap-2 cursor-pointer"
            >
                <p>
                    La Compagnie eu<span className="font-euphoria-script text-xl">F</span>orie
                </p>
                <img
                    src="/images/cie-euforie-logo-blanc.png"
                    alt="Logo de la Compagnie euForie"
                    className="w-[32px] h-[32px]"
                />
            </div>

            {/* ICONS TOGGLE */}
            <div className="md:hidden">
                {isOpen ? (
                    <ImCross
                        className="text-xl cursor-pointer"
                        onClick={() => handleMobileNav(false)}
                    />
                ) : (
                    <GiHamburgerMenu
                        className="text-xl cursor-pointer"
                        onClick={() => handleMobileNav(true)}
                    />
                )}
            </div>

            {/* MOBILE NAV */}
            <nav
                className={`grid absolute bg-dark-brown w-full top-full left-0 transition-all duration-300 ease-in-out md:hidden
                    ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
                <div className="overflow-hidden flex flex-col items-center text-center">
                    <Link
                        to="/spectacles"
                        className="flex justify-center items-center w-full border-b-1 py-2 hover:bg-white hover:text-dark-brown"
                    >
                        Les spectacles
                    </Link>
                    <Link to="/presentation" className="flex justify-center items-center w-full border-b-1 py-2 hover:bg-white hover:text-dark-brown">
                        Présentation
                    </Link>
                    <Link to="/agenda" className="flex justify-center items-center w-full border-b-1 py-2 hover:bg-white hover:text-dark-brown">
                        Agenda
                    </Link>
                    <Link to="/contact" className="flex justify-center items-center w-full border-b-1 py-2 hover:bg-white hover:text-dark-brown">
                        Contact
                    </Link>
                </div>
            </nav>

            {/* TABLET AND DESKTOP NAV */}
            <nav className="hidden md:flex items-center">
                <div className="flex gap-4">
                    <Link
                        to="/spectacles"
                    >
                        Les spectacles
                    </Link>
                    <Link to="/presentation">
                        Présentation
                    </Link>
                    <Link to="/agenda">
                        Agenda
                    </Link>
                </div>
            </nav>

            <nav className="hidden md:flex md:gap-2 md:items-center">
                <Link to="/contact">
                    Contact: 
                </Link>
                <div className="flex gap-2">
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
                </div>
            </nav>
        </header>
    )
}
