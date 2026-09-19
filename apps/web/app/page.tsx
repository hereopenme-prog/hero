import type { ComponentType } from 'react';
import HowItWorks from './components/ref/HowItWorks';
import ContactForm from './components/ref/ContactForm';
import {
  ArrowRightIcon,
  BankIcon,
  BellIcon,
  CardIcon,
  ChartIcon,
  CheckIcon,
  ClockIcon,
  CpuIcon,
  DeviceCurvesSvg,
  EyeIcon,
  FlameIcon,
  LinkIcon,
  LockIcon,
  MailIcon,
  MapPinIcon,
  MegaphoneIcon,
  PhoneIcon,
  PlusIcon,
  ShieldCheckIcon,
  StoreIcon,
  TagIcon,
  UsersIcon,
  VisionConnectionSvg,
} from './components/ref/Icons';

type IconType = ComponentType<{ className?: string }>;

const BANK_CHALLENGES: Array<[IconType, string, string]> = [
  [CpuIcon, 'Limited differentiation', 'Similar sound boxes give merchants few reasons to choose one bank over fintechs and other banks.'],
  [BankIcon, 'Underused bank strengths', 'Banking capabilities do not always translate into daily merchant value.'],
  [UsersIcon, 'Missed merchant acquisition', 'A weak device proposition can limit new merchant relationships.'],
  [LinkIcon, 'Weak merchant retention', 'Limited everyday value makes the relationship easier to replace.'],
  [ChartIcon, 'CASA relationship risk', 'Losing the merchant touchpoint can weaken deposit relationships.'],
  [CardIcon, 'Loan distribution', 'Intermediated loan distribution can increase acquisition costs.'],
  [LinkIcon, 'Weaker direct relationships', 'Third-party channels can distance banks from the merchant’s daily business.'],
  [EyeIcon, 'Limited lending context', 'Fragmented business information can limit the context for credit assessment.'],
];

const MERCHANT_CHALLENGES: Array<[IconType, string, string]> = [
  [UsersIcon, 'Trust loss & missed footfall', 'Uncertain opening times disappoint customers, weaken trust and cost shops potential visits.'],
  [MegaphoneIcon, 'Low visibility & missed updates', 'Shops are hard to find without a current digital presence. Offers and announcements may not reach nearby customers.'],
  [ShieldCheckIcon, 'Theft and fire worries', 'Intrusion, fire and smoke can go unnoticed without suitable detection, alerts and a way to respond.'],
];

const CUSTOMER_CHALLENGES: Array<[IconType, string, string]> = [
  [ClockIcon, 'No real-time certainty', 'Listed hours may not reflect live shop status. Trips to closed shops waste time, fuel and effort.'],
  [MapPinIcon, 'Limited discovery & missed offers', 'Open nearby shops can be hard to find. Useful offers and announcements may never reach interested customers.'],
  [BellIcon, 'Uncertainty in urgent moments', 'Urgent needs are harder to meet when customers cannot identify an open nearby shop.'],
];

const SOLUTION_FEATURES: Array<[IconType, string, string]> = [
  [StoreIcon, 'OPEN / CLOSED status', 'Customers can see live shop status in the public app.'],
  [TagIcon, 'Offers & discounts', 'Merchants can send instant offers and discounts.'],
  [ClockIcon, 'Live confidence', 'Movement detected 2 minutes ago.'],
  [ShieldCheckIcon, 'Security alerts', 'Instant security alerts to the merchant’s mobile phone.'],
  [FlameIcon, '24/7 fire & smoke safety', 'Continuous safety monitoring and alerts.'],
  [PhoneIcon, 'Merchant app control', 'Control the device from the Here Open merchant app.'],
];

