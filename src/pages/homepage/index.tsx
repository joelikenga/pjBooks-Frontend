import { BottomNav } from "./components/bottomNav"
import { Footer } from "./components/footer"
import { Hero } from "./components/heroSection"
import { Navbar } from "./components/navbar"
import { NewBooks } from "./components/NewBooks.tsx"
import {Novels} from "../homepage/components/Novels.tsx";
import {KidsBooks} from "../homepage/components/kidsBooks.tsx";
import {Textbooks} from "../homepage/components/Textbooks.tsx";

export const Homepage = () =>{
    return(
        <div className="max-w-full w-full">
            <Navbar />
            <Hero />
            <NewBooks />
            <Novels />
            <KidsBooks />
            <Textbooks />
            <Footer />
            <BottomNav />
        </div>
    )
}