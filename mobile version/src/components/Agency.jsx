const clients = [
  "Red Bull",
  "Emirates",
  "Pooky",
  "Space Seekers",
  "Amazon",
  "Pinterest",
  "YouTube",
  "TikTok",
];

const awards = [
  "Global Search Awards",
  "UK Social Media Awards",
  "UK Content Awards",
  "Search Awards",
  "Best in Digital PR",
  "Creative Campaigns",
];

function Marquee({ items }) {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.concat(items).map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Agency() {
  return (
    <section className="agency">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">The agency behind ...</p>
          <h2>Brands that win attention on every platform</h2>
          <p className="section-lead">
            We partner with ambitious teams to build category leadership, from social
            discovery to classic search.
          </p>
        </div>
        <div className="marquee-group">
          <Marquee items={clients} />
          <Marquee items={awards} />
        </div>
      </div>
    </section>
  );
}
