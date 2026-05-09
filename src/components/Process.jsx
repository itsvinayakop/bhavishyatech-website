const steps = [
  {
    num: '01',
    title: 'Understanding Your Requirement',
    desc: 'We first understand your business, goals, problems, and what kind of solution you actually need. No technical jargon — just a clear conversation.',
  },
  {
    num: '02',
    title: 'Planning & Design',
    desc: 'We create the project structure, user flow, design, and technical planning before development starts — so you know exactly what to expect.',
  },
  {
    num: '03',
    title: 'Development',
    desc: 'Our team builds your website, software, app, or platform using modern technologies and clean development practices — keeping you updated every step.',
  },
  {
    num: '04',
    title: 'Testing & Quality Check',
    desc: 'Every project is properly tested to ensure smooth performance, security, speed, and reliability before it goes live.',
  },
  {
    num: '05',
    title: 'Launch & Support',
    desc: 'After deployment, we help with updates, maintenance, improvements, and long-term technical support — we don\'t disappear after delivery.',
  },
];

export default function Process() {
  return (
    <section id="process" data-testid="process-section" className="section-glow"
      style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 3rem' }}>

        {/* Header */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, marginBottom: 72 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
              <span style={{ display: 'block', width: 48, height: 1, background: 'var(--bt-bronze)' }} />
              <span className="overline">04 — HOW WE WORK</span>
            </div>
            <h2 className="ft-display" style={{
              fontWeight: 500, lineHeight: 1.06, letterSpacing: '-0.035em',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--bt-ink)',
            }}>
              A clear process<br />
              you can <span className="serif-accent" style={{ fontSize: '1.08em' }}>trust</span>.
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <p className="ft-body" style={{ fontSize: 15.5, fontWeight: 300, color: 'var(--bt-muted)', lineHeight: 1.75 }}>
              From first conversation to final launch — every project follows a{' '}
              <span className="ft-serif" style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--bt-ink-2)', fontSize: '1.05em' }}>
                structured, transparent process
              </span>{' '}
              designed to deliver results without surprises.
            </p>
          </div>
        </div>

        {/* Timeline — clean vertical flow */}
        <div style={{ position: 'relative' }}>
          {/* Vertical spine line */}
          <div style={{
            position: 'absolute', left: 24, top: 12, bottom: 12,
            width: 1,
            background: 'linear-gradient(to bottom, var(--bt-bronze), var(--bt-border-strong) 20%, var(--bt-border-strong) 80%, transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                data-testid={`process-step-${step.num}`}
                className="reveal hover-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  gap: 32,
                  padding: '32px 0',
                  borderBottom: i < steps.length - 1 ? '1px solid var(--bt-border)' : 'none',
                  transition: 'background 0.5s ease',
                  borderRadius: 0,
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(250,246,237,0.4)';
                  e.currentTarget.style.paddingLeft = '16px';
                  e.currentTarget.style.marginLeft = '-16px';
                  e.currentTarget.style.paddingRight = '16px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.paddingLeft = '0';
                  e.currentTarget.style.marginLeft = '0';
                  e.currentTarget.style.paddingRight = '0';
                }}
              >
                {/* Dot on spine */}
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: 'var(--bt-bronze)',
                    boxShadow: '0 0 12px rgba(139,111,47,0.25), 0 0 4px rgba(139,111,47,0.4)',
                    position: 'relative',
                    zIndex: 2,
                  }} />
                </div>

                {/* Content */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32, alignItems: 'start' }}>
                  {/* Left: number + title */}
                  <div>
                    <span className="overline" style={{ fontSize: 11 }}>{step.num}</span>
                    <h3 className="ft-display" style={{
                      fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em',
                      color: 'var(--bt-ink)', marginTop: 8, lineHeight: 1.25,
                    }}>
                      {step.title}
                    </h3>
                  </div>

                  {/* Right: description */}
                  <p className="ft-body" style={{
                    fontSize: 14.5, fontWeight: 300, color: 'var(--bt-muted)',
                    lineHeight: 1.75, paddingTop: 2,
                  }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
