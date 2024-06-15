import { BsCart3, BsFillGrid1X2Fill } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import { PiBookmark } from "react-icons/pi"
import {  VscLibrary } from "react-icons/vsc"
import { NavLink } from "react-router-dom"

export const BottomNav = () => {
    return(
        <div className="fixed md:hidden  bottom-1 md:bottom-6  w-full h-[4rem] z-50 flex justify-center items-center">
            <div className="w-[99%] items-center max-w-[24rem] backdrop-blur-3xl h-full gap-1 p-1 bg-[rgba(0,0,0,0.3)] font-medium md:bg-white drop-shadow-md border rounded-xl flex justify-between">
                <NavLink to={"/"} className={ ({ isActive }) => isActive ? "bg-default_primary_1 md:bg-[rgba(0,0,0,0.1)] text-default_secondary text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5" : "text-[rgba(0,0,0,0.8)] text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5"}>
                <div className="w-full flex justify-center text-2xl"><FaHome /></div>
                <div className={" w-full text-xs"}>Home</div>
                </NavLink>

                <NavLink to={"/library"} className={ ({ isActive }) => isActive ? "bg-default_primary_1 md:bg-[rgba(0,0,0,0.1)] text-default_secondary  text-[rgba(0,0,0,0.9)] text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5" : "text-[rgba(0,0,0,0.8)] text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5"}>
                <div className="w-full flex justify-center text-2xl"><VscLibrary /></div>
                <div className="w-full text-xs">Library</div>
                </NavLink>

                <NavLink to={"/cart"} className={ "w-[2.8rem] h-[2.8rem] mx-1  rotate-45 bg-default_secondary text-[rgba(0,0,0,0.9)] text-default_secondary  text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap "}>
                <div className="w-full flex justify-center text-2xl -rotate-45 text-white"><BsCart3 /></div>
                </NavLink>

                <NavLink to={"q"} className={ ({ isActive }) => isActive ? "bg-default_primary_1 md:bg-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.9)] text-default_secondary  text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5" : "text-[rgba(0,0,0,0.8)] text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5"}>
                <div className="w-full flex justify-center text-2xl"><PiBookmark /></div>
                <div className="w-full text-xs">Saved</div>
                </NavLink>

                <NavLink to={"/dashboard"} className={ ({ isActive }) => isActive ? "bg-default_primary_1 md:bg-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.9)] text-default_secondary  text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5" : "text-[rgba(0,0,0,0.8)] text-center p-2 content-center rounded-lg flex justify-center items-center flex-wrap w-1/5"}>
                <div className="w-full flex justify-center text-2xl">< BsFillGrid1X2Fill/></div>
                <div className="w-full text-xs">Dashboard</div>
                </NavLink>
            </div>
        </div>
    )
}