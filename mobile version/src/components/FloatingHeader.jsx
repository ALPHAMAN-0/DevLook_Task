import { useEffect, useRef, useState } from "react";
import Wordmark from "./Wordmark.jsx";

export default function FloatingHeader({ setMenuOpen, menuOpen }) {
  const [visible, setVisible] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastYRef.current;

      if (currentY < 80) {
        setVisible(false);
      } else if (delta < -3) {
        setVisible(true);
      } else if (delta > 3) {
        setVisible(false);
      }

      lastYRef.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shouldShow = visible && !menuOpen;

  return (
    <div
      className={`fixed top-2 left-2 right-2 z-[55] transition-transform duration-300 ease-out ${
        shouldShow ? "translate-y-0" : "-translate-y-[calc(100%+1rem)]"
      }`}
    >
      <div className="flex items-center justify-between bg-white/60 backdrop-blur-lg rounded-full pl-4 pr-2 py-2">
        <a
          href="https://riseatseven.com/"
          className="flex w-28 text-grey-900"
        >
          <Wordmark className="w-full h-auto" />
        </a>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="w-12 h-9 inline-flex flex-col items-center justify-center gap-y-[5px] text-grey-900"
        >
          <span className="block h-[1.5px] w-5 bg-grey-900" />
          <span className="block h-[1.5px] w-5 bg-grey-900" />
        </button>
      </div>
    </div>
  );
}
