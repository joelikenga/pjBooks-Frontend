import { useState} from "react";
import {BsCart3} from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";
import {FiEye} from "react-icons/fi";
import {BiHeart} from "react-icons/bi";

export const NewBooks = () => {

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
            isLiked: false,
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
            isLiked: false,
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

        if (!books.find((book) => book.id === bookId)?.isLiked) {
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

    const handleClickInsideModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <div className="snap-y snap-mandatory py-4  w-full h-fit mt-6 ">
            <div className={"mx-auto max-w-7xl"}>
                {/* section name */}
                <div className="w-full flex justify-between py-4">
                    <div className="text-md md:text-2xl font-semibold flex items-baseline gap-2">
                        <p className="px-2">New Books</p>
                    </div>

                    <p className="text-sm">View all</p>

                </div>
                <div className={"p-2 bg-default_primary_1 h-fit rounded-lg"}>
                    <div
                        className="slider flex flex-nowrap gap-2 justify-normal items-center h-[19rem] rounded-md"
                    >
                        {/* book card */}
                        {books.slice(0,4).map((book) => (
                            <div
                                key={book.id}
                                onMouseEnter={() => setHoveredBookId(book.id)}
                                onMouseLeave={() => setHoveredBookId(false)}
                                className={
                                    "overflow-hidden snap-x snap-mandatory h-[19.5rem] bg-white w-1/4 rounded-md relative font-medium z-0 capitalize"
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
                                    className={"h-[13.5rem]  relative mx-1 mt-1 mb-0 rounded overflow-hidden"}>
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
                                <div className={"h-[4rem] items-center  flex flex-wrap mx-2  my-1"}>
                                    {/* Title and like button */}
                                    <div className={"w-full border-b items-center gap-1 flex justify-between"}>
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
                                    <div className={" pt-1.5 flex justify-between items-baseline w-full"}>
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
                                            className={"rounded cursor-default gap-0.5 py-1 text-[gray] font-medium text-xs"}>
                                            {book.status === "private" ?
                                                (<div className={"flex items-center h-3 pt-2  justify-between"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                                         fill="currentColor" className="size-4">
                                                        <path fillRule="evenodd"
                                                              d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z"
                                                              clipRule="evenodd"/>
                                                    </svg>

                                                    <p className={""}>{book.status}</p>
                                                </div>) :
                                                <div className={"flex items-center h-3 pt-2 gap-0.5 justify-between"}>
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
