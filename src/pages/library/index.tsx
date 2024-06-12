import { BottomNav } from "../homepage/components/bottomNav"
import {Navbar} from "../library/components/navbar.tsx";
import {SearchAndCategories} from "..//library/components/search&Categories.tsx";
import {LibraryBody} from "../library/components/libraryBody.tsx";

export const Library = () => {
    return(
        <div className="w-full max-w-full">
            <Navbar />
            <div className="flex flex-wrap justify-start content-start items-start w-full">
                <SearchAndCategories />
                <LibraryBody />
            </div>

            <BottomNav />

        </div>
    )
}