import { useEffect, useState } from "react";

const navGroups = [
  {
    label: "Services",
    href: "https://riseatseven.com/services/",
    children: [
      { label: "Search & Growth Strategy", href: "https://riseatseven.com/services/strategy/" },
      { label: "Onsite SEO", href: "https://riseatseven.com/services/seo/" },
      { label: "Content Experience", href: "https://riseatseven.com/services/content/" },
      { label: "B2B Marketing", href: "https://riseatseven.com/services/b2b-marketing/" },
      { label: "Digital PR", href: "https://riseatseven.com/services/digital-pr/" },
      { label: "Social Media & Campaigns", href: "https://riseatseven.com/services/social/" },
      { label: "Data & Insights", href: "https://riseatseven.com/services/data/" },
      { label: "Social SEO/Search", href: "https://riseatseven.com/services/social-seo/" },
    ],
  },
  {
    label: "Industries",
    href: "https://riseatseven.com/services/b2b-marketing/",
    children: [
      { label: "B2B Marketing", href: "https://riseatseven.com/services/b2b-marketing/" },
    ],
  },
  {
    label: "International",
    href: "https://riseatseven.com/international/",
    children: [
      { label: "US Digital PR", href: "https://riseatseven.com/international/" },
      { label: "Spain Digital PR", href: "https://riseatseven.com/international/" },
      { label: "Germany Digital PR", href: "https://riseatseven.com/international/" },
      { label: "Netherlands Digital PR", href: "https://riseatseven.com/international/" },
    ],
  },
  {
    label: "About",
    href: "https://riseatseven.com/about/",
    children: [
      { label: "About Us", href: "https://riseatseven.com/about/" },
      { label: "Meet The Risers", href: "https://riseatseven.com/meet-the-team/" },
      { label: "Culture", href: "https://riseatseven.com/culture/" },
      { label: "Testimonials", href: "https://riseatseven.com/testimonials/" },
    ],
  },
  {
    label: "Work",
    href: "https://riseatseven.com/work/",
    children: [],
  },
  {
    label: "Careers",
    href: "https://riseatseven.com/careers/",
    children: [],
  },
  {
    label: "Blog & Resources",
    href: "https://riseatseven.com/blog/",
    children: [
      { label: "Blog", href: "https://riseatseven.com/blog/" },
      { label: "Webinars", href: "https://riseatseven.com/webinars/" },
    ],
  },
  {
    label: "Webinar",
    href: "https://riseatseven.com/webinars/",
    children: [],
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

function ChevronDown({ className }) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CloseIcon({ className }) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function Header({ menuOpen, setMenuOpen }) {
  const [activeGroup, setActiveGroup] = useState(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-grey-100">
      <div className="px-2 pt-2 pb-1">
        <a
          href="https://riseatseven.com/category-leaderboard/"
          className="group flex justify-center items-center w-full py-2 px-5 text-balance text-center tracking-tight leading-none font-semibold rounded-2xl text-xs text-grey-900 bg-mint"
        >
          🚨 The Category Leaderboard - Live Now
        </a>
      </div>

      <div
        className={`fixed inset-0 z-[60] p-2 backdrop-blur-sm transition-opacity duration-200 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="w-full h-full bg-grey-900/80 rounded-3xl flex flex-col text-white">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <a
              href="https://riseatseven.com/"
              className="text-white text-lg font-medium tracking-tight font-sans-primary inline-flex items-center"
            >
              Rise at Seve
              <img
                src="/favicon.ico"
                alt="n"
                className="inline-block h-[0.85em] w-auto ml-px"
              />
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="size-8 inline-flex items-center justify-center rounded-full text-white"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4">
            <div className="flex flex-col">
              {navGroups.map((group) => {
                const isOpen = activeGroup === group.label;
                const hasChildren = group.children.length > 0;
                return (
                  <div key={group.label} className="w-full">
                    <div className="flex items-center justify-between py-1">
                      <a
                        href={group.href}
                        className="text-white text-2xl tracking-tight font-medium leading-tight font-sans-primary"
                      >
                        {group.label}
                      </a>
                      {hasChildren && (
                        <button
                          type="button"
                          onClick={() =>
                            setActiveGroup(isOpen ? null : group.label)
                          }
                          aria-label={`Toggle ${group.label}`}
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs border border-white/40 transition-transform ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <ChevronDown className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                    {isOpen && hasChildren && (
                      <div className="grid gap-y-1 py-2 pl-2">
                        {group.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="inline-flex tracking-tight leading-tight font-medium text-white/90 text-base font-sans-primary"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          <div className="p-4 pt-2 pb-6">
            <a
              href="https://riseatseven.com/connect-with-us/"
              className="inline-flex w-full items-center justify-center gap-x-2 rounded-full bg-white text-grey-900 px-5 py-3.5 text-sm font-medium font-sans-primary tracking-tight"
            >
              Get In Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
