import Icon from './Icon';
import { DeviceIllustration } from './PartnerGraphics';
import { Reveal } from './VisualEffects';
const features = [
  ['shop', 'OPEN / CLOSED status', 'Customers can see live shop status in the public app.'],
  ['tag', 'Offers & discounts', 'Merchants can send instant offers and discounts.'],
  ['clock', 'Live confidence', 'Movement detected 2 minutes ago.'],
  ['shield', 'Security alerts', 'Instant security alerts to the merchant’s mobile phone.'],
  ['fire', '24/7 fire & smoke safety', 'Continuous safety monitoring and alerts.'],
  ['phone', 'Merchant app control', 'Control the device from the Here Open merchant app.']
];
function FeatureColumn({items}) {
 return <div className="partner-feature-column">{items.map(([icon,title,description])=><article key={title} data-feature={icon}><span className="item-icon"><Icon name={icon}/></span><div><h4>{title}</h4><p>{description}</p></div></article>)}</div>;
}
export default function OurSolution() {
 return <section id="our-solution" className="solution-intro" aria-labelledby="solution-intro-title"><div className="container comparison-container">
  <h2 className="section-label" id="solution-intro-title">OUR SOLUTION</h2>
  <div className="partner-solution-heading"><h3>More than payment confirmation.</h3><p>One device. Better visibility. Better protection. Better connection.</p></div>
  <Reveal className="partner-feature-layout" repeat><svg className="feature-connection-paths" viewBox="0 0 1000 480" preserveAspectRatio="none" aria-hidden="true"><path d="M280 80C410 80 360 200 500 200M280 240C400 240 400 240 500 240M280 400C410 400 360 280 500 280M720 80C590 80 640 200 500 200M720 240C600 240 600 240 500 240M720 400C590 400 640 280 500 280"/></svg><FeatureColumn items={features.slice(0,3)}/><div className="partner-feature-device"><div className="showcase-platform"><svg className="showcase-halo" viewBox="0 0 360 360" aria-hidden="true" focusable="false"><circle cx="180" cy="180" r="169"/><circle cx="180" cy="180" r="151"/><path d="M180 11A169 169 0 0 1 349 180"/><circle className="showcase-light-point" cx="180" cy="11" r="4"/></svg><span className="product-plinth" aria-hidden="true"/><DeviceIllustration/></div><span className="partner-brand-pill">Built for banks &amp; fintechs</span></div><FeatureColumn items={features.slice(3)}/></Reveal>
  <div className="partner-solution-summary"><p>Here Open does more than confirm payments. It helps merchants connect with customers, promote their businesses, improve shop visibility, and manage safety and security needs.</p><p>As these features become part of daily business for merchants and customers, the device helps banks and fintechs build stronger merchant relationships.</p></div>
 </div></section>;
}
