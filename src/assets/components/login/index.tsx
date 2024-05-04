import { userLoginSchema } from "../../Schemas/userLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PiEyeClosedLight } from "react-icons/pi";
import { VscEye } from "react-icons/vsc";
import googleSvg from "../../svg/google_svg.svg";
import { LiaTimesSolid } from "react-icons/lia";

interface Props {
  loginToogleFunction: () => void;
}

export const Login: React.FC<Props> = ({ loginToogleFunction }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [isBlinking, setIsBlinking] = useState<boolean>(false);

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClickInsideModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
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
  } = useForm<userLoginSchema>({ resolver: zodResolver(userLoginSchema) });

  // submit handler
  const onSubmit: SubmitHandler<userLoginSchema> = (data: userLoginSchema) => {
    console.log("formdata", JSON.stringify(data));
  };

  return (
    <div className="flex items-center  justify-center  w-full md:w-2/5 h-[-webkit-fill-available]">
      <div className="from-right  pt-6 px-6 mx-3 ">
        <div className="">
          <div className="flex flex-wrap mt-2 gap-1">
            <div className="flex flex-nowrap">
              <p className=" font-semibold text-2xl w-full">
                Welcome to PJ Books
              </p>
            </div>
            <p className="text-sm font-light w-full">
              Signin to explore more contents
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
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
              </label>
            </div>

            <div className="mt-3">
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
              </label>
            </div>
            <div className="text-sm justify-end mt-2 font-light gap-2 flex w-full">
              <p
                onClick={() => setShowModal(true)}
                className="font-medium cursor-pointer text-default_secondary hover:underline"
              >
                Forgot password ?
              </p>
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

          <button className="flex  items-center gap- border w-full font-base  rounded-lg border-black border-opacity-30 px-4  h-12">
            <img src={googleSvg} alt="google_icon" height={10} width={25} />
            <span className="w-full ">Continue with Google</span>
          </button>
          <div className=" text-center mt-4">
            <div className="text-sm justify-center font-light gap-2 flex w-full">
              Dont have an account ?
              <p
                onClick={loginToogleFunction}
                className="font-medium cursor-pointer text-default_secondary hover:underline"
              >
                Create account
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* forgot password modal */}

      <div
        onClick={() => setShowModal(false)}
        className={
          showModal
            ? "reveal fixed h-screen w-screen flex items-center justify-center cursor-not-allowed bg-[rgba(0,0,0,0.6)] top-0 left-0"
            : "hidden"
        }
      >
        <div
          onClick={handleClickInsideModal}
          className=" bg-white w-[21rem] md:w-[25rem] cursor-auto p-4 rounded h-[13rem]  left-0 items-center z-10 "
        >
          {/* modal head */}
          <div className="flex justify-between gap-4 items-center">
            <div className="flex flex-wrap">
              <p className="text-2xl font-semibold">Forgot Password</p>
              <p className="w-full text-sm">
                Enter password reset email
              </p>
            </div>
            <div
              onClick={() => setShowModal(false)}
              className="p-1 rounded-full cursor-pointer  hover:scale-110 duration-300 ease-in-out bg-[rgba(0,0,0,0.08)] "
            >
              <LiaTimesSolid className="text-2xl rounded-full" />
            </div>
          </div>

          {/* moal body */}

          <div className="mt-3 ">
            <input
            
              placeholder="Email"
              type="email"
              id="reset-email"
              className={
                " placeholder:text-black  placeholder:text-opacity-50 font-medium h-10 w-full px-4 bg-inherit border rounded-lg border-black border-opacity-30 outline-none transition duration-300"
              }
            />

            <div className="mt-4 flex justify-end flex-wrap gap-3 font-semibold">
              <button
                type="submit"
                className=" w-3/12 text-white rounded-lg bg-default_secondary border-black border-opacity-30 px-2  h-10 "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
