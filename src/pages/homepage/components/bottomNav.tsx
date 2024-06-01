import { BsJournalBookmarkFill } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import { VscLibrary } from "react-icons/vsc"
import { NavLink } from "react-router-dom"

export const BottomNav = () => {
    return(
        <div className="fixed  bottom-1 md:bottom-6  w-full h-[4rem] z-50 flex justify-center items-center">
            <div className="w-[95%] max-w-[24rem] backdrop-blur-3xl h-full gap-0.5 p-1 bg-[rgba(0,0,0,0.3)] font-medium md:bg-white drop-shadow-md border rounded-xl flex justify-between">
                <NavLink to={"/"} className={ ({ isActive }) => isActive ? "bg-default_primary_1 md:bg-[rgba(0,0,0,0.1)] text-default_secondary text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5" : "text-[rgba(0,0,0,0.8)] text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5"}>
                <div className="w-full flex justify-center text-2xl"><FaHome /></div>
                <div className="w-full text-xs">Home</div>
                </NavLink>

                <NavLink to={"library"} className={ ({ isActive }) => isActive ? "bg-default_primary_1 md:bg-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.9)] text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5" : "text-[rgba(0,0,0,0.8)] text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5"}>
                <div className="w-full flex justify-center text-2xl"><VscLibrary /></div>
                <div className="w-full text-xs">Library</div>
                </NavLink>

                <NavLink to={"q"} className={ ({ isActive }) => isActive ? "bg-default_primary_1 md:bg-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.9)] text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5" : "text-[rgba(0,0,0,0.8)] text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5"}>
                <div className="w-full flex justify-center text-2xl"><FaHome /></div>
                <div className="w-full text-xs">Home</div>
                </NavLink>

                <NavLink to={"q"} className={ ({ isActive }) => isActive ? "bg-default_primary_1 md:bg-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.9)] text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5" : "text-[rgba(0,0,0,0.8)] text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5"}>
                <div className="w-full flex justify-center text-2xl"><FaHome /></div>
                <div className="w-full text-xs">Home</div>
                </NavLink>

                <NavLink to={"collection"} className={ ({ isActive }) => isActive ? "bg-default_primary_1 md:bg-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.9)] text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5" : "text-[rgba(0,0,0,0.8)] text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5"}>
                <div className="w-full flex justify-center text-2xl"><BsJournalBookmarkFill /></div>
                <div className="w-full text-xs">Collection</div>
                </NavLink>
            </div>
        </div>
    )
}