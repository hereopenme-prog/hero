import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';

export const metadata: Metadata = {
  title: 'Contact Us - HERE OPEN',
  description: 'Get in touch with the HERE OPEN team.',
};

const contactItems = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Email',
    value: 'hello@hereopen.in',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Phone',
    value: '+91 98765 43210',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'Office',
    value: 'Bangalore, India',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Hours',
    value: 'Mon - Fri, 9am - 6pm IST',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface-0 relative noise">
      {/* Hero */}
      <section className="section">
        <Container>
          <SectionHeader eyebrow="Contact" title="Contact Us" />
        </Container>
      </section>

      {/* Get in Touch */}
      <section className="section">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display font-extrabold text-white text-display-lg tracking-tight mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-11 h-11 bg-neon/8 border border-neon/15 rounded-xl text-neon flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[14px] font-medium text-white">{item.title}</p>
                      <p className="text-[14px] text-muted-light">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-static">
              <h2 className="font-display font-extrabold text-white text-display-lg tracking-tight mb-6">
                Send a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="text-[13px] font-medium text-muted-light mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-muted focus:outline-none focus:border-neon/30 focus:ring-1 focus:ring-neon/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-[13px] font-medium text-muted-light mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-muted focus:outline-none focus:border-neon/30 focus:ring-1 focus:ring-neon/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-[13px] font-medium text-muted-light mb-2 block">
                    Subject
                  </label>
                  <select className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-[14px] text-white focus:outline-none focus:border-neon/30 focus:ring-1 focus:ring-neon/20">
                    <option>General Inquiry</option>
                    <option>Business Partnership</option>
                    <option>Technical Support</option>
                    <option>Press &amp; Media</option>
                  </select>
                </div>
                <div>
                  <label className="text-[13px] font-medium text-muted-light mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-muted focus:outline-none focus:border-neon/30 focus:ring-1 focus:ring-neon/20"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-neon text-surface-0 py-3 rounded-xl font-bold text-[14px] hover:bg-neon-600 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
