'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '../components/Icon';
import LogoMark from '../components/LogoMark';
import OriginalHero from '../components/OriginalHero';
import Vision from '../components/Vision';
import OurSolution from '../components/OurSolution';
import HowItWorks from '../components/HowItWorks';
import MerchantValueImage from '../components/MerchantValueImage';
import { DeviceIllustration } from '../components/PartnerGraphics';
import SiteEffects from '../components/SiteEffects';
import { audiences, bankProblems, merchantProblems, customerProblems, faqs, contact } from '../content/site';

function Brand({ footer = false }) {
  return <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#home" aria-label="Here Open home"><LogoMark/><span>HERE OPEN<small>CONNECTION. PROTECTION.</small></span></a>;
}
function ButtonLink({ children, href = '#contact', secondary = false, ...props }) {
  return <a className={`button ${secondary ? 'button-secondary' : ''}`} href={href} {...props}>{children}<Icon name="arrow" /></a>;
}
function Item({ item, number, compact = false }) {
  return <article className={`item ${compact ? 'item-compact' : ''}`}><span className="item-icon"><Icon name={item[0]} /></span><div>{number && <span className="item-number">{number}</span>}<h4>{item[1]}</h4><p>{item[2]}</p></div></article>;
}
function BenefitsCard({ audienceKey }) {
  const value = audiences[audienceKey];
  return <article className={`audience-card ${audienceKey}-card`} aria-labelledby={`benefits-${audienceKey}`}>
    <div className="card-title"><span className="item-icon"><Icon name={value.icon}/></span><div><h3 id={`benefits-${audienceKey}`}>{value.label}</h3><p>{value.title}</p></div></div>
    <div className="all-benefits">{value.benefits.map(item => <Item key={item[1]} item={item}/>)}</div>
  </article>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [emailReady, setEmailReady] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    try { const saved = localStorage.getItem('hereopen-theme'); if (saved === 'dark') setTheme(saved); } catch {}
    const onHash = () => {
      setMenuOpen(false);
    };
    onHash(); window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  useEffect(() => {
    const onKey = event => { if(event.key === 'Escape' && menuOpen) {setMenuOpen(false);menuButton.current?.focus();} };
    document.addEventListener('keydown',onKey);
    return () => document.removeEventListener('keydown',onKey);
  },[menuOpen]);
  const toggleTheme = () => {const value=theme==='light'?'dark':'light';setTheme(value);try{localStorage.setItem('hereopen-theme',value);}catch{}};
  const prepareEmail = event => {
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const subject=`Here Open partnership enquiry — ${data.get('company') || data.get('name')}`;
    const body=`Name: ${data.get('name')}\nOrganisation: ${data.get('company')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href=`mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmailReady(true);
  };

  return <>
    <SiteEffects/>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="container nav-shell"><Brand/>
      <nav id="main-navigation" aria-label="Main navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
        <a href="#home" onClick={()=>setMenuOpen(false)}>Home</a><a href="#problem" onClick={()=>setMenuOpen(false)}>The challenge</a><a href="#our-solution" onClick={()=>setMenuOpen(false)}>Our solution</a><a href="#how-it-works" onClick={()=>setMenuOpen(false)}>How it works</a><a href="#merchant-overview" onClick={()=>setMenuOpen(false)}>Smart device</a><a href="#vision" onClick={()=>setMenuOpen(false)}>Our vision</a><a href="#faq" onClick={()=>setMenuOpen(false)}>FAQ</a>
        <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
      </nav>
      <div className="nav-actions"><button type="button" className="icon-button theme-button" onClick={toggleTheme} aria-label={`Switch to ${theme==='light'?'dark':'light'} theme`}><Icon name={theme==='light'?'moon':'sun'}/></button><a className="button nav-cta" href="#contact">Discuss a partnership<Icon name="arrow"/></a><button ref={menuButton} type="button" className="icon-button menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen?'Close menu':'Open menu'}><Icon name={menuOpen?'close':'menu'}/></button></div>
    </div></header>

    <main id="main">
      <OriginalHero/>

      <section id="problem" className="section section-challenge comparison-section"><div className="container comparison-container">
        <div className="section-label">THE CHALLENGE</div>
        <div className="comparison-heading"><div><h2>Three sides. One costly disconnect.</h2></div><p>Banks and fintechs lose relevance. Merchants lose visibility.<br/>Customers lose certainty.</p></div>
        <div className="dimension-bank"><div className="dimension-title"><span className="item-icon"><Icon name="bank"/></span><div><h3><span>BANKS &amp; FINTECHS</span><small>— DIMENSION 01</small></h3><p>Information blindness.</p></div><span className="dimension-count">8 connected challenges</span></div><p className="dimension-intro">Banks and fintechs bring financial and technology strengths. The challenge is turning them into direct, everyday merchant relationships.</p><div className="dimension-bank-grid">{bankProblems.map(item=><Item key={item[1]} item={item}/>)}</div></div>
        <div className="dimension-pair"><article className="dimension-small dimension-merchants"><div className="dimension-title"><span className="item-icon"><Icon name="shop"/></span><div><h3><span>MERCHANTS</span><small>— DIMENSION 02</small></h3><p>Relationship breakdown.</p></div></div><div>{merchantProblems.map(item=><Item key={item[1]} item={item}/>)}</div></article><article className="dimension-small dimension-customers"><div className="dimension-title"><span className="item-icon"><Icon name="people"/></span><div><h3><span>CUSTOMERS</span><small>— DIMENSION 03</small></h3><p>Trust erosion.</p></div></div><div>{customerProblems.map(item=><Item key={item[1]} item={item}/>)}</div></article></div>
        <a className="comparison-next" href="#our-solution">Explore our solution.<Icon name="arrow"/></a>
      </div></section>

      <OurSolution/>

      <HowItWorks/>

      <MerchantValueImage/>

      <section id="solution" className="section benefit-section comparison-section"><div className="container comparison-container"><span className="anchor-alias" id="banks"/><span className="anchor-alias" id="businesses"/><span className="anchor-alias" id="merchants"/><span className="anchor-alias" id="customers"/><span className="anchor-alias" id="merchant-value"/>
        <div className="section-label">ONE DEVICE</div>
        <div className="comparison-heading"><div><h2>One device. Three stronger relationships.</h2></div><p>Built for banks & fintechs. Designed for merchants.<br/>Connected to customers.</p></div>
        <div className="device-comparison">
          <BenefitsCard audienceKey="banks"/>
          <div className="device-centre"><figure className="connected-device"><div className="device-halo"/><svg viewBox="0 0 400 210" className="device-curves" aria-hidden="true"><path d="M10 158C50 158 34 91 83 91M317 91C366 91 350 158 390 158"/></svg><DeviceIllustration compact/><figcaption><strong>Smart Merchant Device</strong><span>Your brand. Direct relationships.</span><small>Illustrative device design</small></figcaption></figure><BenefitsCard audienceKey="customers"/></div>
          <BenefitsCard audienceKey="merchants"/>
        </div>
        <p className="comparison-footnote">Credit is subject to lender eligibility and approval. Monitoring requires supported hardware, connectivity and configuration.</p>
      </div></section>

      <Vision/>

      <section id="device" className="device-band"><div className="container device-band-grid"><div><span className="eyebrow">THE PARTNERSHIP</span><h2>Your brand.<br/>Your merchant relationship.</h2><p>Your bank or fintech owns and manages the merchant relationship. Here Open provides the technology, platform and device ecosystem.</p><ButtonLink>Discuss a partnership</ButtonLink></div><div className="partnership-flow"><div><Icon name="bank"/><strong>Your bank or fintech</strong><span>Brand & merchant relationship</span></div><Icon name="plus"/><div><LogoMark/><strong>Here Open</strong><span>Technology & device ecosystem</span></div></div></div></section>

      <section className="section faq-section" id="faq" aria-labelledby="faq-title"><div className="container faq-grid"><div className="section-heading"><h2 id="faq-title">FAQ</h2><p>Still have a question?<br/><a className="text-link" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">Talk to us on WhatsApp<Icon name="arrow"/></a></p></div><div className="faq-list">{faqs.map(([question,answer])=><details key={question}><summary>{question}<Icon name="plus"/></summary><p>{answer}</p></details>)}</div></div></section>

      <section id="contact" className="section contact-section"><div className="container contact-grid"><div><span className="eyebrow">LET’S BUILD TOGETHER</span><h2>One device.<br/>Direct connections.<br/><em>A stronger India.</em></h2><p>Discuss a bank or fintech partnership, ask a question or explore how Here Open can support your merchant network.</p><a className="contact-link" href={`mailto:${contact.email}`}><Icon name="mail"/>{contact.email}<Icon name="arrow"/></a><a className="contact-link" href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="phone"/>WhatsApp {contact.phone}<Icon name="arrow"/></a></div><form onSubmit={prepareEmail} className="contact-form"><h3>Start a conversation.</h3><p>Tell us a little about your organisation.</p><div className="form-row"><label>Your name<input name="name" autoComplete="name" required maxLength={100}/></label><label>Organisation<input name="company" autoComplete="organization" maxLength={160}/></label></div><label>Work email<input name="email" type="email" autoComplete="email" required maxLength={160}/></label><label>How can we help?<textarea name="message" rows={4} required maxLength={2000} placeholder="I’d like to discuss a bank or fintech partnership…"/></label><button type="submit" className="button contact-submit" aria-describedby="contact-submit-help">Submit<Icon name="arrow"/></button><p id="contact-submit-help" className="form-help">Submit opens an email draft. Review and send it in your email app.</p>{emailReady && <p className="form-status" role="status">Your email draft is ready to open. If your email app did not launch, write to <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p>}</form></div></section>
    </main>
    <footer><div className="container footer-top"><div><Brand footer/><p>Built for banks & fintechs. Designed for merchants.<br/>Connected to customers.</p></div><nav aria-label="Footer navigation"><a href="#home">Home</a><a href="#problem">The challenge</a><a href="#our-solution">Our solution</a><a href="#how-it-works">How it works</a><a href="#merchant-overview">Smart device</a><a href="#solution">One device</a><a href="#vision">Our vision</a><a href="#faq">FAQ</a></nav><nav aria-label="Legal information"><a href="/privacy">Privacy policy</a><a href="/terms">Terms of service</a><a href="/security">Security &amp; safety</a><a href="#contact">Contact</a></nav></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Here Open</span><span>People. Businesses. Communities.</span><a href="#home">Back to top ↑</a></div></footer>
  </>;
}
