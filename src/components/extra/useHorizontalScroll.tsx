// hooks/useHorizontalScroll.ts
import { useEffect } from 'react';

const useHorizontalScroll = (ref:any) => {
  useEffect(() => {
    const element = ref.current;

    const isAtStart = () => element.scrollLeft <= 0;
    const isAtEnd = () => (element.scrollLeft) >= (element.scrollWidth - element.clientWidth);

    const handleWheel = (e: { deltaY: number; preventDefault: () => void; }) => {
      const atStart = isAtStart();
      const atEnd = isAtEnd();

      // Scroll horizontally in the container
      const shouldScrollHorizontally = (!atEnd || e.deltaY < 0) && (!atStart || e.deltaY > 0);
      if (shouldScrollHorizontally) {
        e.preventDefault(); // Prevent vertical scrolling
        element.scrollLeft += e.deltaY;
      }

      // Allow vertical scroll beyond the horizontal content limits
      if (atEnd && e.deltaY > 0) {
        // Allow scrolling down when at the end of the horizontal content
        element.scrollLeft = element.scrollWidth; // Ensure it stays at the end
      }

      if (atStart && e.deltaY < 0) {
        // Allow scrolling up when at the start of the horizontal content
        element.scrollLeft = 0; // Ensure it stays at the start
      }
    };

    element.addEventListener('wheel', handleWheel, { passive: false });

    return () => element.removeEventListener('wheel', handleWheel);
  }, [ref]);
};

export default useHorizontalScroll;
