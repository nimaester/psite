export const slideUpAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity:1,
    y: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 1
    }
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.75,
    }
  }
}

export const slideLeftAnimation = {
  hidden: {
    x: -2000,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.5

    }
  }
}

export const fadeAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    }
  },
  exit: {
    opacity: 0,
  }
}

// NEED TO FIX> NOT WORKING PROPERLY, INFINITE SLIDE FROM RIGHT
// export const slideRightAnimation = {
//   hidden: {
//     // x: 2000,
//     opacity: 0,
//   },
//   show: {
//     // x: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//       // staggerChildren: 0.5
//     }
//   }
// }
