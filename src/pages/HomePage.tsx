import { Link } from "react-router-dom"
import CompanyName from "../components/CompanyName"
import { presentation } from "../data/presentation"
import { representations } from "../data/representation"
import { fontClassMap, shows } from "../data/shows"
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

export default function HomePage() {

    return (
        <>
            {/* MAIN TITLE */}
            <h1 className="text-center text-2xl py-2">
                La Compagnie <CompanyName />
            </h1>

            {/* CURRENT SHOWS SECTION */}
            <section className="flex flex-col items-center gap-4 py-4 justify-between">
                <h2 className="text-xl py-2">Les spectacles du moment</h2>
                <div className="flex flex-col gap-8">
                    {shows.map((show) => (
                        <article
                            key={show.id}
                            className="text-center flex flex-col gap-4"
                        >
                            <h3 className={`text-lg ${fontClassMap[show.titleFont]}`}>{show.title}</h3>
                            <iframe className="rounded-lg" src={show.youtubeUrl} title={show.title} />
                            <Link className="border-1 p-2 rounded-xl self-center shadow-md transition-colors duration-200 hover:bg-dark-brown hover:text-white" to={`/spectacles/${show.slug}`}>Découvrir le spectacle</Link>
                        </article>
                    ))}
                </div>
            </section>

            {/* ASSOCIATION PRESENTATION */}
            <section className="flex flex-col gap-6 py-6 px-4 -mx-2 bg-presentation bg-cover bg-center bg-no-repeat">
                <div className="flex flex-col gap-2">
                    <h2 className="text-center text-xl py-2">
                        {presentation.titleBefore}<CompanyName />{presentation.titleAfter}
                    </h2>
                    <p>{presentation.description}</p>
                    <p className="font-euphoria-script text-2xl">{presentation.slogan}</p>
                </div>
                <img src={presentation.image} className="rounded-xl" alt="Présentation de la Compagnieu euForie sur scène" />
                <Link className="border-1 p-2 rounded-xl self-center shadow-md bg-dark-brown text-white transition-colors duration-200 hover:bg-white hover:text-dark-brown" to="/presentation">{presentation.linkText}</Link>
            </section>

            {/* AGENDA SECTION */}
            <section className="bg-dark-brown px-4 -mx-2 ">
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-center text-white text-xl py-2">Agenda</h2>
                    <div className="flex flex-col items-center justify-center gap-6">
                        {representations.map((rep) => {
                            const show = shows.find((s) => s.id === rep.showId)
                            if (!show) return null

                            return (
                                <article 
                                    key={rep.id}
                                    className="rounded-xl overflow-hidden"
                                >
                                    <img src={show.image} alt="" />
                                    <div className="bg-light-brown flex flex-col gap-4 pl-4 py-4">
                                        <h3 className={`${fontClassMap[show.titleFont]}`}>{show.title}</h3>
                                        <div className="flex items-center gap-2">
                                            <CiCalendarDate className="text-xl" />
                                            <p className="font-alice">{rep.date}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <IoLocationOutline className="text-xl" />
                                            <p className="font-alice">{rep.location}</p>
                                        </div>
                                        <a
                                            href="#contact"
                                            className="border-1 p-2 rounded-xl self-start shadow-md transition-colors duration-200 hover:bg-dark-brown hover:text-white"
                                        >
                                            Programmer ce spectacle chez vous
                                        </a>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                    <Link className="border-1 p-2 rounded-xl self-center shadow-md bg-dark-brown text-white transition-colors duration-200 hover:bg-white hover:text-dark-brown mb-6" to="/agenda">Voir toutes les dates</Link>
                </div>
            </section>
        </>

    )
}
