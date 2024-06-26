import {BottomNav} from "../homepage/components/bottomNav";
import {useEffect, useRef, useState} from "react";
import {NavLink} from "react-router-dom";
import {PreviousReading} from "../library/components/previousReading.tsx";
import {SubjectsSection} from "../library/components/subjectsSection.tsx";
import {NewBooks} from "../library/components/NewBooks.tsx";
import {Navbar} from "../library/components/navbar.tsx";
import {PopularBooks} from "../library/components/popularBooks.tsx";
import {KidsBooks} from "../library/components/KidsBooks.tsx";
import {LoveRomanceBooks} from "../library/components/love&RomanceBooks.tsx";
import {AuthorsCard} from "../library/components/AuthorsCard.tsx";

export const Library = () => {
    const [openCategory, setOpenCategory] = useState<boolean>(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [atTop, setAtTop] = useState<boolean>(false);
    const [atBottom, setAtBottom] = useState<boolean>(false);
    const isHovering = useRef<boolean>(false);


    // functions
    const handleClickInsideModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    const categoryScroll = (direction: "up" | "down") => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy(0, direction === "up" ? -5 : 5);
            checkScrollPosition();
        }
    };

    const handleMouseEnter = (direction: "up" | "down") => {
        isHovering.current = true;
        intervalRef.current = setInterval(() => {
            categoryScroll(direction);
        }, 16); // roughly 60 times per second
    };

    const handleMouseLeave = () => {
        isHovering.current = false;
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const {scrollTop, scrollHeight, clientHeight} = scrollRef.current;
            const atTopNow = scrollTop === 0;
            const atBottomNow = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

            setAtTop(atTopNow);
            setAtBottom(atBottomNow);

            if ((atTopNow || atBottomNow) && intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    };

    const handleManualScroll = () => {
        checkScrollPosition();
    };

    useEffect(() => {
        checkScrollPosition();
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', checkScrollPosition);
        }
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', checkScrollPosition);
            }
        };
    }, []);

    return (
        <div className="w-full max-w-full h-screen ">
            <Navbar />
            <div className="flex pt-[4rem] h-full w-full mx-auto max-w-7xl relative ">
                {/* Main library body */}
                <div className="md:w-full pr-2 lg:w-8/12 overflow-y-auto slider relative">
                    {/*-------------------------------------------------------------------------------------------------------------------------------------------------*/}
                    {/*search and category*/}
                    <div className=" sticky top-0 z-[2] py-4  w-full items-center flex justify-start pl-1 md:pl-8 lg:pl-0 bg-white  gap-8">
                        {/* Category section */}
                        <div
                            onClick={() => setOpenCategory(!openCategory)}
                            className="z-[2] flex justify-center items-center rounded-lg gap-1 h-10 px-2 bg-default_secondary text-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"/>
                            </svg>
                            <p className="font-medium text-base">Categories</p>
                            {openCategory ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="size-5">
                                    <path fillRule="evenodd"
                                          d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                                          clipRule="evenodd"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="size-5">
                                    <path fillRule="evenodd"
                                          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                          clipRule="evenodd"/>
                                </svg>
                            )}
                        </div>

                        {/* Search section */}
                        <div
                            className="flex items-center border-2 px-2 rounded-lg h-10 w-[29rem] text-[rgba(0,0,0,0.5)]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="size-6">
                                <path fillRule="evenodd"
                                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                      clipRule="evenodd"/>
                            </svg>
                            <input className="p-2 w-full rounded-lg h-full font-medium outline-none border-0"
                                   placeholder="Search for Books..."/>
                        </div>
                    </div>
                    {/*    ----------------------------------------------------------------------------------------------------------------------------------------*/}
                    <div className={""}>

                        <PreviousReading/>
                        <SubjectsSection />
                        <NewBooks />
                        <PopularBooks />
                        <KidsBooks />
                        <LoveRomanceBooks />

                    </div>

                </div>
                <div className={"hidden lg:block w-4/12  pl-2 md:pr-8 lg:pr-0 overflow-y-auto"}>
                    <AuthorsCard />
                </div>


            {/*    categories drop down*/}
                {openCategory &&
                    <div onClick={() => setOpenCategory(false)}
                         className="absolute w-full z-[3] h-screen bg-[transparent]]  top-0 left-0">
                        <div

                            onClick={handleClickInsideModal}
                            className="from-top w-[16rem]  bg-white h-[25rem] border-2 mt-[8rem] drop-shadow-md flex flex-col justify-between rounded-lg">
                            {/* Scroll up */}
                            {!atTop && <div
                                onMouseEnter={() => handleMouseEnter("up")}
                                onMouseLeave={handleMouseLeave}
                                onScroll={() => checkScrollPosition()}
                                className={"flex items-center cursor-n-resize justify-center w-full h-8 border-b border-b-[rgba(0,0,0,0.05)] "}

                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     className="size-5">
                                    <path fillRule="evenodd"
                                          d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
                                          clipRule="evenodd"/>
                                </svg>

                            </div>}
                            <div
                                ref={scrollRef}
                                onScroll={handleManualScroll}
                                className="h-full px-5 py-3 slider overflow-y-auto">
                                <NavLink to={""}
                                         className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                    Fiction
                                </NavLink><NavLink to={""}
                                                   className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink><NavLink to={""}
                                               className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink><NavLink to={""}
                                               className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink><NavLink to={""}
                                               className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink><NavLink to={""}
                                               className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink><NavLink to={""}
                                               className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink><NavLink to={""}
                                               className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink><NavLink to={""}
                                               className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink><NavLink to={""}
                                               className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink><NavLink to={""}
                                               className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink><NavLink to={""}
                                               className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink><NavLink to={""}
                                               className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink><NavLink to={""}
                                               className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink><NavLink to={""}
                                               className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink><NavLink to={""}
                                               className="pl-3 flex font-medium py-1 w-full border-l-2 border-l-default_primary_2 hover:border-default_secondary">
                                Fiction
                            </NavLink>
                            </div>
                            {/* Scroll down */}
                            {!atBottom && <div
                                onMouseEnter={() => handleMouseEnter("down")}
                                onMouseLeave={handleMouseLeave}
                                onScroll={() => checkScrollPosition()}

                                className={"flex items-center cursor-s-resize justify-center w-full  h-8 border-t border-t-[rgba(0,0,0,0.05)] "}

                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     className="size-5">
                                    <path fillRule="evenodd"
                                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                          clipRule="evenodd"/>
                                </svg>

                            </div>}
                        </div>
                    </div>
                }
            </div>

            <BottomNav/>
        </div>
    );
};