const BANK_BENEFITS: Array<[IconType, string, string]> = [
  [UsersIcon, 'Merchant acquisition', 'Give local businesses more reasons to choose your bank.'],
  [ChartIcon, 'Daily transactions', 'Build relationships around everyday payment activity.'],
  [CardIcon, 'Merchant lending', 'Connect eligible merchants with suitable bank-led credit.'],
  [CardIcon, 'Cash-credit opportunities', 'Give loans directly without paying brokerage fees to fintechs or other intermediaries.'],
  [LinkIcon, 'Direct relationships', 'Build trust through ongoing merchant engagement.'],
  [ChartIcon, 'CASA growth potential', 'Deepen account relationships and deposit engagement.'],
  [CpuIcon, 'A stronger offering', 'Offer useful services beyond payment confirmation.'],
];

const MERCHANT_BENEFITS: Array<[IconType, string, string]> = [
  [PhoneIcon, 'One-tap shop status', 'Control the device from your mobile phone. Share your shop’s open or closed status in the public app with a confidence score.'],
  [MapPinIcon, 'Local discovery', 'Help nearby customers find your business.'],
  [MegaphoneIcon, 'Business visibility', 'Promote your shop through the Here Open network.'],
  [TagIcon, 'Direct offers', 'Share offers and discounts with interested customers.'],
  [LockIcon, 'Theft-risk alerts', 'Stay informed with supported shop-security alerts.'],
  [FlameIcon, 'Fire & smoke alerts', 'Receive safety notifications where supported.'],
];

const CUSTOMER_BENEFITS: Array<[IconType, string, string]> = [
  [StoreIcon, 'Live shop status', 'Check a shop’s reported status before travelling.'],
  [TagIcon, 'Relevant offers', 'Discover offers from the businesses you follow.'],
  [MapPinIcon, 'Smarter journeys', 'Plan visits to help save time, fuel and effort.'],
  [CheckIcon, 'More confident visits', 'Make everyday shopping easier with timely updates.'],
];

const FAQS: Array<[string, string]> = [
  [
    'Why should banks offer Here Open to their merchants?',
    'Here Open instantly shows customers in the Here Open app whether a shop is OPEN, with live confidence such as “Movement detected 2 minutes ago.” Merchants can also send offers and discounts. When the shop is CLOSED, Security Mode sends instant alerts, while fire and smoke safety monitoring continues 24/7.',
  ],
  [
    'How is Here Open different from a normal payment sound box?',
    'A normal sound box mainly confirms payments. Here Open adds OPEN/CLOSED status, current offers, and instant safety and security alerts to the merchant’s mobile phone — features standard sound boxes do not offer together.',
  ],
  [
    'How can Here Open give banks a stronger edge over fintechs?',
    'Here Open goes beyond payment confirmation by solving everyday merchant needs such as customer connection, free advertising, shop visibility, and safety and security worries. As it becomes an essential part of daily business for merchants and customers, it gives banks a stronger edge over fintechs.',
  ],
  [
    'How can Here Open help banks gain more merchant current accounts?',
    'Only banks partnered with Here Open can offer this device. It solves everyday merchant needs that normal payment devices do not address, giving merchants a strong reason to open a current account with the partner bank and use it for daily business transactions.',
  ],
  [
    'How can Here Open improve merchant retention and stickiness?',
    'Here Open helps merchants connect with customers through OPEN/CLOSED status, offers and discounts. As customers start expecting these features, demand can grow across more shops. Its low-cost safety and security features give merchants even more reason to keep using the device and stay connected with the bank.',
  ],
  [
    'How can Here Open create more lending opportunities for banks?',
    'As Here Open becomes part of the merchant’s daily business, it can increase transactions and account activity. This gives banks a stronger direct merchant relationship and more opportunities to offer loans directly to eligible merchants.',
  ],
  [
    'How does Here Open provide safety and security to merchants?',
    'When the merchant marks the shop CLOSED, the device switches to Security Mode and sends instant security alerts to the merchant’s mobile phone. Fire and smoke safety monitoring continues 24/7.',
  ],
  [
    'Can banks use their own branding?',
    'Yes. The device and merchant experience can be developed around the partner bank’s brand. The bank manages the merchant relationship, while Here Open provides the technology and device ecosystem.',
  ],
  [
    'How does a merchant use Here Open?',
    'The merchant controls the device through the Here Open merchant app. Selecting OPEN starts Business Mode, while selecting CLOSED starts Security Mode. Merchants can also send instant offers and discounts to customers through the app.',
  ],
];

