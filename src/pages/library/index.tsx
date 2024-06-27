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
import {BsCart3} from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";
import {FiEye} from "react-icons/fi";
import {BiHeart} from "react-icons/bi";

export const Library = () => {


    interface Book {
        id: number;
        title: string;
        author: string;
        img: string;
        likes: number;
        isLiked: boolean;
        read: number;
        status: string;
        price: number;
    }

    const initialBooks: Book[] = [
        {
            id: 1,
            title: "Juniper's Christmas",
            author: "Eoin Colfer",
            img: "https://images.unsplash.com/photo-1604430456280-43f652c497aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
            likes: 200,
            isLiked: true,
            read: 230,
            status: "public",
            price: 200,
        },
        {
            id: 2,
            title: "Juniper's Christmas",
            author: "Eoin Colfer",
            img: "https://images.unsplash.com/photo-1591951425328-48c1fe7179cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2tzfGVufDB8fDB8fHww",
            likes: 200,
            isLiked: false, // Assuming this was missing and should be false
            read: 230,
            status: "private",
            price: 900,
        },
        {
            id: 3,
            title: "Juniper's Christmas",
            author: "Eoin Colfer",
            img: "https://images.bwbcovers.com/125/Juniper-s-Christmas-9781250321947.jpg",
            likes: 200,
            isLiked: true,
            read: 230,
            status: "private",
            price: 700,
        },
        {
            id: 4,
            title: "Juniper's Christmas",
            author: "Eoin Colfer",
            img: "https://images.unsplash.com/photo-1591951425328-48c1fe7179cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2tzfGVufDB8fDB8fHww",
            likes: 200,
            isLiked: true,
            read: 230,
            status: "private",
            price: 900,
        },
        {
            id: 5,
            title: "Juniper's Christmas",
            author: "Eoin Colfer",
            img: "https://images.bwbcovers.com/125/Juniper-s-Christmas-9781250321947.jpg",
            likes: 200,
            isLiked: true,
            read: 230,
            status: "private",
            price: 700,
        },
        {
            id: 6,
            title: "Juniper's Christmas",
            author: "Eoin Colfer",
            img: "https://images.unsplash.com/photo-1591951425328-48c1fe7179cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2tzfGVufDB8fDB8fHww",
            likes: 200,
            isLiked: true,
            read: 230,
            status: "private",
            price: 900,
        },
        {
            id: 7,
            title: "Juniper's Christmas",
            author: "Eoin Colfer",
            img: "https://images.bwbcovers.com/125/Juniper-s-Christmas-9781250321947.jpg",
            likes: 200,
            isLiked: true,
            read: 230,
            status: "private",
            price: 700,
        },
    ];

    const [books, setBooks] = useState(initialBooks);
    const [likeAnimations, setLikeAnimations] = useState<Record<number, boolean>>({});
    const [hoveredBookId, setHoveredBookId] = useState<boolean | number>(false);
    const [openCategory, setOpenCategory] = useState<boolean>(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [atTop, setAtTop] = useState<boolean>(false);
    const [atBottom, setAtBottom] = useState<boolean>(false);
    const isHovering = useRef<boolean>(false);
    const [searchWords, setSearchWords] = useState('');
    const [is_word, setIs_word] =  useState<boolean>(false);


    // functions
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchWords(value);
        console.log(`Input value: "${value}"`);

        if (value.trim() === "") {
            setIs_word(false);
            console.log('is_word set to false');
        } else {
            setIs_word(true);
            console.log('is_word set to true');
        }
    };

    // filter
    const filteredBooks = initialBooks.filter(value =>
        value.title.toLowerCase().includes(searchWords.toLowerCase()) ||
        value.title.toLowerCase().includes(searchWords.toLowerCase())
    );

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

    const handleLike = (bookId: number) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === bookId
                    ? {
                        ...book,
                        isLiked: !book.isLiked,
                        likes: book.isLiked ? book.likes - 1 : book.likes + 1,
                    }
                    : book
            )
        );

        const isCurrentlyLiked = books.find((book) => book.id === bookId)?.isLiked;

        if (!isCurrentlyLiked) {
            setLikeAnimations((prevState) => ({
                ...prevState,
                [bookId]: true,
            }));

            setTimeout(() => {
                setLikeAnimations((prevState) => ({
                    ...prevState,
                    [bookId]: false,
                }));
            }, 1000);
        }
    };
    return (
        <div className="w-full max-w-full h-screen ">
            <Navbar/>
            <div className="flex pt-[4rem] h-full w-full mx-auto max-w-7xl relative ">
                {/* Main library body */}
                <div className="md:w-full pr-2 lg:w-8/12 overflow-y-auto slider relative">
                    {/*-------------------------------------------------------------------------------------------------------------------------------------------------*/}
                    {/*search and category*/}
                    <div
                        className=" sticky top-0 z-[2] py-4  w-full items-center flex justify-start pl-1 md:pl-8 lg:pl-0 bg-white  gap-8">
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
                            <input value={searchWords} onChange={handleSearchChange}
                                   className="p-2 w-full rounded-lg h-full font-medium outline-none border-0"
                                   placeholder="Search for Books..."/>
                        </div>
                    </div>
                    {/*    ----------------------------------------------------------------------------------------------------------------------------------------*/}


                    {is_word ?
                        // when searchbar population is true

                        (<div className={"bg-[rgba(0,0,0,0.07)] gap-3 items-center p-2 rounded-lg grid grid-cols-4 content-start"}>
                            {
                                filteredBooks.map((book ) => (
                                    <div
                                        key={book.id}
                                        onMouseEnter={() => setHoveredBookId(book.id)}
                                        onMouseLeave={() => setHoveredBookId(false)}
                                        className={
                                            "h-[19.5rem] bg-white -w-1/4 col-span-1 rounded-md relative font-medium z-0 capitalize"
                                        }
                                    >
                                        {/* price Description */}
                                        {hoveredBookId === book.id && (
                                            <div
                                                onClick={handleClickInsideModal}
                                                className="from-left absolute shadow-md z-[2] top-5 right-5 p-1 h-[2.5rem] text-sm bg-white rounded-md text-default_secondary gap-1 flex justify-between items-center w-[6rem]"
                                            >
                                                <p className={"w-[2.5rem]"}>${book.price}</p>
                                                <p className={"w-[2.5rem] cursor-pointer bg-default_secondary flex justify-center items-center text-xl text-white p-1.5 rounded"}>
                                                    <BsCart3/>
                                                </p>
                                            </div>
                                        )}
                                        {/* card Image */}
                                        <div
                                            className={"h-[14.5rem]  relative mx-1 mt-1 mb-0 rounded overflow-hidden"}>
                                            {likeAnimations[book.id] && (
                                                <div
                                                    className={"heart absolute top-[50%] left-[50%] is-active h-[3rem] w-[3rem]"}></div>
                                            )}

                                            <img
                                                alt={""}
                                                className={"w-full h-full object-cover object-top bg-cover"}
                                                src={book.img}
                                            />
                                        </div>
                                        {/* Details section */}
                                        <div className={"h-fit items-center  flex flex-wrap mx-2  my-1"}>
                                            {/* Title and like button */}
                                            <div className={"w-full items-center gap-1 flex justify-between"}>
                                                <div
                                                    className={"flex items-center flex-wrap gap-1 text-sm font-semibold w-full truncate"}>
                                                    <p className={"w-full truncate"}>{book.title}</p>
                                                    <p className={"w-full text-xs font-medium truncate"}>{book.author}</p>
                                                </div>
                                                <div
                                                    onClick={() => {
                                                        handleLike(book.id);
                                                        handleClickInsideModal;
                                                    }}
                                                    className={
                                                        book.isLiked
                                                            ? "bg-white relative text-[red] cursor-pointer btn-click"
                                                            : "bg-white relative cursor-pointer"
                                                    }
                                                >
                                                    <div className={"p-0.5 text-2xl"}>
                                                        <AiFillHeart/>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card footer Details */}
                                            <div className={" border-t pt-2 flex h-full justify-between items-center w-full"}>
                                                <div className={"flex items-center gap-2 text-[gray] justify-evenly"}>
                                                    <div className={"flex items-center gap-0.5"}>
                                                        <FiEye/>
                                                        <p className={"text-xs"}>{book.read}</p>
                                                    </div>
                                                    <div className={"flex items-center gap-0.5"}>
                                                        <BiHeart/>
                                                        <p className={"text-xs"}>{book.likes}</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className={"rounded cursor-default gap-0.5 text-[gray] font-medium text-xs"}>
                                                    {book.status === "private" ?
                                                        (<div className={"flex items-center h-3   gap-0.5 justify-between"}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                                 fill="currentColor" className="size-4">
                                                                <path fillRule="evenodd"
                                                                      d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z"
                                                                      clipRule="evenodd"/>
                                                            </svg>

                                                            <p className={""}>{book.status}</p>
                                                        </div>) :
                                                        <div className={"flex items-center h-3  gap-0.5 justify-between"}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                                 fill="currentColor" className="size-4">
                                                                <path fillRule="evenodd"
                                                                      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM5.657 3.023a5.5 5.5 0 1 0 7.584 3.304l-.947-.63a.431.431 0 0 0-.544.053.431.431 0 0 1-.544.054l-.467-.312a.475.475 0 0 0-.689.608l.226.453a2.119 2.119 0 0 1 0 1.894L10.1 8.8a.947.947 0 0 0-.1.424v.11a2 2 0 0 1-.4 1.2L8.8 11.6A1 1 0 0 1 7 11v-.382a1 1 0 0 0-.553-.894l-.422-.212A1.854 1.854 0 0 1 6.855 6h.707a.438.438 0 1 0-.107-.864l-.835.209a1.129 1.129 0 0 1-1.305-1.553l.342-.77Z"
                                                                      clipRule="evenodd"/>
                                                            </svg>


                                                            <p className={""}>{book.status}</p>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>) :
                        // when searchbar population is false

                        (<div className={""}>

                            <PreviousReading/>
                            <SubjectsSection/>
                            <NewBooks/>
                            <PopularBooks/>
                            <KidsBooks/>
                            <LoveRomanceBooks/>

                        </div>)
                    }

                </div>
                <div className={"hidden lg:block w-4/12  pl-2 md:pr-8 lg:pr-0 overflow-y-auto"}>
                    <AuthorsCard/>
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
