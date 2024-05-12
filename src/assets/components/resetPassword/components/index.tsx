import { SubmitHandler, useForm } from "react-hook-form";
// import googleSvg from "../../../svg/google_svg.svg";
import mismatchSvg from "../../../svg/passwordMismatch.svg";
// import warningSvg from "../../../svg/warning sign.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  userResetPassword,
  userResetPasswordSchema,
} from "../../../Schemas/userResetPassword";
import { PiEyeClosedLight } from "react-icons/pi";
import { VscEye } from "react-icons/vsc";
import { useState, useEffect } from "react";

export const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [isBlinking, setIsBlinking] = useState<boolean>(false);

  const [loginToogle, setloginToogle] = useState<boolean>(true);

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
  } = useForm<userResetPassword>({
    resolver: zodResolver(userResetPasswordSchema),
  });

  // submit handler
  const onSubmit: SubmitHandler<userResetPassword> = (
    data: userResetPassword
  ) => {
    console.log("formdata", JSON.stringify(data));
  };

  const loginToogleFunction = () => {
    setloginToogle(!loginToogle);
  };

  return (
    <div className="slideRight h-[100%] flex flex-wrap  justify-center bg-default_primary_2">
      {/* <Navbar /> */}

      <div className="w-full flex justify-center items-center">
        {/* container */}
        <div className=" overflow-hidden bg-default_primary_1 min-h-screen  md:h-[38rem] w-[65rem] rounded-lg flex items-center justify-between ">
          {/* image display section */}
          <div className="h-full hidden  w-3/5 md:flex ">
            <div className=" relative border rounded-lg  w-full h-[-webkit-fill-available] my-1.5 ml-1.5">
              <img
                className="w-full h-full  object-cover rounded-md"
                width={1000}
                height={1000}
                src={
                  "https://res.cloudinary.com/dnkhkqisg/image/upload/v1714770561/bg_y4tuny.jpg"
                }
              />
            </div>
          </div>

          {/* password reset input section */}

          <div className="flex justify-center items-center w-full  md:w-2/5">
            <div className="from-left px-6 mx-3 h-[-webkit-fill-available] ">
              <div className="flex  flex-wrap  gap-1">
                <div className="flex flex-nowrap">
                  <p className=" font-semibold text-3xl w-full">
                    Reset password
                  </p>
                </div>
                <p className="text-sm font-light w-full">
                  Strong combinations make great passwords
                </p>
              </div>

              {/* forms */}

              <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
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

                {/* create account buttons */}
                <div className="mt-4 flex justify-between flex-wrap gap-3 font-semibold">
                  <button
                    type="submit"
                    className=" w-fit text-black rounded-lg bg-[rgba(0,0,0,0.3)] border-black border-opacity-30 px-4  h-12 "
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className=" w-fit text-white rounded-lg bg-default_secondary border-black border-opacity-30 px-4  h-12 "
                  >
                    Create account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
