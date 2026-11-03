import { useEffect, useRef } from "react";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!finePointer) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const paint = () => {
      frame = 0;
      if (dot) {
        dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (ring) {
        ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const isInteractive = (target) =>
      target instanceof Element &&
      Boolean(
        target.closest(
          "a, button, input, textarea, select, [data-cursor='hover']"
        )
      );

    const onOver = (event) => {
      const active = isInteractive(event.target);
      ring?.classList.toggle("is-hover", active);
      dot?.classList.toggle("is-hover", active);
    };

    const onDown = () => ring?.classList.add("is-down");
    const onUp = () => ring?.classList.remove("is-down");
    const onLeave = () => {
      ring?.classList.add("is-hidden");
      dot?.classList.add("is-hidden");
    };
    const onEnter = () => {
      ring?.classList.remove("is-hidden");
      dot?.classList.remove("is-hidden");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    paint();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}

export default CustomCursor;
