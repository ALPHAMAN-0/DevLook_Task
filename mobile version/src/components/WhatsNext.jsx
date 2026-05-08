const headingImage =
  "https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=196df3f09231b9e6d4b20b3b56f237ea";

const newsArticles = [
  {
    title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
    href: "https://riseatseven.com/blog/rise-at-seven-announces-new-global-hq-in-manchester/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=58d95c3de719797c1528ef86ea7c1349",
    category: "Company news",
  },
  {
    title:
      "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
    href: "https://riseatseven.com/blog/global-operations-director-promotion/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=58d95c3de719797c1528ef86ea7c1349",
    category: "Company news",
  },
  {
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    href: "https://riseatseven.com/blog/global-operations-director-promotion/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=69c3ee1d52b842d82374bc94dccd5e57",
    category: "Team news",
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

export default function WhatsNext() {
  return (
    <section className="w-full pb-12">
      <div className="w-full px-4">
        <div className="grid grid-cols-12 gap-y-7 gap-x-3 pb-5">
          <div className="col-span-11">
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
        </div>

        <div className="grid gap-y-4">
          {newsArticles.map((article) => (
            <a
              key={article.title}
              href={article.href}
              className="group block rounded-3xl overflow-hidden bg-white"
            >
              <div className="aspect-[5/3] relative overflow-hidden bg-grey-150">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col gap-y-3">
                <span className="text-grey-300 text-xs font-medium uppercase tracking-widest">
                  {article.category}
                </span>
                <h3 className="text-2xl/[1.05] font-sans-primary font-medium tracking-tight text-grey-900">
                  {article.title}
                </h3>
                <span className="inline-flex items-center gap-x-2 text-grey-900 text-sm font-medium font-sans-primary tracking-tight">
                  Read article
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="https://riseatseven.com/blog/"
            className="inline-flex w-full items-center justify-center gap-x-2 rounded-full bg-grey-900 text-white px-6 py-4 text-base font-medium font-sans-primary tracking-tight"
          >
            View all news
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
