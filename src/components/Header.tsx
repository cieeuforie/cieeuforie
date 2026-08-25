import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function Header() {

    // State
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Toggle menu for mobile 
    const handleMobileNav = (isOpen: boolean) => {
        setIsOpen(isOpen);
    }

    return (
        <header
            className="flex justify-between items-center bg-dark-brown text-white font-patrick-hand p-4 text-base"
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
        </header>
    )
}
