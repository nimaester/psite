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
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    }
  }
}

export const slideLeftAnimation = {
  hidden: {
    x: -600,
  },
  show: {
    x: 0,
    transition: {
      duration: 0.5, ease: "easeOut",
      when: "beforeChildren"
    }
  }
}