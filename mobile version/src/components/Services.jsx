const services = [
  {
    name: "Digital PR",
    href: "https://riseatseven.com/services/digital-pr/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=ca4a2c3891fedbd3ca3a3d46af0e6362",
    alt: "Digital PR campaign screenshot",
  },
  {
    name: "Organic Social & Content",
    href: "https://riseatseven.com/services/social/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846538&s=cb2016613a41d1153d28e086f39c0c72",
    alt: "Organic social content example",
  },
  {
    name: "Search & Growth Strategy",
    href: "https://riseatseven.com/services/strategy/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=adefb293215e963a4d99827a8910457b",
    alt: "Search & Growth Strategy",
  },
  {
    name: "Content Experience",
    href: "https://riseatseven.com/services/content/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=400&h=300&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=453e0fc56bf7d9be6df37be077091564",
    alt: "Content Experience",
  },
  {
    name: "Data & Insights",
    href: "https://riseatseven.com/services/data/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=7e53aac87fca12e41a4aa3b3d4961e31",
    alt: "Data & Insights dashboard",
  },
  {
    name: "Onsite SEO",
    href: "https://riseatseven.com/services/seo/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=42bab5d18e9b50941a53e67e251f6c9f",
    alt: "Onsite SEO",
  },
];

const headingImage =
  "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=200&h=200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750944462&s=c86c07b4d2e0f4aff65aa5b55e7f1ab2";

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

export default function Services() {
  return (
    <section className="w-full pb-12">
      <div className="w-full px-4">
        <div className="grid grid-cols-12 overflow-hidden gap-y-3 gap-x-3">
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-y-3 gap-x-3">
              <div className="col-span-11 flex items-end">
                <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-6xl/[0.9] font-sans-primary font-medium tracking-tight">
                  <span className="flex flex-wrap relative items-center text-left justify-start gap-x-2">
                    <span className="inline">Our</span>
                    <span className="inline shrink-0 flex bg-black/5 relative overflow-hidden rounded-md">
                      <span className="block w-12 h-12 relative">
                        <img
                          src={headingImage}
                          alt=""
                          className="w-full h-full object-cover absolute inset-0"
                        />
                      </span>
                    </span>
                    <span className="inline">Services</span>
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-x-2">
            {services.map((service) => (
              <div key={service.name} className="col-span-12 -my-px">
                <a
                  href={service.href}
                  className="group relative grid grid-cols-1"
                >
                  <div className="absolute w-full bottom-0 left-0 z-0">
                    <div className="w-full h-px bg-grey-200" />
                  </div>
                  <div className="col-start-1 row-start-1 relative z-20 py-4 flex items-center gap-3 text-grey-900">
                    <div className="inline-flex relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={service.image}
                        alt={service.alt}
                        loading="lazy"
                        className="w-full h-full object-cover absolute inset-0"
                      />
                    </div>
                    <div className="flex-1 inline-flex items-center justify-between gap-x-2">
                      <span className="inline-flex flex-wrap text-balance text-left text-grey-900 text-3xl/[0.95] font-sans-primary font-medium tracking-tight">
                        {service.name}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-grey-900 shrink-0" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
