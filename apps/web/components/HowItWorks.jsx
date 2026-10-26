'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import LogoMark from './LogoMark';
import { workflows } from '../content/site';

function TapIndicator() {
  return <svg className="tap-indicator" viewBox="0 0 48 56" width="44" height="50" aria-hidden="true" focusable="false">
    <circle className="tap-highlight" cx="18" cy="10" r="11"/>
    <path className="tap-rays" d="M3 2l4 4M18-5v5M33 2l-4 4"/>
    <circle className="tap-ring" cx="18" cy="10" r="7"/>
    <g className="tap-hand"><path d="M14 29V12a4 4 0 0 1 8 0v12l4-1 10 5c3 1 4 3 4 6v8c0 5-4 9-9 9h-8c-3 0-5-1-7-4L6 34a4 4 0 0 1 6-5l2 2Z"/><path className="tap-fingers" d="M27 30v8m6-6v7"/></g>
  </svg>;
}

export default function HowItWorks() {
  const [mode, setMode] = useState('open');
  const [demoVisible, setDemoVisible] = useState(false);
  const controlsRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setDemoVisible(entry.isIntersecting), { threshold: .35 });
    observer.observe(controlsRef.current);
    return () => observer.disconnect();
  }, []);
  const workflow = workflows[mode];
  const isOpen = mode === 'open';

  return <section id="how-it-works" className={`how-simple mode-${mode}`} aria-labelledby="how-title">
    <div className="container">
      <div className="section-label">HOW IT WORKS</div>
      <div className="how-simple-heading"><div><h2 id="how-title">Your shop. One tap.</h2></div><p>Instant open/closed status to the public.<br/>Safety and security alerts to merchants.</p></div>
      <div className="how-simple-grid">
        <div className={`merchant-phone-demo${demoVisible ? ' is-visible' : ''}`}>
          <p className="phone-instruction" id="phone-next-action" aria-live="polite"><Icon name="phone"/><strong>Shop is {mode.toUpperCase()}. Tap {isOpen ? 'CLOSED' : 'OPEN'}.</strong></p>
          <div className="merchant-phone">
            <img className="phone-frame" src="/assets/merchant-phone-frame.svg" width="320" height="620" alt="" aria-hidden="true"/>
            <div className="merchant-phone-screen">
              <div className="phone-app-heading"><LogoMark/><span>HERE OPEN<small>MERCHANT APP</small></span></div>
              <div className="phone-shop-heading"><h3>My shop</h3><p>You control your shop status.</p></div>
              <div key={mode} className={`phone-shop-status ${mode}`}><span className="status-orbit" aria-hidden="true"/><Icon name={workflow.icon}/><span>Shop status</span><strong>{mode.toUpperCase()}</strong><small>{workflow.title}</small></div>
              <div ref={controlsRef} className="phone-shop-controls" role="group" aria-label="Choose an example shop status" aria-describedby="phone-next-action">
                <button type="button" className={isOpen?'is-selected':'is-suggested'} aria-pressed={isOpen} onClick={()=>setMode('open')}><Icon name="shop"/><span>OPEN</span>{!isOpen&&<TapIndicator/>}<Icon name="check"/></button>
                <button type="button" className={!isOpen?'is-selected':'is-suggested'} aria-pressed={!isOpen} onClick={()=>setMode('closed')}><Icon name="lock"/><span>CLOSED</span>{isOpen&&<TapIndicator/>}<Icon name="check"/></button>
              </div>
              <p className="phone-update-note"><Icon name="check"/>Device and public app updated.</p>
            </div>
          </div>
          <p className="phone-demo-note">Example only. No real shop is connected.</p>
        </div>
        <div className="phone-results" id="shop-results" aria-live="polite" aria-atomic="true">
          <div className="phone-results-heading"><span className={`shop-mode-badge ${mode}`}><Icon name={workflow.icon}/>You choose {mode.toUpperCase()}</span><h3>Here’s what happens.</h3></div>
          <ol key={mode} className="simple-workflow">{workflow.steps.map(([title,body],index)=><li key={title} style={{'--step-delay': `${index * 100}ms`}}><span className="workflow-step-number">{index+1}</span><div><h4>{title}</h4><p>{body}</p>{isOpen&&index===1&&<span className="live-motion"><Icon name="clock"/>Motion 2 minutes ago</span>}</div></li>)}</ol>
          <p className="simple-workflow-note"><Icon name="shield"/>Merchants stay informed about safety and security.</p>
        </div>
      </div>
      <div className="safety-strip"><span className="item-icon"><Icon name="fire"/></span><div><h3>24/7 fire and smoke monitoring.</h3><p>Safety alerts delivered to merchants, whether the shop is OPEN or CLOSED.</p></div></div>
      <p className="fine-print">Monitoring and alerts require supported sensors, power, connectivity and configuration. Confidence scores reflect available activity signals.</p>
    </div>
  </section>;
}
