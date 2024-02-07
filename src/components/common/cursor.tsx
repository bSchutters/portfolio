import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef1 = useRef<HTMLDivElement>(null);
  const cursorRef2 = useRef<HTMLDivElement>(null);
  const [activeCursor, setActiveCursor] = useState<"cursor1" | "cursor2">(
    "cursor1",
  );

  const [cursorTextOpen, setCursorTextOpen] = useState<boolean | undefined>(
    true,
  );

  useEffect(() => {
    const cursor1 = cursorRef1.current;
    const cursor2 = cursorRef2.current;

    const moveCursor = (e: MouseEvent) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      const hasCursorWipAttribut = hoveredElement?.hasAttribute("cursor-wip");
      const hasCursorOpenAttribut = hoveredElement?.hasAttribute("cursor-open");
      setCursorTextOpen(hasCursorOpenAttribut);

      if (hasCursorOpenAttribut || hasCursorWipAttribut) {
        setActiveCursor("cursor2");
      } else {
        setActiveCursor("cursor1");
      }

      if (activeCursor === "cursor1") {
        gsap.to(cursor1, {
          x: e.clientX - 10,
          y: e.clientY - 10,
          duration: 0.5,
          ease: "power2.out",
          scale: 1,
          opacity: 1,
          display: "block",
        });
        gsap.to(cursor2, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          display: "none",
        });
      } else {
        gsap.to(cursor2, {
          x: e.clientX + 20,
          y: e.clientY + 20,
          duration: 0.3,
          ease: "power2.out",
          scale: 1,
          opacity: 1,
          display: "block",
        });
        gsap.to(cursor1, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          display: "none",
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [activeCursor]);

  return (
    <div className="pointer-events-none fixed z-50 h-screen w-screen overflow-x-hidden">
      <div
        ref={cursorRef1}
        className={`pointer-events-none absolute z-50 h-4 w-4 rounded-full bg-black/0 backdrop-invert `}
      />
      <div
        ref={cursorRef2}
        className={
          "pointer-events-none absolute z-50 hidden scale-0 rounded-xl  bg-white px-4 py-2 "
        }
      >
        <p className="font-playfair font-bold italic">
          {cursorTextOpen ? "Open" : "Work in progress"}
        </p>
      </div>
    </div>
  );
};

export default Cursor;
