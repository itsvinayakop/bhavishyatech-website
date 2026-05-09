const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const DribbbleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
  </svg>
);

const emailChannels = [
  { label: 'General Enquiries', email: 'hello@bhavishyatech.com', response: '≤ 24 hours' },
  { label: 'Careers', email: 'careers@bhavishyatech.com', response: 'Within 5 working days' },
];

const socials = [
  { icon: LinkedinIcon, label: 'LinkedIn' },
  { icon: DribbbleIcon, label: 'Dribbble' },
];

export default function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="section-glow"
      style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 3rem' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
            <span style={{ display: 'block', width: 48, height: 1, background: 'var(--bt-bronze)' }} />
            <span className="overline">06 — BEGIN A CONVERSATION</span>
          </div>
          <h2 className="ft-display" style={{
            fontWeight: 500, lineHeight: 1.0, letterSpacing: '-0.04em',
            fontSize: 'clamp(2rem, 5.5vw, 5rem)', color: 'var(--bt-ink)',
          }}>
            Let's build <span className="serif-accent" style={{ fontSize: '1.08em' }}>something</span><br />
            enduring.
          </h2>
          <p className="ft-body" style={{ fontSize: 15.5, fontWeight: 300, color: 'var(--bt-muted)', lineHeight: 1.75, marginTop: 28, maxWidth: 600 }}>
            Whether you're shaping a new product, modernizing a legacy platform, or scaling
            an engineering team — we'd welcome the conversation. Reach out through any of the
            channels below.
          </p>
        </div>

        {/* Email channels + Studio */}
        <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 14 }}>
          {emailChannels.map((ch) => (
            <div key={ch.label} className="contact-card" data-testid={`contact-${ch.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <span className="ft-body" style={{ fontSize: 10.5, color: 'var(--bt-muted-2)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                {ch.label}
              </span>
              <div style={{ marginTop: 20, marginBottom: 16 }}>
                <a href={`mailto:${ch.email}`} className="ft-display"
                   style={{ fontSize: 16, fontWeight: 500, color: 'var(--bt-ink)', textDecoration: 'none', transition: 'color 0.4s ease', letterSpacing: '-0.01em' }}
                   onMouseEnter={(e) => e.target.style.color = 'var(--bt-bronze)'}
                   onMouseLeave={(e) => e.target.style.color = 'var(--bt-ink)'}>
                  {ch.email}
                </a>
              </div>
              <span className="ft-body" style={{ fontSize: 12, fontWeight: 300, color: 'var(--bt-muted)' }}>
                Response: {ch.response}
              </span>
            </div>
          ))}

          {/* Studio address */}
          <div className="contact-card" data-testid="contact-studio">
            <span className="ft-body" style={{ fontSize: 10.5, color: 'var(--bt-muted-2)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>The Studio</span>
            <div style={{ marginTop: 20 }}>
              <p className="ft-body" style={{ fontSize: 14, fontWeight: 300, color: 'var(--bt-ink-2)', lineHeight: 1.65, marginBottom: 12 }}>
                4th Floor, Indiranagar Lane Tower, 100 Feet Road,<br />
                HAL 2nd Stage, Bengaluru — 560038, India
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 36px' }}>
                <span className="ft-body" style={{ fontSize: 11.5, fontWeight: 300, color: 'var(--bt-muted)' }}>Mon–Fri 10:00–19:00 IST</span>
                <span className="ft-body" style={{ fontSize: 11.5, fontWeight: 300, color: 'var(--bt-muted)' }}>English · Hindi · Kannada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="reveal reveal-d2" style={{ display: 'flex', gap: 10, marginBottom: 72 }}>
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a key={s.label} href="#" className="social-tile"
                 data-testid={`social-${s.label.toLowerCase().replace(/[\s\/]+/g, '-')}`}
                 style={{ textDecoration: 'none' }} aria-label={s.label}>
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Manifesto */}
        <div className="reveal reveal-d3" style={{ textAlign: 'right', marginBottom: 56 }}>
          <blockquote className="ft-serif" style={{
            fontStyle: 'italic', fontWeight: 300,
            fontSize: 'clamp(1.125rem, 2vw, 1.6rem)',
            color: 'var(--bt-muted)', display: 'inline-block', maxWidth: 500,
            lineHeight: 1.5,
          }}>
            "The future is engineered, not predicted."
          </blockquote>
          <p className="ft-body" style={{ fontSize: 10.5, color: 'var(--bt-muted-2)', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 14 }}>
            — Bhavishya Tech, House Manifesto
          </p>
        </div>

        {/* Final CTAs */}
        <div className="reveal reveal-d4" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
          <a href="mailto:hello@bhavishyatech.com" data-testid="cta-write-studio" className="btn btn-solid">
            WRITE TO THE STUDIO
          </a>
          <a href="#" data-testid="cta-schedule-call" className="btn btn-outline">
            SCHEDULE A CALL
          </a>
        </div>
      </div>
    </section>
  );
}
