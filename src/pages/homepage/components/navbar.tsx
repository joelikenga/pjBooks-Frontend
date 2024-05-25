import { useState } from "react";
import { BsArrowRight, BsSearch } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
export const Navbar = () => {
  const [openSearch, SetOpenSearch] = useState<boolean>(false);
  const [openProfile, SetOpenProfile] = useState<boolean>(false);
  const handleClickInsideModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <nav className="  gap-2 p-4 border-b border-default_primary_2 mb- flex justify-between items-center max-w-full w-full">
      <p className="font-bold md:text-xl">PJ Books</p>

      {/* search section */}

      <div>
        <div
          className={"drop-shadow h-fit flex bg-white rounded p-1 items-center md:p-2 "}
          onClick={() => SetOpenSearch(true)}
        >
          <button
            className={
              " cursor-text flex items-center text-start h-[1.5rem] w-[42vw] ml-3   outline-0 font-medium text-black text-sm sm:h-fit sm:min-w-[36vw] md:w-fit md:text-md   lg:w-[44vw]"
            }
          >
            <div className={"text-sm md:text-base"}>Quick search...</div>
          </button>

          <button
            className={
              " text-xl py-0.5 px-2 mr-1 bg-default_secondary text-white rounded cursor-pointer sm:px-4 sm:text-2xl"
            }
          >
            <BsArrowRight className={""} />
          </button>
        </div>
      </div>

      {/* search modal popup */}

      {openSearch && (
        <div
          onClick={() => SetOpenSearch(false)}
          className=" reveal cursor-not-allowed z-10 overflow-y-hidden flex justify-evenly items- backdrop-blur-sm absolute bg-[rgba(0,0,0,0.8)] top-0 left-0 h-full w-full"
        >
          <div
            onClick={handleClickInsideModal}
            className=" mx-auto mt-4 md:mt-8 mb-4  min-h-0  max-h-[26rem] md:max-h-[30rem] w-[85%] md:w-[35rem] lg:w-[40rem] cursor-default bg-white rounded-lg py-2 overflow-hidden"
          >
            {/* search input */}
            <div className=" rounded-sm border-b">
              <div className="mx-2 my-2">
                <div className="flex justify-between items-center">
                  <div className="bg-default_primary_ p-1 rounded flex gap-2 justify-start items-center w-[92%]">
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
                  <div
                    onClick={() => {
                      SetOpenSearch(false);
                    }}
                    className=" cursor-pointer rounded text-base md:text-xl bg-default_secondary text-white p-2 mr-2"
                  >
                    <LiaTimesSolid />
                  </div>
                </div>
              </div>
            </div>

            {/* search filter display */}

            <div className="w-full h-full  overflow-y-scroll">
              {/* card */}

              <div className="">
                <div className="mt-3  mx-2 bg-white h-20 md:h-28 drop-shadow-md rounded border"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* user profile */}

      <div onClick={()=>{SetOpenProfile(!openProfile)}}  className="text-2xl text-white bg-black rounded-full p-2.5 cursor-pointer">
        <p className="w-[1rem] md:w-[1.5rem]  h-[1rem] md:h-[1.5rem] text-sm flex justify-center items-center font-semibold">
          J
        </p>
      </div>
      {/* user side dropdown */}
      {openProfile && <div onMouseLeave={()=>{SetOpenProfile(false)}} className="reveal z-10 absolute w-[20rem] h-fit border drop-shadow-md bg-white right-4 top-[5rem] rounded">
        <div className="flex justify-start items-center p-4  gap-2 border-b cursor-pointer">
          <div className="text-2xl text-black bg-default_primary_2 rounded-full p-2.5 cursor-pointer">
            <p className="w-[2rem]  flex justify-center items-center font-semibold h-[2rem]">
              J
            </p>
          </div>
          <div className="w-full flex flex-wrap">
            <p className="text-base font-semibold w-full">Joelikenga</p>
            <p className="text-sm font-sm w-full">Joelikenga@gmail.com</p>
          </div>
        </div>

        <div className="flex justify-start flex-wrap items-center px-4 py-2 text-sm font-medium  gap-2 border-b">
          <p className="cursor-pointer hover:duration-75 hover:text-default_accent ease-linear w-full">
            My books
          </p>

          <p className="cursor-pointer hover:duration-75 hover:text-default_accent ease-linear w-full">
            Saved books
          </p>
          <p className="cursor-pointer hover:duration-75 hover:text-default_accent ease-linear w-full">
            Borrowed books
          </p>
        </div>

        <div className="flex justify-start flex-wrap items-center px-4 py-2 text-sm font-medium  gap-2 border-b">
          <p className="cursor-pointer hover:duration-75 hover:text-default_accent ease-linear w-full">
            Security settings
          </p>
          <p className="cursor-pointer hover:duration-75 hover:text-default_accent ease-linear w-full">
            Saved books
          </p>
          <p className="cursor-pointer hover:duration-75 hover:text-default_accent ease-linear w-full">
            Borrowed books
          </p>
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
      </div>}
    </nav>
  );
};
