import Icon from './Icon';
import { PartnerGraphic } from './PartnerGraphics';

// Green brand treatment with a shared bank and fintech partner graphic.
export default function OriginalHero() {
  return <>
    <section id="home" className="original-hero">
      <div className="original-hero-inner">
        <div className="original-hero-copy">
          <span className="partner-hero-kicker">FOR BANKS &amp; FINTECHS</span><h1><span>Go beyond payment</span><br/><em>confirmation.</em></h1>
          <p className="original-subtitle">Stand out with a device that does more.<br/><span>Connection. Protection. Everyday value.</span></p>
          <p className="original-problem-title">Merchants have real problems.</p>
          <p className="original-description">Customers arrive at closed shops and lose trust. Offers don&apos;t reach loyal customers. They worry about theft, fire safety, low customer reach, and advertising costs.</p>
          <p className="original-statement">Our budget-friendly smart device (patent) is not just a payment box. It solves these real problems.</p>
          <p className="original-statement original-conclusion">By offering this device, banks and fintechs can build stronger, direct relationships with merchants.</p>
          <div className="original-hero-actions"><a href="#contact">PARTNER WITH US<Icon name="arrow"/></a></div>
        </div>
        <div className="original-hero-art"><PartnerGraphic/></div>
      </div>
    </section>
  </>;
}
