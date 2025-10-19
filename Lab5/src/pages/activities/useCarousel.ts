import { useEffect, useRef, useState } from "react";

export function useCarousel<T>(items: T[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const showImage = (index: number) => {
    const width = containerRef.current?.clientWidth || 0;
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${index * width}px)`;
    }
  };

  useEffect(() => {
    showImage(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => showImage(currentIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  return {
    currentIndex,
    handleNext,
    handlePrev,
    carouselRef,
    containerRef,
  };
}
