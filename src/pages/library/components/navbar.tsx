import {useState} from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    // states
    const [openProfile, SetOpenProfile] = useState<boolean>(false);
    // propagation
    const handleClickInsideModal = (event: React.MouseEvent<HTMLDivElement>) : void => {
        event.stopPropagation();
    };

    return (
        <nav
            className="z-20 backdrop-blur-2xl bg-[rgba(0,0,0,0.2)] md:bg-white h-[4rem]  px-6 py-4 border-b border-default_primary_2  max-w-full w-full">
            <div className={"mx-auto max-w-7xl w-full flex justify-between items-center  h-full gap-2"}>
                <p className="font-bold md:text-xl">PJ Books</p>

                {/*navigations*/}
                <div className={"hidden md:flex items-center gap-8 font-semibold justify-evenly"}>
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-b-default_accent" : "a4 relative"}
                             to={"/"}>Home</NavLink>
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-b-default_accent" : "a4 relative"}
                             to={"/library"}>Library</NavLink>
                    <NavLink className={({isActive}) => isActive ? "border-b-2 border-b-default_accent" : "a4 relative"}
                             to={"/saved"}>Saved</NavLink>
                    {/*<NavLink className={ ({isActive}) => isActive ?"border-b-2 border-b-default_accent":"a4 relative"} to={"/dashboard"}>Dashboard</NavLink>*/}
                </div>

                <div className="flex justify-center items-center gap-2">
                    {/*------------------------- mobile search ------------------------------*/}
                    {/*<button*/}
                    {/*    onClick={searchClick}*/}
                    {/*    className={*/}
                    {/*        " md:hidden text-sm py-2 px-3.5 mr-1 bg-default_secondary text-white rounded-lg cursor-pointer sm:px-4 md:text-lg"*/}
                    {/*    }*/}
                    {/*>*/}
                    {/*    <FaSearch/>*/}
                    {/*</button>*/}


                    <div className="flex justify-center items-center gap-4 md:gap-[3rem]">

                        {/* user profile */}
                        <div
                            onClick={() => {
                                SetOpenProfile(!openProfile);
                            }}
                            className="text-2xl text-white bg-black rounded-full p-2.5 cursor-pointer"
                        >
                            <p className="w-[1rem] md:w-[1.5rem]  h-[1rem] md:h-[1.5rem] text-sm flex justify-center items-center font-semibold">
                                J
                            </p>
                        </div>

                    </div>


                </div>
                {/* user side dropdown */}
                {openProfile && (
                    <div className="absolute w-full h-screen left-0 top-0 bg-[transparent]"
                         onClick={() => {
                             SetOpenProfile(false);
                         }}
                    >
                        <div
                            onMouseLeave={() => {
                                SetOpenProfile(false);
                            }}
                            onClick={handleClickInsideModal}
                            className="reveal z-10 absolute w-[16rem] h-fit border drop-shadow-md bg-white right-4 top-[5rem] rounded-lg"
                        >
                            <div className="flex justify-start items-center p-4  gap-2 border-b cursor-pointer">
                                <div
                                    className="text-2xl text-black bg-default_primary_2 rounded-full p-2.5 cursor-pointer">
                                    <p className="w-[2rem]  flex justify-center items-center font-semibold h-[2rem]">
                                        J
                                    </p>
                                </div>
                                <div className="w-full flex flex-wrap truncate">
                                    <p className="text-base font-semibold w-full">Joelikenga</p>
                                    <p className="text-sm font-sm w-full">Joelikenga@gmail.com</p>
                                </div>
                            </div>


                            <div
                                className="flex justify-start flex-wrap items-center px-4 py-2 text-sm font-medium  gap-2 border-b">
                                <p className="cursor-pointer hover:duration-75 hover:text-default_accent ease-linear w-full">
                                    Public profile
                                </p>
                                <p className="cursor-pointer hover:duration-75 hover:text-default_accent ease-linear w-full">
                                    Edit profile
                                </p>
                            </div>

                            <div
                                className="flex justify-start flex-wrap items-center px-4 py-2 text-sm font-medium  gap-2">
                                <p className="cursor-pointer hover:duration-75 hover:text-default_accent ease-linear w-full">
                                    Help
                                </p>
                                <p className="cursor-pointer hover:duration-75 hover:text-default_accent ease-linear w-full">
                                    Logout
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
