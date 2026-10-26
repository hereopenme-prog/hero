import LegalPage from '../../components/LegalPage';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms governing use of the Here Open website, smart merchant device and platform.',
  alternates: { canonical: '/terms' }
};

export default function TermsPage() {
  return <LegalPage
    title="Terms of Service"
    updated="October 2026"
    intro="These terms govern use of the Here Open website and, where a separate agreement does not apply, the Here Open platform and device services."
  >
    <section>
      <h2>1. Acceptance of these terms</h2>
      <p>By accessing this website or using the Here Open platform, you agree to these terms. If you use the services on behalf of an organisation, you confirm that you have authority to bind that organisation. If you do not agree, please do not use the website or services.</p>
    </section>

    <section>
      <h2>2. About Here Open</h2>
      <p>Here Open provides technology, software and a device ecosystem that helps banks, fintechs, merchants and customers connect through live shop status, communication and supported safety alerts. Here Open is a technology provider. It is not a bank, lender or insurer, and it does not itself provide deposits, credit or insurance.</p>
    </section>

    <section>
      <h2>3. Use of the website</h2>
      <p>You may use this website for lawful, informational and business purposes. You must not:</p>
      <ul>
        <li>Use the website in a way that breaches applicable law or the rights of others.</li>
        <li>Attempt to gain unauthorised access to the website, platform, devices, systems or data.</li>
        <li>Interfere with the availability, integrity or performance of the service.</li>
        <li>Scrape, copy or republish substantial content or artwork without permission.</li>
        <li>Introduce malicious code or use automated means that place an unreasonable load on our systems.</li>
      </ul>
    </section>

    <section>
      <h2>4. Accounts, devices and partner services</h2>
      <p>Merchant, bank, fintech and administrative access to the platform may require an account, credentials, supported hardware, connectivity and configuration. Additional or separate terms may apply to a device, programme or partnership. If those terms conflict with these terms, the more specific terms will govern that service.</p>
      <p>You are responsible for keeping account credentials secure and for activity carried out under your account.</p>
    </section>

    <section>
      <h2>5. Orders, offers and customer information</h2>
      <p>Merchants are responsible for the accuracy of their shop status, opening hours, offers, announcements and other content. Customers should treat live status, confidence signals and alerts as helpful information, not as a guarantee. Offers are provided by the relevant merchant, and disputes about them should be raised with that merchant.</p>
    </section>

    <section>
      <h2>6. Safety monitoring and alerts</h2>
      <p>Monitoring and safety alerts depend on supported sensors, power, connectivity and correct configuration. Alerts are notifications and are not a substitute for emergency services, insurance, security personnel or professional monitoring. In an emergency, contact the appropriate emergency services directly.</p>
    </section>

    <section>
      <h2>7. Credit and financial services</h2>
      <p>Any credit, loan, deposit or other financial service is offered by the relevant bank, fintech or lending partner, not by Here Open, and is subject to that provider&apos;s eligibility, approval, terms and conditions. Information on this website is not financial, legal or tax advice.</p>
    </section>

    <section>
      <h2>8. Intellectual property</h2>
      <p>The website, platform, software, designs, text, graphics, logos and device artwork are owned by Here Open or its licensors and are protected by intellectual-property laws. You receive a limited, revocable, non-exclusive licence to use the website and platform as intended. No other rights are granted.</p>
      <p>You retain ownership of content you provide. You grant us the permissions needed to host, process and display that content in order to provide the services.</p>
    </section>

    <section>
      <h2>9. Third-party links and content</h2>
      <p>The website may link to third-party sites or services, including partner banks and fintechs. We do not control and are not responsible for their content, availability or practices. Review their terms and privacy policies before using them.</p>
    </section>

    <section>
      <h2>10. Demonstrations and illustrations</h2>
      <p>Product visuals, device screens, shop-status examples and the interactive phone demonstration on this website are illustrative. They do not represent a live merchant, a working payment code or connected hardware. Confidence scores and activity signals depend on available data and configuration.</p>
    </section>

    <section>
      <h2>11. Disclaimers</h2>
      <p>To the extent permitted by law, the website and services are provided &quot;as is&quot; and &quot;as available&quot;. We do not warrant uninterrupted, error-free or completely secure operation, or that information provided by merchants, partners or third parties is accurate or complete.</p>
    </section>

    <section>
      <h2>12. Limitation of liability</h2>
      <p>To the extent permitted by law, Here Open and its directors, employees, partners and suppliers will not be liable for indirect, incidental, special, consequential or punitive loss, or for loss of profit, revenue, data, goodwill or business opportunity, arising from use of or inability to use the website or services. Nothing in these terms excludes liability that cannot lawfully be excluded.</p>
    </section>

    <section>
      <h2>13. Indemnity</h2>
      <p>You agree to indemnify Here Open against claims, losses and reasonable costs arising from your breach of these terms, your misuse of the services, or content you provide, except to the extent caused by our own unlawful conduct.</p>
    </section>

    <section>
      <h2>14. Suspension and termination</h2>
      <p>We may suspend or terminate access to the website or platform where reasonably necessary to protect the service, other users or the law, or where these terms are breached. Provisions that by their nature should survive termination will continue to apply.</p>
    </section>

    <section>
      <h2>15. Governing law</h2>
      <p>These terms are governed by the laws of India. Subject to any mandatory consumer protections, disputes are subject to the jurisdiction of the competent courts in India.</p>
    </section>

    <section>
      <h2>16. Changes to these terms</h2>
      <p>We may update these terms from time to time. The current version will be posted on this page with a new &quot;last updated&quot; date. Continuing to use the website or services after a change means you accept the updated terms.</p>
    </section>

    <section>
      <h2>17. Contact</h2>
      <p>For questions about these terms, email <a href="mailto:contact@hereopen.me">contact@hereopen.me</a> and include &quot;Terms enquiry&quot; in the subject line.</p>
    </section>
  </LegalPage>;
}
