const heroImage =
  "https://rise-atseven.transforms.svdcdn.com/production/images/Emirates-airpline-in-flight.avif?w=1330&h=700&q=100&auto=format&fit=crop&dm=1750948034&s=7fc16049313aefb0ea160470af9ae379";

const platforms = [
  "Google",
  "TikTok",
  "YouTube",
  "Pinterest",
  "Amazon",
  "Gemini",
  "ChatGPT",
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">#1 Most recommended content marketing agency</p>
          <h1>
            We Create <span className="accent">Category Leaders</span>
          </h1>
          <p className="subtitle">on every searchable platform</p>
          <p className="lead">
            Organic media planners creating, distributing &amp; optimising search-first
            content for SEO, Social, PR, AI and LLM search.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://riseatseven.com/connect-with-us/">
              Get in touch
            </a>
            <a className="btn btn-ghost" href="https://riseatseven.com/services/">
              View all services
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-title">Global Offices</span>
              <span className="stat-value">UK, USA (New York) &amp; EU</span>
            </div>
            <div className="stat-card">
              <span className="stat-title">Specialisms</span>
              <span className="stat-value">SEO, Social, PR, AI, LLM Search</span>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-image">
            <img src={heroImage} alt="Rise at Seven campaign" loading="lazy" />
          </div>
          <div className="platforms">
            {platforms.map((platform) => (
              <span key={platform} className="platform-pill">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
