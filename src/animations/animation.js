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

export const slideDownAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
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
    // opacity: 0,
  },
  show: {
    x: 0,
    // opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    }
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
      duration: 1,
      ease: "easeOut",
      when: "afterChildren"
    }
  }
}
