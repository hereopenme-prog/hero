import { Metadata } from 'next';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about HERE OPEN platform.',
  alternates: {
    canonical: 'https://hereopen.in/faq',
  },
};

const faqs = [
  {
    question: 'What is HERE OPEN?',
    answer: 'HERE OPEN is an IoT + Mobile platform that provides real-time shop OPEN/CLOSED visibility and 24/7 safety monitoring. Shop owners can control their shop status with one tap, and customers can see the status instantly.',
  },
  {
    question: 'How does the IoT device work?',
    answer: 'The HERE OPEN IoT device connects to your shop via GSM/SIM network. It monitors sensors for security and fire detection, and receives commands from the cloud to update shop status.',
  },
  {
    question: 'Is it difficult to install?',
    answer: 'No, the device is plug-and-play. Simply connect it to power and insert a SIM card. The device will automatically connect to the HERE OPEN cloud.',
  },
  {
    question: 'What happens when the shop is closed?',
    answer: 'When you tap CLOSED, the IoT device activates security monitoring. Motion sensors, temperature sensors, and smoke detectors become active, and you receive alerts for any events.',
  },
  {
    question: 'Is the customer app free?',
    answer: 'Yes, the customer app is completely free. Customers can see shop status, receive offers, and follow their favorite shops at no cost.',
  },
  {
    question: 'How much does it cost for businesses?',
    answer: 'We offer a free tier for single shops. Paid plans start at ₹499/month for multiple shops and advanced features.',
  },
  {
    question: 'Can I control multiple shops?',
    answer: 'Yes, with our Starter and Professional plans, you can manage multiple shops from a single dashboard.',
  },
  {
    question: 'What security features are included?',
    answer: 'When your shop is CLOSED, the device monitors for motion, door/window openings, vibration, and provides instant alerts via push notifications and SMS.',
  },
  {
    question: 'Does it work offline?',
    answer: 'The IoT device uses GSM connectivity, so it works even without internet. Customer apps can show cached status data when offline.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use enterprise-grade security including encrypted communications, secure device authentication, and role-based access control.',
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white relative noise">
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
          />
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="card-static p-6">
                <h3 className="text-[16px] font-bold text-green-forest mb-3">{faq.question}</h3>
                <p className="text-body-sm text-neutral-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="card-static p-12 text-center">
            <h2 className="font-display font-extrabold text-green-forest text-display-lg tracking-tight mb-4">
              Still have questions?
            </h2>
            <p className="text-body-lg text-neutral-500 mb-8 max-w-xl mx-auto">
              We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
            </p>
            <a
              href="/contact"
              className="active:scale-[0.97] bg-green-action text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all inline-block"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
