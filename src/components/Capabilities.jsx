import { Globe, Smartphone, Blocks, ShieldCheck, Sparkles, Code2 } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Business Websites',
    desc: 'Modern websites for businesses, clinics, schools, startups, shops, and brands — designed to look premium and work beautifully on every device.',
    icon: Globe,
  },
  {
    num: '02',
    title: 'Mobile Applications',
    desc: 'Android and iPhone apps built for businesses and startups — smooth, reliable, and ready to publish on app stores.',
    icon: Smartphone,
  },
  {
    num: '03',
    title: 'Custom Business Software',
    desc: 'ERP systems, appointment booking, billing software, admin panels, inventory management — tailored tools that simplify how your business runs.',
    icon: Blocks,
  },
  {
    num: '04',
    title: 'QA & Automation Testing',
    desc: 'Manual and automated software testing to ensure your applications are stable, reliable, and trusted by your users.',
    icon: ShieldCheck,
  },
  {
    num: '05',
    title: 'AI Automation Solutions',
    desc: 'AI chatbots, WhatsApp automation, workflow automation, and smart business tools — making your operations faster and smarter.',
    icon: Sparkles,
  },
  {
    num: '06',
    title: 'UI/UX Design',
    desc: 'Clean and modern app and website designs focused on user experience, clarity, and building trust with your customers.',
    icon: Code2,
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <div
      data-testid={`service-${service.num}`}
      className="cap-card reveal"
      style={{ padding: '2.25rem' }}
    >
      {/* Number + Icon row */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        marginBottom: 28,
      }}>
        <span className="ft-body" style={{
          fontSize: 11, color: 'var(--bt-muted-2)',
          letterSpacing: '0.18em', fontWeight: 400,
        }}>
          {service.num}
        </span>
        <div style={{
          width: 40, height: 40,
          border: '1px solid var(--bt-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'border-color 0.4s ease',
        }}>
          <Icon size={17} strokeWidth={1.5} style={{ color: 'var(--bt-muted-2)' }} />
        </div>
      </div>

      {/* Title */}
      <h3 className="ft-display" style={{
        fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em',
        color: 'var(--bt-ink)', marginBottom: 12, lineHeight: 1.2,
      }}>
        {service.title}
      </h3>

      {/* Description */}
      <p className="ft-body" style={{
        fontSize: 14, fontWeight: 300, color: 'var(--bt-muted)',
        lineHeight: 1.7,
      }}>
        {service.desc}
      </p>
    </div>
  );
}

export default function Capabilities() {
  return (
    <section id="capabilities" data-testid="capabilities-section"
      style={{
        paddingTop: '8rem', paddingBottom: '8rem',
        background: 'var(--bt-bg-2)',
        position: 'relative',
      }}>

      {/* Subtle atmospheric gradient */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '40%', height: '50%',
        background: 'radial-gradient(ellipse at 80% 20%, rgba(139,111,47,0.03) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 3rem', position: 'relative' }}>

        {/* Section Header */}
        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 64,
          marginBottom: 64,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
              <span style={{ display: 'block', width: 48, height: 1, background: 'var(--bt-bronze)' }} />
              <span className="overline">03 — WHAT WE BUILD</span>
            </div>
            <h2 className="ft-display" style={{
              fontWeight: 500, lineHeight: 1.06, letterSpacing: '-0.035em',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--bt-ink)',
            }}>
              Modern digital solutions<br />
              for <span className="serif-accent" style={{ fontSize: '1.08em' }}>real</span> businesses.
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <p className="ft-body" style={{
              fontSize: 15.5, fontWeight: 300, color: 'var(--bt-muted)', lineHeight: 1.75,
            }}>
              From your first website to enterprise-grade software — we design and engineer
              digital solutions that are{' '}
              <span className="ft-serif" style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--bt-ink-2)', fontSize: '1.05em' }}>
                built to grow with your business.
              </span>
            </p>
          </div>
        </div>

        {/* === SERVICE GRID: 3 rows × 2 columns === */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 14,
        }}>
          {services.map((service) => (
            <ServiceCard key={service.num} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
