export const slideUpAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity:1,
    y: 0,
    transition: {
      duration: 0.8,
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.8,
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
      duration: 0.8,
    }
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.8,
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
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren"
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
      duration: 2,
      ease: "easeOut",
      when: "afterChildren"
    }
  }
}

export const slideLeftAnimation2 = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
      when: "beforeChildren"
    }
  }
}