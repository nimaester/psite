export const slideUpAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity:1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 1
    }
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
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
      staggerChildren: 1
    }
  },
  exit: {
    x: 2000,
    opacity: 0,
  }
}

export const slideRightAnimation = {
  hidden: {
    x: 2000,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 1
    }
  },
  exit: {
    x: 2000,
    opacity: 0,
  }
}

export const fadeAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren"
    }
  }
}
