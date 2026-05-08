import { useEffect, useRef, useState } from "react";

const headingImage =
  "https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=196df3f09231b9e6d4b20b3b56f237ea";

const newsArticles = [
  {
    title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
    href: "https://riseatseven.com/blog/rise-at-seven-appoints-new-senior-ops-lead/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=c1f448d85e1b3664a2da9764a7496bfd",
    author: "Ray Saddiq",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    readingTime: "3 mins",
    badge: null,
  },
  {
    title:
      "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
    href: "https://riseatseven.com/blog/rise-at-seven-announces-new-global-hq-in-manchester/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=e1c762be3c317bcc6d20bdf5b4395159",
    author: "Ray Saddiq",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    readingTime: "2 mins",
    badge: null,
  },
  {
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    href: "https://riseatseven.com/blog/global-operations-director-promotion/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=b3eec670383a26c75526fd2c5a38215a",
    author: "Carrie Rose",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    readingTime: "2 mins",
    badge: "News",
  },
];

function StopwatchIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M9 2h6" />
      <path d="m20 5-1.5-1.5" />
    </svg>
  );
}

function ArrowUpRight({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function WhatsNext() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(1 / newsArticles.length);

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
    <section className="w-full pb-12">
      <div className="w-full">
        <div className="px-4 mb-5">
          <h2 className="inline-flex flex-wrap text-balance text-left text-grey-900 text-6xl/[0.9] font-sans-primary font-medium tracking-tight">
            <span className="flex flex-wrap items-center gap-x-2">
              <span className="inline">What's</span>
              <span className="inline shrink-0 flex bg-black/5 relative overflow-hidden rounded-md">
                <span className="block w-12 h-12 relative">
                  <img
                    src={headingImage}
                    alt=""
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </span>
              </span>
              <span className="inline">New</span>
            </span>
          </h2>
        </div>

        <div
          ref={trackRef}
          className="flex gap-x-3 overflow-x-auto snap-x snap-mandatory px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {newsArticles.map((article) => (
            <a
              key={article.title}
              href={article.href}
              onClick={(event) => event.preventDefault()}
              className="shrink-0 snap-center w-[85vw] flex flex-col gap-y-5 py-2"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-grey-150">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {article.badge && (
                  <div className="absolute top-3 left-3 z-20">
                    <span className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm px-3 py-1 min-h-7 text-white bg-white/20 backdrop-blur-sm">
                      {article.badge}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-start gap-y-3">
                <div className="flex flex-wrap items-start gap-1">
                  <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 pl-1 pr-3 py-1 min-h-7 text-grey-300 bg-white">
                    <div className="rounded-full overflow-hidden w-5 h-5 shrink-0">
                      <img
                        src={article.authorAvatar}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>{article.author}</div>
                  </div>

                  <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 text-grey-300 bg-white">
                    <StopwatchIcon className="w-3.5 h-3.5" />
                    <div>{article.readingTime}</div>
                  </div>
                </div>

                <h3 className="text-balance text-left text-grey-900 text-2xl/[1.1] font-sans-primary font-medium tracking-tight">
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="px-4 mt-3 py-3">
          <div className="w-full h-[3px] bg-grey-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-grey-900 origin-left transition-transform duration-200 ease-out"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>

        <div className="px-4 mt-4">
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-x-2 rounded-full bg-white text-grey-900 px-5 py-5 text-base font-medium font-sans-primary tracking-tight"
          >
            Explore More Thoughts
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
