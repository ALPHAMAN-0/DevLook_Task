import { useEffect, useRef, useState } from "react";

const legacyCards = [
  {
    title: "Pioneers",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=42bab5d18e9b50941a53e67e251f6c9f",
    body: [
      "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
      "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    ],
    background: "bg-grey-900",
    textColor: "text-white",
  },
  {
    title: "Award Winning",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=adefb293215e963a4d99827a8910457b",
    body: [
      "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    ],
    background: "bg-mint",
    textColor: "text-grey-900",
  },
  {
    title: "Speed",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=7e53aac87fca12e41a4aa3b3d4961e31",
    body: [
      "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
    ],
    background: "bg-white",
    textColor: "text-grey-900",
  },
];

export default function LegacyMaking() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(1 / legacyCards.length);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const updateProgress = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) {
        setProgress(1);
        return;
      }
      const ratio = (el.scrollLeft + el.clientWidth) / el.scrollWidth;
      setProgress(Math.min(Math.max(ratio, 0), 1));
    };

    updateProgress();
    el.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      el.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section className="w-full py-10">
      <div className="w-full">
        <div className="flex justify-center mb-3 px-4">
          <h2 className="inline-flex flex-wrap text-balance text-center text-grey-900 text-md font-sans-primary font-medium tracking-tight">
            Legacy In The Making
          </h2>
        </div>

        <div
          ref={trackRef}
          className="flex gap-x-3 overflow-x-auto snap-x snap-mandatory px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {legacyCards.map((card) => (
            <article
              key={card.title}
              className={`shrink-0 snap-center w-[85vw] rounded-2xl p-7 flex flex-col gap-y-4 ${card.background} ${card.textColor}`}
            >
              <div className="rounded-xl overflow-hidden w-full aspect-[4/3] relative">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center gap-y-4">
                <h3 className="text-3xl font-sans-primary font-medium tracking-tight text-center">
                  {card.title}
                </h3>
                <div className="w-full flex flex-col gap-y-4">
                  {card.body.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm font-sans-primary leading-normal text-pretty text-center"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="px-4 mt-3">
          <div className="w-full h-[3px] bg-grey-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-grey-900 origin-left transition-transform duration-200 ease-out"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
