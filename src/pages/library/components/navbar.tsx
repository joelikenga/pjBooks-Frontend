import {useState} from "react";

export const Navbar = () => {
    // states
    const [openProfile, SetOpenProfile] = useState<boolean>(false);
    // propagation
    const handleClickInsideModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <nav className=" sticky top-0 z-20 backdrop-blur-2xl bg-[rgba(0,0,0,0.2)] md:bg-white  gap-2 p-4 border-b border-default_primary_2  flex justify-between items-center max-w-full w-full">
            {/*logo*/}
            <p className="font-bold md:text-xl">PJ Books</p>



            <div className="flex justify-center items-center gap-2">

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

            {/* user side dropdown */}
            {openProfile && (
                <div className="absolute w-full h-screen left-0 top-0 bg-[transparent]"
                     onClick={() => {
                         SetOpenProfile(false);
                     }}
                >
                    <div
                        onClick={handleClickInsideModal}
                        onMouseLeave={() => {
                            SetOpenProfile(false);
                        }}
                        className="reveal z-10 absolute w-[20rem] h-fit border drop-shadow-md bg-white right-4 top-[5rem] rounded"
                    >
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
                    </div>
                </div>
            )}
        </nav>
    );
};
