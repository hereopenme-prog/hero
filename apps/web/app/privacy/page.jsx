import LegalPage from '../../components/LegalPage';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Here Open collects, uses, shares and protects personal information across its website, merchant device and platform.',
  alternates: { canonical: '/privacy' }
};

export default function PrivacyPage() {
  return <LegalPage
    title="Privacy Policy"
    updated="October 2026"
    intro="This policy explains what information Here Open collects, why we collect it, how it is used and the choices available to you across our website and platform."
  >
    <section>
      <h2>1. Who we are</h2>
      <p>Here Open provides a partner-branded smart merchant device and platform that connects banks and fintechs with merchants and customers. This policy applies to our website, the Here Open platform and the merchant and customer applications that link to it.</p>
      <p>For privacy questions, contact <a href="mailto:contact@hereopen.me">contact@hereopen.me</a>.</p>
    </section>

    <section>
      <h2>2. Information we collect</h2>
      <p>We collect information in the following ways:</p>
      <ul>
        <li><strong>Information you give us.</strong> When you contact us or request a partnership conversation, you may provide your name, organisation, work email, phone number and the content of your message.</li>
        <li><strong>Account and merchant information.</strong> If you or your organisation use the platform, we may process account details, merchant business details, shop profile information and authorised contact details.</li>
        <li><strong>Device and shop-status information.</strong> The smart device and applications may process shop status (OPEN or CLOSED), connectivity and configuration information, supported sensor activity and safety alerts.</li>
        <li><strong>Technical information.</strong> Our web server and hosting provider may process standard request data such as IP address, browser type, device type, referring page, pages requested and timestamps for security and reliability.</li>
        <li><strong>Local preferences.</strong> The website stores your light or dark theme choice in your browser&apos;s local storage. It is not sent to us.</li>
      </ul>
    </section>

    <section>
      <h2>3. How we use information</h2>
      <ul>
        <li>Respond to enquiries and arrange partnership or product conversations.</li>
        <li>Provide, operate, configure and support the device and platform.</li>
        <li>Show merchant shop status and permitted offers to customers, and deliver supported safety notifications.</li>
        <li>Maintain the security, availability and integrity of our services.</li>
        <li>Understand how the website is used so that we can improve it.</li>
        <li>Comply with legal, regulatory and contractual obligations.</li>
      </ul>
      <p>Where applicable, we rely on your consent, the performance of a contract, our legitimate interests in operating and improving the service, and legal obligations as the basis for processing.</p>
    </section>

    <section>
      <h2>4. Contact form and email drafts</h2>
      <p>The contact form on this website does not transmit or store your details on our servers. Selecting <strong>Submit</strong> opens a draft in your own email application, and nothing is sent until you send that email yourself. Information you choose to send then reaches us by email.</p>
    </section>

    <section>
      <h2>5. Sharing information</h2>
      <p>We do not sell personal information. We may share information with:</p>
      <ul>
        <li>Service providers that host, secure, support or analyse our services, under appropriate confidentiality obligations.</li>
        <li>A bank, fintech or other partner involved in the programme you are enquiring about, where that is necessary to respond to your request.</li>
        <li>Professional advisers, auditors and authorities where required by law or to protect rights, safety and security.</li>
        <li>A successor organisation in connection with a merger, acquisition, restructuring or transfer of assets, subject to this policy.</li>
      </ul>
    </section>

    <section>
      <h2>6. Cookies and local storage</h2>
      <p>This website does not currently use advertising or cross-site tracking cookies. It uses local storage only to remember your theme preference. Our hosting provider may use strictly necessary technical mechanisms to deliver pages and protect the service.</p>
    </section>

    <section>
      <h2>7. Retention</h2>
      <p>We keep personal information only for as long as needed for the purposes described above, including to provide services, resolve disputes, meet legal requirements and enforce agreements. Retention periods depend on the type of information and the relationship with you or your organisation.</p>
    </section>

    <section>
      <h2>8. Security</h2>
      <p>We use administrative, technical and organisational measures designed to protect information against unauthorised access, loss, misuse or alteration. No method of transmission or storage is completely secure, so we cannot guarantee absolute security. Please avoid sending sensitive information through the website contact form.</p>
    </section>

    <section>
      <h2>9. Your choices and rights</h2>
      <p>Depending on applicable law, you may be able to request access to, correction of or deletion of your personal information, withdraw consent, object to certain processing, or ask for a copy of information you provided. To make a request, email <a href="mailto:contact@hereopen.me">contact@hereopen.me</a>. We may need to verify your identity before acting.</p>
      <p>You may also have the right to raise a concern with your local data-protection authority.</p>
    </section>

    <section>
      <h2>10. Children</h2>
      <p>Our website and platform are intended for businesses and adults. They are not directed to children, and we do not knowingly collect personal information from children.</p>
    </section>

    <section>
      <h2>11. International processing</h2>
      <p>Our service providers may process information in countries other than your own. Where we transfer personal information across borders, we take steps designed to ensure it receives an appropriate level of protection consistent with applicable law.</p>
    </section>

    <section>
      <h2>12. Changes to this policy</h2>
      <p>We may update this policy to reflect changes in our services, technology or legal requirements. The revised policy will be posted on this page with a new &quot;last updated&quot; date. Material changes may also be communicated through the platform or by email where appropriate.</p>
    </section>

    <section>
      <h2>13. Contact</h2>
      <p>For questions, requests or concerns about privacy, email <a href="mailto:contact@hereopen.me">contact@hereopen.me</a>. Please include &quot;Privacy request&quot; in the subject line so that it reaches the right team.</p>
    </section>
  </LegalPage>;
}
