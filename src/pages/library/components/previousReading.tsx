import {useState} from "react";
export const PreviousReading = () => {

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


    const [expand, setExpand] = useState<boolean>(false);
    // functions
    // const handleClickInsideModal = (event: React.MouseEvent<HTMLDivElement>) => {
    //     event.stopPropagation();
    // };

    const clickToExpand = () =>{
        if (initialBooks.length <= 5){
            setExpand(false)
        }else{
            setExpand(!expand)
        }
    }
    return (
        <div className={"mt-6  pl-1 md:pl-8 lg:pl-0"}>
            {/*------------------- text and filter section -----------------------*/}

            <div className={"flex justify-between items-end w-full relative"}>
                <p className={"text-2xl font-bold"}>Previous Reading</p>
                <div
                    onClick={()=>clickToExpand()}
                    className={"flex gap-2 justify-center items-center cursor-pointer border-2 p-1 rounded-lg"}>
                    <p className={"font-medium"}>{expand ? "Shrink" : "Expand"}</p>
                    {expand ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                   className="size-5">
                            <path fillRule="evenodd"
                                  d="M3.22 3.22a.75.75 0 0 1 1.06 0l3.97 3.97V4.5a.75.75 0 0 1 1.5 0V9a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1 0-1.5h2.69L3.22 4.28a.75.75 0 0 1 0-1.06Zm17.56 0a.75.75 0 0 1 0 1.06l-3.97 3.97h2.69a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0ZM3.75 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-3.97 3.97a.75.75 0 0 1-1.06-1.06l3.97-3.97H4.5a.75.75 0 0 1-.75-.75Zm10.5 0a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-2.69l3.97 3.97a.75.75 0 1 1-1.06 1.06l-3.97-3.97v2.69a.75.75 0 0 1-1.5 0V15Z"
                                  clipRule="evenodd"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                               className="size-5">
                            <path fillRule="evenodd"
                                  d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z"
                                  clipRule="evenodd"/>
                        </svg>}
                </div>

            </div>
            {/*---------------------previously read books-------------------------*/}

            <div className={`w-full ${expand ? "h-[32.5rem]" : "h-[16.5rem]"}  bg-default_primary_1 rounded-lg mt-4`}>
                <div className={"w-full p-2"}>
                    <div
                        className=" content-start grid grid-cols-5  gap-2 justify-center items-center h-fit rounded-lg"
                    >
                        {/* book card */}
                        {initialBooks.slice(0,expand ? 10 : 5).map((book) => (
                            <div
                                key={book.id}
                                className={
                                    "overflow-hidden rounded-md snap-x snap-mandatory bg-white cursor-pointer col-span-1  h-[15.5rem] relative font-medium z-0 capitalize"
                                }
                            >

                                {/* card Image */}
                                <div
                                    className={"h-[12rem]  relative mx-1 mt-1 mb-0  overflow-hidden"}>
                                    <img
                                        alt={""}
                                        className={"w-full rounded h-full object-top object-cover bg-cover"}
                                        src={book.img}
                                    />
                                </div>

                                <div className={"w-full text-xs font-semibold p-1 flex flex-col gap-1 flex-wrap items-start justify-center"}>
                                    <p className={"truncate w-full"}>{book.title}</p>
                                    <div className={"truncate w-full items-center gap-2 flex flex-nowrap justify-between"}>
                                        <div className={"truncate text-ellipsis font-medium"}> <p className={"truncate w-full"}>{book.author}</p></div>
                                        <div className={"h-[1.2rem] w-[3.5rem] text-center px-2 flex items-center rounded bg-default_secondary text-white"}>Fiction</div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}