import { useRef} from "react";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

export const Textbooks = () => {

    //
    // const  [searchText, setSearchText] = useState <string>("a");
    // const  [Books, setBooks] = useState <[]>([]);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const slideWidth = 210;

    const slideLeft = () => {
        const scrollDistance = slideWidth;
        sliderRef.current?.scrollBy({
            left: -scrollDistance ,
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
        <div className="snap-y snap-mandatory  p-4 w-full bg-[rgba(0,0,0,0.1) bg-default_primary_1 h-fit  md:my-0 ">
            {/* section name */}
            <div className="w-full flex justify-between py-4">
                <div className="text-md md:text-2xl font-semibold flex items-baseline gap-2">
                    <p className="  px-2 ">
                        Text books
                    </p>
                    <p className="text-sm">View all</p>
                </div>

                {/* slider buttons */}
                <div className="flex justify-between gap-3">
                    <div
                        onClick={() => slideLeft()}
                        className="bg-default_secondary cursor-pointer text-white text-xl md:text-3xl flex justify-center rounded-full items-center h-[2rem] md:w-[2.5rem]  w-[2rem] md:h-[2.5rem] "
                    >
                        <PiCaretLeftLight/>
                    </div>

                    <div
                        onClick={() => slideRight()}
                        className="bg-default_secondary cursor-pointer text-white text-xl md:text-3xl flex justify-center rounded-full items-center h-[2rem] md:w-[2.5rem]  w-[2rem] md:h-[2.5rem] "
                    >
                        <PiCaretRightLight/>
                    </div>
                </div>
            </div>

            <div
                ref={sliderRef}
                className=".transpaent-scrollbar flex flex-nowrap overflow-hidden overscroll-x-contain   justify-normal items-center gap-4 h-fit p-2 rounded bg-default_primary_2"
            >
                {/* book card */}
                { [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((n) =>(

                    <div
                        key={n}
                        className={
                            " snap-x snap-mandatory h-[25.5rem] bg-white  min-w-[15rem] m-2 rounded bg-my_light relative font-medium z-0 capitalize"
                        }
                    >
                        <img
                            alt={""}
                            className={"h-fit w-60  object-cover p-2 rounded"}
                            src={
                                "https://images.bwbcovers.com/125/Juniper-s-Christmas-9781250321947.jpg"
                            }
                        />

                        <div className={"mx-2 text-sm"}>
                            <div className={"flex items-center justify-between "}>
                                <div className="border rounded ">
                                    <p className={"border-l-2 p-1 text-lg  border-default_secondary "}>₺ 500</p>
                                </div>

                                {/*rent button*/}
                                <div>
                                    <button
                                        className={
                                            "z-20 py-1 px-3 text-xl font-medium rounded-md bg-default_secondary text-white "
                                        }
                                    >Rent
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>
    );
};
