const caseStudies = [
  {
    brand: "SIXT",
    period: "[2023-2025]",
    href: "https://riseatseven.com/work/sixt/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=6ce2dd3d698e1bf2653fa7303f861e13",
    tag: "Car rental",
  },
  {
    brand: "Dojo - B2B",
    period: "[2021-2025]",
    href: "https://riseatseven.com/work/dojo/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=a58aad241c378704b95fc931da4d4614",
    tag: "Card Machines",
  },
  {
    brand: "Magnet Trade - B2B",
    period: "[2023-2024]",
    href: "https://riseatseven.com/work/magnet-trade-b2b/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=7398d248a91f5f5fb8cfa4cebdbd0abc",
    tag: null,
  },
  {
    brand: "Leading E Sim brand globally",
    period: "[2023-2025]",
    href: "https://riseatseven.com/work/esim-case-study/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=6884fe858f0f62041177a15578077f6a",
    tag: "Esims",
  },
  {
    brand: "JD Sports",
    period: "[2025]",
    href: "https://riseatseven.com/work/jd-sports-/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=96ad9016c5b9fc1ca4f68f64edfd2a13",
    tag: "Trainers",
  },
  {
    brand: "Parkdean Resorts",
    period: "[2019-2025]",
    href: "https://riseatseven.com/work/parkdean-resorts-easter-breaks/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=5c4955fc5f6fb648616a34d4b460283a",
    tag: "Easter Breaks",
  },
  {
    brand: "Pooky",
    period: "[2025]",
    href: "https://riseatseven.com/work/pooky/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=2d5c0ed6a14be7af0ef2603e5310e3c4",
    tag: "Rechargeable Lights",
  },
  {
    brand: "Parkdean Resorts",
    period: "[2019-2025]",
    href: "https://riseatseven.com/work/parkdean-resorts-social-search/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=de4db6ccda581beedbd354ecc6ce3c40",
    tag: "UK holidays",
  },
  {
    brand: "Revolution Beauty",
    period: "[2022-2025]",
    href: "https://riseatseven.com/work/revolution-beauty/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=2ba167fd30db107ee2ee4fe9762131db",
    tag: "Beauty Dupes",
  },
  {
    brand: "Lloyds Pharmacy",
    period: "[2022-23]",
    href: "https://riseatseven.com/work/lloyds-pharmacy/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=1c4bb65d7aafa9054370ab42e1ed5acb",
    tag: "STI tests",
  },
  {
    brand: "PrettyLittleThing",
    period: "[2021-2023]",
    href: "https://riseatseven.com/work/prettylittlething/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=212672f7617371dc35cbc13797d0b219",
    tag: "Outfits",
  },
];

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
      onClick={(event) => event.preventDefault()}
      className="grid relative rounded-2xl overflow-hidden aspect-[4/3]"
    >
      <div
        className="col-start-1 row-start-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${study.image})` }}
      />

      {study.tag && (
        <div className="col-start-1 row-start-1 p-3 z-30 flex justify-end items-start">
          <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-white bg-white/20 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5">
            <MagnifyingGlass className="w-3.5 h-3.5" />
            <span>{study.tag}</span>
            <ChartUp className="w-3.5 h-3.5" />
          </div>
        </div>
      )}

      <div className="col-start-1 row-start-1 p-3 z-30 relative flex justify-start items-end">
        <div className="absolute w-full bottom-0 left-0 h-32 bg-gradient-to-t from-black z-10 opacity-70 pointer-events-none" />
        <div className="grid gap-y-1 relative z-20">
          <div className="text-white text-xs font-medium mt-2">{study.period}</div>
          <div className="text-white text-3xl/none font-sans-primary font-medium tracking-tight">
            {study.brand}
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
          <h2 className="inline-flex flex-wrap text-balance text-left text-white text-md/tight font-sans-primary font-medium tracking-tight mb-5">
            Featured Work
          </h2>

          <div className="grid grid-cols-1 gap-y-5">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={`${study.brand}-${index}`} study={study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
