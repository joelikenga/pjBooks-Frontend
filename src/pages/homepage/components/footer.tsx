import { BsGridFill, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaPhoneSquareAlt, FaQuestionCircle } from "react-icons/fa";
import { PiInstagramLogoBold } from "react-icons/pi";

export const Footer = () => {
  return (
    <div className=" px-4 pt-[2rem]  pb-[5rem] w-full h-fit">
      {/* logo */}

      <div className="w-full flex justify-start items-center ">
        <p className="font-bold md:text-xl ">PJ Books</p>
      </div>
      <div className="w-full mt-4 gap-2 h-fit bg-white flex justify-center md:justify-between items-center flex-wrap md:flex-nowrap">
        {/* first section */}
        <div className="w-full p-2 md:w-1/4 flex justify-start items-start flex-wrap  ">
          <p className=" p-1 md:text-base font-semibold w-full">
            Follow us on social media
          </p>
          <div className="flex flex-nowrap justify-around mt-2 w-full items-center text-lg">
            <div className="w-1/4 ">
              <a href="#" className=" h-[2rem] text-white w-[2rem] items-center justify-center rounded-full flex bg-[#4267B2]"><FaFacebookF className="" /></a>
            </div>

            <div className="w-1/4">
              <a href="#" className=" h-[2rem] text-white w-[2rem] items-center justify-center rounded-lg flex bg-instagram-gradient"><PiInstagramLogoBold className="" /></a>
            </div>

            <div className="w-1/4">
              <a href="#" className=" h-[2rem] text-white w-[2rem] items-center justify-center rounded-full flex bg-black"><BsTwitterX className="" /></a>
            </div>

            <div className="w-1/4">
              <a href="#" className=" h-[2rem] text-white w-[2rem] items-center justify-center rounded-sm flex bg-[#0e76a8]"><FaLinkedinIn className="" /></a>
            </div>
          </div>
        </div>

        {/* first section */}
        <div className="w-full p-2 md:w-1/4 flex justify-start items-start flex-wrap  ">
          <div className=" p-1 md:text-base font-semibold w-full flex items-center gap-1"> <BsGridFill /> <p>Categories</p></div>
          <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">PJ Books</a>
          <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">PJ Books</a>
        </div>

        {/* first section */}
        <div className="w-full p-2 md:w-1/4 flex justify-start items-start flex-wrap  ">
        <div className=" p-1 md:text-base font-semibold w-full flex items-center gap-1"> <FaQuestionCircle /> <p>Help</p></div>
        <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">PJ Books</a>
        <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">PJ Books</a>
        </div>

        {/* first section */}
        <div className="w-full p-2 md:w-1/4 flex justify-start items-start flex-wrap  ">
        <div className=" p-1 md:text-base font-semibold w-full flex items-center gap-1"> <FaPhoneSquareAlt /> <p>Contact</p></div>
        <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">PJ Books</a>
        <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">PJ Books</a>
        </div>
      </div>
    </div>
  );
};
