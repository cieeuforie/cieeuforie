import { Link } from "react-router-dom"
import { shows } from "../data/shows"

export default function HomePage() {

    return (
        <>
            {/* MAIN TITLE */}
            <h1 className="text-center text-xl py-2">
                La Compagnie eu<span className="font-euphoria-script text-3xl">F</span>orie
            </h1>

            {/* CURRENT SHOWS SECTION */}
            <section className="flex flex-col items-center justify-between">
                <h2 className="text-lg">Les spectacles du moment</h2>
                {shows.map((show) => (
                    <article
                        key={show.id}
                        className="text-center"
                    >
                        <h3>{show.title}</h3>
                        <iframe src={show.youtubeUrl} title={show.title} />
                        <Link to={`/spectacles/${show.slug}`}>Découvrir le spectacle</Link>
                    </article>
                ))}

            </section>

        </>

    )
}
