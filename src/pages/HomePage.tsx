import type { Show } from "../types/show"

export default function HomePage() {

    // Shows
    const shows: Show[] = [
        {
            id: 1,
            slug: "dragons",
            title: "Dragons",
            youtubeUrl: "https://www.youtube.com/embed/XXXXXXXX",
            featured: true,
        },
        {
            id: 2,
            slug: "les-swinguettes",
            title: "Les Swinguettes",
            youtubeUrl: "https://www.youtube.com/embed/YYYYYYYY",
            featured: true,
        },
    ];

    return (
        <>
            {/* MAIN TITLE */}
            <h1 className="text-center text-xl py-2">
                La Compagnie eu<span className="font-euphoria-script text-3xl">F</span>orie
            </h1>

            {/* CURRENT SHOWS SECTION */}
            <section className="flex flex-col items-center justify-between">
                <h2 className="text-lg">Les spectacles du moment</h2>
                <article className="text-center">
                    <h3>Dragons</h3>
                    <p>vidéo</p>
                    <p>Découvrir le spectacle</p>
                </article>
            </section>

        </>

    )
}
