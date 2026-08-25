export default function Header() {
    return (
        <header
            className="flex justify-between bg-dark-brown text-white font-patrick-hand p-4"
        >
            <div
                className="flex items-center gap-2"
            >
                <p>La Compagnie euForie</p>
                <img
                    src="/images/cie-euforie-logo-blanc.png"
                    alt="Logo de la Compagnie euForie"
                    className="w-[32px] h-[32px]"
                />
            </div>
            <div>logo</div>
        </header>
    )
}
