import { useRef, useState } from "react";

export default function useMouseEvents() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const detailsRef = useRef<HTMLTextAreaElement | null>(null);
  const handleMouseEnter = () => {
    const el = detailsRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      setTooltipPos({
        top: rect.top + window.scrollY,
        left: rect.right + 10 + window.scrollX,
      });
      setTooltipVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };
  return (
    {
        detailsRef,
        tooltipPos,
        tooltipVisible,
        handleMouseEnter,
        handleMouseLeave,
    });
}
