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
                <article className="text-center">
                    <h3>Dragons</h3>
                    <p>vidéo</p>
                    <p>Découvrir le spectacle</p>
                </article>
            </section>

        </>

    )
}
