export const Hero = () => {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1715788338483-d991b12a988f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      alt: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1716042539914-50bf7ea49d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
      alt: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      alt: "",
    },
    {
      image:
        "https://media.istockphoto.com/id/598063032/photo/view-of-a-german-library.webp?b=1&s=170667a&w=0&k=20&c=X208UmAFbYti7YuHGLGI5Cw4hKK_40T_rqgm-tMOr4I=",
      alt: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1715788338483-d991b12a988f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      alt: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1716042539914-50bf7ea49d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
      alt: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      alt: "",
    },
    {
      image:
        "https://media.istockphoto.com/id/598063032/photo/view-of-a-german-library.webp?b=1&s=170667a&w=0&k=20&c=X208UmAFbYti7YuHGLGI5Cw4hKK_40T_rqgm-tMOr4I=",
      alt: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1715788338483-d991b12a988f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      alt: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1715788338483-d991b12a988f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      alt: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1716042539914-50bf7ea49d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
      alt: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      alt: "",
    },
    {
      image:
        "https://media.istockphoto.com/id/598063032/photo/view-of-a-german-library.webp?b=1&s=170667a&w=0&k=20&c=X208UmAFbYti7YuHGLGI5Cw4hKK_40T_rqgm-tMOr4I=",
      alt: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1715788338483-d991b12a988f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      alt: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1715788338483-d991b12a988f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      alt: "",
    },
  ];
  const shuffledImages_1 = [...images].sort(() => Math.random() - 0.5);
  const shuffledImages_2 = [...images].sort(() => Math.random() - 1);
  const shuffledImages_3 = [...images].sort(() => Math.random() - 1.5);

  return (
    <div className="max-w-full w-full  ">
      <div className="w-full  md:mt-[4rem p-0 m-0 h-[20rem] md:h-[40rem] flex justify-between items-center">
        {/* text section */}
        <div className="w-2/4 hidden md:flex">Dummy Text</div>

        {/* animated cards */}
        <div className="relative w-full md:w-2/4  h-full flex items-center justify-center">
          <div className="absolute z-10 h-full md:hidden w-full flex justify-center items-center bottom-14 left-0">
            <div className=" p-4 w-[90%] h-[12rem] bg-white rounded-lg  drop-shadow-xl mt-[43rem]">
              Dummy Text
            </div>
          </div>
          {/* cards container container */}
          <div className=" w-[38rem] h-[38rem] overflow-hidden rounded-lg md:rounded-2xl flex flex-nowrap justify-between items-center ">
            {/* animate card 1 */}

            <div className="animate-up w-1/3 h-[3rem]  flex flex-wrap items-center gap-2">
              {shuffledImages_1.map((images, index) => (
                <img
                  src={images.image}
                  className="rounded-lg px-1"
                  alt={images.alt}
                  key={index}
                />
              ))}
            </div>

            {/* animate card 2 */}

            <div className="animate-down w-1/3 h-[3rem]  flex flex-wrap items-center gap-2">
              {shuffledImages_2.map((images, index) => (
                <img
                  src={images.image}
                  className="rounded-lg px-1"
                  alt={images.alt}
                  key={index}
                />
              ))}
            </div>

            {/* animate card 3 */}

            <div className="animate-up w-1/3 h-[3rem]  flex flex-wrap items-center gap-2">
              {shuffledImages_3.map((images, index) => (
                <img
                  src={images.image}
                  className="rounded-lg px-1"
                  alt={images.alt}
                  key={index}
                />
              ))}
            </div>

            {/* animate card 4 */}

            <div className="animate-down w-1/3 h-[3rem]  flex flex-wrap items-center gap-2">
              {shuffledImages_1.map((images, index) => (
                <img
                  src={images.image}
                  className="rounded-lg px-1"
                  alt={images.alt}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
