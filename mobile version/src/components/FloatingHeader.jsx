import { useEffect, useRef, useState } from "react";
import Wordmark from "./Wordmark.jsx";

export default function FloatingHeader({ setMenuOpen, menuOpen }) {
  const [visible, setVisible] = useState(true);
  const [overHero, setOverHero] = useState(true);
  const lastYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastYRef.current;

      setOverHero(currentY < window.innerHeight - 10);

      if (currentY < 80) {
        setVisible(true);
      } else if (delta < -3) {
        setVisible(true);
      } else if (delta > 3) {
        setVisible(false);
      }

      lastYRef.current = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = !overHero;
  const accentColor = isLight ? "text-grey-900" : "text-white";
  const barColor = isLight ? "bg-grey-900" : "bg-white";

  const shouldShow = visible || menuOpen;

  return (
    <div
      className={`fixed top-14 left-2 right-2 z-40 transition-transform duration-300 ease-out ${
        shouldShow ? "translate-y-0" : "-translate-y-[calc(100%+4rem)]"
      }`}
    >
      <div
        className={`w-full flex items-center justify-between rounded-full pl-4 pr-2 py-2 transition-all duration-300 ${
          isLight ? "bg-white/60 backdrop-blur-lg" : ""
        }`}
      >
        <a
          href="https://riseatseven.com/"
          onClick={(event) => event.preventDefault()}
          className={`flex w-32 transition-colors duration-300 ${accentColor}`}
        >
          <Wordmark className="w-full h-auto" />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className={`w-12 h-9 inline-flex items-center justify-center transition-colors duration-300 ${accentColor}`}
        >
          <div className="flex w-5 h-2 flex-col items-start justify-between">
            <div
              className={`w-full h-px relative -top-px transition-transform duration-500 ${
                menuOpen ? "rotate-45 translate-y-1" : "rotate-0"
              }`}
            >
              <div className={`w-full h-0.5 transition-colors duration-300 ${barColor}`} />
            </div>
            <div
              className={`w-full h-px transition-transform duration-500 ${
                menuOpen ? "-rotate-45 -translate-y-1" : "rotate-0"
              }`}
            >
              <div className={`w-full h-0.5 transition-colors duration-300 ${barColor}`} />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
