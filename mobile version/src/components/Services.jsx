const services = [
  "Search & Growth Strategy",
  "Onsite SEO",
  "Content Experience",
  "B2B Marketing",
  "Digital PR",
  "Social Media & Campaigns",
  "Data & Insights",
  "Social SEO / Search",
];

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Core Services</p>
          <h2>Search-first content that compounds</h2>
          <p className="section-lead">
            Integrated strategy, execution, and distribution built for a world where
            discovery happens everywhere.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service} className="service-card">
              <h3>{service}</h3>
              <p>
                Building momentum across search, social, and earned media with a
                measurable growth loop.
              </p>
            </article>
          ))}
        </div>
        <div className="section-actions">
          <a className="btn btn-primary" href="https://riseatseven.com/services/">
            View all services
          </a>
        </div>
      </div>
    </section>
  );
}
