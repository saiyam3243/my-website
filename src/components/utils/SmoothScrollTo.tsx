let isScrolling: number | null = null;

const smoothScrollTo = (targetSelector: string, duration: number) => {
  const target = document.querySelector(targetSelector) as HTMLElement;
  if (!target) return;

  // Cancel any ongoing animation
  if (isScrolling) {
    window.cancelAnimationFrame(isScrolling);
  }

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      isScrolling = requestAnimationFrame(animation);
    } else {
      // Animation has completed
      isScrolling = null;
    }
  };

  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  isScrolling = requestAnimationFrame(animation);
};


  export default smoothScrollTo;
  