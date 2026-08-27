import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                Mon contenu principal
            </main>
            <Footer />
        </div>
    )
}

export default App
