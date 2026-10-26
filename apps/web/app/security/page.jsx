import LegalPage from '../../components/LegalPage';
import Icon from '../../components/Icon';

export const metadata = {
  title: 'Security & Safety',
  description: 'How Here Open supports 24/7 shop security and safety monitoring with supported sensors, instant alerts and clear qualifications.',
  alternates: { canonical: '/security' }
};

const features = [
  ['shield', 'Security monitoring', 'Supported motion, door, window and vibration sensors can help identify activity while a shop is closed.'],
  ['fire', 'Fire detection', 'Supported temperature sensors can flag abnormal heat levels that may indicate a fire risk.'],
  ['bell', 'Smoke detection', 'Supported smoke sensors can provide early warning of a potential fire hazard.'],
  ['device', 'Instant alerts', 'Alerts can reach the merchant through the app and supported notification channels.'],
  ['eye', 'Status dashboard', 'Merchants can review shop status, device connectivity and recent alert activity in one place.'],
  ['lock', 'Secure communication', 'Device and platform communication is designed to be authenticated and protected in transit.']
];

const steps = [
  ['Shop closes', 'The merchant taps CLOSED in the merchant app, and the public status can update for nearby customers.'],
  ['Sensors activate', 'Supported security and safety sensors begin monitoring according to the merchant’s configuration.'],
  ['Event detected', 'The device identifies a configured event, such as motion, unusual temperature or smoke.'],
  ['Alert generated', 'The platform records the event with its available severity and context.'],
  ['Owner notified', 'A notification is sent to the merchant and any configured contacts. Emergency services should be contacted directly when needed.']
];

const aside = <>
  <span className="item-icon"><Icon name="shield"/></span>
  <h2>Safety first</h2>
  <p>Here Open alerts are notifications. They do not replace emergency services, insurance, security personnel or professional monitoring.</p>
  <p><strong>In an emergency, call your local emergency services immediately.</strong></p>
  <p>For security questions, email <a href="mailto:contact@hereopen.me">contact@hereopen.me</a>.</p>
  <a className="button" href="mailto:contact@hereopen.me?subject=Security%20enquiry">Contact us<Icon name="arrow"/></a>
</>;

export default function SecurityPage() {
  return <LegalPage
    title="Security & Safety"
    updated="October 2026"
    intro="Here Open helps merchants stay informed when their shop is closed, using supported sensors, device status and instant notifications."
    aside={aside}
  >
    <section>
      <h2>What the platform can support</h2>
      <p>Capabilities depend on the device model, sensors, power, connectivity and configuration chosen for each shop. The features below describe supported configurations, not a guarantee that every installation includes every sensor.</p>
      <div className="legal-feature-grid">
        {features.map(([icon, title, description]) => <article className="legal-feature" key={title}>
          <span className="item-icon"><Icon name={icon}/></span>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>)}
      </div>
    </section>

    <section>
      <h2>How monitoring works</h2>
      <p>The merchant remains in control of shop status. When the shop is marked CLOSED, supported monitoring can run according to the configured rules.</p>
      <ol className="legal-steps">
        {steps.map(([title, description], index) => <li key={title}>
          <span className="legal-step-number">{String(index + 1).padStart(2, '0')}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </li>)}
      </ol>
    </section>

    <section>
      <h2>What merchants should know</h2>
      <div className="legal-callout">
        <h3>Important qualifications</h3>
        <ul>
          <li>Monitoring and alerts require supported sensors, power, connectivity and correct configuration.</li>
          <li>Alerts are sent to the merchant and designated contacts; they are not a direct connection to emergency services.</li>
          <li>For an immediate threat to life or property, contact local emergency services first.</li>
          <li>Sensor coverage is limited to the areas and events the installed hardware can detect.</li>
          <li>Illustrations and demonstrations on this website are examples, not live monitoring data.</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Protecting your account</h2>
      <ul>
        <li>Keep merchant and administrator credentials private and use a unique password.</li>
        <li>Remove access promptly when a staff member or device is no longer authorised.</li>
        <li>Keep the device and mobile app updated, and report lost or stolen devices.</li>
        <li>Review alert recipients and notification settings regularly.</li>
        <li>Report suspected vulnerabilities or unusual activity to <a href="mailto:contact@hereopen.me">contact@hereopen.me</a>.</li>
      </ul>
    </section>

    <section>
      <h2>Report a security concern</h2>
      <p>If you believe you have found a vulnerability or a security issue affecting Here Open, email <a href="mailto:contact@hereopen.me">contact@hereopen.me</a> with the subject &quot;Security report&quot;. Include enough detail for us to reproduce and investigate the issue. Please do not access, modify or disclose other people&apos;s data, and give us a reasonable opportunity to respond before public disclosure.</p>
    </section>
  </LegalPage>;
}
