import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 font-patrick-hand p-2 text-dark-brown ">
                <HomePage />
            </main>
            <Footer />
        </div>
    )
}

export default App
