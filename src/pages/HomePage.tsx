import { Link } from "react-router-dom"

import CompanyName from "../components/CompanyName"
import { presentation } from "../data/presentation"
import { representations } from "../data/representation"
import { fontClassMap, shows } from "../data/shows"
import { contactSection } from "../data/contactSection"
import { contactInfo } from "../data/contactInfo"

import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import ContactForm from "../components/ContactForm"

const outlineButtonClasses = "border-1 p-2 rounded-xl shadow-md transition-colors duration-200 hover:bg-dark-brown hover:text-white"
const filledButtonClasses = "border-1 p-2 rounded-xl shadow-md bg-dark-brown text-white transition-colors duration-200 hover:bg-white hover:text-dark-brown"

export default function HomePage() {

    return (
        <>
            {/* MAIN TITLE */}
            <h1 className="text-center text-2xl py-2 md:text-3xl">
                La Compagnie <CompanyName />
            </h1>

            {/* CURRENT SHOWS SECTION */}
            <section className="flex flex-col items-center gap-4 py-4 justify-between">
                <h2 className="text-xl py-2 md:text-2xl">Les spectacles du moment</h2>
                <div className="flex flex-col gap-8 md:flex-row md:gap-12">
                    {shows.map((show) => (
                        <article
                            key={show.id}
                            className="text-center flex flex-col gap-4"
                        >
                            <h3 className={`text-lg md:text-xl ${fontClassMap[show.titleFont]}`}>{show.title}</h3>
                            <iframe className="rounded-lg" src={show.youtubeUrl} title={show.title} />
                            <Link className={`${outlineButtonClasses} self-center`} to={`/spectacles/${show.slug}`}>Découvrir le spectacle</Link>
                        </article>
                    ))}
                </div>
            </section>

            {/* ASSOCIATION PRESENTATION */}
            <section className="py-6 md:py-0 pl-4 pr-4 md:pr-0 -mx-2 bg-presentation bg-cover bg-center bg-no-repeat">
                <div className="flex flex-col gap-6 md:gap-0 max-w-xl mx-auto md:flex-row md:max-w-6xl">
                    <div className="flex flex-col text-sm gap-2 md:text-base md:w-1/2 md:justify-center md:px-5 md:py-4">
                        <h2 className="text-center text-xl py-2 md:text-left md:text-2xl">
                            {presentation.titleBefore}<CompanyName />{presentation.titleAfter}
                        </h2>
                        <p>{presentation.description}</p>
                        <p className="font-euphoria-script text-2xl md:text-3xl">{presentation.slogan}</p>
                        <Link className={`${filledButtonClasses} my-4 self-center md:self-start`} to="/presentation">{presentation.linkText}</Link>
                    </div>
                    <img
                        src={presentation.image}
                        className="w-full h-64 md:h-auto md:w-1/2 object-cover rounded-xl md:rounded-none"
                        alt="Présentation de la Compagnieu euForie sur scène"
                    />
                </div>
            </section>

            {/* AGENDA SECTION */}
            <section className="bg-dark-brown px-4 -mx-2">
                <div className="flex flex-col items-center gap-4 md:gap-8">
                    <h2 className="text-center text-white text-xl mt-6 md:text-2xl">Agenda</h2>
                    <div className="flex flex-col items-center justify-center gap-6 max-w-xl mx-auto md:grid md:grid-cols-2 md:items-stretch md:max-w-6xl lg:grid-cols-3">
                        {representations.map((rep) => {
                            const show = shows.find((s) => s.id === rep.showId)
                            if (!show) return null

                            return (
                                <article
                                    key={rep.id}
                                    className="flex flex-col rounded-xl text-sm md:text-base overflow-hidden"
                                >
                                    <img src={show.image} alt="" className="w-full h-48 object-cover" />
                                    <div className="bg-light-brown flex flex-col flex-1 justify-between gap-4 pl-4 py-4">
                                        <div className="flex flex-col gap-4">
                                            <h3 className={`md:text-xl ${fontClassMap[show.titleFont]}`}>{show.title}</h3>
                                            <div className="flex items-center gap-2">
                                                <CiCalendarDate className="text-xl" />
                                                <p className="font-alice">{rep.date}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <IoLocationOutline className="text-xl" />
                                                <p className="font-alice">{rep.location}</p>
                                            </div>
                                        </div>
                                        <a
                                            href="#contact"
                                            className={`${outlineButtonClasses} self-start`}
                                        >
                                            Programmer ce spectacle chez vous
                                        </a>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                    <Link className={`${filledButtonClasses} self-center mb-6`} to="/agenda">Voir toutes les dates</Link>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="flex flex-col py-4 px-4 -mx-2 bg-presentation bg-cover bg-center bg-no-repeat md:gap-4">
                <div className="flex flex-col gap-2 py-4 items-center text-center">
                    <h2 className="text-xl md:text-2xl">{contactSection.title}</h2>
                    <p className="md:text-[18px]">{contactSection.subtitle}</p>
                </div>

                <div className="flex flex-col gap-8 max-w-xl mx-auto w-full md:flex-row md:items-center md:justify-center md:gap-16 md:max-w-5xl">
                    {/* CONTACT */}
                    <div className="flex flex-col items-center text-center gap-2 md:w-1/3 md:items-start md:text-left md:text-lg">
                        <h3>Coordonnées :</h3>
                        <p>Tél : {contactInfo.phone}</p>
                        <p>{contactInfo.email}</p>
                        <p>{contactInfo.address}</p>
                        <div className="flex gap-2 text-xl mt-2">
                            <a href="https://www.instagram.com/euforiecompagnie?igsh=OW03bXZmaGNkeXZo" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.youtube.com/@euforienara1812" target="_blank" rel="noopener noreferrer">
                                <FiYoutube />
                            </a>
                            <a href={`mailto:${contactInfo.email}`}>
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    {/* FORMULAIRE */}
                    <div className="md:w-1/2">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>

    )
}
