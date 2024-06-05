import { useRef } from "react";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

export const NewBooks = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slideWidth = 210;

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
    <div className="snap-y snap-mandatory  p-4 w-full bg-[rgba(0,0,0,0.1) bg-default_primary_1 h-fit mt-[14rem] mb-[4rem] md:my-0 ">
      {/* section name */}
      <div className="w-full flex justify-between py-4">
        <div className="text-md md:text-xl font-medium flex items-baseline gap-2">
          <p className="  border-x-default_secondary px-2 border-x-4">
            New books
          </p>
          <p className="text-sm">See all</p>
        </div>

        {/* slider butttons */}
        <div className="flex justify-between gap-3">
          <div
            onClick={() => slideLeft()}
            className="bg-default_secondary cursor-pointer text-white text-xl md:text-3xl flex justify-center rounded-full items-center h-[2rem] md:w-[2.5rem]  w-[2rem] md:h-[2.5rem] "
          >
            <PiCaretLeftLight />
          </div>

          <div
            onClick={() => slideRight()}
            className="bg-default_secondary cursor-pointer text-white text-xl md:text-3xl flex justify-center rounded-full items-center h-[2rem] md:w-[2.5rem]  w-[2rem] md:h-[2.5rem] "
          >
            <PiCaretRightLight />
          </div>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="flex flex-wrap overflow-hidden snap-x snap-mandatory  justify-normal items-center gap-4 h-[28rem] p-2 rounded bg-default_primary_2"
      >
        {/* book card */}
        <div
          className={
            " snap-x snap-mandatory h-[25.5rem] bg-white  min-w-[1rem] m-2 rounded bg-my_light relative font-medium z-0 capitalize"
          }
        >
            <div className="absolute top-3 right-3 p-1.5 text-sm bg-default_secondary rounded text-white">New</div>
          <img
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
                    "z-20 py-2 px-4  font-medium rounded-md bg-default_secondary text-white "
                  }
                >Rent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
