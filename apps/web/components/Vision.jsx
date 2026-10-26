import Icon from './Icon';
import LogoMark from './LogoMark';

function VisionConnection() {
  return <div className="vision-connection" role="img" aria-label="Here Open connects banks, fintechs, MSMEs and customers">
    <svg viewBox="0 0 360 270" className="vision-connection-paths" aria-hidden="true">
      <circle cx="180" cy="140" r="125"/><circle cx="180" cy="140" r="94"/>
      <path d="M180 69C173 91 187 106 180 132M151 158C117 159 124 207 83 209M209 158C243 159 236 207 277 209"/>
    </svg>
    <div className="vision-node vision-node-bank"><span><Icon name="bank"/></span><strong>BANKS &amp; FINTECHS</strong></div>
    <div className="vision-node vision-node-hub"><LogoMark/><strong>HERE OPEN</strong></div>
    <div className="vision-node vision-node-msmes"><span><Icon name="shop"/></span><strong>MSMEs</strong></div>
    <div className="vision-node vision-node-customers"><span><Icon name="people"/></span><strong>CUSTOMERS</strong></div>
  </div>;
}

// Keep the PDF's audience context and the owner's latest unified vision statement.
export default function Vision() {
  return <section id="vision" className="simple-vision" aria-labelledby="vision-title">
    <div className="vision-section-heading"><div className="container"><div className="section-label">OUR VISION</div></div></div>
    <div className="simple-vision-hero"><div className="container simple-vision-hero-grid">
      <div><h2 id="vision-title">Connecting India&apos;s<br/>local economy.</h2><p>One simple goal: connect local businesses with customers, banks and fintechs, alongside safety and security.</p><span className="vision-tagline">VISIBLE. CONNECTED. PROTECTED.</span></div>
      <VisionConnection/>
    </div></div>
    <div className="container simple-vision-content">
      <h3 className="eyebrow vision-problems-label">THE THREE SIDES OF THE PROBLEM WE WANT TO SOLVE</h3>
      <div className="vision-scale-grid">
        <article className="vision-scale-card vision-people"><span className="vision-card-icon"><Icon name="people"/></span><div><h3>90+ Crore</h3><h4>INTERNET USERS</h4><p>People are online, but they still cannot easily know which nearby shop is OPEN right now. This leads to uncertain and wasted trips.</p></div></article>
        <article className="vision-scale-card vision-msmes"><span className="vision-card-icon"><Icon name="shop"/></span><div><h3>6.3+ Crore</h3><h4>MSMEs</h4><p>Merchants run their shops, but they have no real-time visibility, no security monitoring, and no direct voice to their customers. This leads to lost visits, lost revenue, and safety and security worries.</p></div></article>
      </div>
      <div className="vision-bank-strip"><span className="vision-card-icon"><Icon name="bank"/></span><h3>Banks &amp; fintechs</h3><p>Banks bring banking power, reputation and resources. Fintechs bring technology, payment services and reach. Both need stronger direct merchant connections to build lasting relationships and reduce indirect burdens on MSMEs.</p></div>
      <article className="vision-purpose-card" aria-labelledby="vision-purpose-title">
        <div className="vision-purpose-label"><Icon name="link"/><span className="eyebrow">OUR VISION</span></div>
        <h3 id="vision-purpose-title">To Provide a Platform <em>Where Banks and Fintechs Connect.</em></h3>
        <p>A platform that connects banks and fintechs directly with merchants and customers.</p>
        <p className="vision-direct-promise"><strong>Direct connections. Stronger partnerships. More everyday value.</strong></p>
        <p>Banks and fintechs reach MSMEs directly, serve merchants and build relationships beyond payment confirmation.</p>
        <p>Real-time shop visibility, customer communication, safety, and security — all designed to solve everyday local business needs.</p>
        <p className="vision-bank-power"><strong>Banks and fintechs put their strengths to work — directly, profitably, and at scale.</strong></p>
      </article>
    </div>
  </section>;
}
