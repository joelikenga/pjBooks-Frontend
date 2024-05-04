import { SubmitHandler, useForm } from "react-hook-form";
import googleSvg from "../../svg/google_svg.svg";
import mismatchSvg from "../../svg/passwordMismatch.svg";
import warningSvg from "../../svg/warning sign.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSignUp, userSignUpSchema } from "../../Schemas/userSignup";
import { PiEyeClosedLight } from "react-icons/pi";
import { LiaFemaleSolid, LiaMaleSolid } from "react-icons/lia";
import { RxCaretSort } from "react-icons/rx";
import { VscEye } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { Gender } from "../../Schemas/enums";
// import { Navbar } from "../global/navbar";
import { BiMaleFemale } from "react-icons/bi";
// import photo from "../../img/photo.jpg";
import { Login } from "../login";

export const Signup = () => {
  
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [isBlinking, setIsBlinking] = useState<boolean>(false);

  const [genderDropDown, setgenderDropDown] = useState<boolean>(false);

  const [selectedGender, setSelectedGender] = useState<Gender>(Gender.Male);

  const [loginToogle, setloginToogle] = useState<boolean>(true);

  let [genderDefaultText, setgenderDefaultText] = useState<string>("Gender");

  // gender click update
  const handleGenderClick = (gender: Gender) => {
    setSelectedGender(gender);
    setValue("gender", gender, { shouldValidate: true });
    setgenderDropDown(false);
    setgenderDefaultText(gender);
  };

  // eye blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 150);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<userSignUp>({ resolver: zodResolver(userSignUpSchema) });

  // parsing Date
  const today = new Date().toISOString().split("T")[0];
  const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  // submit handler
  const onSubmit: SubmitHandler<userSignUp> = (data: userSignUp) => {
    data.gender = selectedGender;
    console.log("formdata", JSON.stringify(data));
  };

  const loginToogleFunction = () =>{
    setloginToogle(!loginToogle);
  }

  return (
    <div className="slideRight h-[100%] flex flex-wrap  justify-center bg-default_primary_2">
      {/* <Navbar /> */}

      <div className="w-full flex justify-center items-center">
        {/* container */}
        <div className=" overflow-hidden bg-default_primary_1 h-[38rem] w-[65rem] rounded-lg flex items-center justify-between ">
          {/* image display section */}
          <div className="h-full hidden  w-3/5 md:flex ">
            <div className=" relative border rounded-lg  w-full h-[-webkit-fill-available] my-1.5 ml-1.5">
              <img
                className="w-full h-full vvv object-cover rounded-md"
                width={1000}
                height={1000}
                src={"https://res.cloudinary.com/dnkhkqisg/image/upload/v1714770561/bg_y4tuny.jpg"}
              />
            </div>
          </div>

          {/* form section */}
          {loginToogle ? (
            <Login loginToogleFunction={loginToogleFunction}/>
          ) : (
            <div className="flex justify-center items-center w-full  md:w-2/5">
              <div className="from-left px-6 mx-3 h-[-webkit-fill-available] ">
                  <div className="flex  flex-wrap  gap-1">
                    <div className="flex flex-nowrap">
                      <p className=" font-semibold text-3xl w-full">
                        Create an account
                      </p>
                    </div>
                    <p className="text-sm font-light w-full">
                      Already have an account ?{" "}
                      <a
                        onClick={loginToogleFunction}
                        className="font-medium text-default_secondary hover:underline"
                        href="#"
                      >
                        Login
                      </a>
                    </p>
                  </div>

                {/* forms */}

                <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
                  <div className="">
                    <label className="relative">
                      <input
                        {...register("firstName")}
                        placeholder="Firstname"
                        type="text"
                        id="firstname"
                        className={
                          errors.firstName
                            ? " border-red-700  placeholder:text-black   h-10 w-full px-4 bg-inherit border rounded-lg  border-opacity-50 outline-none  transition duration-300"
                            : " placeholder:text-black placeholder:text-opacity-50 font-medium  h-10 w-full px-4 bg-inherit border rounded-lg border-black border-opacity-30 outline-none   transition duration-300"
                        }
                      />
                      {errors.firstName && (
                        <span className=" text-sm absolute z-10 right-0 -top-0.5 border-none font-normal bg-transparent  px-2 transition duration-600 input-text">
                          <img src={warningSvg} alt="" height={10} width={22} />
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="mt-2">
                    <label className="relative">
                      <input
                        {...register("lastName")}
                        placeholder="Lastname"
                        type="text"
                        id="lastname"
                        className={
                          errors.lastName
                            ? " border-red-700  placeholder:text-black  h-10 w-full px-4 bg-inherit border rounded-lg  border-opacity-50 outline-none   transition duration-300"
                            : " placeholder:text-black  placeholder:text-opacity-50 font-medium h-10 w-full px-4 bg-inherit border rounded-lg border-black border-opacity-30 outline-none   transition duration-300"
                        }
                      />
                      {errors.lastName && (
                        <span className=" text-sm absolute z-10 right-0 -top-0.5 border-none font-normal bg-transparent  px-2 transition duration-600 input-text">
                          <img
                            src={warningSvg}
                            alt="google_icon"
                            height={10}
                            width={22}
                          />
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="mt-2">
                    <label className="relative">
                      <input
                        {...register("email", {
                          required: "Required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address",
                          },
                        })}
                        placeholder="Email"
                        type="email"
                        id="email"
                        className={
                          errors.email
                            ? " border-red-700  placeholder:text-black  h-10 w-full px-4 bg-inherit border rounded-lg  border-opacity-50 outline-none   transition duration-300"
                            : " placeholder:text-black  placeholder:text-opacity-50 font-medium h-10 w-full px-4 bg-inherit border rounded-lg border-black border-opacity-30 outline-none transition duration-300"
                        }
                      />
                      {errors.email && (
                        <span className=" text-sm absolute z-10 right-0 -top-0.5 border-none font-normal bg-transparent  px-2 transition duration-600 input-text">
                          <img
                            src={warningSvg}
                            alt="google_icon"
                            height={10}
                            width={22}
                          />
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="mt-2">
                    <label className="relative flex gap-2">
                      <input
                        {...register("countryCode")}
                        type="tel"
                        placeholder=""
                        id="countryCode"
                        // onChange={handleInputChange}
                        autoSave="off"
                        autoComplete="off"
                        autoCorrect="off"
                        defaultValue={"+90"}
                        className=" flex text-center  text-opacity-50 font-medium items-center resize-none placeholder:text-black h-10 w-[25%] px-1 bg-inherit border rounded-lg border-black border-opacity-30 outline-none focus:border-red-950 transition duration-300"
                      />

                      <input
                        {...register("phoneNumber")}
                        placeholder="Phone"
                        type="tel"
                        id="phoneNumber"
                        className={
                          errors.phoneNumber
                            ? " border-red-700  placeholder:text-black  h-10 w-full px-4 bg-inherit border rounded-lg  border-opacity-50 outline-none   transition duration-300"
                            : " placeholder:text-black  placeholder:text-opacity-50 font-medium h-10 w-full px-4 bg-inherit border rounded-lg border-black border-opacity-30 outline-none  transition duration-300"
                        }
                      />
                      {errors.phoneNumber && (
                        <span className=" text-sm absolute z-10 right-0 top-2 border-none font-normal bg-transparent  px-2 transition duration-600 input-text">
                          <img
                            src={warningSvg}
                            alt="google_icon"
                            height={10}
                            width={22}
                          />
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="mt-2">
                    <label className="relative">
                      <input
                        {...register("password")}
                        placeholder="Password"
                        type={showPassword ? "text" : "Password"}
                        id="password"
                        className={
                          errors.password
                            ? "animate-input border-red-700  placeholder:text-black  h-10 w-full px-4 bg-inherit border rounded-lg  border-opacity-50 outline-none  transition duration-300"
                            : "animate-input placeholder:text-black  placeholder:text-opacity-50 font-medium h-10 w-full px-4 bg-inherit border rounded-lg border-black border-opacity-30 outline-none  transition duration-300"
                        }
                      />
                      {/* blinking eye effect */}
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className=" cursor-pointer absolute text-xl bg-transparent right-4 top-0"
                      >
                        {showPassword ? (
                          isBlinking ? (
                            <PiEyeClosedLight />
                          ) : (
                            <VscEye />
                          )
                        ) : (
                          <PiEyeClosedLight />
                        )}
                      </div>
                      {errors.password && (
                        <div className="text-xs  font-normal text-red-700 mt-1 px-2 transition duration-300 input-text">
                          {errors.password.message}
                        </div>
                      )}
                    </label>
                  </div>

                  <div className="mt-2">
                    <label className="relative">
                      <input
                        {...register("confirmPassword")}
                        placeholder="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        className={
                          errors.confirmPassword
                            ? " border-red-700  placeholder:text-black  h-10 w-full px-4 bg-inherit border rounded-lg  border-opacity-50 outline-none  transition duration-300"
                            : " placeholder:text-black  placeholder:text-opacity-50 font-medium h-10 w-full px-4 bg-inherit border rounded-lg border-black border-opacity-30 outline-none   transition duration-300"
                        }
                      />
                      {errors.confirmPassword && (
                        <span className=" text-sm absolute z-10 right-0 -top-0.5 border-none font-normal bg-transparent  px-2 transition duration-600 input-text">
                          <img
                            src={mismatchSvg}
                            alt="google_icon"
                            height={10}
                            width={22}
                          />
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="mt-2 flex w-full gap-2 items-center justify-between">
                    <div className="relative  w-1/3 rounded-lg">
                      <div
                        onClick={() => {
                          setgenderDropDown(!genderDropDown);
                        }}
                        className={
                          errors.gender
                            ? " border-red-700 border-opacity-30 border cursor-pointer flex  items-center justify-between font-medium h-10 px-3 bg-inherit  rounded-lg  outline-none   transition duration-300"
                            : " border-black border-opacity-30 border cursor-pointer flex  items-center justify-between font-medium h-10 px-3 bg-inherit  rounded-lg  outline-none   transition duration-300"
                        }
                      >
                        <p className="">{genderDefaultText}</p>
                        <span className="text-xl">
                          <RxCaretSort />
                        </span>
                      </div>
                      {genderDropDown && (
                        <div className="absolute border top-11 left-0 w-full rounded-lg z-10 bg-default_primary_1">
                          {/* male */}
                          <div
                            onClick={() => {
                              handleGenderClick(Gender.Male);
                            }}
                            className=" cursor-pointer m-1 hover:bg-default_primary_2 text-xl  px-1.5 py-1 flex justify-start gap-1 items-center rounded"
                          >
                            <LiaMaleSolid />
                            <p className="text-sm">Male</p>
                          </div>
                          {/* female */}
                          <div
                            onClick={() => {
                              handleGenderClick(Gender.Female);
                            }}
                            className=" cursor-pointer m-1 hover:bg-default_primary_2 text-xl  px-1.5 py-1 flex justify-start gap-1 items-center rounded"
                          >
                            <LiaFemaleSolid />
                            <p className="text-sm">Female</p>
                          </div>
                          {/* other */}
                          <div
                            onClick={() => {
                              handleGenderClick(Gender.Other);
                            }}
                            className=" cursor-pointer m-1 hover:bg-default_primary_2 text-xl  px-1.5 py-1 flex justify-start gap-1 items-center rounded"
                          >
                            <BiMaleFemale /> <p className="text-sm">Other</p>
                          </div>
                        </div>
                      )}
                      {errors.gender && (
                        <div className="text-xs font-normal text-red-700  mt-1 px-2 transition duration-300 input-text">
                          {errors.gender.message}
                        </div>
                      )}
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                      <input
                        placeholder="Date of Birth"
                        type="date"
                        id="dob"
                        {...register("dateOfBirth", {
                          setValueAs: (value: string) => parseDate(value),
                        })}
                        max={today}
                        className={
                          errors.dateOfBirth
                            ? " border-red-700  placeholder:text-black  h-10 w-full px-4 bg-inherit border rounded-lg  border-opacity-50 outline-none   transition duration-300"
                            : " placeholder:text-black  placeholder:text-opacity-50 font-medium h-10 w-full px-4 bg-inherit border rounded-lg border-black border-opacity-30 outline-none   transition duration-300"
                        }
                      />
                      {errors.dateOfBirth && (
                        <div className="text-xs font-normal text-red-700 mt-1 px-2 transition duration-300 input-text">
                          {errors.dateOfBirth.message}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* create account buttons */}
                  <div className="mt-3 flex flex-wrap gap-3 font-semibold">
                    <button
                      type="submit"
                      className=" w-full text-white rounded-lg bg-default_secondary border-black border-opacity-30 px-4  h-12 "
                    >
                      Create account
                    </button>
                  </div>
                </form>

                <div className="w-full flex justify-between items-center text-sm my-1 gap-1">
                  <hr className="border-t border-gray-400 flex-grow" />
                  <p>OR</p>
                  <hr className="border-t border-gray-400 flex-grow" />
                </div>

                <button className="flex  items-center gap- border w-full font-base rounded-lg border-black border-opacity-30 px-4  h-12">
                  <img src={googleSvg} alt="google_icon" height={10} width={25} />
                  <span className="w-full ">Continue with Google</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
