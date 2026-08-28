import { Link } from "react-router-dom"
import { fontClassMap, shows } from "../data/shows"

export default function HomePage() {

    return (
        <>
            {/* MAIN TITLE */}
            <h1 className="text-center text-2xl py-2">
                La Compagnie eu<span className="font-euphoria-script text-3xl">F</span>orie
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
                            <Link className="border-1 p-2 rounded-xl self-center shadow-md hover:bg-dark-brown hover:text-white" to={`/spectacles/${show.slug}`}>Découvrir le spectacle</Link>
                        </article>
                    ))}
                </div>
            </section>

        </>

    )
}
