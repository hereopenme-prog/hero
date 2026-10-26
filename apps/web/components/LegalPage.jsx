import Icon from './Icon';
import LogoMark from './LogoMark';

function Brand() {
  return <a className="brand" href="/" aria-label="Here Open home"><LogoMark/><span>HERE OPEN<small>CONNECTION. PROTECTION.</small></span></a>;
}

function DefaultAside() {
  return <>
    <h2>Questions?</h2>
    <p>Email <a href="mailto:contact@hereopen.me">contact@hereopen.me</a> and we will route your question to the right team.</p>
    <a className="button" href="/#contact">Contact us<Icon name="arrow"/></a>
  </>;
}

export default function LegalPage({ title, updated, intro, aside, children }) {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header legal-header">
      <div className="container nav-shell">
        <Brand/>
        <nav className="legal-nav" aria-label="Site and legal navigation">
          <a href="/">Home</a>
          <a href="/#our-solution">Our solution</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/security">Security</a>
        </nav>
        <a className="button legal-back" href="/">Back to site<Icon name="arrow"/></a>
      </div>
    </header>

    <main id="main" className="legal-main">
      <section className="legal-hero">
        <div className="container legal-container">
          <span className="section-label">LEGAL</span>
          <h1>{title}</h1>
          <p className="legal-updated">Last updated: {updated}</p>
          {intro && <p className="legal-intro">{intro}</p>}
        </div>
      </section>

      <section className="legal-body">
        <div className="container legal-layout">
          <article className="legal-content">{children}</article>
          <aside className="legal-aside">{aside ?? <DefaultAside/>}</aside>
        </div>
      </section>
    </main>

    <footer>
      <div className="container footer-top">
        <div>
          <Brand/>
          <p>Built for banks &amp; fintechs. Designed for merchants.<br/>Connected to customers.</p>
        </div>
        <nav aria-label="Site navigation">
          <a href="/">Home</a>
          <a href="/#problem">The challenge</a>
          <a href="/#our-solution">Our solution</a>
          <a href="/#how-it-works">How it works</a>
          <a href="/#faq">FAQ</a>
          <a href="/#contact">Contact</a>
        </nav>
        <nav aria-label="Legal information">
          <a href="/privacy">Privacy policy</a>
          <a href="/terms">Terms of service</a>
          <a href="/security">Security &amp; safety</a>
          <a href="mailto:contact@hereopen.me">contact@hereopen.me</a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Here Open</span>
        <span>People. Businesses. Communities.</span>
        <a href="#main">Back to top ↑</a>
      </div>
    </footer>
  </>;
}
