import { useEffect, useState } from "react";

export const useResizeX = (targetResize = 768) => {
  const [resized, setResized] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= targetResize) {
        setResized(true);
      } else {
        setResized(false);
      }
    };

    // handleResize(); // Initial call to handleResize

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [targetResize]);

  return resized;
};
