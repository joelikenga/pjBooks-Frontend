import { BottomNav } from "./components/bottomNav"
import { Footer } from "./components/footer"
import { Hero } from "./components/heroSection"
import { Navbar } from "./components/navbar"
import { NewBooks } from "./components/newBooks"

export const Homepage = () =>{
    return(
        <div className="max-w-full w-full">
            <Navbar />
            <Hero />
            <NewBooks />
            <Footer />
            <BottomNav />
        </div>
    )
}