import { useState } from "react";
import { BsCart3, BsSearch } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { dropDownVariant, showSearchVariant, showVariant } from "../../../utils/variants";

export const Navbar = () => {
  // states
  const [openSearch, SetOpenSearch] = useState<boolean>(false);
  const [openProfile, SetOpenProfile] = useState<boolean>(false);
  const [openSidenav, SetOpenSidenav] = useState<boolean>(false); //for mobile sidenav
  const [openSettings, SetOpenSettings] = useState<boolean>(false); //for mobile settings
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

  return (
    <nav className=" sticky top-0 z-20 bg-white h-[3.5rem] md:h-[4rem] px-4 md:px-6 py-4 border-b border-default_primary_2  max-w-full w-full">
      <div
        className={
          "mx-auto max-w-7xl w-full flex justify-between items-center  h-full gap-2"
        }
      >
        <p className="font-bold md:text-xl">PJ Books</p>

        {/*navigations*/}
        <div
          className={
            "hidden md:flex items-center gap-8 font-semibold justify-evenly"
          }
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-default_accent" : "a4 relative"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-default_accent" : "a4 relative"
            }
            to={"/library"}
          >
            Library
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-b-default_accent" : "a4 relative"
            }
            to={"/saved"}
          >
            Saved
          </NavLink>
        </div>

        <div className="flex justify-center items-center gap-2">
          {/* ---------------------mobile search ----------------------------*/}
          {/* <button
            onClick={searchClick}
            className={
              " md:hidden text-sm py-2 px-3.5 mr-1 bg-default_secondary text-white rounded-lg cursor-pointer sm:px-4 md:text-lg"
            }
          >
            <FaSearch />
          </button> */}

          <div className="flex justify-center items-center gap-4 md:gap-[3rem]">
            {/* -------------------------- cart, search and user profile button for default screen -----------------------------  */}
            <div className="flex justify-between items-center gap-4 md:gap-6">
              <NavLink
                to={"/cart"}
                className={
                  " relative text-sm md:flex justify-center items-center hidden text-default_secondary rounded-full cursor-pointer  md:text-3xl"
                }
              >
                <div
                  className={
                    "h-2 w-2 rounded absolute -top-1 -right-1 animate-pulse bg-default_accent"
                  }
                ></div>
                <BsCart3 />
              </NavLink>

              <div className={""} onClick={searchClick}>
                <button
                  className={
                    " text-sm justify-center items-center border border-default_secondary text-white md:text-default_secondary bg-default_secondary md:bg-white hover:bg-default_secondary hover:text-white duration-300 rounded-lg px-2.5 py-1.5 cursor-pointer md:text-xl"
                  }
                >
                  <BiSearch />
                </button>
              </div>

              {/* ------------- user profile----------------- */}
              <div
                onClick={() => {
                  SetOpenProfile(!openProfile);
                }}
                className="hidden md:block text-2xl text-white bg-black rounded-full p-2 cursor-pointer"
              >
                <p className="w-[1rem] md:w-[1.5rem]  h-[1rem] md:h-[1.5rem] text-sm flex justify-center items-center font-semibold">
                  J
                </p>
              </div>
              {/* -----------------mobile screen side bar -------------*/}
              <div onClick={() => SetOpenSidenav(true)} className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------search modal popup------------------------------- */}
        <AnimatePresence>
          {openSearch && (
            <motion.div
            variants={showVariant}
            initial="initial"
            animate="animate"
            exit="exit"
              onClick={() => SetOpenSearch(false)}
              className="  backdrop-blur-xl cursor-not-allowed z-[2] overflow-y-hidden flex justify-evenly  absolute bg-[rgba(0,0,0,0.6)] top-0 left-0 min-h-screen w-full"
            >
              <motion.div
              variants={showSearchVariant}
              initial="initial"
              animate="animate"
              exit="exit"
                onClick={handleClickInsideModal}
                className=" mx-auto mt-4 md:mt-8 mb-4  min-h-0  max-h-[26rem] md:max-h-[30rem] w-[85%] md:w-[35rem] lg:w-[40rem] cursor-default bg-white rounded-lg py-2 overflow-hidden"
              >
                {/* search input */}
                <div className=" rounded-sm border-b">
                  <div className="mx-2 my-2">
                    <div className="flex justify-between items-center px-2">
                      <div className=" p-1 rounded flex gap-2 justify-start items-center w-[92%]">
                        <div className=" rounded  text-base md:text-2xl  p-1">
                          <BsSearch className="" />
                        </div>
                        <input
                          className="px-2 outline-none font-medium h-8 w-full"
                          placeholder="Search books"
                          type="text"
                          autoFocus
                        />
                      </div>
                      {/*srarch close button*/}
                      <div
                        onClick={() => {
                          SetOpenSearch(false);
                          SetOpenProfile(false);
                        }}
                        className=" cursor-pointer rounded-lg text-base md:text-lg bg-default_secondary text-white p-1.5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* search filter display */}

                <div className="w-full h-full  overflow-y-scroll">
                  {/* card */}

                  <div className="mx-4">
                    <div className="mt-1  px-2 bg-white h-[6rem] content-start p-1  flex items-center gap-4 justify-start w-full border-b">
                      {/*    search card image*/}
                      <div className={"max-w-[4rem]  h-[6rem] overflow-hidden"}>
                        <img
                          className={"object-center bg-center h-[5.5rem]"}
                          src={
                            "https://images.bwbcovers.com/125/Juniper-s-Christmas-9781250321947.jpg"
                          }
                          alt={""}
                        />
                      </div>

                      {/*    book title*/}
                      <div className={"w-full flex flex-wrap gap-2"}>
                        <p className={"w-full font-semibold text-xl"}>
                          Junipers Christmas
                        </p>
                        <p className={"w-full font-medium text-lg"}>
                          Junipers Christmas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/*--------------------------------- user side dropdown -------------------------------*/}
        <AnimatePresence>
          {openProfile && (
            <div
              className="absolute w-full z-[2] h-screen left-0 top-0 bg-[transparent]"
              onClick={() => {
                SetOpenProfile(false);
              }}
            >
              <motion.div
                variants={dropDownVariant}
                // onMouseLeave={() => {
                //   SetOpenProfile(false);
                // }}
                className=" z-10 absolute w-[16rem] h-fit border drop-shadow-md bg-white right-4 top-[4.5rem] rounded-lg"
              >
                <div className="flex justify-start items-center p-4  gap-2 border-b cursor-pointer">
                  <div className="text-2xl text-black bg-default_primary_2 rounded-full p-2.5 cursor-pointer">
                    <p className="w-[2rem]  flex justify-center items-center font-semibold h-[2rem]">
                      J
                    </p>
                  </div>
                  <div className="w-full flex flex-wrap truncate">
                    <p className="text-base font-semibold w-full">Joelikenga</p>
                    <p className="text-sm font-sm w-full">
                      Joelikenga@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex justify-start flex-wrap items-center px-4 py-2 text-sm font-medium  gap-2 border-b">
                  <p className="cursor-pointer hover:duration-75 hover:text-default_accent ease-linear w-full">
                    Public profile
                  </p>
                  <p className="cursor-pointer hover:duration-75 hover:text-default_accent ease-linear w-full">
                    Edit profile
                  </p>
                </div>

                <div className="flex justify-start flex-wrap items-center px-4 py-2 text-sm font-medium  gap-2">
                  <p className="cursor-pointer hover:duration-75 hover:text-default_accent ease-linear w-full">
                    Help
                  </p>
                  <p className="cursor-pointer hover:duration-75 hover:text-default_accent ease-linear w-full">
                    Logout
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        {/* ---------------------MobilesideNav ------------------------*/}

        <AnimatePresence>
          {openSidenav && (
            <motion.div
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              exit={{
                opacity: 0,
                x: 500,
                transition: { duration: 0.8, delay: 0.3 },
              }}
              onClick={() => SetOpenSidenav(false)}
              className="md:hidden backdrop-blur-lg absolute z-[2] bg-[rgba(0,0,0,.5)] flex justify-end h-screen w-full top-0 left-0"
            >
              <motion.div
                onClick={handleClickInsideModal}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="h-full bg-white w-[15rem] justify-between flex flex-col p-3"
              >
                {/* --------------------------top section -------------------------------*/}
                <div>
                  {/* logo and close icon*/}
                  <div className=" py-2 flex justify-between">
                    {/* logo */}
                    <p className="font-bold md:text-xl">PJ Books</p>
                    {/* close icon */}
                    <div
                      className="cursor-pointer "
                      onClick={() => SetOpenSidenav(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 border border-[rgba(0,0,0,0.5)] p-0. text-[rgba(0,0,0,0.5)] rounded-full"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* ------------navs section------------- */}

                  <motion.div className="flex flex-col gap-2 mt-4 ">
                    <motion.div className="w-full  flex justify-start items-center gap-4">
                      <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="size-7"
                      >
                        <path d="M64 480H48a32 32 0 01-32-32V112a32 32 0 0132-32h16a32 32 0 0132 32v336a32 32 0 01-32 32zM240 176a32 32 0 00-32-32h-64a32 32 0 00-32 32v28a4 4 0 004 4h120a4 4 0 004-4zM112 448a32 32 0 0032 32h64a32 32 0 0032-32v-30a2 2 0 00-2-2H114a2 2 0 00-2 2z" />
                        <path d="M114 240 H238 A2 2 0 0 1 240 242 V382 A2 2 0 0 1 238 384 H114 A2 2 0 0 1 112 382 V242 A2 2 0 0 1 114 240 z" />
                        <path d="M320 480h-32a32 32 0 01-32-32V64a32 32 0 0132-32h32a32 32 0 0132 32v384a32 32 0 01-32 32zM495.89 445.45l-32.23-340c-1.48-15.65-16.94-27-34.53-25.31l-31.85 3c-17.59 1.67-30.65 15.71-29.17 31.36l32.23 340c1.48 15.65 16.94 27 34.53 25.31l31.85-3c17.59-1.67 30.65-15.71 29.17-31.36z" />
                      </svg>
                      <p className="text-lg font-medium">Library</p>
                    </motion.div>
                  </motion.div>
                </div>

                {/* ------------------------user profile Section / Bottom section------------------------ */}
                <div className="relative">
                  <AnimatePresence>
                    {/* settings display */}
                    {openSettings && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        exit={{
                          opacity: 0,
                          y: 20,
                          transition: { duration: 0.3 },
                        }}
                        className="mb-3 bg-white flex flex-col gap-1 h-fit rounded-lg p-2 z[3] drop-shadow-md border"
                      >
                        <Link
                          to={"#"}
                          className="flex justify-start gap-2 items-center my-0.5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="size-5"
                          >
                            <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                          </svg>
                          <p>Edit profile</p>
                        </Link>
                        <Link
                          to={"#"}
                          className="flex justify-start gap-2 items-center my-0.5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="size-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <p>Help</p>
                        </Link>
                        <Link
                          to={"#"}
                          className="flex justify-start gap-2 items-center my-0.5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="size-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z"
                              clipRule="evenodd"
                            />
                            <path
                              fillRule="evenodd"
                              d="M14 10a.75.75 0 0 0-.75-.75H3.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 14 10Z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <p>Logout</p>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ------------------- */}
                  <div
                    onClick={() => SetOpenSettings(!openSettings)}
                    className="flex justify-between items-center  gap-2 border-b cursor-pointer"
                  >
                    <div className="text-2xl text-black bg-default_primary_2 rounded-full p-2 cursor-pointer">
                      <p className="w-[1.8rem]  flex justify-center items-center font-semibold h-[1.8rem]">
                        J
                      </p>
                    </div>
                    <div className="w-full flex flex-wrap truncate">
                      <p className="text-base font-medium truncate  w-full">
                        Joelikenga
                      </p>
                      <p className="text-sm font-normal truncate w-full">
                        Joelikenga@gmail.com
                      </p>
                    </div>
                    {/* caret conditional change */}
                    {openSettings ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
