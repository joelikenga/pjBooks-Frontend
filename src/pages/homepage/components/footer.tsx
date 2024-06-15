import {BsGridFill, BsTwitterX} from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaPhoneSquareAlt, FaQuestionCircle } from "react-icons/fa";
import { PiInstagramLogoBold } from "react-icons/pi";
import {GrSnapchat} from "react-icons/gr";

export const Footer = () => {
  return (
    <div className=" px-6 pt-[2rem]  pb-[5rem] w-full h-fit">
      {/* logo */}

      <div className="w-full flex justify-start items-center ">
        <p className="font-bold md:text-xl ">PJ Books</p>
      </div>
      <div className="w-full mt-4 gap-2 h-fit text-default_secondary  bg-white flex justify-center md:justify-between items-Start flex-wrap md:flex-nowrap">
        {/* first section */}
        <div className="w-full py-2 md:w-1/4 flex content-start justify-start items-start flex-wrap  ">
          <p className=" md:text-base font-semibold w-full">
            Follow us on social media
          </p>
          <div className="flex flex-nowrap justify-around mt-2 w-full items-center text-lg">
            <div className="w-1/5 ">
              <a href="#"
                 className=" h-[2rem] text-white w-[2rem] items-center justify-center rounded-full flex bg-[#4267B2]"><FaFacebookF
                  className=""/></a>
            </div>

            <div className="w-1/5">
              <a href="#"
                 className=" h-[2rem] text-white w-[2rem] items-center justify-center rounded-lg flex bg-instagram-gradient"><PiInstagramLogoBold
                  className=""/></a>
            </div>

            <div className="w-1/5">
              <a href="#"
                 className=" h-[2rem] text-white w-[2rem] items-center justify-center rounded-full flex bg-black"><BsTwitterX
                  className=""/></a>
            </div>

            <div className="w-1/5">
              <a href="#"
                 className=" h-[2rem] text-white w-[2rem] items-center justify-center rounded-sm flex bg-[#0e76a8]"><FaLinkedinIn
                  className=""/></a>
            </div>

            <div className="w-1/5">
              <a href="#"
                 className=" h-[2rem] text-white w-[2rem] items-center justify-center rounded-sm flex bg-yellow-300"><GrSnapchat
                  className=""/></a>
            </div>
          </div>
        </div>

        {/* first section */}
        <div className="w-full p-2 md:w-1/4 flex justify-start content-start items-center flex-wrap  ">
          <div className=" p-1 md:text-base font-semibold w-full flex items-center gap-1"><BsGridFill/>
            <p>Categories</p></div>
          <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">Fiction</a>
          <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">Non-Fiction</a>
          <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">Novella</a>
          <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">Novel</a>
          <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">Science</a>
          <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">Childrens Books</a>
          <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">more...</a>

        </div>

        {/* first section */}
        <div className="w-full p-2 md:w-1/4 flex justify-start content-start items-start flex-wrap  ">
        <div className=" p-1 md:text-base font-semibold w-full flex items-center gap-1"> <FaQuestionCircle /> <p>Help</p></div>
        <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">Privacy & Policies</a>
        <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">Report A Problem</a>
        </div>

        {/* first section */}
        <div className="w-full p-2 md:w-1/4 flex justify-start content-start items-start flex-wrap  ">
          <div className=" p-1 md:text-base font-semibold w-full flex items-center gap-1"><FaPhoneSquareAlt/>
            <p>Contact</p></div>
          <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">+234898989898</a>
          <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">Mail@mail.com</a>
          <a href="#" className="font-medium hover:underline p-1 md:text-base w-full">200 Salamis Road 99450</a>
        </div>
      </div>
    </div>
  );
};
