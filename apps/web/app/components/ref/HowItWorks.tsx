'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckIcon, ClockIcon, FlameIcon, LockIcon, PhoneIcon, ShieldCheckIcon, StoreIcon, TapIndicator } from './Icons';

type Mode = 'open' | 'closed';

export default function HowItWorks() {
  const [mode, setMode] = useState<Mode>('open');
  const [visible, setVisible] = useState(false);
  const demoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = demoRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const isOpen = mode === 'open';

  return (
    <>
      <div className={`merchant-phone-demo${visible ? ' is-visible' : ''}`} ref={demoRef}>
        <p className="phone-instruction" id="phone-next-action" aria-live="polite">
          <PhoneIcon />
          <strong>
            Shop is {isOpen ? 'OPEN' : 'CLOSED'}. Tap {isOpen ? 'CLOSED' : 'OPEN'}.
          </strong>
        </p>
        <div className="merchant-phone">
          <img className="phone-frame" src="/assets/merchant-phone-frame.svg" width={320} height={620} alt="" aria-hidden="true" />
          <div className="merchant-phone-screen">
            <div className="phone-app-heading">
              <span className="brand-mark" aria-hidden="true">
                <img src="/assets/hereopen-logo.svg" width={43} height={43} alt="" />
              </span>
              <span>
                HERE OPEN<small>MERCHANT APP</small>
              </span>
            </div>
            <div className="phone-shop-heading">
              <h3>My shop</h3>
              <p>You control your shop status.</p>
            </div>
            <div className={isOpen ? 'phone-shop-status open' : 'phone-shop-status closed'}>
              {isOpen ? <StoreIcon /> : <LockIcon />}
              <span>Shop status</span>
              <strong>{isOpen ? 'OPEN' : 'CLOSED'}</strong>
              <small>{isOpen ? 'Business Mode' : 'Security Mode'}</small>
            </div>
            <div className="phone-shop-controls" role="group" aria-label="Choose an example shop status" aria-describedby="phone-next-action">
              <button
                type="button"
                className={isOpen ? 'is-selected' : 'is-suggested'}
                aria-pressed={isOpen}
                onClick={() => setMode('open')}
              >
                <StoreIcon />
                <span>OPEN</span>
                {!isOpen ? <TapIndicator /> : null}
                <CheckIcon />
              </button>
              <button
                type="button"
                className={isOpen ? 'is-suggested' : 'is-selected'}
                aria-pressed={!isOpen}
                onClick={() => setMode('closed')}
              >
                <LockIcon />
                <span>CLOSED</span>
                {isOpen ? <TapIndicator /> : null}
                <CheckIcon />
              </button>
            </div>
            <p className="phone-update-note">
              <CheckIcon />
              Device and public app updated.
            </p>
          </div>
        </div>
        <p className="phone-demo-note">Example only. No real shop is connected.</p>
      </div>

      <div className="phone-results" id="shop-results" aria-live="polite" aria-atomic="true">
        <div className="phone-results-heading">
          <span className={isOpen ? 'shop-mode-badge open' : 'shop-mode-badge closed'}>
            {isOpen ? <StoreIcon /> : <LockIcon />}
            You choose {isOpen ? 'OPEN' : 'CLOSED'}
          </span>
          <h3>Here&rsquo;s what happens.</h3>
        </div>
        <ol className="simple-workflow">
          <li>
            <span className="workflow-step-number">1</span>
            <div>
              <h4>Device starts {isOpen ? 'Business' : 'Security'} Mode</h4>
              <p>
                {isOpen
                  ? 'One tap on OPEN tells the connected device your shop is open.'
                  : 'One tap on CLOSED tells the connected device to start Security Mode.'}
              </p>
            </div>
          </li>
          <li>
            <span className="workflow-step-number">2</span>
            <div>
              <h4>Customers see {isOpen ? 'OPEN' : 'CLOSED'}</h4>
              <p>
                {isOpen
                  ? 'The public app shows your shop status with recent activity.'
                  : 'The public app shows your shop as closed until you open again.'}
              </p>
              {isOpen ? (
                <span className="live-motion">
                  <ClockIcon />
                  Motion 2 minutes ago
                </span>
              ) : null}
            </div>
          </li>
          <li>
            <span className="workflow-step-number">3</span>
            <div>
              <h4>Share offers with customers</h4>
              <p>Send instant offers and discounts from the Here Open merchant app.</p>
            </div>
          </li>
        </ol>
        <p className="simple-workflow-note">
          <ShieldCheckIcon />
          Merchants stay informed about safety and security.
        </p>
      </div>

      <div className="safety-strip">
        <span className="item-icon">
          <FlameIcon />
        </span>
        <div>
          <h3>24/7 fire and smoke monitoring.</h3>
          <p>Safety alerts delivered to merchants, whether the shop is OPEN or CLOSED.</p>
        </div>
      </div>
      <p className="fine-print">
        Monitoring and alerts require supported sensors, power, connectivity and configuration. Confidence scores reflect available
        activity signals.
      </p>
    </>
  );
}