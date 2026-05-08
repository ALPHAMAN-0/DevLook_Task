const ctaButtons = [
  {
    label: "Our Story",
    href: "https://riseatseven.com/about/",
    variant: "white",
  },
  {
    label: "Our Services",
    href: "https://riseatseven.com/services/",
    variant: "ghost",
  },
];

const headingImage =
  "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=2cf16743338412726c0b8ad40904233f";

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

const variantClasses = {
  white: "bg-white text-grey-900 ring-1 ring-grey-900/5",
  ghost: "bg-transparent text-grey-900",
};

export default function CtaButtons() {
  return (
    <section className="w-full py-12">
      <div className="w-full px-4">
        <div className="w-full flex flex-col-reverse justify-between items-start gap-y-5">
          <div className="flex flex-col gap-3 w-full">
            {ctaButtons.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`group inline-flex shrink-0 justify-center gap-x-2 items-center leading-tight tracking-tight capitalize font-sans-primary font-medium px-6 py-3 rounded-3xl text-base flex-row-reverse w-full ${variantClasses[cta.variant]}`}
              >
                <span className="inline-flex items-center gap-x-2">
                  {cta.label}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>

          <div className="w-full mb-1 max-w-sm">
            <p className="inline-flex flex-wrap text-balance text-left text-grey-900 text-lg/tight font-sans-primary font-medium tracking-tight">
              A global team of search-first content marketers engineering semantic
              relevancy &amp; category signals for both the internet and people
            </p>
          </div>

          <div className="w-full grid gap-y-3 max-w-sm">
            <h2 className="inline-flex flex-wrap text-balance text-left text-grey-900 text-5xl/[0.95] font-sans-primary font-medium tracking-tight">
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="inline">Driving</span>
                <span className="inline">Demand</span>
                <span className="inline">&amp;</span>
                <span className="inline">Discovery</span>
                <span className="inline shrink-0 flex bg-black/5 relative overflow-hidden rounded-md">
                  <span className="block w-12 h-12 relative">
                    <img
                      src={headingImage}
                      alt=""
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </span>
                </span>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
