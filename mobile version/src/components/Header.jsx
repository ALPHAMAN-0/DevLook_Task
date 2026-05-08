export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="brand">
          <span className="brand-mark">R7</span>
          <span className="brand-name">Rise at Seven</span>
        </div>
        <div className="nav-actions">
          <a className="btn btn-primary" href="https://riseatseven.com/connect-with-us/">
            Get in touch
          </a>
          <button className="menu-button" type="button" aria-label="Open menu">
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
