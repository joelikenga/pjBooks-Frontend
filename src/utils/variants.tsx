// All variants for the framer motion animation

export const dropDownVariant = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      bounce: 0.5,
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.25,
    },
  },
};
export const heightVariant = {
  initial: {
    height: "16.5rem",
  },
  animate: {
    height: "32.5rem",
    transition: {
      duration: 0.8,
      type: "spring",
      bounce: 0.2,
      //   damping: 10,
    },
  },
  exit: {
    height: "16.5rem",
    transition: {
      duration: 0.25,
    },
  },
};

export const staggerVariants = {
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: 0.6 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const childVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export const pathVariant = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 4,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};

export const scaleUpVariant = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      bounce: 0.5,
      damping: 10,
    },
  },
};

export const showVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

export const showSearchVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
};

export const showSearchVariant2 = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.4,
      delay: 0.08,
    },
  },
};

export const showSearchVariant2_fix = {
    // initial: {
    //   opacity: 0,
    //   y: 20,
    // },
    animate: {
      marginTop:0,
      width:"100%",
      borderRadius:"0px",
      height:"3.5rem",
      transition: {
        duration: 0.2,
        delay: 0.08,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4,
        delay: 0.08,
      },
    },
  };

export const buttonBounceVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
      duration: 0.4,
      type: "spring",
      bounce: 0.5,
      damping: 8,
    },
  },
  whileTap: {
    scale: 0.7,
    duration: 0.2,

  },
};
