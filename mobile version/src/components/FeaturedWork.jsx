const caseStudies = [
  {
    brand: "SIXT",
    period: "[2023-2025]",
    headline: "An extra 3m clicks regionally through SEO",
    href: "https://riseatseven.com/work/sixt/",
    bg: "#cb7b3a",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=6ce2dd3d698e1bf2653fa7303f861e13",
    tag: "Car rental",
  },
  {
    brand: "Dojo - B2B",
    period: "[2024]",
    headline: "Driving lead generation in B2B fintech",
    href: "https://riseatseven.com/work/dojo/",
    bg: "#fdd8c4",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-21.36.35.png?w=1198&h=1126&q=100&auto=format&fit=crop&dm=1751402284&s=4ad46c03819812b327e9b4643c1b0e6c",
    tag: "Fintech",
  },
  {
    brand: "Magnet Trade - B2B",
    period: "[2024]",
    headline: "Building B2B brand authority",
    href: "https://riseatseven.com/work/magnet-trade-b2b/",
    bg: "#d8c4fd",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/spaseekers.png?w=654&h=654&q=100&auto=format&fit=crop&dm=1750847719&s=7878b323cf448fba3f57e5ecbcef8ed1",
    tag: "Trade",
  },
  {
    brand: "Leading E Sim brand globally",
    period: "[2024]",
    headline: "Leading E Sim brand globally",
    href: "https://riseatseven.com/work/esim-case-study/",
    bg: "#cb7b3a",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/unnamed-6.png?w=213&h=278&q=100&auto=format&fit=crop&dm=1750948726&s=0ecee9869674cd309d3170dfd7b29674",
    tag: "Tech",
  },
  {
    brand: "JD Sports",
    period: "[2023-2025]",
    headline: "Dominating Google and AI search",
    href: "https://riseatseven.com/work/jd-sports-/",
    bg: "#3a8ccb",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=1890&h=2363&q=100&auto=format&fit=crop&dm=1753775231&s=60dc0e3c84825da30f8d809caf5fabe1",
    tag: "Sportswear",
  },
  {
    brand: "Pooky",
    period: "[2024]",
    headline: "Driving demand for Pooky Rechargeable Lights",
    href: "https://riseatseven.com/work/pooky/",
    bg: "#39b0bd",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2560&h=1707&q=100&auto=format&fit=crop&dm=1750847623&s=2e6f5684a2dcbdbd148a651a17aafe47",
    tag: "Lifestyle",
  },
  {
    brand: "Revolution Beauty",
    period: "[2024]",
    headline: "Driving category leadership for STI tests",
    href: "https://riseatseven.com/work/revolution-beauty/",
    bg: "#fecacc",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Emirates-airpline-in-flight.avif?w=1330&h=700&q=100&auto=format&fit=crop&dm=1750948034&s=7fc16049313aefb0ea160470af9ae379",
    tag: "Beauty",
  },
];

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

function MagnifyingGlass({ className }) {
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
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ChartUp({ className }) {
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
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}

function CaseStudyCard({ study }) {
  return (
    <a
      href={study.href}
      className="group relative block rounded-2xl overflow-hidden aspect-[3/4]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${study.image})` }}
      />

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 z-20 p-5 flex flex-col gap-y-2 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
        <div className="text-white/80 text-xs font-medium">{study.period}</div>
        <div className="text-white text-3xl/[0.95] font-sans-primary font-medium tracking-tight">
          {study.brand}
        </div>
      </div>

      <div
        className="absolute inset-0 z-30 p-5 flex flex-col items-start justify-between transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: study.bg, color: "#111212" }}
      >
        <div className="text-3xl/[0.95] font-sans-primary font-medium tracking-tight">
          {study.headline}
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="size-16 rounded-full bg-mint text-grey-900 flex items-center justify-center transition-transform duration-500 scale-0 group-hover:scale-100">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>

        <div className="w-full flex items-end justify-end">
          <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none bg-white/30 backdrop-blur-sm text-sm gap-x-2 py-2 px-3">
            <MagnifyingGlass className="w-3.5 h-3.5" />
            <span>{study.tag}</span>
            <ChartUp className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default function FeaturedWork() {
  return (
    <section className="w-full pb-12">
      <div className="w-full px-4">
        <div className="w-full bg-grey-900 rounded-3xl p-5 pt-10 pb-8">
          <h2 className="inline-flex flex-wrap text-balance text-left text-white text-md/tight font-sans-primary font-medium tracking-tight mb-6">
            Featured Work
          </h2>

          <div className="grid grid-cols-1 gap-y-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.brand} study={study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
