import {useRef, useState} from "react";
import {BiHeart} from "react-icons/bi";
import {FiEye} from "react-icons/fi";
import {AiFillHeart} from "react-icons/ai";
import {BsCart3} from "react-icons/bs";
import {RxCaretLeft, RxCaretRight} from "react-icons/rx";

export const RecentBooks = () => {

    type LikedBooksState = Record<number, boolean>;
    type LikeAnimationsState = Record<number, boolean>;


    const books = [
        {
            id: 1,
            title: "Juniper's Christmas",
            author: "Eoin Colfer",
            img: "https://images.bwbcovers.com/125/Juniper-s-Christmas-9781250321947.jpg",
            likes: 200,
            read: 230,
            status: "public",
            price:200
        },
        {
            id: 2,
            title: "Juniper's Christmas",
            author: "Eoin Colfer",
            img: "https://images.unsplash.com/photo-1591951425328-48c1fe7179cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2tzfGVufDB8fDB8fHww",
            likes: 200,
            read: 230,
            status: "private",
            price:900

        },
        {
            id: 3,
            title: "Juniper's Christmas",
            author: "Eoin Colfer",
            img: "https://images.bwbcovers.com/125/Juniper-s-Christmas-9781250321947.jpg",
            likes: 200,
            read: 230,
            status: "private",
            price:700

        },

        {
            id: 4,
            title: "Juniper's Christmas",
            author: "Eoin Colfer",
            img: "https://images.unsplash.com/photo-1591951425328-48c1fe7179cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2tzfGVufDB8fDB8fHww",
            likes: 200,
            read: 230,
            status: "private",
            price:900

        },
        {
            id: 5,
            title: "Juniper's Christmas",
            author: "Eoin Colfer",
            img: "https://images.bwbcovers.com/125/Juniper-s-Christmas-9781250321947.jpg",
            likes: 200,
            read: 230,
            status: "private",
            price:700

        },

        {
            id: 6,
            title: "Juniper's Christmas",
            author: "Eoin Colfer",
            img: "https://images.unsplash.com/photo-1591951425328-48c1fe7179cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2tzfGVufDB8fDB8fHww",
            likes: 200,
            read: 230,
            status: "private",
            price:900

        },
        {
            id: 7,
            title: "Juniper's Christmas",
            author: "Eoin Colfer",
            img: "https://images.bwbcovers.com/125/Juniper-s-Christmas-9781250321947.jpg",
            likes: 200,
            read: 230,
            status: "private",
            price:700

        },


    ];

    //
    const [likedBooks, setLikedBooks] = useState<LikedBooksState>({});
    const [likeAnimations, setLikeAnimations] = useState<LikeAnimationsState>({});
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const slideWidth = 210;

    const handleLike = (bookId: number) => {
        const isLiked = !likedBooks[bookId];

        // Update the like status in the state
        setLikedBooks(prevState => ({
            ...prevState,
            [bookId]: isLiked
        }));

        if (isLiked) {
            // Trigger animation for liking the book
            setLikeAnimations(prevState => ({
                ...prevState,
                [bookId]: true
            }));

            // After 1000ms (1 second), reset the animation state
            setTimeout(() => {
                setLikeAnimations(prevState => ({
                    ...prevState,
                    [bookId]: false
                }));
            }, 1000);
        }
    };
    const handleClickInsideModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    const slideLeft = () => {
        const scrollDistance = slideWidth;
        sliderRef.current?.scrollBy({
            left: -scrollDistance,
            behavior: "smooth",
        });
    };

    const slideRight = () => {
        const scrollDistance = slideWidth;
        sliderRef.current?.scrollBy({
            left: scrollDistance,
            behavior: "smooth",
        });
    };

    return (
        <div
            className=" snap-y snap-mandatory  py-4  px-6 w-full bg-[rgba(0,0,0,0.1) bg-default_primary_1 h-fit mt-[14rem] md:my-0 ">
            {/* section name */}
            <div className="w-full flex justify-between py-4">
                <div className="text-md md:text-2xl font-semibold flex items-baseline gap-2">
                    <p className="  px-2 ">
                        Recent books
                    </p>
                    <p className="text-sm">View all</p>
                </div>

                {/* slider buttons */}
                <div className="flex justify-between gap-3">
                    <div
                        onClick={() => slideLeft()}
                        className="bg-default_secondary cursor-pointer text-white text-xl md:text-3xl flex justify-center rounded-full items-center h-[2rem] md:w-[2.5rem]  w-[2rem] md:h-[2.5rem] "
                    >
                        <RxCaretLeft/>
                    </div>

                    <div
                        onClick={() => slideRight()}
                        className="bg-default_secondary cursor-pointer text-white text-xl md:text-3xl flex justify-center rounded-full items-center h-[2rem] md:w-[2.5rem]  w-[2rem] md:h-[2.5rem] "
                    >
                        <RxCaretRight/>
                    </div>
                </div>
            </div>

            <div
                ref={sliderRef}
                className="slider flex flex-nowrap overflow-x-scroll   justify-normal items-center gap-2 h-fit p-2 rounded bg-default_primary_2"
            >
                {/* book card */}
                {books.map((books) => (

                    <div

                        key={books.id}
                        className={
                            " snap-x snap-mandatory h-fit bg-white min-w-[20rem] w-[20rem] m-2 rounded-2xl bg-my_light relative font-medium z-0 capitalize"
                        }
                    >
                        {/*price Description*/}
                        <div
                            onClick={handleClickInsideModal}
                            className="absolute shadow-md z-[2] top-5 right-5 p-1 h-[2rem] text-sm bg-white rounded-md text-default_secondary gap-1 flex justify-between items-center w-[5.5rem] ">
                            <p className={"w-[2.5rem]"}>${books.price}</p>
                            <p className={"w-[2.5rem] cursor-pointer bg-default_secondary flex justify-center items-center text-xl text-white p-1 rounded "}>
                                <BsCart3/></p>
                        </div>
                        {/*card Image*/}
                        <div className={"h-[20rem] relative mx-4 mt-4 mb-0 rounded-lg overflow-hidden"}>
                            {likeAnimations[books.id] && (<div
                                className={"heart  absolute top-[50%] left-[50%]  is-active h-[3rem] w-[3rem]"}></div>)}

                            <img
                                alt={""}
                                className={" w-full h-full object-cove bg-cover"}
                                src={books.img}
                            />
                        </div>
                        {/*Details section*/}
                        <div className={" h-[6rem] items-center flex flex-wrap mx-4 mb-4 mt-2"}>
                            {/*Title and like button*/}
                            <div className={"w-full items-center gap-2 flex justify-between"}>
                                <div className={"flex items-center flex-wrap font-semibold w-full truncate"}>
                                    <p className={"w-full truncate"}>{books.title}</p>
                                    <p className={"w-full font-medium truncate"}>{books.author}</p>
                                </div>
                                <div onClick={() => {
                                    handleLike(books.id)
                                    handleClickInsideModal
                                }}
                                     className={likedBooks[books.id] ? "bg-white relative  text-[red] cursor-pointer btn-click" : "bg-white relative   cursor-pointer"}>
                                    <div
                                        className={"p-0.5 text-2xl"}><AiFillHeart/></div>
                                </div>
                            </div>
                            {/*Card footer Details*/}
                            <div className={"border-t pt-2 flex justify-between py-1 w-full"}>
                                <div className={" flex items-center gap-2 text-[gray] justify-evenly"}>
                                    <div className={"flex items-center gap-0.5"}><FiEye/><p
                                        className={"text-xs"}>{books.read}</p></div>
                                    <div className={"flex items-center gap-0.5"}><BiHeart/><p
                                        className={"text-xs"}>{books.likes}</p></div>
                                </div>
                                <div
                                    className={"rounded-lg cursor-default px-2 py-0.5 border border-default_secondary font-medium text-xs"}>{books.status}
                                </div>

                            </div>
                        </div>

                    </div>))}
            </div>
        </div>
    );
};
