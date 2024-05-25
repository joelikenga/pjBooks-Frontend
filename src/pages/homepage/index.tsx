import { Hero } from "./components/heroSection"
import { Navbar } from "./components/navbar"

export const Homepage = () =>{
    return(
        <div className="max-w-full w-full">
            <Navbar />
            <Hero />
        </div>
    )
}