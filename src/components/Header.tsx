import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";


export default function Header() {

    // State
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Toggle menu for mobile 
    const handleMobileNav = (isOpen: boolean) => {
        setIsOpen(isOpen);
    }

    return (
        <header
            className="flex justify-between items-center bg-dark-brown text-white font-patrick-hand p-4 text-base relative"
        >
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
            <div>
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
            {isOpen && (
                <nav
                    className="flex flex-col items-center text-center absolute bg-dark-brown w-full top-full left-0"
                >
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
                </nav>
            )}
        </header>
    )
}