export default function Home() {
  return (
    <main id="main">
      <section id="home" className="original-hero">
        <div className="original-hero-inner">
          <div className="original-hero-copy">
            <h1>
              <span>LOSING THE COMPETITIVE</span>
              <br />
              <em>EDGE OVER FINTECHS?</em>
            </h1>
            <p className="original-subtitle">
              Not because the payment sound box is weak.
              <br />
              <span>Because the product is the same.</span>
            </p>
            <p className="original-problem-title">Merchants have real problems.</p>
            <p className="original-description">
              Customers arrive at closed shops and lose trust. Offers don’t reach loyal customers. They worry about theft, fire safety, low
              customer reach, and advertising costs.
            </p>
            <p className="original-statement">Our budget-friendly smart device (patent) is not just a payment box. It solves these real problems.</p>
            <p className="original-statement original-conclusion">
              By offering this device, banks can build stronger, direct relationships with merchants.
            </p>
            <div className="original-hero-actions">
              <a href="#contact">
                PARTNER WITH US
                <ArrowRightIcon />
              </a>
            </div>
          </div>
          <figure className="original-hero-art">
            <a
              className="original-art-frame"
              href="/assets/merchant-problems-hero.png"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the full merchant problems and benefits image"
            >
              <img
                src="/assets/merchant-problems-hero.png"
                alt="Real problems of merchants and the Here Open device benefits for banks, merchants and customers"
                width={1774}
                height={887}
              />
            </a>
            <figcaption>
              <a href="/assets/merchant-problems-hero.png" target="_blank" rel="noopener noreferrer">
                View full image
                <ArrowRightIcon />
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="problem" className="section section-challenge comparison-section">
        <div className="container comparison-container">
          <div className="section-label">THE CHALLENGE</div>
          <div className="comparison-heading">
            <div>
              <h2>Three sides. One costly disconnect.</h2>
            </div>
            <p>
              Banks lose relevance. Merchants lose visibility.
              <br />
              Customers lose certainty.
            </p>
          </div>
          <div className="dimension-bank">
            <div className="dimension-title">
              <span className="item-icon">
                <BankIcon />
              </span>
              <div>
                <h3>
                  <span>BANKS</span>
                  <small>— DIMENSION 01</small>
                </h3>
                <p>Information blindness.</p>
              </div>
              <span className="dimension-count">8 connected challenges</span>
            </div>
            <p className="dimension-intro">
              Banks have trust, reach and financial strength. The challenge is turning that advantage into a direct, everyday merchant
              relationship.
            </p>
            <div className="dimension-bank-grid">
              {BANK_CHALLENGES.map(([Icon, title, text]) => (
                <article className="item" key={title}>
                  <span className="item-icon">
                    <Icon />
                  </span>
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="dimension-pair">
            <article className="dimension-small dimension-merchants">
              <div className="dimension-title">
                <span className="item-icon">
                  <StoreIcon />
                </span>
                <div>
                  <h3>
                    <span>MERCHANTS</span>
                    <small>— DIMENSION 02</small>
                  </h3>
                  <p>Relationship breakdown.</p>
                </div>
              </div>
              <div>
                {MERCHANT_CHALLENGES.map(([Icon, title, text]) => (
                  <article className="item" key={title}>
                    <span className="item-icon">
                      <Icon />
                    </span>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </article>
            <article className="dimension-small dimension-customers">
              <div className="dimension-title">
                <span className="item-icon">
                  <UsersIcon />
                </span>
                <div>
                  <h3>
                    <span>CUSTOMERS</span>
                    <small>— DIMENSION 03</small>
                  </h3>
                  <p>Trust erosion.</p>
                </div>
              </div>
              <div>
                {CUSTOMER_CHALLENGES.map(([Icon, title, text]) => (
                  <article className="item" key={title}>
                    <span className="item-icon">
                      <Icon />
                    </span>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </div>
          <a className="comparison-next" href="#our-solution">
            Explore our solution.
            <ArrowRightIcon />
          </a>
        </div>
      </section>

      <section id="our-solution" className="solution-intro" aria-labelledby="solution-intro-title">
        <div className="container comparison-container">
          <h2 className="section-label" id="solution-intro-title">
            OUR SOLUTION
          </h2>
          <figure className="solution-artwork">
            <a
              href="/assets/our-solution.png"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the full Here Open Smart Device image in a new tab"
            >
              <img
                src="/assets/our-solution.png"
                width={1536}
                height={1024}
                loading="lazy"
                alt="Here Open Smart Device displaying Your Bank QR Code, surrounded by live shop status, offers, movement confidence, security alerts, 24/7 fire and smoke monitoring, and merchant app control."
              />
            </a>
            <figcaption>
              One device. Better visibility. Better protection. Better connection.
              <a href="/assets/our-solution.png" target="_blank" rel="noopener noreferrer">
                View full image
                <ArrowRightIcon />
              </a>
            </figcaption>
          </figure>
          <details className="solution-details">
            <summary>
              Read the six features
              <PlusIcon />
            </summary>
            <div className="solution-feature-list">
              {SOLUTION_FEATURES.map(([Icon, title, text]) => (
                <article key={title}>
                  <span className="item-icon">
                    <Icon />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="solution-details-summary">
              <p>
                Here Open does more than confirm payments. It helps merchants connect with customers, promote their businesses, improve shop
                visibility, and manage safety and security needs.
              </p>
              <p>
                As these features become part of daily business for merchants and customers, the device gives banks a stronger edge over
                fintechs.
              </p>
            </div>
          </details>
        </div>
      </section>

      <section id="how-it-works" className="how-simple mode-open" aria-labelledby="how-title">
        <div className="container">
          <div className="section-label">HOW IT WORKS</div>
          <div className="how-simple-heading">
            <div>
              <h2 id="how-title">Your shop. One tap.</h2>
            </div>
            <p>
              Instant open/closed status to the public.
              <br />
              Safety and security alerts to merchants.
            </p>
          </div>
          <div className="how-simple-grid">
            <HowItWorks />
          </div>
        </div>
      </section>

      <section id="merchant-overview" className="merchant-value-overview" aria-labelledby="merchant-overview-title">
        <div className="container comparison-container">
          <h2 className="section-label" id="merchant-overview-title">
            SMART DEVICE
          </h2>
          <figure className="solution-artwork merchant-value-artwork">
            <a
              href="/assets/merchant-value-overview.png"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the full bank, merchant and customer benefits image in a new tab"
            >
              <img
                src="/assets/merchant-value-overview.png"
                width={1536}
                height={1024}
                loading="lazy"
                alt="One device. Three stronger relationships. A device displaying Your Bank’s QR Code connects three circles: banks gain accounts, lending opportunities and stronger relationships; merchants gain shop visibility, offers and safety alerts; customers find open shops and offers and avoid wasted trips."
              />
            </a>
            <figcaption>
              <span>One device. Three stronger relationships.</span>
              <div>
                <a href="#solution">
                  Read the benefits below
                  <ArrowRightIcon />
                </a>
                <a href="/assets/merchant-value-overview.png" target="_blank" rel="noopener noreferrer">
                  View full image
                  <ArrowRightIcon />
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="solution" className="section benefit-section comparison-section">
        <div className="container comparison-container">
          <span className="anchor-alias" id="banks" />
          <span className="anchor-alias" id="businesses" />
          <span className="anchor-alias" id="merchants" />
          <span className="anchor-alias" id="customers" />
          <span className="anchor-alias" id="merchant-value" />
          <div className="section-label">ONE DEVICE</div>
          <div className="comparison-heading">
            <div>
              <h2>One device. Three stronger relationships.</h2>
            </div>
            <p>
              Built for banks. Designed for merchants.
              <br />
              Connected to customers.
            </p>
          </div>
          <div className="device-comparison">
            <article className="audience-card banks-card" aria-labelledby="benefits-banks">
              <div className="card-title">
                <span className="item-icon">
                  <BankIcon />
                </span>
                <div>
                  <h3 id="benefits-banks">For banks</h3>
                  <p>Grow together.</p>
                </div>
              </div>
              <div className="all-benefits">
                {BANK_BENEFITS.map(([Icon, title, text]) => (
                  <article className="item" key={title}>
                    <span className="item-icon">
                      <Icon />
                    </span>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </article>
            <div className="device-centre">
              <figure className="connected-device">
                <div className="device-halo" />
                <DeviceCurvesSvg />
                <img src="/assets/device-bank-qr.png" alt="Smart merchant device displaying Your Bank’s QR Code" width={700} height={700} loading="lazy" />
                <figcaption>
                  <strong>Smart Merchant Device</strong>
                  <span>Zero intermediaries. Direct relationships.</span>
                  <small>Illustrative device design</small>
                </figcaption>
              </figure>
              <article className="audience-card customers-card" aria-labelledby="benefits-customers">
                <div className="card-title">
                  <span className="item-icon">
                    <UsersIcon />
                  </span>
                  <div>
                    <h3 id="benefits-customers">For customers</h3>
                    <p>Smarter choices. Easier visits.</p>
                  </div>
                </div>
                <div className="all-benefits">
                  {CUSTOMER_BENEFITS.map(([Icon, title, text]) => (
                    <article className="item" key={title}>
                      <span className="item-icon">
                        <Icon />
                      </span>
                      <div>
                        <h4>{title}</h4>
                        <p>{text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </article>
            </div>
            <article className="audience-card merchants-card" aria-labelledby="benefits-merchants">
              <div className="card-title">
                <span className="item-icon">
                  <StoreIcon />
                </span>
                <div>
                  <h3 id="benefits-merchants">For merchants</h3>
                  <p>More value, every day.</p>
                </div>
              </div>
              <div className="all-benefits">
                {MERCHANT_BENEFITS.map(([Icon, title, text]) => (
                  <article className="item" key={title}>
                    <span className="item-icon">
                      <Icon />
                    </span>
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </div>
          <p className="comparison-footnote">
            Credit is subject to bank eligibility and approval. Monitoring requires supported hardware, connectivity and configuration.
          </p>
        </div>
      </section>

      <section id="vision" className="simple-vision" aria-labelledby="vision-title">
        <div className="vision-section-heading">
          <div className="container">
            <div className="section-label">OUR VISION</div>
          </div>
        </div>
        <div className="simple-vision-hero">
          <div className="container simple-vision-hero-grid">
            <div>
              <h2 id="vision-title">
                Connecting India’s
                <br />
                local economy.
              </h2>
              <p>One simple goal: connect local businesses with customers, banks, safety and security.</p>
              <span className="vision-tagline">VISIBLE. CONNECTED. PROTECTED.</span>
            </div>
            <div className="vision-connection" role="img" aria-label="Here Open connects banks, MSMEs and customers">
              <VisionConnectionSvg />
              <div className="vision-node vision-node-bank">
                <span>
                  <BankIcon />
                </span>
                <strong>BANKS</strong>
              </div>
              <div className="vision-node vision-node-hub">
                <span className="brand-mark" aria-hidden="true">
                  <img src="/assets/hereopen-logo.svg" width={43} height={43} alt="" />
                </span>
                <strong>HERE OPEN</strong>
              </div>
              <div className="vision-node vision-node-msmes">
                <span>
                  <StoreIcon />
                </span>
                <strong>MSMEs</strong>
              </div>
              <div className="vision-node vision-node-customers">
                <span>
                  <UsersIcon />
                </span>
                <strong>CUSTOMERS</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="container simple-vision-content">
          <h3 className="eyebrow vision-problems-label">THE THREE SIDES OF THE PROBLEM WE WANT TO SOLVE</h3>
          <div className="vision-scale-grid">
            <article className="vision-scale-card vision-people">
              <span className="vision-card-icon">
                <UsersIcon />
              </span>
              <div>
                <h3>90+ Crore</h3>
                <h4>INTERNET USERS</h4>
                <p>People are online, but they still cannot easily know which nearby shop is OPEN right now. This leads to uncertain and wasted trips.</p>
              </div>
            </article>
            <article className="vision-scale-card vision-msmes">
              <span className="vision-card-icon">
                <StoreIcon />
              </span>
              <div>
                <h3>6.3+ Crore</h3>
                <h4>MSMEs</h4>
                <p>
                  Merchants run their shops, but they have no real-time visibility, no security monitoring, and no direct voice to their
                  customers. This leads to lost visits, lost revenue, and safety and security worries.
                </p>
              </div>
            </article>
          </div>
          <div className="vision-bank-strip">
            <span className="vision-card-icon">
              <BankIcon />
            </span>
            <h3>Banks</h3>
            <p>
              Banks have real banking power, reputation, and resources, but they still depend on third parties to reach merchants and pay
              brokerage for loans they should give directly. This leads to lost relationships and indirect burdens on MSMEs.
            </p>
          </div>
          <article className="vision-purpose-card" aria-labelledby="vision-purpose-title">
            <div className="vision-purpose-label">
              <LinkIcon />
              <span className="eyebrow">OUR VISION</span>
            </div>
            <h3 id="vision-purpose-title">
              To Provide a Platform <em>Where Banks Lead.</em>
            </h3>
            <p>A platform that connects banks directly with merchants and customers.</p>
            <p className="vision-direct-promise">
              <strong>No middlemen. No brokerage. No dependence.</strong>
            </p>
            <p>Banks reach MSMEs directly. Banks serve merchants directly. Banks build relationships beyond payment confirmation.</p>
            <p>Real-time shop visibility, customer communication, safety, and security — all designed to solve everyday local business needs.</p>
            <p className="vision-bank-power">
              <strong>Banks put their banking power to work — directly, profitably, and at scale.</strong>
            </p>
          </article>
        </div>
      </section>

      <section id="device" className="device-band">
        <div className="container device-band-grid">
          <div>
            <span className="eyebrow">THE PARTNERSHIP</span>
            <h2>
              Your brand.
              <br />
              Your merchant relationship.
            </h2>
            <p>The bank owns and manages the merchant relationship. Here Open provides the technology, platform and device ecosystem.</p>
            <a className="button" href="#contact">
              Discuss a bank partnership
              <ArrowRightIcon />
            </a>
          </div>
          <div className="partnership-flow">
            <div>
              <BankIcon />
              <strong>Your bank</strong>
              <span>Brand &amp; merchant relationship</span>
            </div>
            <PlusIcon />
            <div>
              <span className="brand-mark" aria-hidden="true">
                <img src="/assets/hereopen-logo.svg" width={43} height={43} alt="" />
              </span>
              <strong>Here Open</strong>
              <span>Technology &amp; device ecosystem</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq" aria-labelledby="faq-title">
        <div className="container faq-grid">
          <div className="section-heading">
            <h2 id="faq-title">FAQ</h2>
            <p>
              Still have a question?
              <br />
              <a className="text-link" href="https://wa.me/919060038229" target="_blank" rel="noopener noreferrer">
                Talk to us on WhatsApp
                <ArrowRightIcon />
              </a>
            </p>
          </div>
          <div className="faq-list">
            {FAQS.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <PlusIcon />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">LET’S BUILD TOGETHER</span>
            <h2>
              One device.
              <br />
              Direct connections.
              <br />
              <em>A stronger India.</em>
            </h2>
            <p>Discuss a bank partnership, ask a question or explore how Here Open can support your merchant network.</p>
            <a className="contact-link" href="mailto:contact@hereopen.me">
              <MailIcon />
              contact@hereopen.me
              <ArrowRightIcon />
            </a>
            <a className="contact-link" href="https://wa.me/919060038229" target="_blank" rel="noopener noreferrer">
              <PhoneIcon />
              WhatsApp +91 9060038229
              <ArrowRightIcon />
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}