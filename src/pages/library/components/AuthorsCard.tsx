export const AuthorsCard = ()=> {
    interface Author_Details {
        id: number;
        name: string;
        total_Books: number;
        img: string;
        profession: string;

    }

    const Top_Author : Author_Details[] = [
        {id: 1, name: "Juniper's Christmas", total_Books: 12, img:"https://images.pexels.com/photos/19867595/pexels-photo-19867595/free-photo-of-happy-pongal.jpeg?auto=compress&cs=tinysrgb&w=600",profession:"Doctor"},
        {id: 2, name: "Juniper's Christmas", total_Books: 12, img:"https://images.pexels.com/photos/19867595/pexels-photo-19867595/free-photo-of-happy-pongal.jpeg?auto=compress&cs=tinysrgb&w=600",profession:"Doctor"},
        {id: 3, name: "Juniper's Christmas", total_Books: 12, img:"https://images.pexels.com/photos/19867595/pexels-photo-19867595/free-photo-of-happy-pongal.jpeg?auto=compress&cs=tinysrgb&w=600",profession:"Doctor"},
        {id: 4, name: "Juniper's Christmas", total_Books: 12, img:"https://images.pexels.com/photos/19867595/pexels-photo-19867595/free-photo-of-happy-pongal.jpeg?auto=compress&cs=tinysrgb&w=600",profession:"Doctor"},
        {id: 5, name: "Juniper's Christmas", total_Books: 12, img:"https://images.pexels.com/photos/19867595/pexels-photo-19867595/free-photo-of-happy-pongal.jpeg?auto=compress&cs=tinysrgb&w=600",profession:"Doctor"},
        {id: 6, name: "Juniper's Christmas", total_Books: 12, img:"https://images.pexels.com/photos/19867595/pexels-photo-19867595/free-photo-of-happy-pongal.jpeg?auto=compress&cs=tinysrgb&w=600",profession:"Doctor"},
    ]
    return(
        <div className="bg-[rgba(0,0,0,0.07)] grid h-[20rem] mt-4 rounded-lg gap-2 grid-cols-3 p-2">

            {Top_Author.slice(0 , 6).map((author : Author_Details)  => (
                <div key={author.id} className={" bg-white flex flex-col col-span-1 justify-between rounded-lg py-3 "}>
                    <div className={"flex w-full justify-between items-center px-2 "}>
                        {/*    image*/}
                        <div
                            className={" rounded-full border border-default_secondary border-b- overflow-hidden h-[2.5rem] w-[2.5rem]"}>
                            <img className={"object-center"}
                                 src={author.img}
                                 alt={author.name}/>
                        </div>
                        {/*book number*/}
                        <div className={"flex w-1/2 flex-col items-center justify-end "}>
                            <p className={"text-xl font-medium"}>{author.total_Books}</p>
                            <p className={"text-sm font-normal"}>Books</p>
                        </div>
                    </div>
                    {/*    authors name and professions*/}
                    <div
                        className={"flex w-full flex-col  items-start gap-0.5 justify-center px-2 truncate text-ellipsis"}>
                        <p className={"text-xs w-full font-medium truncate"}>{author.name}</p>
                        <p className={"text-xs font-normal truncate"}>{author.profession}</p>
                    </div>

                    {/*    bottom section*/}
                    <div className={"flex w-full  items-center justify-between px-2 truncate text-ellipsis"}>
                        <p className={"text-xs w-1/2 font-medium "}>more...</p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
                                 stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
                            </svg>

                        </div>
                    </div>
                </div>

            ))}

        </div>
    )
}