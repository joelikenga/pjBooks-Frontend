import {useState} from "react";
import {BsCart3, BsSearch} from "react-icons/bs";
import {FaSearch} from "react-icons/fa";
import {LiaTimesSolid} from "react-icons/lia";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    // states
    const [openSearch, SetOpenSearch] = useState<boolean>(false);
    const [openProfile, SetOpenProfile] = useState<boolean>(false);
    // propagation
    const handleClickInsideModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };
    // functions
    const searchClick = () => {
        if (openProfile) {
            SetOpenProfile(false);
            SetOpenSearch(true);
        } else {
            SetOpenSearch(true);
        }
    };

    const profileClick = () => {
        if (openSearch) {
            SetOpenProfile(true);
            SetOpenSearch(false);
        } else {
            SetOpenProfile(true);
        }
    };
    return (
        <nav
            className=" sticky top-0 z-20 backdrop-blur-2xl bg-[rgba(0,0,0,0.2)] md:bg-white   px-6 py-4 border-b border-default_primary_2  max-w-full w-full">
            <div className={"w-full flex justify-between items-center  gap-2"}>
                <p className="font-bold md:text-xl">PJ Books</p>

                {/*navigations*/}
                <div className={"hidden md:flex items-center gap-8 font-semibold justify-evenly"}>
                    <NavLink className={ ({isActive}) => isActive ?"border-b-2 border-b-default_accent":"a4 relative"} to={"/"}>Home</NavLink>
                    <NavLink className={ ({isActive}) => isActive ?"border-b-2 border-b-default_accent":"a4 relative"} to={"/library"}>Library</NavLink>
                    <NavLink className={ ({isActive}) => isActive ?"border-b-2 border-b-default_accent":"a4 relative"} to={"/saved"}>Saved</NavLink>
                    <NavLink className={ ({isActive}) => isActive ?"border-b-2 border-b-default_accent":"a4 relative"} to={"/dashboard"}>Dashboard</NavLink>
                </div>

                <div className="flex justify-center items-center gap-2">
                    {/* mobile search */}
                    <button
                        onClick={searchClick}
                        className={
                            " md:hidden text-sm py-2 px-3.5 mr-1 bg-default_secondary text-white rounded cursor-pointer sm:px-4 md:text-lg"
                        }
                    >
                        <FaSearch/>
                    </button>


                    <div className="flex justify-center items-center gap-4 md:gap-[3rem]">
                        {/*search and cart icons*/}
                        <div className={"flex justify-evenly items-center gap-[2rem]"}>
                            <NavLink
                                to={"/cart"}
                                className={
                                    " relative text-sm md:flex justify-center items-center hidden  text-default_secondary rounded-full cursor-pointer  md:text-3xl"
                                }
                            >
                                <div
                                    className={"h-2 w-2 rounded absolute -top-1 -right-1 animate-pulse bg-default_accent"}></div>
                                <BsCart3/>
                            </NavLink>
                            <div
                                className={""}
                                onClick={searchClick}
                            >
                                <button
                                    className={
                                        " text-sm  md:flex justify-center items-center hidden h-8 mr-1 bg-default_secondary text-white rounded-md cursor-pointer sm:px-4 md:text-lg"
                                    }
                                >
                                    <FaSearch/>
                                </button>
                            </div>
                        </div>


                        {/* search modal popup */}

                        {openSearch && (
                            <div
                                onClick={profileClick}
                                className=" reveal cursor-not-allowed z-40 overflow-y-hidden flex justify-evenly items- backdrop-blur-sm absolute bg-[rgba(0,0,0,0.8)] top-0 left-0 min-h-screen w-full"
                            >
                                <div
                                    onClick={handleClickInsideModal}
                                    className=" mx-auto mt-4 md:mt-8 mb-4  min-h-0  max-h-[26rem] md:max-h-[30rem] w-[85%] md:w-[35rem] lg:w-[40rem] cursor-default bg-white rounded-lg py-2 overflow-hidden"
                                >
                                    {/* search input */}
                                    <div className=" rounded-sm border-b">
                                        <div className="mx-2 my-2">
                                            <div className="flex justify-between items-center">
                                                <div
                                                    className="bg-default_primary_ p-1 rounded flex gap-2 justify-start items-center w-[92%]">
                                                    <div className=" rounded  text-base md:text-2xl  p-1">
                                                        <BsSearch className=""/>
                                                    </div>
                                                    <input
                                                        className="px-2 outline-none font-medium h-8 w-full"
                                                        placeholder="Search books"
                                                        type="text"
                                                        autoFocus
                                                    />
                                                </div>
                                                <div
                                                    onClick={() => {
                                                        SetOpenSearch(false);
                                                        SetOpenProfile(false);
                                                    }}
                                                    className=" cursor-pointer rounded text-base md:text-xl bg-default_secondary text-white p-2 mr-2"
                                                >
                                                    <LiaTimesSolid/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* search filter display */}

                                    <div className="w-full h-full  overflow-y-scroll">
                                        {/* card */}

                                        <div className="">
                                            <div
                                                className="mt-3  mx-2 bg-white h-[15rem] content-start p-1 gap-2 flex justify-between w-[50%] drop-shadow-md rounded border">
                                            {/*    search card image*/}
                                                <div className={"w-1/2 rounded-md overflow-hidden"}>
                                                    <img className={"object-center bg-center"} src={"https://images.bwbcovers.com/125/Juniper-s-Christmas-9781250321947.jpg"} alt={""}/>
                                                </div>

                                                <div className={"w-1/2 rounded-md overflow-hidden"}>

                                                </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}


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
