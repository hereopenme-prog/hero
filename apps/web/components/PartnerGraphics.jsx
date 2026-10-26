import Icon from './Icon';
import LogoMark from './LogoMark';
import { ArtworkPreview, Reveal } from './VisualEffects';

// Preserve the owner's original device artwork; animate only its surrounding stage.
export function DeviceIllustration({ compact = false }) {
  return <div className={`partner-device original-device${compact ? ' partner-device-compact' : ''}`}>
    <span className="device-aura" aria-hidden="true"><span className="device-aura-light"/><svg viewBox="0 0 240 240" focusable="false"><circle className="aura-track" cx="120" cy="120" r="110"/><circle className="aura-arc aura-arc-green" cx="120" cy="120" r="110" pathLength="100"/><circle className="aura-arc aura-arc-blue" cx="120" cy="120" r="99" pathLength="100"/><circle className="aura-satellite" cx="120" cy="10" r="4"/></svg></span>
    <div className="original-device-stage"><span className="device-orbit orbit-one" aria-hidden="true"/><span className="device-orbit orbit-two" aria-hidden="true"/><img src="/assets/device-bank-qr.png" width="1254" height="1254" loading="lazy" decoding="async" alt="Original Here Open silver merchant device, shown with a bank QR-code screen"/></div>
    {!compact && <span className="device-design-note">Your brand. Connection. Protection.</span>}
  </div>;
}

export function PartnerGraphic() {
  return <Reveal className="partner-graphic original-art-graphic">
    <div className="graphic-topline"><LogoMark/><span>HERE OPEN<small>CONNECTION. PROTECTION.</small></span></div>
    <div className="partner-pair"><div><Icon name="bank"/><strong>Banks</strong></div><span>+</span><div><Icon name="fintech"/><strong>Fintechs</strong></div></div>
    <p className="graphic-partner-caption">Your brand. Your merchant relationship.</p>
    <ArtworkPreview src="/assets/merchant-problems-hero.png" width="1774" height="887" alt="Here Open original illustration: merchant problems, smart device, and benefits for banks, merchants and customers. Explore the readable benefits below."/>
    <div className="graphic-recipients"><div><Icon name="shop"/><strong>Merchants</strong><span>Visibility. Offers. Alerts.</span></div><div><Icon name="people"/><strong>Customers</strong><span>Shop status. Smarter visits.</span></div></div>
  </Reveal>;
}

export function RelationshipGraphic() {
  const partnerBenefits = [['chart','Merchant acquisition & transactions'],['credit','Credit opportunities'],['link','Stronger relationships & retention'],['shield','Value beyond payment confirmation']];
  const merchantBenefits = [['phone','One-tap shop status'],['eye','Visibility, discovery & offers'],['shield','Security alerts'],['fire','24/7 fire & smoke monitoring']];
  return <Reveal className="ecosystem-graphic">
    <div className="relationship-intro"><h3>One device. Three stronger relationships.</h3><p>Connect banks and fintechs with merchants and customers through a device carrying your brand.</p></div>
    <div className="ecosystem-map">
      <svg className="ecosystem-connections" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <marker id="partner-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0 0L6 3.5L0 7Z" fill="#087deb"/></marker>
          <marker id="merchant-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0 0L6 3.5L0 7Z" fill="#00a66b"/></marker>
          <marker id="customer-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0 0L6 3.5L0 7Z" fill="#8551e7"/></marker>
        </defs>
        <g className="ecosystem-trails"><path d="M455 170C385 170 410 100 325 100"/><path d="M545 170C615 170 590 100 675 100"/><path d="M500 225C525 235 475 245 500 250"/></g>
        <g className="ecosystem-flow"><path d="M455 170C385 170 410 100 325 100" stroke="#087deb" markerEnd="url(#partner-arrow)"/><path d="M545 170C615 170 590 100 675 100" stroke="#00a66b" markerEnd="url(#merchant-arrow)"/><path d="M500 225C525 235 475 245 500 250" stroke="#8551e7" markerEnd="url(#customer-arrow)"/></g>
      </svg>
      <article className="audience-orb orb-partners">
        <span className="orb-emblem"><Icon name="bank"/><span className="orb-fintech"><Icon name="fintech"/></span></span>
        <h4>FOR BANKS &amp; FINTECHS</h4><p className="orb-subtitle">Grow together.</p>
        <ul>{partnerBenefits.map(([icon,text])=><li key={text}><span className="orb-benefit-icon"><Icon name={icon}/></span><span>{text}</span></li>)}</ul>
      </article>
      <div className="ecosystem-product"><DeviceIllustration compact/></div>
      <article className="audience-orb orb-merchants">
        <span className="orb-emblem"><Icon name="shop"/></span><h4>FOR MERCHANTS</h4><p className="orb-subtitle">More value, every day.</p>
        <ul>{merchantBenefits.map(([icon,text])=><li key={text}><span className="orb-benefit-icon"><Icon name={icon}/></span><span>{text}</span></li>)}</ul>
      </article>
      <article className="audience-orb orb-customers">
        <span className="orb-emblem"><Icon name="people"/></span><h4>FOR CUSTOMERS</h4><p className="orb-subtitle">Smarter visits.</p>
        <ul><li><span className="orb-benefit-icon"><Icon name="shop"/></span><span>See what’s open</span></li><li><span className="orb-benefit-icon"><Icon name="tag"/></span><span>Find offers</span></li><li><span className="orb-benefit-icon"><Icon name="location"/></span><span>Save time and avoid wasted trips</span></li></ul>
      </article>
    </div>
    <div className="ecosystem-values"><span><Icon name="chart"/>More everyday value</span><span><Icon name="link"/>Stronger relationships</span><span><Icon name="people"/>Smarter customer visits</span></div>
    <a className="comparison-next" href="#solution">Explore every benefit<Icon name="arrow"/></a>
  </Reveal>;
}
