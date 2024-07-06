import { Link } from "react-router-dom";
import { SplitStringUsingRegex } from "../../../utils/splitStringUsingRegex";
import { motion } from "framer-motion";

export const Hero = () => {
  const display_text: string =
    "Unlock a treasure trove of stories and knowledge. Explore our extensive collection and find your next favorite book today.";
  const New_text = SplitStringUsingRegex(display_text);
  console.log(New_text);

  let c_variants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

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
    <div className="max-w-full w-full bg-default_primary_1 h-[28rem] md:h-full overflow-hidden">
      <div className="mx-auto max-w-7xl w-full px-auto  md:px-6 xl:px-0  m-0 h-[20rem] md:h-[35rem] flex justify-between items-center">
        {/* text section */}
        <div className="w-2/4 hidden md:flex items-center justify-start ">
          <div className="w-full flex flex-wrap gap-8 ">
            <motion.div
              initial="hidden"
              animate={"reveal"}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.02 }}
              className="font-bold text-3xl"
            >
              {New_text.map((chars, index) => (
                <motion.span
                  key={index}
                  transition={{ duration: 0.6 }}
                  variants={c_variants}
                >
                  {chars}
                </motion.span>
              ))}
            </motion.div>
            <Link to={"/library"}>
              <motion.p
                className=" bg-default_secondary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:scale-95 duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", duration: 0.8, delay: 2.5 }}
              >
                Explore
              </motion.p>
            </Link>
          </div>
        </div>

        {/* animated cards */}
        <motion.div
          initial={{ opacity: 0, scale: 1, x: 300 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 2,
            staggerChildren: 0.04,
            bounce: 0.21,
            type: "spring",
          }}
          // viewport={{ once: true }}

          className="relative w-full md:w-2/4  md:overflow-hidden  h-full flex items-center justify-end"
        >
          {/* cards container container */}
          <div className=" w-[38rem] h-[38rem] overflow-hidden rounded-lg md:rounded-2xl flex flex-nowrap justify-between items-center ">
            {/* animate card 1 */}

            <div className="animate-up w-1/3 h-[3rem]  flex flex-wrap items-center gap-2">
              {shuffledImages_1.map((images, index) => (
                <img
                  src={images.image}
                  className="rounded-lg px-1 cursor-pointer"
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
                  className="rounded-lg px-1 cursor-pointer"
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
                  className="rounded-lg px-1 cursor-pointer"
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
        </motion.div>
      </div>
    </div>
  );
};
